"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => {
        // cubic-bezier(0.16, 1, 0.3, 1)
        return t === 0
          ? 0
          : t === 1
            ? 1
            : t < 0.5
              ? 2 * t * t * t * (4 * t - 3)
              : 1 + (t - 1) * (2 * (t - 1) ** 2 * (4 * (t - 1) + 3));
      },
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Disable GSAP's built-in lag smoothing for precise sync
    gsap.ticker.lagSmoothing(0);

    // Keep ScrollTrigger in sync with Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Update GSAP ticker with Lenis RAF
    const update = () => {
      lenis.raf(Date.now());
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
