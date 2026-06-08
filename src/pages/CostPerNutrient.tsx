import React, { useState } from "react";
import { Seo } from "../components/Seo";

export const CostPerNutrient: React.FC = () => {
  const [pricePerTon, setPricePerTon] = useState<string>("");
  const [nutrientPercentage, setNutrientPercentage] = useState<string>("");

  const calculateCost = () => {
    const price = parseFloat(pricePerTon);
    const percentage = parseFloat(nutrientPercentage);

    if (isNaN(price) || isNaN(percentage) || percentage <= 0) return null;

    // A ton is 2000 lbs.
    const lbsOfNutrientPerTon = 2000 * (percentage / 100);
    const costPerLb = price / lbsOfNutrientPerTon;

    return costPerLb.toFixed(3);
  };

  const cost = calculateCost();

  return (
    <div className="mx-auto max-w-3xl space-y-8 animate-in fade-in duration-500">
      <Seo title="Cost Per Nutrient" description="Calculate the actual cost of a specific nutrient (N, P, or K) based on the bulk fertilizer price." url="/cost" />
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Cost Per Pound of Nutrient</h1>
        <p className="mt-2 text-slate-500">Calculate the actual cost of a specific nutrient (N, P, or K) based on the bulk fertilizer price.</p>
      </header>

      <div className="bg-white border border-slate-200 shadow-sm ring-1 ring-slate-900/5">
        <div className="p-6 grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8B7355] mb-1">Fertilizer Price ($ / Ton)</label>
            <div className="relative border border-slate-300 bg-white shadow-sm focus-within:ring-1 focus-within:ring-slate-800 focus-within:border-slate-800 overflow-hidden flex">
               <div className="pointer-events-none flex items-center pl-3 pr-2 bg-slate-50 border-r border-slate-300">
                <span className="text-slate-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                value={pricePerTon}
                onChange={(e) => setPricePerTon(e.target.value)}
                className="block w-full border-none py-2 px-3 focus:outline-none sm:text-sm font-mono"
                placeholder="e.g. 500"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#8B7355] mb-1">Nutrient Content (%)</label>
            <div className="relative border border-slate-300 bg-white shadow-sm focus-within:ring-1 focus-within:ring-slate-800 focus-within:border-slate-800 flex overflow-hidden">
              <input
                type="number"
                value={nutrientPercentage}
                onChange={(e) => setNutrientPercentage(e.target.value)}
                className="block w-full border-none py-2 px-3 focus:outline-none sm:text-sm font-mono"
                placeholder="e.g. 46"
              />
              <div className="pointer-events-none flex items-center pr-3 pl-2 bg-slate-50 border-l border-slate-300">
                <span className="text-slate-500 sm:text-sm">%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border-t border-slate-200 p-6 flex flex-col items-center justify-center text-center border-b-4 border-[#8B7355]">
          <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Actual Cost Per Pound of Nutrient</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-slate-900 font-mono tracking-tight">
              {cost !== null ? `$${cost}` : "$0.000"}
            </span>
            <span className="text-[10px] font-bold uppercase text-slate-400">/ lb</span>
          </div>
        </div>
      </div>
    </div>
  );
};
