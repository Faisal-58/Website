"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import type { Product } from "@/types";
import { ProductCard } from "@/components/shared/Cards";
import { productCategories } from "@/data/products";

export function ProductGrid({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [compareList, setCompareList] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || p.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  const toggleCompare = (slug: string) => {
    setCompareList((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length < 3 ? [...prev, slug] : prev
    );
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border text-sm focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("All")}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              category === "All"
                ? "bg-accent text-white"
                : "bg-card border border-border text-muted hover:text-foreground"
            }`}
          >
            All
          </button>
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                category === cat
                  ? "bg-accent text-white"
                  : "bg-card border border-border text-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {compareList.length > 0 && (
        <div className="mb-6 p-4 rounded-lg border border-accent/30 bg-accent/5">
          <p className="text-sm font-medium mb-2">
            Comparing {compareList.length} product{compareList.length > 1 ? "s" : ""}:
          </p>
          <div className="flex flex-wrap gap-2">
            {compareList.map((slug) => {
              const p = products.find((pr) => pr.slug === slug);
              return p ? (
                <span
                  key={slug}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded bg-card border border-border text-xs"
                >
                  {p.name}
                  <button onClick={() => toggleCompare(slug)} className="text-muted hover:text-foreground">
                    ×
                  </button>
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div key={product.slug} className="relative">
            <ProductCard product={product} />
            <button
              onClick={() => toggleCompare(product.slug)}
              className={`absolute top-4 right-4 text-xs px-2 py-0.5 rounded border transition-colors ${
                compareList.includes(product.slug)
                  ? "bg-accent text-white border-accent"
                  : "bg-card/80 border-border text-muted hover:text-foreground"
              }`}
            >
              {compareList.includes(product.slug) ? "Selected" : "Compare"}
            </button>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted py-12">No products match your search.</p>
      )}
    </div>
  );
}
