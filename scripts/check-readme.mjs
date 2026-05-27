import fs from "node:fs";
import path from "node:path";
import MarkdownIt from "markdown-it";

const readme = fs.readFileSync("README.md", "utf8");
const html = new MarkdownIt({ html: true, linkify: true }).render(readme);
if (!html.includes("<img")) {
  throw new Error("README did not render image tags.");
}
if (!html.includes("Made by") || !html.includes("@itzadhi")) {
  throw new Error("README rendered output is missing required credits.");
}

const markdownImages = [...readme.matchAll(/!\[[^\]]*\]\((\.\/[^)]+)\)/g)].map((match) => match[1]);
const htmlImages = [...readme.matchAll(/<img[^>]+src=["'](\.\/[^"']+)["']/g)].map((match) => match[1]);
const localImages = [...new Set([...markdownImages, ...htmlImages])];

for (const image of localImages) {
  const target = path.join(process.cwd(), image.replace(/^\.\//, ""));
  if (!fs.existsSync(target)) {
    throw new Error(`README image target does not exist: ${image}`);
  }
}

console.log(`README rendered to ${html.length} characters with ${localImages.length} local image assets.`);
