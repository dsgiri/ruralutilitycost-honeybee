import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag('event', 'page_view', { 
        page_path: location.pathname + location.search 
      });
    }
  }, [location]);

  return null;
}
