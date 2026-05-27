import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Doc } from "@/lib/content";

export function LessonNav({ previous, next }: { previous?: Doc; next?: Doc }) {
  return (
    <nav className="mt-12 grid gap-4 md:grid-cols-2">
      {previous ? (
        <Link
          href={previous.href}
          className="rounded-2xl border border-red-400/15 bg-black/35 p-5 transition hover:border-red-300/45"
        >
          <p className="flex items-center gap-2 text-sm font-bold text-red-300">
            <ArrowLeft className="h-4 w-4" /> Previous
          </p>
          <p className="mt-2 font-black text-white">{previous.title}</p>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="rounded-2xl border border-red-400/15 bg-black/35 p-5 text-right transition hover:border-red-300/45"
        >
          <p className="flex items-center justify-end gap-2 text-sm font-bold text-red-300">
            Next <ArrowRight className="h-4 w-4" />
          </p>
          <p className="mt-2 font-black text-white">{next.title}</p>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
