import React from "react";

export const Legal: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-in fade-in duration-500 bg-white p-8 border border-slate-200 shadow-sm ring-1 ring-slate-900/5">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-4">Legal & Disclaimer</h1>
      
      <div className="prose prose-slate max-w-none prose-p:leading-relaxed text-slate-600">
        <p>
          The calculators, tools, and information provided within the <strong>Soil (Rural Utility Cost)</strong> application are estimates only and are intended for general planning and educational purposes.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 mt-6">Not Professional Advice</h3>
        <p>
          You should always verify recommendations with local soil testing labs, university extension guidance, certified crop advisors (CCAs), agronomists, and specific product labels prior to application. This application does not replace professional agronomic, legal, financial, or regulatory advice.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 mt-6">Variability</h3>
        <p>
          Calculations are based on simplified standard formulas and generic averages. Actual label rates, nutrient availability, soil chemistry responses, and crop vigor can vary drastically depending on local conditions, climate, application method, and specific product formulations.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 mt-6">Limitation of Liability</h3>
        <p>
          Rural Utility Cost assumes no liability for crop damage, financial loss, environmental compliance issues, or other damages arising from the use of the tools provided within this application. All decisions and applications are made solely at the user's risk.
        </p>
      </div>
    </div>
  );
};
