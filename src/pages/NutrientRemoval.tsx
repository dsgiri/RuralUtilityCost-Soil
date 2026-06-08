import React, { useState } from "react";
import { Seo } from "../components/Seo";

// Standard approximate removal rates (lbs per unit of yield)
const CROP_REMOVAL_DATA = [
  { crop: "Corn", unit: "bu", n: 0.67, p2o5: 0.35, k2o: 0.25 },
  { crop: "Soybeans", unit: "bu", n: 3.3, p2o5: 0.73, k2o: 1.2 },
  { crop: "Wheat", unit: "bu", n: 1.2, p2o5: 0.5, k2o: 0.3 },
  { crop: "Alfalfa", unit: "ton", n: 56.0, p2o5: 13.0, k2o: 50.0 }, // N usually fixed by alfalfa
];

export const NutrientRemoval: React.FC = () => {
  const [selectedCropIndex, setSelectedCropIndex] = useState<number>(0);
  const [yieldValue, setYieldValue] = useState<string>("150");

  const crop = CROP_REMOVAL_DATA[selectedCropIndex];
  const yieldNum = parseFloat(yieldValue) || 0;

  const removal = {
    n: (crop.n * yieldNum).toFixed(1),
    p2o5: (crop.p2o5 * yieldNum).toFixed(1),
    k2o: (crop.k2o * yieldNum).toFixed(1),
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8 animate-in fade-in duration-500">
      <Seo title="Nutrient Removal" description="Estimate how much N, P, and K are removed from the field by harvested crops." url="/removal" />
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Nutrient Removal Calculator</h1>
        <p className="mt-2 text-slate-500">Estimate how much N, P, and K are removed from the field by harvested crops.</p>
      </header>

      <div className="bg-white border border-slate-200 shadow-sm ring-1 ring-slate-900/5">
        <div className="p-6 grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#34657F] mb-1">Crop Configuration</label>
            <select
              value={selectedCropIndex}
              onChange={(e) => setSelectedCropIndex(Number(e.target.value))}
              className="mt-1 block w-full rounded-none border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm"
            >
              {CROP_REMOVAL_DATA.map((c, i) => (
                <option key={c.crop} value={i}>{c.crop}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#34657F] mb-1">Yield Goal ({crop.unit}/Acre)</label>
            <input
              type="number"
              value={yieldValue}
              onChange={(e) => setYieldValue(e.target.value)}
              className="mt-1 block w-full rounded-none border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm font-mono"
              placeholder="e.g. 150"
            />
          </div>
        </div>

        <div className="grid gap-px bg-slate-200 sm:grid-cols-3 border-t border-slate-200">
          <div className="bg-slate-50 p-6 flex flex-col items-center justify-center text-center group hover:bg-white transition-colors">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Nitrogen (N)</h4>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-slate-900 tracking-tight">{removal.n}</span>
            </div>
            <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">lbs / acre</div>
            {crop.crop === "Alfalfa" || crop.crop === "Soybeans" ? (
              <div className="text-[10px] text-slate-400 mt-2">Legumes fix most N.</div>
            ) : null}
          </div>
          <div className="bg-slate-50 p-6 flex flex-col items-center justify-center text-center group hover:bg-white transition-colors">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Phosphorus (P₂O₅)</h4>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-slate-900 tracking-tight">{removal.p2o5}</span>
            </div>
            <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">lbs / acre</div>
          </div>
          <div className="bg-slate-50 p-6 flex flex-col items-center justify-center text-center group hover:bg-white transition-colors">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Potassium (K₂O)</h4>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-slate-900 tracking-tight">{removal.k2o}</span>
            </div>
            <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">lbs / acre</div>
          </div>
        </div>
      </div>
    </div>
  );
};
