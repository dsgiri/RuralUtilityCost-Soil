import React, { useEffect } from 'react';

interface AdPlaceholderProps {
  slotId: string;
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ slotId, className }) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error', e);
    }
  }, []);

  return (
    <div className={`ad-container my-5 min-h-[250px] flex justify-center items-center bg-slate-100 border border-slate-200 overflow-hidden text-slate-400 text-sm italic ${className}`} data-ad-status="unfilled" aria-label="Advertisement Container">
      <ins className="adsbygoogle block w-full min-h-[250px]"
           data-ad-client="ca-PUB-YOUR_CLIENT_ID"
           data-ad-slot={slotId}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

