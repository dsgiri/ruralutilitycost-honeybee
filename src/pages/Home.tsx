import { TOOLS, CATEGORIES } from '../data/tools';
import { ToolCard } from '../components/ToolCard';
import { ArrowDown, Hexagon } from 'lucide-react';

export function Home() {
  return (
    <div className="bg-transparent min-h-screen pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 text-slate-700 text-sm font-medium mb-4 border border-slate-900/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Apiary Decision Support
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Practical estimators and calculators for <span className="font-normal text-slate-500">rural hive management.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Plan your colonies, estimate harvest yields, timing, and costs. Honeybee provides straightforward calculators for rural properties and apiary managers.
            </p>
          </div>
        </div>
      </section>

      {/* Categories / Tools Overview */}
      <section id="tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Hive Management Tools</h2>
          <p className="text-slate-500 text-sm">
            Select a category below to access estimators, timelines, and planning utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white/80 backdrop-blur-sm border-y border-slate-200 mt-12 py-16 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">Data-driven apiary decisions.</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Honeybee integrates standard agricultural formulas and regional timelines to provide actionable estimators for your apiary. Whether you manage two hives or two hundred, planning ahead reduces costs and improves winter survivor rates.
              </p>
              <ul className="space-y-4">
                {[
                  'Itemized setup and operational cost estimates.',
                  'Volume-based honey yield calculations.',
                  'Date-specific swarm and queen rearing timelines.',
                  'Precise syrup mixing ratios for seasonal feeding.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-amber-50 rounded-xl border border-amber-100 p-6">
               <h4 className="font-bold text-sm mb-2 text-amber-900 uppercase tracking-wide">How it works</h4>
               <p className="text-xs text-amber-800 leading-relaxed mb-4">
                 Honeybee utilizes agricultural data sets from Rural Utility Cost to provide beekeeping decision support. Results are generated via localized climate models and colony development biology.
               </p>
               <div className="p-4 bg-white/70 backdrop-blur rounded-lg border border-amber-200/50 shadow-sm text-xs text-amber-900 italic">
                 “Decision-making made simple for hobbyist and commercial apiaries alike.”
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
