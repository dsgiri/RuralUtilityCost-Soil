import React from "react";
import { Seo } from "../components/Seo";

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'click', { element: 'submit_contact_form' });
    }
    alert("Thank you for your message. This is a frontend demonstration placeholder.");
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-in fade-in duration-500 bg-white p-8 border border-slate-200 shadow-sm ring-1 ring-slate-900/5">
      <Seo title="Contact" description="Get in touch with the Rural Utility Cost platform team." url="/contact" />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-4">Contact</h1>
      <p className="text-slate-600">
        For inquiries regarding the Rural Utility Cost platform, please use the form below or reach out via our GitHub repository.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mt-6">
        <div>
          <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-[#8B7355] mb-1">Name</label>
          <input required type="text" id="name" className="mt-1 block w-full rounded-none border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm min-h-[48px]" />
        </div>
        <div>
          <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-[#8B7355] mb-1">Email</label>
          <input required type="email" id="email" className="mt-1 block w-full rounded-none border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm min-h-[48px]" />
        </div>
        <div>
          <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-[#8B7355] mb-1">Message</label>
          <textarea required id="message" rows={4} className="mt-1 block w-full rounded-none border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-800 sm:text-sm"></textarea>
        </div>
        <button type="submit" className="px-4 py-3 bg-slate-900 text-white font-bold uppercase text-xs hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 min-h-[48px] w-full mt-4 cursor-pointer">
          Send Message
        </button>
      </form>
    </div>
  );
};

export const License: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-in fade-in duration-500 bg-white p-8 border border-slate-200 shadow-sm ring-1 ring-slate-900/5">
      <Seo title="License" description="Open-source license information for the Rural Utility Cost Soil tools." url="/license" />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-4">License</h1>
      <p className="text-slate-600">
        The Rural Utility Cost Soil tools are provided under an open-source license. Please refer to our GitHub repository for the full Apache-2.0 or MIT licensing terms.
      </p>
    </div>
  );
};
