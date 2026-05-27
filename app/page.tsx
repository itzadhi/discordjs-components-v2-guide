import Link from "next/link";
import { ArrowRight, BookOpen, Boxes, Code2, Database, ShieldCheck, Sparkles } from "lucide-react";
import { HeroMotion } from "@/components/hero-motion";
import { SearchBox } from "@/components/search-box";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllDocs, getNavSections, getSearchDocs } from "@/lib/content";
import { assetPath, site } from "@/lib/site";

const highlights = [
  { icon: BookOpen, title: "Beginner academy", text: "Every lesson starts in human language before code." },
  {
    icon: Code2,
    title: "Professional reference",
    text: "Quick tables, lifecycle maps, syntax cards, and migration notes."
  },
  {
    icon: Boxes,
    title: "Production architecture",
    text: "Handlers, services, state, databases, security, hosting, and scale."
  },
  {
    icon: Database,
    title: "Real projects",
    text: "Moderation, tickets, economy, music, verification, dashboard, and AI systems."
  }
];

export default function HomePage() {
  const docs = getAllDocs();
  const sections = getNavSections(docs);
  const featured = docs.slice(0, 6);

  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="red">
              Created by {site.credit.displayName} / @{site.credit.username}
            </Badge>
            <Badge variant="outline">{site.primary}</Badge>
            <Badge variant="outline">Modern Discord API only</Badge>
          </div>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[0] text-white md:text-7xl">
              {site.name}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-red-100/82 md:text-xl">{site.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/docs">
                Start learning <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={site.repoUrl}>View GitHub</a>
            </Button>
          </div>
          <SearchBox docs={getSearchDocs()} compact={false} />
        </div>
        <HeroMotion>
          <div className="glass relative overflow-hidden rounded-[1.75rem] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="mac-dot bg-red-500" />
                <span className="mac-dot bg-amber-400" />
                <span className="mac-dot bg-emerald-400" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-200/80">Splash</span>
            </div>
            <div className="grid gap-5 lg:grid-cols-[.78fr_1.22fr]">
              <div className="space-y-4">
                <img
                  src={assetPath(site.logo)}
                  alt="Adhi logo"
                  className="aspect-square w-full rounded-2xl border border-red-300/20 object-cover shadow-2xl shadow-red-950/60"
                />
                <div className="rounded-2xl border border-red-400/20 bg-black/40 p-4">
                  <p className="text-sm font-bold text-red-100">GitHub profile card</p>
                  <p className="mt-1 text-sm text-slate-300">
                    {site.credit.displayName} builds modern Discord learning systems as @{site.credit.username}.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-red-400/20 bg-slate-950/80 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-200/80">
                    Interaction lifecycle
                  </p>
                  <div className="mt-5 grid gap-3">
                    {["User action", "Discord interaction", "Guard and route", "Service logic", "Response"].map(
                      (item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-red-400/15 bg-white/[.04] px-4 py-3 text-sm font-semibold text-slate-100"
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {sections.slice(0, 4).map((section) => (
                    <div key={section.title} className="rounded-2xl border border-red-400/15 bg-black/35 p-4">
                      <p className="text-2xl font-black text-white">{section.items.length}</p>
                      <p className="mt-1 text-sm text-slate-300">{section.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </HeroMotion>
      </section>

      <section className="border-y border-red-400/10 bg-black/20 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="h-6 w-6 text-red-300" />
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-300">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">Academy path</p>
            <h2 className="mt-3 text-3xl font-black tracking-[0] text-white md:text-4xl">
              Start with concepts, finish with production systems.
            </h2>
          </div>
          <Button asChild variant="secondary">
            <Link href="/docs">Open all lessons</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((doc) => (
            <Link
              key={doc.slug}
              href={doc.href}
              className="group rounded-2xl border border-red-400/15 bg-slate-950/55 p-5 transition hover:border-red-300/45 hover:bg-red-950/20"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-300">{doc.section}</p>
              <h3 className="mt-3 text-xl font-black text-white group-hover:text-red-100">{doc.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{doc.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
