"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL, industries } from "@/data/site";

const navLinks = [
  { href: "/#industries", label: "Industries", mega: "industries" },
  { href: "/case-studies", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        hasScrolled
          ? "border-b border-hairline bg-paper/95 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link 
            href="/" 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent rounded"
          >
            <Image
              src="/logo.png"
              alt="CUZEC Logo"
              width={190}
              height={190}
              className="w-[190px] h-[190px]"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.mega && setActiveMega(link.mega)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm text-muted hover:text-ink transition-colors rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0",
                    link.mega && "pr-2"
                  )}
                >
                  {link.label}
                  {link.mega && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {link.mega === "industries" && activeMega === "industries" && (
                  <MegaMenuIndustries />
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button href={BOOKING_URL} variant="primary" size="sm">
              Book a Free Call
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-muted hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent rounded"
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

function MegaMenuWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px]">
      <div className="rounded-lg border border-hairline bg-paper/95 backdrop-blur-lg shadow-xl p-6">
        {children}
      </div>
    </div>
  );
}

function MegaMenuIndustries() {
  return (
    <MegaMenuWrapper>
      <div className="grid grid-cols-2 gap-2">
        {industries.map((industry) => (
          <Link
            key={industry.href}
            href={industry.href}
            className="group block p-3 rounded hover:bg-mist transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <p className="text-sm font-medium group-hover:text-accent-light transition-colors">
              {industry.name}
            </p>
            <p className="text-xs text-muted mt-0.5">{industry.project}</p>
          </Link>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-hairline">
        <Link
          href="/case-studies"
          className="flex items-center gap-1 text-sm text-accent-light hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
        >
          See all our work <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </MegaMenuWrapper>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="lg:hidden border-t border-hairline bg-paper">
      <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block px-3 py-2.5 text-sm text-muted hover:text-ink hover:bg-mist rounded focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <div className="pt-3">
          <Button href={BOOKING_URL} variant="primary" size="md" className="w-full">
            Book a Free Call
          </Button>
        </div>
      </nav>
    </div>
  );
}
