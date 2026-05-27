import Link from "next/link";
import type { Doc } from "@/lib/content";

export function Breadcrumbs({ doc }: { doc: Doc }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-400">
      <Link className="hover:text-red-100" href="/">
        Home
      </Link>
      <span>/</span>
      <Link className="hover:text-red-100" href="/docs">
        Docs
      </Link>
      <span>/</span>
      <span className="text-red-100">{doc.title}</span>
    </nav>
  );
}
