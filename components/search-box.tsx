"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

type SearchDoc = {
  slug: string;
  title: string;
  description: string;
  section: string;
  tags: string[];
  href: string;
};

export function SearchBox({ docs, compact = false }: { docs: SearchDoc[]; compact?: boolean }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return docs.slice(0, compact ? 4 : 8);
    return docs
      .filter((doc) => [doc.title, doc.description, doc.section, ...doc.tags].join(" ").toLowerCase().includes(value))
      .slice(0, compact ? 5 : 10);
  }, [compact, docs, query]);

  return (
    <div className={compact ? "relative w-full max-w-xl" : "relative w-full max-w-3xl"}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-red-200" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search components, commands, scaling, databases..."
          className="h-12 w-full rounded-2xl border border-red-400/20 bg-black/45 pl-11 pr-4 text-sm font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-red-300/60 focus:ring-4 focus:ring-red-950/70"
        />
      </div>
      {query && (
        <div className="absolute left-0 right-0 top-14 z-30 overflow-hidden rounded-2xl border border-red-400/20 bg-slate-950/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl">
          {results.length ? (
            results.map((doc) => (
              <Link
                key={doc.slug}
                href={doc.href}
                className="block rounded-xl p-3 transition hover:bg-red-950/35"
                onClick={() => setQuery("")}
              >
                <p className="text-sm font-bold text-red-100">{doc.title}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-400">{doc.description}</p>
              </Link>
            ))
          ) : (
            <p className="p-3 text-sm text-slate-400">No matching lessons yet.</p>
          )}
        </div>
      )}
    </div>
  );
}
