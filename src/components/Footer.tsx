import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';
import { AdContainer } from './AdContainer';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Footer Ad Placement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 w-full">
        <AdContainer slot="footer-ad-bottom" location="Footer Bottom" />
      </div>

      <footer className="bg-white border-t border-slate-200 mt-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-400 font-medium">
      <div className="flex flex-wrap justify-center gap-6 uppercase tracking-wider mb-4 md:mb-0">
        <Link to="/about" className="hover:text-slate-600">About</Link>
        <Link to="/legal" className="hover:text-slate-600">Privacy Policy</Link>
        <Link to="/legal" className="hover:text-slate-600">Terms of Service</Link>
        <Link to="/legal" className="hover:text-slate-600">Disclaimer</Link>
      </div>
      <div className="text-center md:text-right">
        © {currentYear} Honeybee | A <span className="text-slate-600 font-bold underline decoration-amber-400">ruralutilitycost.com</span> Project
      </div>
    </footer>
    </>
  );
}
