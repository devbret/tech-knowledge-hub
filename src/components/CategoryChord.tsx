import { useEffect, useMemo, useRef, useState } from "react";
import { select } from "d3-selection";
import { arc } from "d3-shape";
import {
  chord,
  ribbon,
  type Chord,
  type ChordGroup,
  type Ribbon,
} from "d3-chord";
import { descending } from "d3-array";
import { color as d3color } from "d3-color";
import "d3-transition";
import type { Category } from "../data/types";
import { getCategoryColor } from "../data/categories";
import { elem, metaLine } from "../utils/dom";

type Props = {
  matrix: number[][];
  categories: Category[];
  padAngle?: number;
  margin?: number;
};

export default function CategoryChord({
  matrix,
  categories,
  padAngle = 0.04,
  margin = 90,
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    if (!wrapRef.current) return;

    const el = wrapRef.current;

    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      setSize({ w: width, h: height });
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const memo = useMemo(() => {
    const w = size.w || 1;
    const h = size.h || 1;

    const outerRadius = Math.min(w, h) * 0.5 - margin;
    const innerRadius = outerRadius - 20;

    const chordGen = chord().padAngle(padAngle).sortSubgroups(descending);

    const chords = chordGen(matrix);
    const groups = chords.groups;

    const arcGen = arc<ChordGroup>()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const ribbonPath = ribbon().radius(innerRadius);
    const ribbonGen = (d: Chord): string =>
      ribbonPath(d as unknown as Ribbon) ?? "";

    const color = (cat: Category) => getCategoryColor(cat);

    return {
      chords,
      groups,
      arcGen,
      ribbonGen,
      color,
      outerRadius,
      w,
      h,
    };
  }, [matrix, padAngle, size.w, size.h, margin]);

  useEffect(() => {
    if (!svgRef.current) return;
    if (size.w === 0 || size.h === 0) return;

    const { chords, groups, arcGen, ribbonGen, color, outerRadius, w, h } =
      memo;

    const svg = select(svgRef.current);
    svg.selectAll("*").remove();

    svg.attr("viewBox", `${-w / 2} ${-h / 2} ${w} ${h}`).attr("role", "img");

    const gGroups = svg.append("g").attr("class", "groups");

    const group = gGroups
      .selectAll<SVGGElement, ChordGroup>("g")
      .data(groups)
      .join("g")
      .attr("data-index", (d: ChordGroup) => d.index);

    const groupPaths = group
      .append("path")
      .attr("d", arcGen)
      .attr("fill", (d: ChordGroup) => color(categories[d.index]))
      .attr("stroke", (d: ChordGroup) => {
        const c = d3color(color(categories[d.index]));
        return c ? c.darker(0.7).formatHex() : "#000";
      })
      .attr("fill-opacity", 1);

    const tooltipEl = tooltipRef.current;

    function positionTooltip(evt: MouseEvent) {
      if (!tooltipEl || !wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();

      const x = evt.clientX - rect.left + 12;
      const y = evt.clientY - rect.top + 12;

      tooltipEl.style.left = `${x}px`;
      tooltipEl.style.top = `${y}px`;
    }

    group
      .append("text")
      .attr("dy", "0.35em")
      .attr("transform", (d: ChordGroup) => {
        const angle = (d.startAngle + d.endAngle) / 2;
        const r = outerRadius + 14;
        const rotate = (angle * 180) / Math.PI - 90;
        const flip = angle > Math.PI ? 180 : 0;
        return `rotate(${rotate}) translate(${r}) rotate(${flip})`;
      })
      .attr("text-anchor", (d: ChordGroup) => {
        const angle = (d.startAngle + d.endAngle) / 2;
        return angle > Math.PI ? "end" : "start";
      })
      .style("font-size", "12px")
      .style("font-family", "system-ui, sans-serif")
      .text((d: ChordGroup) => categories[d.index]);

    const gRibbons = svg.append("g").attr("class", "ribbons");

    const ribbons = gRibbons
      .selectAll<SVGPathElement, Chord>("path")
      .data(chords)
      .join("path")
      .attr("d", (d: Chord) => ribbonGen(d))
      .attr("fill", (d: Chord) => color(categories[d.source.index]))
      .attr("fill-opacity", 0.75)
      .attr("stroke", (d: Chord) => {
        const c = d3color(color(categories[d.source.index]));
        return c ? c.darker(0.8).formatHex() : "#000";
      });

    group.on("mouseenter", (evt: MouseEvent, grp: ChordGroup) => {
      const i = grp.index;

      ribbons
        .transition()
        .duration(150)
        .attr("fill-opacity", (d: Chord) =>
          d.source.index === i || d.target.index === i ? 0.9 : 0.06,
        );

      groupPaths
        .transition()
        .duration(150)
        .attr("fill-opacity", (g: ChordGroup) => {
          if (g.index === i) return 1;
          const connected = chords.some(
            (c) =>
              (c.source.index === i && c.target.index === g.index) ||
              (c.target.index === i && c.source.index === g.index),
          );
          return connected ? 1 : 0.15;
        });

      if (tooltipEl) {
        const name = categories[i];

        const total = matrix[i]?.reduce((sum, v) => sum + v, 0) ?? 0;

        const related = (matrix[i] ?? [])
          .map((v, j) => ({ j, v }))
          .filter((x) => x.j !== i && x.v > 0)
          .sort((a, b) => b.v - a.v)
          .slice(0, 5);

        const list = elem("div", "chord-tooltip__list");
        if (related.length === 0) {
          list.append(elem("div", "muted", ["No related categories yet."]));
        } else {
          for (const r of related) {
            list.append(
              elem("div", "chord-tooltip__row", [
                elem("span", "chord-tooltip__cat", [categories[r.j]]),
                elem("span", "chord-tooltip__val", [String(r.v)]),
              ]),
            );
          }
        }

        const frag = document.createDocumentFragment();
        frag.append(elem("div", "chord-tooltip__title", [name]));
        frag.append(metaLine("Total co-occurrences:", String(total)));
        frag.append(elem("div", "chord-tooltip__sub", ["Top related"]));
        frag.append(list);

        tooltipEl.replaceChildren(frag);
        tooltipEl.style.opacity = "1";
        positionTooltip(evt);
      }
    });

    group.on("mouseleave", () => {
      ribbons.transition().duration(150).attr("fill-opacity", 0.75);
      groupPaths.transition().duration(150).attr("fill-opacity", 1);

      if (tooltipEl) {
        tooltipEl.style.opacity = "0";
        tooltipEl.style.left = "-9999px";
        tooltipEl.style.top = "-9999px";
        tooltipEl.replaceChildren();
      }
    });
  }, [memo, size.w, size.h, categories, matrix]);

  return (
    <div
      ref={wrapRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: 420,
        position: "relative",
      }}
    >
      <svg ref={svgRef} width="100%" height="100%" />

      <div
        ref={tooltipRef}
        className="chord-tooltip"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
      />
    </div>
  );
}
