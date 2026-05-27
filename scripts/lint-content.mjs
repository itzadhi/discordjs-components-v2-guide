import fs from "node:fs";
import path from "node:path";

const required = [
  "## 1. What Is It?",
  "## 2. Why Does It Exist?",
  "## 3. How Discord Handles It Internally",
  "## 4. Visual Explanation",
  "## 5. Beginner Example",
  "## 6. Intermediate Example",
  "## 7. Production Example",
  "## 8. Common Mistakes",
  "## 9. Best Practices",
  "## 10. Performance Notes",
  "## 11. Security Notes",
  "## 12. Challenge Section"
];

const contentDir = path.join(process.cwd(), "content", "docs");
const files = fs.readdirSync(contentDir).filter((file) => file.endsWith(".mdx"));
for (const file of files) {
  const body = fs.readFileSync(path.join(contentDir, file), "utf8");
  for (const heading of required) {
    if (!body.includes(heading)) {
      throw new Error(`${file} is missing required lesson heading: ${heading}`);
    }
  }
  if (!body.includes("<OutdatedWarning")) {
    throw new Error(`${file} must include the outdated method warning system.`);
  }
}

for (const asset of [
  "public/brand/itzadhi-logo.jpeg",
  "assets/readme-banner.svg",
  "public/og/social-card.svg",
  "assets/github-profile-card.svg"
]) {
  if (!fs.existsSync(path.join(process.cwd(), asset))) {
    throw new Error(`Missing required branding asset: ${asset}`);
  }
}

const readme = fs.readFileSync("README.md", "utf8");
for (const credit of ["itzadhi", "@itzadhi", "Made by"]) {
  if (!readme.includes(credit)) {
    throw new Error(`README missing required credit text: ${credit}`);
  }
}

console.log(`Validated ${files.length} MDX lessons and required branding assets.`);
