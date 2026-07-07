import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "CUZEC — Enterprise Automation Platform",
    template: "%s | CUZEC",
  },
  description:
    "CUZEC builds enterprise-grade automation solutions. AI agents, workflow automation, CRM automation, and more.",
  keywords: ["automation", "AI agents", "workflow automation", "enterprise", "CUZEC"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CUZEC",
    images: [
      {
        url: "/logo.png",
        width: 32,
        height: 32,
        alt: "CUZEC Logo",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
