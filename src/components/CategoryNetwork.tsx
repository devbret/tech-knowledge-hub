import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import type { Category, GlossaryEntry, LinkEntry } from "../data/types";

type Props = {
  glossary: GlossaryEntry[];
  links: LinkEntry[];
  height?: number;
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

type NodeKind = "category" | "glossary" | "link";

type GraphNode = {
  id: string;
  kind: NodeKind;
  label: string;

  category?: Category;
  glossary?: GlossaryEntry;
  link?: LinkEntry;

  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
};

type GraphLink = {
  source: string | GraphNode;
  target: string | GraphNode;
  category: Category;
};

function slugify(s: string) {
  return s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function CategoryNetwork({ glossary, links, height }: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    if (!wrapRef.current) return;

    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setSize({ w: entry.contentRect.width, h: entry.contentRect.height });
    });

    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const graph = useMemo(() => {
    const getCats = (cats?: Category[]) => cats ?? [];

    const allCategories = new Set<Category>();
    glossary.forEach((g) =>
      getCats(g.category).forEach((c) => allCategories.add(c))
    );
    links.forEach((l) =>
      getCats(l.category).forEach((c) => allCategories.add(c))
    );

    const categoryNodes: GraphNode[] = Array.from(allCategories).map((c) => ({
      id: `cat:${slugify(c)}`,
      kind: "category",
      label: c,
      category: c,
    }));

    const glossaryNodes: GraphNode[] = glossary.map((g) => ({
      id: `glossary:${slugify(g.term)}`,
      kind: "glossary",
      label: g.term,
      glossary: g,
    }));

    const linkNodes: GraphNode[] = links.map((l) => ({
      id: `link:${slugify(l.title)}`,
      kind: "link",
      label: l.title,
      link: l,
    }));

    const edgeList: GraphLink[] = [];

    for (const n of glossaryNodes) {
      for (const c of getCats(n.glossary?.category)) {
        edgeList.push({
          source: n.id,
          target: `cat:${slugify(c)}`,
          category: c,
        });
      }
    }

    for (const n of linkNodes) {
      for (const c of getCats(n.link?.category)) {
        edgeList.push({
          source: n.id,
          target: `cat:${slugify(c)}`,
          category: c,
        });
      }
    }

    const nodes = [...categoryNodes, ...glossaryNodes, ...linkNodes];

    const color = (cat?: Category) =>
      cat ? CATEGORY_COLORS[cat] ?? "#94a3b8" : "#94a3b8";

    return { nodes, links: edgeList, color };
  }, [glossary, links]);

  useEffect(() => {
    if (!svgRef.current) return;
    if (size.w === 0 || size.h === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const tooltipEl = tooltipRef.current;

    const w = size.w || 1;
    const h = size.h || 1;

    svg.attr("viewBox", `0 0 ${w} ${h}`).attr("role", "img");

    const zoomRoot = svg.append("g").attr("class", "zoom-root");

    zoomRoot
      .append("rect")
      .attr("width", w)
      .attr("height", h)
      .attr("fill", "transparent")
      .style("cursor", "grab");

    const gLinks = zoomRoot.append("g").attr("class", "links");
    const gNodes = zoomRoot.append("g").attr("class", "nodes");
    const gLabels = zoomRoot.append("g").attr("class", "labels");

    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.25, 3.5])
      .on("zoom", (evt) => {
        zoomRoot.attr("transform", evt.transform.toString());
      });

    svg.call(
      zoom.filter((event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        if (event.type === "wheel") return true;

        const target = event.sourceEvent?.target;
        if (!(target instanceof Element)) return true;

        return !target.closest("circle");
      })
    );

    function positionTooltip(evt: MouseEvent) {
      if (!tooltipEl || !wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      tooltipEl.style.left = `${evt.clientX - rect.left + 12}px`;
      tooltipEl.style.top = `${evt.clientY - rect.top + 12}px`;
    }

    const nodes: GraphNode[] = graph.nodes.map((d) => ({ ...d }));
    const simLinks: GraphLink[] = graph.links.map((l) => ({ ...l }));
    const nodeById = new Map(nodes.map((n) => [n.id, n]));

    const sim = d3
      .forceSimulation<GraphNode>(nodes)
      .force(
        "link",
        d3
          .forceLink<GraphNode, GraphLink>(simLinks)
          .id((d) => d.id)
          .distance(() => 95)
          .strength(0.95)
      )
      .force("charge", d3.forceManyBody().strength(-230))
      .force("center", d3.forceCenter(w / 2, h / 2))
      .force(
        "collide",
        d3
          .forceCollide<GraphNode>()
          .radius((d) => (d.kind === "category" ? 26 : 18))
      );

    const linkSel = gLinks
      .selectAll<SVGLineElement, GraphLink>("line")
      .data(simLinks)
      .join("line")
      .attr("stroke", "#94a3b8")
      .attr("stroke-opacity", 0.35)
      .attr("stroke-width", 1.5);

    const CATEGORY_NODE_COLOR = "#6366f1";
    const GLOSSARY_COLOR = "#22c55e";
    const LINK_COLOR = "#f97316";

    const nodeSel = gNodes
      .selectAll<SVGCircleElement, GraphNode>("circle")
      .data(nodes)
      .join("circle")
      .attr("r", (d) => (d.kind === "category" ? 16 : 11))
      .attr("fill", (d) => {
        if (d.kind === "category") return CATEGORY_NODE_COLOR;
        if (d.kind === "glossary") return GLOSSARY_COLOR;
        return LINK_COLOR;
      })
      .attr("stroke", (d) => {
        const base =
          d.kind === "category"
            ? CATEGORY_NODE_COLOR
            : d.kind === "glossary"
            ? GLOSSARY_COLOR
            : LINK_COLOR;

        const c = d3.color(base);
        return c ? c.darker(0.9).formatHex() : "#0f172a";
      })
      .attr("stroke-width", 1.5)
      .style("cursor", "grab");

    const labelSel = gLabels
      .selectAll<SVGTextElement, GraphNode>("text")
      .data(nodes)
      .join("text")
      .text((d) => d.label)
      .attr("font-family", "system-ui, sans-serif")
      .attr("font-size", (d) => (d.kind === "category" ? 12 : 11))
      .attr("fill", "#0f172a")
      .attr("text-anchor", "middle")
      .style("pointer-events", "none")
      .attr("dy", (d) => (d.kind === "category" ? 30 : 24));

    function connectedTo(nodeId: string, link: GraphLink) {
      const s = typeof link.source === "string" ? link.source : link.source.id;
      const t = typeof link.target === "string" ? link.target : link.target.id;
      return s === nodeId || t === nodeId;
    }

    nodeSel
      .on("mouseenter", (evt: MouseEvent, d: GraphNode) => {
        const neighborhood = new Set<string>([d.id]);

        simLinks.forEach((l) => {
          const s = typeof l.source === "string" ? l.source : l.source.id;
          const t = typeof l.target === "string" ? l.target : l.target.id;
          if (s === d.id) neighborhood.add(t);
          if (t === d.id) neighborhood.add(s);
        });

        nodeSel
          .transition()
          .duration(120)
          .attr("fill-opacity", (n) => (neighborhood.has(n.id) ? 1 : 0.15))
          .attr("stroke-opacity", (n) => (neighborhood.has(n.id) ? 1 : 0.25));

        linkSel
          .transition()
          .duration(120)
          .attr("stroke-opacity", (l) => (connectedTo(d.id, l) ? 0.85 : 0.05))
          .attr("stroke-width", (l) => (connectedTo(d.id, l) ? 2.5 : 1.25));

        labelSel
          .transition()
          .duration(120)
          .attr("opacity", (n) => (neighborhood.has(n.id) ? 1 : 0.15));

        if (tooltipEl) {
          if (d.kind === "category" && d.category) {
            const members = simLinks
              .filter((l) => {
                const t = typeof l.target === "string" ? l.target : l.target.id;
                return t === d.id;
              })
              .map((l) => {
                const s = typeof l.source === "string" ? l.source : l.source.id;
                return nodeById.get(s);
              })
              .filter(Boolean) as GraphNode[];

            tooltipEl.innerHTML = `
              <div class="chord-tooltip__title">${d.label}</div>
              <div class="chord-tooltip__meta">Items in category: <b>${
                members.length
              }</b></div>
              <div class="chord-tooltip__sub">Examples</div>
              <div class="chord-tooltip__list">
                ${
                  members.length
                    ? members
                        .slice(0, 8)
                        .map(
                          (n) => `
                            <div class="chord-tooltip__row">
                              <span class="chord-tooltip__cat">${n.label}</span>
                              <span class="chord-tooltip__val">${n.kind}</span>
                            </div>
                          `
                        )
                        .join("")
                    : `<div class="muted">No items.</div>`
                }
              </div>
            `;
          } else if (d.kind === "glossary" && d.glossary) {
            tooltipEl.innerHTML = `
              <div class="chord-tooltip__title">${d.glossary.term}</div>
              <div class="chord-tooltip__meta">Type: <b>Glossary</b></div>
              <div class="chord-tooltip__meta">Categories: <b>${(
                d.glossary.category ?? []
              ).join(", ")}</b></div>
              <div class="chord-tooltip__sub">Definition</div>
              <div class="chord-tooltip__list">
                <div style="max-width: 360px; line-height: 1.25;">
                  ${d.glossary.definition}
                </div>
              </div>
            `;
          } else if (d.kind === "link" && d.link) {
            tooltipEl.innerHTML = `
              <div class="chord-tooltip__title">${d.link.title}</div>
              <div class="chord-tooltip__meta">Type: <b>Link</b></div>
              <div class="chord-tooltip__meta">Categories: <b>${(
                d.link.category ?? []
              ).join(", ")}</b></div>
              <div class="chord-tooltip__sub">Description</div>
              <div class="chord-tooltip__list">
                <div style="max-width: 360px; line-height: 1.25;">
                  ${d.link.description ?? ""}
                </div>
              </div>
            `;
          }

          tooltipEl.style.opacity = "1";
          positionTooltip(evt);
        }
      })
      .on("mousemove", (evt: MouseEvent) => {
        if (!tooltipEl) return;
        positionTooltip(evt);
      })
      .on("mouseleave", () => {
        nodeSel
          .transition()
          .duration(120)
          .attr("fill-opacity", 1)
          .attr("stroke-opacity", 1);

        linkSel
          .transition()
          .duration(120)
          .attr("stroke-opacity", 0.35)
          .attr("stroke-width", 1.5);

        labelSel.transition().duration(120).attr("opacity", 1);

        if (tooltipEl) {
          tooltipEl.style.opacity = "0";
          tooltipEl.style.left = "-9999px";
          tooltipEl.style.top = "-9999px";
          tooltipEl.innerHTML = "";
        }
      });

    const drag = d3
      .drag<SVGCircleElement, GraphNode>()
      .on("start", (evt, d) => {
        evt.sourceEvent?.stopPropagation?.();
        if (!evt.active) sim.alphaTarget(0.3).restart();
        d.fx = d.x ?? null;
        d.fy = d.y ?? null;
      })
      .on("drag", (evt, d) => {
        evt.sourceEvent?.stopPropagation?.();
        d.fx = evt.x;
        d.fy = evt.y;
      })
      .on("end", (evt, d) => {
        evt.sourceEvent?.stopPropagation?.();
        if (!evt.active) sim.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    nodeSel.call(drag);

    sim.on("tick", () => {
      linkSel
        .attr("x1", (d) =>
          typeof d.source === "string"
            ? nodeById.get(d.source)?.x ?? 0
            : d.source.x ?? 0
        )
        .attr("y1", (d) =>
          typeof d.source === "string"
            ? nodeById.get(d.source)?.y ?? 0
            : d.source.y ?? 0
        )
        .attr("x2", (d) =>
          typeof d.target === "string"
            ? nodeById.get(d.target)?.x ?? 0
            : d.target.x ?? 0
        )
        .attr("y2", (d) =>
          typeof d.target === "string"
            ? nodeById.get(d.target)?.y ?? 0
            : d.target.y ?? 0
        );

      nodeSel.attr("cx", (d) => d.x ?? 0).attr("cy", (d) => d.y ?? 0);
      labelSel.attr("x", (d) => d.x ?? 0).attr("y", (d) => d.y ?? 0);
    });

    return () => {
      sim.stop();
    };
  }, [graph, size.w, size.h]);

  return (
    <div
      ref={wrapRef}
      style={{ width: "100%", height, minHeight: "100%", position: "relative" }}
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
