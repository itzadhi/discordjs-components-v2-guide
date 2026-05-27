import Link from "next/link";
import { SearchBox } from "@/components/search-box";
import { Badge } from "@/components/ui/badge";
import { getAllDocs, getNavSections, getSearchDocs } from "@/lib/content";

export const metadata = {
  title: "Documentation",
  description: "Searchable lessons, references, diagrams, and production guides."
};

export default function DocsIndexPage() {
  const docs = getAllDocs();
  const sections = getNavSections(docs);

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <Badge variant="red">Documentation homepage</Badge>
        <h1 className="mt-4 text-4xl font-black tracking-[0] text-white md:text-6xl">
          Search the academy and reference.
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          Every lesson follows the same concept-first structure, with visuals, examples, production notes, warnings,
          performance, security, and challenges.
        </p>
      </div>
      <SearchBox docs={getSearchDocs()} compact={false} />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {sections.map((section) => (
          <section key={section.title} className="glass rounded-2xl p-5">
            <h2 className="text-2xl font-black text-white">{section.title}</h2>
            <div className="mt-5 grid gap-3">
              {section.items.map((doc) => (
                <Link
                  key={doc.slug}
                  href={doc.href}
                  className="rounded-xl border border-red-400/15 bg-black/25 p-4 transition hover:border-red-300/45"
                >
                  <p className="font-bold text-red-100">{doc.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{doc.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
