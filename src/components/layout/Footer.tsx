import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/technology", label: "Technology" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/resources", label: "Resources" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/logo.png"
                alt="CUZEC Logo"
                width={140}
                height={140}
                className="w-[140px] h-[140px]"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Enterprise-grade automation solutions. AI agents, workflow automation,
              and business transformation for companies that refuse to settle.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CUZEC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/cuzec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:info@cuzec.io"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              info@cuzec.io
            </a>
            <a
              href="tel:+923085007407"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              +923085007407
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
