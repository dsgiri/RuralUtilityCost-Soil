import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export const NotFound: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl py-16 text-center space-y-6 animate-in fade-in duration-500">
      <Seo title="Page Not Found" description="The page you are looking for does not exist." url="/404" />
      <h1 className="text-5xl font-bold tracking-tight text-slate-900">404</h1>
      <h2 className="text-2xl font-semibold text-slate-700">Page Not Found</h2>
      <p className="text-slate-500 max-w-md mx-auto">
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link to="/" className="inline-block mt-8 px-6 py-3 bg-[#1B2A1E] text-white font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 min-h-[48px]">
        Return Home
      </Link>
    </div>
  );
};
