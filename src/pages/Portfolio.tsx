import { ExternalLink } from 'lucide-react';
import { portfolioSites } from '../data/portfolioParser';
import { Disclaimer } from '../components/Disclaimer';

export function Portfolio() {
  const categories = Array.from(new Set(portfolioSites.map(s => s.category)));

  return (
    <div className="bg-transparent min-h-screen pb-16 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Ecosystem Portfolio</h1>
          <p className="text-slate-600 text-lg max-w-3xl">
            Welcome to the Rural Utility Cost network directory. Explore our complete suite of estimators, 
            calculators, and forecasting tools for agriculture, conservation, and rural infrastructure.
          </p>
        </div>

        {/* Group by category */}
        {categories.map(category => {
          const categorySites = portfolioSites.filter(s => s.category === category);
          if (categorySites.length === 0) return null;

          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySites.map(site => (
                  <a 
                    key={site.name}
                    href={site.url}
                    className="glass-card rounded-xl p-6 hover:border-amber-400 hover:shadow-md transition-all group block h-full flex flex-col focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-lg text-slate-900 group-hover:text-amber-700 transition-colors tracking-tight">
                        {site.name}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-amber-500 transition-colors shrink-0" />
                    </div>
                    <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
                      {site.description}
                    </p>
                    <div className="text-xs text-amber-600 font-semibold lowercase tracking-wide mt-auto py-2 border-t border-slate-100/50">
                      {site.url.replace('https://', '')}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-12">
          <Disclaimer type="full" className="bg-slate-50 border-slate-200 shadow-none" />
        </div>
      </div>
    </div>
  );
}
