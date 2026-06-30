export function elem(
  tag: string,
  className: string,
  children: (Node | string)[] = [],
): HTMLElement {
  const node = document.createElement(tag);
  if (className) node.className = className;
  for (const child of children) {
    node.append(
      typeof child === "string" ? document.createTextNode(child) : child,
    );
  }
  return node;
}

export function metaLine(label: string, value: string): HTMLElement {
  return elem("div", "chord-tooltip__meta", [
    `${label} `,
    elem("b", "", [value]),
  ]);
}
