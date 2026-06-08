import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { TOOLS } from "../data/tools";
import { ToolCard } from "../components/ToolCard";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export const Favorites: React.FC = () => {
  const { favorites } = useFavorites();
  
  const favoriteTools = TOOLS.filter(t => favorites.includes(t.id));

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <Seo title="Favorites" description="Quick access to your most frequently used soil and nutrient calculators." url="/favorites" />
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Your Saved Tools</h1>
        <p className="mt-2 text-slate-500">Quick access to your most frequently used soil and nutrient calculators.</p>
      </header>

      {favoriteTools.length === 0 ? (
        <div className="border border-dashed border-slate-300 bg-[#F4F5F2] p-12 text-center">
          <h3 className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-900">No favorites</h3>
          <p className="mt-1 text-xs text-slate-500">You haven't saved any tools yet.</p>
          <div className="mt-6">
            <Link
              to="/"
              className="px-4 py-2 bg-slate-900 text-white text-[10px] font-bold uppercase hover:bg-slate-700 transition-colors"
            >
              Browse Tools
            </Link>
          </div>
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </section>
      )}
    </div>
  );
};
