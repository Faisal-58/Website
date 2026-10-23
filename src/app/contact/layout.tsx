import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CUZEC. Book a demo call, send a message, or connect on LinkedIn.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
