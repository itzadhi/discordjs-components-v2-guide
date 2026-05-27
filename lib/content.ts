import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Doc = {
  slug: string;
  title: string;
  description: string;
  section: string;
  order: number;
  tags: string[];
  body: string;
  href: string;
  headings: { id: string; text: string }[];
};

const contentDir = path.join(process.cwd(), "content", "docs");

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function getHeadings(body: string) {
  return Array.from(body.matchAll(/^##\s+(.+)$/gm)).map((match) => ({
    text: match[1].trim(),
    id: slugify(match[1].trim())
  }));
}

export function getAllDocs(): Doc[] {
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
      const parsed = matter(raw);
      const slug = file.replace(/\.mdx$/, "");
      return {
        slug,
        title: String(parsed.data.title),
        description: String(parsed.data.description),
        section: String(parsed.data.section),
        order: Number(parsed.data.order ?? 999),
        tags: Array.isArray(parsed.data.tags) ? parsed.data.tags.map(String) : [],
        body: parsed.content,
        href: `/docs/${slug}`,
        headings: getHeadings(parsed.content)
      };
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getDocBySlug(slug: string) {
  return getAllDocs().find((doc) => doc.slug === slug);
}

export function getNextPrev(slug: string) {
  const docs = getAllDocs();
  const index = docs.findIndex((doc) => doc.slug === slug);
  return {
    previous: index > 0 ? docs[index - 1] : undefined,
    next: index >= 0 && index < docs.length - 1 ? docs[index + 1] : undefined
  };
}

export function getNavSections(docs = getAllDocs()) {
  const grouped = new Map<string, Doc[]>();
  for (const doc of docs) {
    grouped.set(doc.section, [...(grouped.get(doc.section) ?? []), doc]);
  }
  return Array.from(grouped.entries()).map(([title, items]) => ({ title, items }));
}

export function getSearchDocs() {
  return getAllDocs().map(({ slug, title, description, section, tags, href }) => ({
    slug,
    title,
    description,
    section,
    tags,
    href
  }));
}
