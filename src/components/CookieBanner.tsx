import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
    
    // Track consent acceptance
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag('event', 'click', { element: 'cookie_accept_button' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 p-4 shadow-lg z-50 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="text-slate-300 text-sm max-w-3xl">
        <p>We use cookies to improve your experience, analyze site traffic, and serve tailored advertisements. By clicking "Accept", you consent to our use of cookies and our Privacy Policy.</p>
      </div>
      <div className="shrink-0 flex gap-3">
        <button 
          onClick={handleAccept}
          className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg text-sm font-semibold transition-colors focus:ring-2 focus:ring-amber-500 focus:outline-none min-h-[48px]"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
}
