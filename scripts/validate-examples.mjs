import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "examples/discordjs-bot");
if (!fs.existsSync(root)) {
  throw new Error("Example root is missing: " + root);
}

const required = [
  "moderation-system.ts",
  "ticket-system.ts",
  "economy-system.ts",
  "music-controls.ts",
  "verification-system.ts",
  "dashboard-oauth.ts",
  "ai-assistant.ts"
];
const projectDir = path.join(root, "src", "projects");
for (const file of required) {
  const target = path.join(projectDir, file);
  if (!fs.existsSync(target)) {
    throw new Error(`Missing real project source module: ${file}`);
  }
  const text = fs.readFileSync(target, "utf8");
  if (
    !text.includes("custom_id") &&
    !text.includes("customId") &&
    !text.includes("setCustomId") &&
    !text.includes("encodeCustomId")
  ) {
    throw new Error(`Project module should include component routing identifiers: ${file}`);
  }
}

console.log(`Validated ${required.length} real project source modules.`);
