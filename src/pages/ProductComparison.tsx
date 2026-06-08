import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  pricePerTon: string;
  nutrientPercent: string;
}

export const ProductComparison: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: "1", name: "Urea", pricePerTon: "450", nutrientPercent: "46" },
    { id: "2", name: "UAN 32%", pricePerTon: "350", nutrientPercent: "32" },
  ]);

  const addProduct = () => {
    setProducts([...products, { id: Date.now().toString(), name: "", pricePerTon: "", nutrientPercent: "" }]);
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const updateProduct = (id: string, field: keyof Product, value: string) => {
    setProducts(products.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Fertilizer Product Compare</h1>
        <p className="mt-2 text-slate-500">Compare the actual cost per pound of nutrient across different bulk fertilizer sources.</p>
      </header>

      <div className="border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-[#8B7355]">Product Name</th>
                <th scope="col" className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-[#8B7355]">Price ($ / Ton)</th>
                <th scope="col" className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-[#8B7355]">Nutrient (%)</th>
                <th scope="col" className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-[#8B7355]">Cost/Lb</th>
                <th scope="col" className="px-4 py-3 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {products.map((p) => {
                const price = parseFloat(p.pricePerTon);
                const percent = parseFloat(p.nutrientPercent);
                let costPerLb = "--";
                if (!isNaN(price) && !isNaN(percent) && percent > 0) {
                   costPerLb = "$" + (price / (2000 * (percent / 100))).toFixed(3);
                }

                return (
                  <tr key={p.id}>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={p.name}
                        onChange={(e) => updateProduct(p.id, "name", e.target.value)}
                        className="block w-full rounded-none border border-slate-300 bg-white px-2 py-1.5 focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm"
                        placeholder="e.g. Urea"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={p.pricePerTon}
                        onChange={(e) => updateProduct(p.id, "pricePerTon", e.target.value)}
                        className="block w-full rounded-none border border-slate-300 bg-white px-2 py-1.5 focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm font-mono"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={p.nutrientPercent}
                        onChange={(e) => updateProduct(p.id, "nutrientPercent", e.target.value)}
                        className="block w-full rounded-none border border-slate-300 bg-white px-2 py-1.5 focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm font-mono"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-4 py-3 text-lg font-bold text-slate-900 font-mono">
                      {costPerLb}
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button
                        onClick={() => removeProduct(p.id)}
                        className="text-slate-300 hover:text-red-500 transition-colors"
                        aria-label="Remove product"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="bg-[#F4F5F2] border-t border-slate-200 px-4 py-3">
          <button
            onClick={addProduct}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase transition-colors hover:bg-slate-700"
          >
            <Plus className="h-4 w-4" /> Add Product
          </button>
        </div>
      </div>
      
      <div className="text-sm text-slate-500">
        <p><strong>Disclaimer:</strong> Prices are estimates. Agronomic fit, product availability, salt index, and formulation (granular vs. liquid) also factor into product selection, not just price per pound.</p>
      </div>
    </div>
  );
};
