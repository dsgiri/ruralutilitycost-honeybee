import { Disclaimer } from './Disclaimer';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white border-t border-slate-200 mt-auto px-4 sm:px-8 py-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 text-[11px] text-slate-400 font-medium mb-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 uppercase tracking-wider">
              <a href="https://ruralutilitycost.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">About Us</a>
              <a href="https://ruralutilitycost.com/portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Portfolio</a>
              <a href="https://ruralutilitycost.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Contact Us</a>
              <a href="https://ruralutilitycost.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="https://ruralutilitycost.com/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Terms of Use</a>
              <a href="https://ruralutilitycost.com/disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Disclaimer</a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-[11px] text-slate-400 font-medium border-t border-slate-100 pt-6">
            <Disclaimer type="footer" className="text-center lg:text-left max-w-2xl" />

            <div className="text-center lg:text-right shrink-0">
              © {currentYear} Honeybee | A <span className="text-slate-600 font-bold underline decoration-amber-400">ruralutilitycost.com</span> Project
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
