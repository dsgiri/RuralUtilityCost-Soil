import React, { useState } from "react";
import { TOOLS, CATEGORIES } from "../data/tools";
import { ToolCard } from "../components/ToolCard";
import { cn } from "../lib/utils";

export const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredTools = activeCategory
    ? TOOLS.filter((t) => t.category === activeCategory)
    : TOOLS;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Dashboard Hero */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 pb-6 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Productivity Dashboard</h2>
          <p className="text-slate-500 mt-1">Turning soil test results into practical nutrient management plans.</p>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase font-bold text-slate-400">System Status</span>
            <span className="text-xs font-semibold text-[#4C7C44]">Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <section>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "px-3 py-1.5 text-[10px] font-bold uppercase transition-colors border",
              activeCategory === null
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
            )}
          >
            All Tools
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3 py-1.5 text-[10px] font-bold uppercase transition-colors border",
                activeCategory === cat
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Tools Grid */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-grow">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </section>
    </div>
  );
};
