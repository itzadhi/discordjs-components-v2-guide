const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const explicitBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = process.env.GITHUB_PAGES === "true" && repoName ? `/${repoName}` : explicitBase;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"]
};

export default nextConfig;
