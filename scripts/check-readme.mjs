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

const imageMatches = [...readme.matchAll(/!\[[^\]]*\]\((\.\/[^)]+)\)/g)];
for (const match of imageMatches) {
  const target = path.join(process.cwd(), match[1].replace(/^\.\//, ""));
  if (!fs.existsSync(target)) {
    throw new Error(`README image target does not exist: ${match[1]}`);
  }
}

console.log(`README rendered to ${html.length} characters with ${imageMatches.length} local image assets.`);
