import Link from "next/link";
import { GitPullRequest, Search } from "lucide-react";
import { SearchBox } from "@/components/search-box";
import { Button } from "@/components/ui/button";
import { getSearchDocs } from "@/lib/content";
import { assetPath, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-red-400/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img
            src={assetPath(site.logo)}
            alt="itzadhi logo"
            className="h-11 w-11 rounded-xl border border-red-300/20 object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-black text-white sm:text-base">{site.name}</p>
            <p className="truncate text-xs font-semibold text-red-200">Made by @{site.credit.username}</p>
          </div>
        </Link>
        <div className="hidden flex-1 justify-center lg:flex">
          <SearchBox docs={getSearchDocs()} compact />
        </div>
        <nav className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost">
            <Link href="/docs">Docs</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant="secondary">
            <a href={site.repoUrl}>
              <GitPullRequest className="h-4 w-4" /> GitHub
            </a>
          </Button>
        </nav>
        <Button asChild size="icon" variant="ghost" className="md:hidden" aria-label="Open documentation search">
          <Link href="/docs">
            <Search className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
