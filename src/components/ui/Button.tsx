import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-display font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-mint/60 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-mint text-[#061A1B] hover:bg-[#c9ffdf] shadow-[0_0_24px_rgba(163,255,203,0.28)]",
    secondary: "bg-card hover:bg-card-hover text-foreground border border-border",
    ghost: "hover:bg-card text-muted hover:text-foreground",
    outline:
      "border border-mint/45 text-ink bg-transparent hover:bg-mint/10 hover:border-mint",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
