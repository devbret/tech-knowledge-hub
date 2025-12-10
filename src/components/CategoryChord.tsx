import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import type { Category } from "../data/types";

type Props = {
  matrix: number[][];
  categories: Category[];
  padAngle?: number;
  margin?: number;
};

const CATEGORY_COLORS: Partial<Record<Category, string>> = {
  OSINT: "#3b82f6",
  AI: "#a855f7",
  "Video Games": "#f97316",
  FOSS: "#10b981",
  Programming: "#06b6d4",
  Audio: "#ef4444",
  Music: "#e879f9",
  Other: "#9ca3af",
  OPSEC: "#f59e0b",
  Hardware: "#22c55e",
  Biohacking: "#8b5cf6",
  Blockchain: "#7c3aed",
  Cybersecurity: "#0ea5e9",
  DevOps: "#6366f1",
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

    const chordGen = d3.chord().padAngle(padAngle).sortSubgroups(d3.descending);

    const chords = chordGen(matrix);
    const groups = chords.groups;

    const arcGen = d3
      .arc<d3.ChordGroup>()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const ribbonPath = d3.ribbon().radius(innerRadius);
    const ribbonGen = (d: d3.Chord): string =>
      ribbonPath(d as unknown as d3.Ribbon) ?? "";

    const color = (cat: Category) => CATEGORY_COLORS[cat] ?? "#94a3b8";

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

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    svg.attr("viewBox", `${-w / 2} ${-h / 2} ${w} ${h}`).attr("role", "img");

    const gGroups = svg.append("g").attr("class", "groups");

    const group = gGroups
      .selectAll<SVGGElement, d3.ChordGroup>("g")
      .data(groups)
      .join("g")
      .attr("data-index", (d: d3.ChordGroup) => d.index);

    const groupPaths = group
      .append("path")
      .attr("d", arcGen)
      .attr("fill", (d: d3.ChordGroup) => color(categories[d.index]))
      .attr("stroke", (d: d3.ChordGroup) => {
        const c = d3.color(color(categories[d.index]));
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
      .attr("transform", (d: d3.ChordGroup) => {
        const angle = (d.startAngle + d.endAngle) / 2;
        const r = outerRadius + 14;
        const rotate = (angle * 180) / Math.PI - 90;
        const flip = angle > Math.PI ? 180 : 0;
        return `rotate(${rotate}) translate(${r}) rotate(${flip})`;
      })
      .attr("text-anchor", (d: d3.ChordGroup) => {
        const angle = (d.startAngle + d.endAngle) / 2;
        return angle > Math.PI ? "end" : "start";
      })
      .style("font-size", "12px")
      .style("font-family", "system-ui, sans-serif")
      .text((d: d3.ChordGroup) => categories[d.index]);

    const gRibbons = svg.append("g").attr("class", "ribbons");

    const ribbons = gRibbons
      .selectAll<SVGPathElement, d3.Chord>("path")
      .data(chords)
      .join("path")
      .attr("d", (d: d3.Chord) => ribbonGen(d))
      .attr("fill", (d: d3.Chord) => color(categories[d.source.index]))
      .attr("fill-opacity", 0.75)
      .attr("stroke", (d: d3.Chord) => {
        const c = d3.color(color(categories[d.source.index]));
        return c ? c.darker(0.8).formatHex() : "#000";
      });

    group.on("mouseenter", (evt: MouseEvent, grp: d3.ChordGroup) => {
      const i = grp.index;

      ribbons
        .transition()
        .duration(150)
        .attr("fill-opacity", (d: d3.Chord) =>
          d.source.index === i || d.target.index === i ? 0.9 : 0.06
        );

      groupPaths
        .transition()
        .duration(150)
        .attr("fill-opacity", (g: d3.ChordGroup) => {
          if (g.index === i) return 1;
          const connected = chords.some(
            (c) =>
              (c.source.index === i && c.target.index === g.index) ||
              (c.target.index === i && c.source.index === g.index)
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

        const relatedHtml =
          related.length === 0
            ? `<div class="muted">No related categories yet.</div>`
            : related
                .map(
                  (r) =>
                    `<div class="chord-tooltip__row">
                   <span class="chord-tooltip__cat">${categories[r.j]}</span>
                   <span class="chord-tooltip__val">${r.v}</span>
                 </div>`
                )
                .join("");

        tooltipEl.innerHTML = `
            <div class="chord-tooltip__title">${name}</div>
            <div class="chord-tooltip__meta">Total co-occurrences: <b>${total}</b></div>
            <div class="chord-tooltip__sub">Top related</div>
            <div class="chord-tooltip__list">${relatedHtml}</div>
        `;

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
        tooltipEl.innerHTML = "";
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
