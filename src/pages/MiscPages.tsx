import React from "react";

export const Contact: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-in fade-in duration-500 bg-white p-8 border border-slate-200 shadow-sm ring-1 ring-slate-900/5">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-4">Contact</h1>
      <p className="text-slate-600">
        For inquiries regarding the Rural Utility Cost platform, please visit our main website or reach out via our GitHub repository.
      </p>
    </div>
  );
};

export const License: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-in fade-in duration-500 bg-white p-8 border border-slate-200 shadow-sm ring-1 ring-slate-900/5">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-4">License</h1>
      <p className="text-slate-600">
        The Rural Utility Cost Soil tools are provided under an open-source license. Please refer to our GitHub repository for the full Apache-2.0 or MIT licensing terms.
      </p>
    </div>
  );
};
