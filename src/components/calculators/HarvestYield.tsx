import { useState } from 'react';

export function HarvestYield() {
  const [deeps, setDeeps] = useState(0);
  const [mediums, setMediums] = useState(0);
  const [shallows, setShallows] = useState(0);
  const [efficiency, setEfficiency] = useState('commercial');

  const rawYield = (deeps * 70) + (mediums * 45) + (shallows * 30);
  
  const effMultiplier = efficiency === 'commercial' ? 0.95 : efficiency === 'crush' ? 0.75 : 0.85;
  const finalYieldLbs = Math.round(rawYield * effMultiplier);
  const finalYieldGal = (finalYieldLbs / 12).toFixed(1);

  const jars16oz = finalYieldLbs;
  const jars32oz = Math.round(finalYieldLbs / 2);

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-sm mb-8 bg-white border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Deep Supers (8/10 Frame Full)</label>
            <input 
              type="number" min="0" value={deeps} 
              onChange={(e) => setDeeps(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Medium Supers (8/10 Frame Full)</label>
            <input 
              type="number" min="0" value={mediums} 
              onChange={(e) => setMediums(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Shallow Supers (8/10 Frame Full)</label>
            <input 
              type="number" min="0" value={shallows} 
              onChange={(e) => setShallows(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Extraction Efficiency</label>
            <select value={efficiency} onChange={(e) => setEfficiency(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              <option value="commercial">Commercial Radial Extractor (95%)</option>
              <option value="hand">Hand Crank Tangential (85%)</option>
              <option value="crush">Crush & Strain (75%)</option>
            </select>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-center space-y-6">
          <div>
            <p className="text-sm text-slate-500 font-medium mb-1">Total Extracted Weight</p>
            <p className="text-4xl font-bold text-amber-600 tracking-tight">
              {finalYieldLbs.toLocaleString()} <span className="text-lg text-slate-400 font-normal">lbs</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">({finalYieldGal} Gallons)</p>
          </div>
          
          <div className="pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500 font-medium mb-3">Container Estimate</p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-4 py-3 rounded-lg border border-slate-200 shadow-sm flex-1 text-center">
                <span className="block font-bold text-slate-800 text-xl">{jars16oz.toLocaleString()}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">1lb Jars</span>
              </div>
              <div className="bg-white px-4 py-3 rounded-lg border border-slate-200 shadow-sm flex-1 text-center">
                <span className="block font-bold text-slate-800 text-xl">{jars32oz.toLocaleString()}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Quart (32oz)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
