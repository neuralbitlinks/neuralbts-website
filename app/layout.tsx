import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neuralbts.com"),
  title: {
    default: `${site.name} — AI Tool Development Company`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "AI tools",
    "AI development studio",
    "machine learning",
    "intelligent automation",
    "AI agents",
    "conversational AI",
    "MLOps",
  ],
  openGraph: {
    title: `${site.name} — AI Tool Development Company`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
