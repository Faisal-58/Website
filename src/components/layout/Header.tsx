"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { products, productCategories } from "@/data/products";
import { services } from "@/data/services";
import { resources } from "@/data/blog";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products", mega: "products" },
  { href: "/services", label: "Services", mega: "services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/technology", label: "Technology" },
  { href: "/resources", label: "Resources", mega: "resources" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center">
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
                    "flex items-center gap-1 px-3 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-card",
                    link.mega && "pr-2"
                  )}
                >
                  {link.label}
                  {link.mega && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {link.mega === "products" && activeMega === "products" && (
                  <MegaMenuProducts />
                )}
                {link.mega === "services" && activeMega === "services" && (
                  <MegaMenuServices />
                )}
                {link.mega === "resources" && activeMega === "resources" && (
                  <MegaMenuResources />
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button href="/contact" variant="primary" size="sm">
              Book a Demo
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-muted hover:text-foreground"
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
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[600px]">
      <div className="rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/50 p-6">
        {children}
      </div>
    </div>
  );
}

function MegaMenuProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 3);

  return (
    <MegaMenuWrapper>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
            Categories
          </p>
          <ul className="space-y-1">
            {productCategories.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/products?category=${encodeURIComponent(cat)}`}
                  className="block px-2 py-1.5 text-sm text-muted hover:text-foreground hover:bg-card-hover rounded-md transition-colors"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
            Featured Products
          </p>
          <ul className="space-y-3">
            {featured.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group block p-2 rounded-lg hover:bg-card-hover transition-colors"
                >
                  <p className="text-sm font-medium group-hover:text-accent-light transition-colors">
                    {product.name}
                  </p>
                  <p className="text-xs text-muted mt-0.5 line-clamp-1">
                    {product.shortDescription}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <Link
          href="/products"
          className="flex items-center gap-1 text-sm text-accent-light hover:text-accent transition-colors"
        >
          View all products <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </MegaMenuWrapper>
  );
}

function MegaMenuServices() {
  return (
    <MegaMenuWrapper>
      <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
        Our Services
      </p>
      <div className="grid grid-cols-2 gap-2">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group p-3 rounded-lg hover:bg-card-hover transition-colors"
          >
            <p className="text-sm font-medium group-hover:text-accent-light transition-colors">
              {service.name}
            </p>
            <p className="text-xs text-muted mt-0.5 line-clamp-2">
              {service.shortDescription}
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <Link
          href="/services"
          className="flex items-center gap-1 text-sm text-accent-light hover:text-accent transition-colors"
        >
          View all services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </MegaMenuWrapper>
  );
}

function MegaMenuResources() {
  const guides = resources.filter((r) => r.type === "guide").slice(0, 3);
  const templates = resources.filter((r) => r.type === "template").slice(0, 2);

  return (
    <MegaMenuWrapper>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
            Guides
          </p>
          <ul className="space-y-2">
            {guides.map((r) => (
              <li key={r.slug}>
                <Link
                  href="/resources"
                  className="block text-sm text-muted hover:text-foreground transition-colors"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
            Templates
          </p>
          <ul className="space-y-2">
            {templates.map((r) => (
              <li key={r.slug}>
                <Link
                  href="/resources"
                  className="block text-sm text-muted hover:text-foreground transition-colors"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/blog"
            className="block mt-4 text-sm text-accent-light hover:text-accent transition-colors"
          >
            Read our blog →
          </Link>
        </div>
      </div>
    </MegaMenuWrapper>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="lg:hidden border-t border-border bg-background">
      <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block px-3 py-2.5 text-sm text-muted hover:text-foreground hover:bg-card rounded-lg transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <div className="pt-3">
          <Button href="/contact" variant="primary" size="md" className="w-full">
            Book a Demo
          </Button>
        </div>
      </nav>
    </div>
  );
}
