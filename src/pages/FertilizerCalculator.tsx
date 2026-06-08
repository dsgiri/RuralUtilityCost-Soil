import React, { useState } from "react";
import { Seo } from "../components/Seo";

export const FertilizerCalculator: React.FC = () => {
  const [nutrientNeeded, setNutrientNeeded] = useState<string>("");
  const [fertilizerGrade, setFertilizerGrade] = useState<string>("");
  const [area, setArea] = useState<string>("1");

  const calculateProductNeeded = () => {
    const target = parseFloat(nutrientNeeded);
    const grade = parseFloat(fertilizerGrade);
    const acres = parseFloat(area);

    if (isNaN(target) || isNaN(grade) || isNaN(acres) || grade <= 0) return null;

    const ratePerAcre = target / (grade / 100);
    const totalProduct = ratePerAcre * acres;

    return {
      ratePerAcre: ratePerAcre.toFixed(1),
      totalProduct: totalProduct.toFixed(1),
    };
  };

  const results = calculateProductNeeded();

  return (
    <div className="mx-auto max-w-3xl space-y-8 animate-in fade-in duration-500">
      <Seo title="Fertilizer Calculator" description="Calculate actual fertilizer product required to meet a nutrient recommendation." url="/recommend" />
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">NPK Fertilizer Calculator</h1>
        <p className="mt-2 text-slate-500">Calculate actual fertilizer product required to meet a nutrient recommendation.</p>
      </header>

      <div className="bg-white border border-slate-200 shadow-sm ring-1 ring-slate-900/5">
        <div className="p-6 grid gap-6 sm:grid-cols-3">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#34657F] mb-1">Nutrient Need (lbs/acre)</label>
            <input
              type="number"
              value={nutrientNeeded}
              onChange={(e) => setNutrientNeeded(e.target.value)}
              className="mt-1 block w-full rounded-none border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm font-mono"
              placeholder="e.g. 50"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#34657F] mb-1">Fertilizer Grade (%)</label>
            <input
              type="number"
              value={fertilizerGrade}
              onChange={(e) => setFertilizerGrade(e.target.value)}
              className="mt-1 block w-full rounded-none border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm font-mono"
              placeholder="e.g. 46 (for Urea)"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#34657F] mb-1">Area (Acres)</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="mt-1 block w-full rounded-none border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm font-mono"
              placeholder="e.g. 1"
            />
          </div>
        </div>

        {results && (
          <div className="grid gap-px bg-slate-200 sm:grid-cols-2 border-t border-slate-200">
            <div className="bg-slate-50 p-6 flex flex-col justify-center border-b-4 border-[#34657F]">
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Application Rate</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-slate-900 font-mono tracking-tight">{results.ratePerAcre}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">lbs / acre</span>
              </div>
            </div>
            <div className="bg-slate-50 p-6 flex flex-col justify-center border-b-4 border-slate-300">
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Total Product Needed</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-slate-900 font-mono tracking-tight">{results.totalProduct}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">lbs</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
