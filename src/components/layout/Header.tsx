"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL, industries } from "@/data/site";

const resourceLinks = [
  { href: "/resources", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/technology", label: "Integrations" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        hasScrolled
          ? "border-b border-hairline bg-paper/90 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link
            href="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-mint rounded"
          >
            <Image
              src="/cuzec-logo.png"
              alt="Cuzec AI Automation"
              width={515}
              height={275}
              className="h-11 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 font-display">
            <Mega
              label="Solutions"
              href="/services"
              open={activeMega === "solutions"}
              onOpen={() => setActiveMega("solutions")}
              onClose={() => setActiveMega(null)}
            >
              <div className="grid grid-cols-2 gap-1">
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="group block rounded-xl p-3 hover:bg-mint/10 transition-colors"
                  >
                    <p className="text-sm font-medium text-ink group-hover:text-mint">
                      {industry.name}
                    </p>
                    <p className="text-xs text-muted mt-0.5">{industry.project}</p>
                  </Link>
                ))}
              </div>
              <Link
                href="/services"
                className="mt-3 flex items-center gap-1 border-t border-hairline pt-3 text-sm text-mint"
              >
                All solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </Mega>

            <Link
              href="/case-studies"
              className="px-3 py-2 text-sm text-ink/90 hover:text-mint transition-colors"
            >
              Use Cases
            </Link>

            <Mega
              label="Resources"
              href="/resources"
              open={activeMega === "resources"}
              onOpen={() => setActiveMega("resources")}
              onClose={() => setActiveMega(null)}
            >
              <div className="flex flex-col">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-2.5 text-sm text-ink hover:bg-mint/10 hover:text-mint"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Mega>

            <Link
              href="/about"
              className="px-3 py-2 text-sm text-ink/90 hover:text-mint transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="hidden lg:flex items-center">
            <Button href={BOOKING_URL} variant="primary" size="sm">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-ink focus:outline-none focus:ring-2 focus:ring-mint rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </header>
  );
}

function Mega({
  label,
  href,
  open,
  onOpen,
  onClose,
  children,
}: {
  label: string;
  href: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link
        href={href}
        className="flex items-center gap-1 px-3 py-2 text-sm text-ink/90 hover:text-mint transition-colors"
      >
        {label}
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", open && "rotate-180")} />
      </Link>
      {open && (
        <div className="absolute top-full left-0 pt-2 w-[340px]">
          <div className="rounded-2xl border border-mint/25 bg-[#082422]/95 backdrop-blur-lg p-3 shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="lg:hidden border-t border-hairline bg-paper">
      <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1 font-display">
        <p className="px-3 pt-2 text-xs uppercase tracking-wider text-mint">Solutions</p>
        {industries.map((industry) => (
          <Link
            key={industry.href}
            href={industry.href}
            onClick={onClose}
            className="block px-3 py-2 text-sm text-ink hover:text-mint"
          >
            {industry.name}
          </Link>
        ))}
        <Link href="/services" onClick={onClose} className="block px-3 py-2 text-sm text-muted">
          All solutions
        </Link>
        <Link href="/case-studies" onClick={onClose} className="block px-3 py-2.5 text-sm text-ink">
          Use Cases
        </Link>
        <p className="px-3 pt-3 text-xs uppercase tracking-wider text-mint">Resources</p>
        {resourceLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block px-3 py-2 text-sm text-ink"
          >
            {link.label}
          </Link>
        ))}
        <Link href="/about" onClick={onClose} className="block px-3 py-2.5 text-sm text-ink">
          About
        </Link>
        <div className="pt-3">
          <Button href={BOOKING_URL} variant="primary" size="md" className="w-full">
            Get Started <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </nav>
    </div>
  );
}
