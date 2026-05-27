"use client";

import { useEffect, useId, useState } from "react";

export function MermaidDiagram({ chart, title = "Visual diagram" }: { chart: string; title?: string }) {
  const id = useId().replace(/:/g, "");
  const [svg, setSvg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    import("mermaid")
      .then(async ({ default: mermaid }) => {
        mermaid.initialize({ startOnLoad: false, theme: "dark", securityLevel: "strict" });
        const rendered = await mermaid.render("mermaid-" + id, chart);
        if (active) setSvg(rendered.svg);
      })
      .catch((err: unknown) => {
        if (active) setError(err instanceof Error ? err.message : "Unable to render diagram");
      });
    return () => {
      active = false;
    };
  }, [chart, id]);

  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-red-400/20 bg-slate-950/70 p-4">
      <figcaption className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-red-300">{title}</figcaption>
      {svg ? (
        <div className="overflow-x-auto" dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <pre className="overflow-x-auto rounded-xl bg-black/45 p-4 text-sm text-slate-300">{error || chart}</pre>
      )}
    </figure>
  );
}
