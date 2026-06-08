import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 mb-6">
          <Hexagon className="w-10 h-10 text-amber-500" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">404 - Page Not Found</h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          The hive you're looking for seems to be missing. Let's get you back to the main apiary.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors min-h-[48px]"
          onClick={() => {
            if (typeof window !== 'undefined' && 'gtag' in window) {
              // @ts-ignore
              window.gtag('event', 'click', { element: '404_return_home_button' });
            }
          }}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
