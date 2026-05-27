export function TableOfContents({ headings }: { headings: { id: string; text: string }[] }) {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 rounded-2xl border border-red-400/15 bg-black/35 p-4">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">On this page</p>
        <nav className="mt-3 space-y-2">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={"#" + heading.id}
              className="block text-sm leading-5 text-slate-400 transition hover:text-red-100"
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
