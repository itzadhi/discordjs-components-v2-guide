import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { assetPath, site } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: "#030305",
  colorScheme: "dark"
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: "%s | " + site.name
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Adhi", url: site.credit.githubUrl }],
  creator: "Adhi (@itzaqdhi)",
  publisher: "Adhi (@itzaqdhi)",
  keywords: ["Discord", "discord.js v14+", "Components V2", "Next.js", "TypeScript", "MDX"],
  icons: {
    icon: [{ url: assetPath(site.logo), type: "image/jpeg" }],
    apple: [{ url: assetPath(site.logo), type: "image/jpeg" }]
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
    images: [{ url: assetPath(site.ogImage), width: 1280, height: 640, alt: site.name + " social preview by Adhi" }]
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [assetPath(site.ogImage)],
    creator: "@itzaqdhi"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="min-h-screen">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
