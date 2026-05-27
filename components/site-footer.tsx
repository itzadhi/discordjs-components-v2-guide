import { GitPullRequest, Heart, ShieldCheck } from "lucide-react";
import { assetPath, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-red-400/10 bg-black/35">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_auto] lg:px-8">
        <div className="flex gap-4">
          <img
            src={assetPath(site.logo)}
            alt="itzadhi logo"
            className="h-14 w-14 rounded-2xl border border-red-300/20 object-cover"
          />
          <div>
            <p className="font-black text-white">{site.name}</p>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-300">
              Built with Next.js, TypeScript, TailwindCSS, MDX, Framer Motion, and shadcn-style UI. Made by @
              {site.credit.username}.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-red-200">
              <a href={site.repoUrl} className="inline-flex items-center gap-2">
                <GitPullRequest className="h-4 w-4" /> Repository
              </a>
              <a href="/about" className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> About and credits
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-red-400/15 bg-red-950/20 p-4 text-sm text-slate-300">
          <p className="flex items-center gap-2 font-bold text-red-100">
            <Heart className="h-4 w-4" /> Credit
          </p>
          <p className="mt-2">Made by @{site.credit.username}</p>
        </div>
      </div>
    </footer>
  );
}
