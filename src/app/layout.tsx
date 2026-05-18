import type { Metadata } from "next";
import { Archivo_Black, Caveat, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const display = Archivo_Black({
  variable: "--font-display-fam",
  subsets: ["latin"],
  weight: "400",
});

const body = DM_Sans({
  variable: "--font-body-fam",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hand = Caveat({
  variable: "--font-hand-fam",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: `${site.name} · ${site.tagline}`,
  description:
    "Portfolio of Arush Bansal — co-founder of Grifi, IIT Delhi alum, engineer at JLR and Floworks.ai. Products, communities, and code.",
  metadataBase: new URL(`https://${site.domain}.com`),
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: site.name,
    description: site.tagline,
    siteName: site.domain,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${hand.variable}`}
    >
      <body className="min-h-screen bg-bg text-fg antialiased">{children}</body>
    </html>
  );
}
