import Link from "next/link";
import { getNavSections, type Doc } from "@/lib/content";

export function DocsSidebar({ docs, currentSlug }: { docs: Doc[]; currentSlug: string }) {
  const sections = getNavSections(docs);
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-red-400/15 bg-black/35 p-4">
        {sections.map((section) => (
          <div key={section.title} className="mb-6 last:mb-0">
            <p className="mb-2 px-2 text-xs font-black uppercase tracking-[0.18em] text-red-300">{section.title}</p>
            <div className="space-y-1">
              {section.items.map((doc) => (
                <Link
                  key={doc.slug}
                  href={doc.href}
                  className={[
                    "block rounded-xl px-3 py-2 text-sm font-semibold leading-5 transition",
                    doc.slug === currentSlug
                      ? "bg-red-600/22 text-red-50"
                      : "text-slate-300 hover:bg-white/[.04] hover:text-white"
                  ].join(" ")}
                >
                  {doc.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
