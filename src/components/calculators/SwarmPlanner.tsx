import { useState } from 'react';

export function SwarmPlanner() {
  // Default to today
  const [firstBloom, setFirstBloom] = useState(new Date().toISOString().split('T')[0]);
  const [strength, setStrength] = useState('average');

  const getTargetDate = (baseDateStr: string, weeksToAdd: number) => {
    if (!baseDateStr) return null;
    const date = new Date(baseDateStr);
    // Add weeks
    date.setDate(date.getDate() + (weeksToAdd * 7));
    return date;
  };

  const getPrepDate = (riskDate: Date | null) => {
    if (!riskDate) return null;
    const date = new Date(riskDate);
    date.setDate(date.getDate() - 14); // 2 weeks before
    return date;
  };

  const weeksUntilRisk = strength === 'weak' ? 8 : strength === 'strong' ? 4 : 6;
  const riskDate = getTargetDate(firstBloom, weeksUntilRisk);
  const prepDate = getPrepDate(riskDate);

  const formatDate = (date: Date | null) => {
    if (!date) return '---';
    return date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-sm mb-8 bg-white border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">First Spring Bloom / Avg Last Frost</label>
            <input 
              type="date" 
              value={firstBloom} 
              onChange={(e) => setFirstBloom(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Winter Survival Strength</label>
            <select value={strength} onChange={(e) => setStrength(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              <option value="weak">Weak (Slow buildup)</option>
              <option value="average">Average (Steady growth)</option>
              <option value="strong">Strong (Explosive growth)</option>
            </select>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-start space-y-6">
          <div>
            <p className="text-sm text-slate-500 font-medium mb-1">Peak Swarm Risk Begins</p>
            <p className="text-2xl font-bold text-amber-600 tracking-tight">
              {formatDate(riskDate)}
            </p>
            <p className="text-sm text-slate-500 mt-1">({weeksUntilRisk} weeks after first bloom)</p>
          </div>
          
          <div className="pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500 font-medium mb-1">Action Required By (Prep Window)</p>
            <p className="text-xl font-bold text-emerald-600 tracking-tight mb-3">
              {formatDate(prepDate)}
            </p>
            <div className="space-y-2 text-sm text-slate-700 bg-white p-4 rounded-lg border border-slate-200">
              <p className="font-semibold text-slate-900 mb-1">Prevention Checklist:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Reverse brood boxes if clustered high</li>
                <li>Add honey supers to relieve congestion</li>
                <li>Implement checkerboarding</li>
                <li>Prepare Nuc boxes for potential splits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
