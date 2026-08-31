"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!elementRef.current || prefersReducedMotion) {
      return;
    }

    const element = elementRef.current;

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: 16,
    });

    // Create scroll trigger animation
    ScrollTrigger.create({
      trigger: element,
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        });
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration]);

  return (
    <div ref={elementRef}>
      {children}
    </div>
  );
}
