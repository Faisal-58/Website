import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_DESCRIPTION, HOME_TITLE, SITE_URL, organizationJsonLd } from "@/lib/seo";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | Cuzec",
  },
  description: HOME_DESCRIPTION,
  applicationName: "Cuzec",
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cuzec",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Cuzec AI Automation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
      </head>
      <body className="min-h-screen flex flex-col">
        <JsonLd data={organizationJsonLd} />
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
