import React, { useState, useEffect } from "react";

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1B2A1E] text-white p-4 z-50 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-4 border-[#8B7355] shadow-lg" role="dialog" aria-live="polite" aria-label="Cookie consent banner">
      <p className="text-sm font-medium">
        We use cookies to ensure you get the best experience on our website, track analytics, and serve personalized ads.
      </p>
      <div className="flex gap-4 shrink-0">
        <button onClick={acceptCookies} className="px-4 py-3 bg-[#4C7C44] text-white text-xs font-bold uppercase rounded-sm hover:bg-[#5A8D52] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4C7C44] min-h-[48px]" aria-label="Accept cookies">
          Accept & Continue
        </button>
      </div>
    </div>
  );
};
