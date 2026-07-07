"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import type { CaseStudy } from "@/types";
import { CaseStudyCard } from "@/components/shared/Cards";
import { industries } from "@/data/case-studies";

export function CaseStudyGrid({ studies }: { studies: CaseStudy[] }) {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");

  const filtered = useMemo(() => {
    return studies.filter((s) => {
      const matchesSearch =
        !search ||
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.client.toLowerCase().includes(search.toLowerCase());
      const matchesIndustry = industry === "All" || s.industry === industry;
      return matchesSearch && matchesIndustry;
    });
  }, [studies, search, industry]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search case studies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border text-sm focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setIndustry("All")}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              industry === "All"
                ? "bg-accent text-white"
                : "bg-card border border-border text-muted hover:text-foreground"
            }`}
          >
            All
          </button>
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setIndustry(ind)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                industry === ind
                  ? "bg-accent text-white"
                  : "bg-card border border-border text-muted hover:text-foreground"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted py-12">No case studies match your search.</p>
      )}
    </div>
  );
}
