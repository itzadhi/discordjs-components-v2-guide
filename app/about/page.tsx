import { GitPullRequest, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { assetPath, site } from "@/lib/site";

export const metadata = {
  title: "About",
  description: "Credits, philosophy, sources, and design system for " + site.name
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
      <section className="glass overflow-hidden rounded-[1.75rem] p-6 md:p-10">
        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
          <img
            src={assetPath(site.logo)}
            alt="itzadhi logo"
            className="aspect-square rounded-3xl border border-red-300/20 object-cover shadow-2xl shadow-red-950/60"
          />
          <div className="space-y-6">
            <Badge variant="red">About the academy</Badge>
            <h1 className="text-4xl font-black tracking-[0] text-white md:text-6xl">{site.name}</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">{site.description}</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <Card>
                <CardHeader>
                  <Sparkles className="h-5 w-5 text-red-300" />
                  <CardTitle>Credit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">Made by @{site.credit.username}.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShieldCheck className="h-5 w-5 text-red-300" />
                  <CardTitle>Modern only</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">
                    Deprecated patterns are called out as migration warnings, never as default practice.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <GitPullRequest className="h-5 w-5 text-red-300" />
                  <CardTitle>Open source</CardTitle>
                </CardHeader>
                <CardContent>
                  <a className="text-sm font-semibold text-red-200" href={site.repoUrl}>
                    Repository on GitHub
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 grid gap-5 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Teaching Philosophy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7 text-slate-300">
              Every lesson explains the human idea first, then the Discord internals, then visuals, beginner code,
              intermediate structure, production architecture, mistakes, performance, security, and learner challenges.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Primary References</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-slate-300">
              {site.references.map((reference) => (
                <li key={reference.href}>
                  <a className="font-semibold text-red-200" href={reference.href}>
                    {reference.label}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
