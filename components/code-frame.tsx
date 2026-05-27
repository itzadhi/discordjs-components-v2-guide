"use client";

import { Check, Copy } from "lucide-react";
import { useRef, useState } from "react";

export function CodeFrame(props: React.HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    const text = ref.current?.innerText ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="code-shell group relative my-6">
      <button
        type="button"
        onClick={copyCode}
        className="absolute right-3 top-3 z-10 inline-flex items-center gap-2 rounded-lg border border-red-300/20 bg-black/70 px-3 py-1.5 text-xs font-bold text-red-100 opacity-100 transition hover:border-red-200/50 md:opacity-0 md:group-hover:opacity-100"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
      <pre {...props} ref={ref} />
    </div>
  );
}
