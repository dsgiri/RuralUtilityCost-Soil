import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { ToolConfig } from "../data/tools";
import { useFavorites } from "../context/FavoritesContext";
import { cn } from "../lib/utils";

interface ToolCardProps {
  tool: ToolConfig;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(tool.id);
  
  // Map some categories to different colors from the theme if desired
  let categoryColor = "text-[#4C7C44]";
  if (tool.category.includes("cost") || tool.category.includes("lime")) {
    categoryColor = "text-[#8B7355]";
  } else if (tool.category.includes("removal") || tool.category.includes("recommendation")) {
    categoryColor = "text-[#34657F]";
  }

  return (
    <div className="bg-white border border-slate-200 p-6 flex flex-col relative group transition-colors hover:border-slate-300">
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(tool.id);
        }}
        className={cn(
          "absolute top-6 right-6 cursor-pointer transition-colors focus:outline-none",
          favorite ? "text-red-500" : "text-slate-300 hover:text-red-500"
        )}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart className={cn("h-5 w-5", favorite && "fill-current")} />
      </button>

      <span className={cn("text-[10px] font-bold uppercase mb-2", categoryColor)}>
        {tool.category}
      </span>
      <h3 className="text-lg font-bold mb-2 group-hover:text-[#4C7C44] transition-colors">{tool.title}</h3>
      <p className="text-xs text-slate-500 mb-6 leading-relaxed line-clamp-2">
        {tool.description}
      </p>

      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="text-[10px] font-bold text-slate-400">Action: <span className="text-slate-700">Calculate</span></span>
        <Link
          to={tool.path}
          className="px-3 py-1.5 border-2 border-slate-900 text-[10px] font-bold uppercase text-slate-900 hover:bg-slate-900 hover:text-white transition-colors focus:outline-none"
        >
          Open Tool
        </Link>
      </div>
    </div>
  );
};
