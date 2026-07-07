"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-border">
      <div
        className="h-full bg-accent transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function TableOfContents({ content }: { content: string }) {
  const headings = content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace("## ", "");
      const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      return { text, id };
    });

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24">
      <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">
        Table of Contents
      </p>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="text-sm text-muted hover:text-accent-light transition-colors block py-1"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function MarkdownContent({ content }: { content: string }) {
  const html = content
    .split("\n")
    .map((line) => {
      if (line.startsWith("## ")) {
        const text = line.replace("## ", "");
        const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        return `<h2 id="${id}" class="text-2xl font-bold mt-10 mb-4 scroll-mt-24">${text}</h2>`;
      }
      if (line.startsWith("### ")) {
        const text = line.replace("### ", "");
        return `<h3 class="text-xl font-semibold mt-8 mb-3">${text}</h3>`;
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return `<p class="font-semibold text-foreground mt-6 mb-2">${line.replace(/\*\*/g, "")}</p>`;
      }
      if (line.startsWith("- ")) {
        return `<li class="text-muted ml-4 list-disc">${line.replace("- ", "")}</li>`;
      }
      if (line.startsWith("```")) {
        return line.includes("```") && line !== "```" ? "" : '<pre class="bg-card border border-border rounded-lg p-4 my-4 overflow-x-auto"><code class="text-sm font-mono">';
      }
      if (line.trim() === "") return "";
      if (line.startsWith("<")) return line;
      return `<p class="text-muted leading-relaxed mb-4">${line}</p>`;
    })
    .join("\n")
    .replace(/```\n?/g, "</code></pre>");

  return (
    <div
      className="prose-custom max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
