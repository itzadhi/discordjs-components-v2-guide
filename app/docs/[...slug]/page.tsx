import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LessonNav } from "@/components/lesson-nav";
import { DocsSidebar } from "@/components/sidebar";
import { TableOfContents } from "@/components/table-of-contents";
import { mdxComponents } from "@/components/mdx-components";
import { getAllDocs, getDocBySlug, getNextPrev } from "@/lib/content";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return getAllDocs().map((doc) => ({ slug: doc.slug.split("/") }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug.join("/"));
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title + " | " + site.name,
      description: doc.description
    }
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug.join("/"));
  if (!doc) notFound();
  const docs = getAllDocs();
  const nav = getNextPrev(doc.slug);

  return (
    <main className="mx-auto grid max-w-[94rem] gap-8 px-5 py-8 lg:grid-cols-[280px_minmax(0,1fr)_260px] lg:px-8">
      <DocsSidebar docs={docs} currentSlug={doc.slug} />
      <article className="min-w-0">
        <div className="glass rounded-[1.4rem] p-5 md:p-8">
          <Breadcrumbs doc={doc} />
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-red-300">{doc.section}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-[0] text-white md:text-5xl">{doc.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{doc.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {doc.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-red-400/20 bg-red-950/30 px-3 py-1 text-xs font-semibold text-red-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="prose-doc mt-8">
          <MDXRemote
            source={doc.body}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [[rehypePrettyCode, { theme: "github-dark", keepBackground: false }]]
              }
            }}
          />
        </div>
        <LessonNav previous={nav.previous} next={nav.next} />
      </article>
      <TableOfContents headings={doc.headings} />
    </main>
  );
}
