import { useState } from 'react';

export function HoneyEstimator() {
  const [hives, setHives] = useState(1);
  const [strength, setStrength] = useState('average');
  const [flow, setFlow] = useState('average');
  const [season, setSeason] = useState('average');

  const baseYield = 60; // lbs per hive

  const strengthModifier = strength === 'weak' ? 0.7 : strength === 'strong' ? 1.4 : 1.0;
  const flowModifier = flow === 'poor' ? 0.6 : flow === 'excellent' ? 1.5 : 1.0;
  const seasonModifier = season === 'short' ? 0.8 : season === 'long' ? 1.2 : 1.0;

  const yieldPerHive = Math.round(baseYield * strengthModifier * flowModifier * seasonModifier);
  const totalYield = yieldPerHive * hives;
  
  const jars1lb = totalYield;
  const jars12oz = Math.round((totalYield * 16) / 12);

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-sm mb-8 bg-white border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Number of Active Hives</label>
            <input 
              type="number" min="0" value={hives} 
              onChange={(e) => setHives(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Colony Strength</label>
            <select value={strength} onChange={(e) => setStrength(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              <option value="weak">Weak (-30%)</option>
              <option value="average">Average</option>
              <option value="strong">Strong (+40%)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Nectar Flow Quality</label>
            <select value={flow} onChange={(e) => setFlow(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              <option value="poor">Poor (-40%)</option>
              <option value="average">Average</option>
              <option value="excellent">Excellent (+50%)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Foraging Season Length</label>
            <select value={season} onChange={(e) => setSeason(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              <option value="short">Short (-20%)</option>
              <option value="average">Average</option>
              <option value="long">Long (+20%)</option>
            </select>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-center space-y-6">
          <div>
            <p className="text-sm text-slate-500 font-medium mb-1">Total Estimated Harvest</p>
            <p className="text-4xl font-bold text-amber-600 tracking-tight">
              {totalYield.toLocaleString()} <span className="text-lg text-slate-400 font-normal">lbs</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">({yieldPerHive} lbs per hive)</p>
          </div>
          
          <div className="pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500 font-medium mb-3">Equivalent To</p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                <span className="font-bold text-slate-800">{jars1lb.toLocaleString()}</span>
                <span className="text-xs text-slate-500 ml-1">16oz Jars</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                <span className="font-bold text-slate-800">{jars12oz.toLocaleString()}</span>
                <span className="text-xs text-slate-500 ml-1">12oz Jars</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
