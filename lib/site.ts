export const site = {
  name: "Discord.js Components V2 Guide",
  subtitle: "A premium Discord.js v14+ academy, reference, and production handbook for modern components.",
  description:
    "Modern Discord.js v14+ Components V2 learning ecosystem with academy lessons, production architecture, references, and verified examples.",
  repoName: "discordjs-components-v2-guide",
  owner: "itzadhi",
  primary: "discord.js v14+",
  language: "TypeScript",
  credit: {
    username: "itzadhi",
    displayName: "itzadhi",
    githubUrl: "https://github.com/itzadhi"
  },
  url: "https://itzadhi.github.io/discordjs-components-v2-guide/",
  repoUrl: "https://github.com/itzadhi/discordjs-components-v2-guide",
  docsUrl: "https://itzadhi.github.io/discordjs-components-v2-guide/docs",
  logo: "/brand/itzadhi-logo.jpeg",
  ogImage: "/og/social-card.svg",
  references: [
    { label: "Discord Components Overview", href: "https://docs.discord.com/developers/components/overview" },
    { label: "Discord Component Reference", href: "https://docs.discord.com/developers/components/reference" },
    { label: "discord.js Documentation", href: "https://discord.js.org/docs/packages/discord.js/stable" }
  ]
} as const;

export function assetPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
