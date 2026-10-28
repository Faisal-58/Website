import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cuzec.io"),
  title: {
    default: "CUZEC — AI Agents for Real Estate, Construction, Healthcare & Coaching",
    template: "%s | CUZEC",
  },
  description:
    "CUZEC builds AI agents and automations for real estate, construction, healthcare and coaching businesses, connected to the tools you already use.",
  keywords: ["AI agents", "automation", "real estate AI", "construction bid leveling", "healthcare AI", "coaching automation", "CUZEC"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CUZEC",
    images: [
      {
        url: "/cuzec-logo.png",
        width: 515,
        height: 275,
        alt: "CUZEC Logo",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
