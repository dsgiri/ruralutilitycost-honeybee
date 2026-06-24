import { useState } from 'react';

export function HiveCostCalculator() {
  const [hives, setHives] = useState(1);
  const [config, setConfig] = useState('2deep');
  const [quality, setQuality] = useState('standard');
  const [bees, setBees] = useState('package');
  const [includeGear, setIncludeGear] = useState(true);

  // Constants
  const prices = {
    budget: { deep: 40, medium: 35, covers: 30 },
    standard: { deep: 55, medium: 45, covers: 40 },
    premium: { deep: 75, medium: 60, covers: 60 }
  };
  const beePrices = { package: 150, nuc: 180, swarm: 0, none: 0 };
  const gearPrice = 120;

  const q = quality as keyof typeof prices;
  const b = bees as keyof typeof beePrices;

  let boxesCost = 0;
  if (config === '2deep') {
    boxesCost = prices[q].deep * 2;
  } else {
    boxesCost = prices[q].deep + (prices[q].medium * 2);
  }

  const coversCost = prices[q].covers;
  const beeCost = beePrices[b];
  
  const costPerHive = boxesCost + coversCost + beeCost;
  const totalHiveCost = costPerHive * hives;
  const gearCost = includeGear ? gearPrice : 0;
  const totalCost = totalHiveCost + gearCost;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-sm mb-8 bg-white border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Number of New Hives</label>
            <input 
              type="number" min="0" value={hives} 
              onChange={(e) => setHives(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Hive Configuration</label>
            <select value={config} onChange={(e) => setConfig(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              <option value="2deep">2 Deep Boxes (Brood & Honey)</option>
              <option value="1deep2med">1 Deep (Brood) + 2 Mediums (Honey)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Woodware Quality</label>
            <select value={quality} onChange={(e) => setQuality(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              <option value="budget">Budget (Unassembled/Pine)</option>
              <option value="standard">Standard (Assembled/Painted)</option>
              <option value="premium">Premium (Cedar/Dipped)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Source of Bees</label>
            <select value={bees} onChange={(e) => setBees(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              <option value="package">3lb Package (~$150)</option>
              <option value="nuc">5-Frame Nuc (~$180)</option>
              <option value="swarm">Caught Swarm (Free)</option>
              <option value="none">None (Hardware Only)</option>
            </select>
          </div>

          <div className="flex items-center space-x-3 pt-2">
            <input 
              type="checkbox" 
              id="includeGear"
              checked={includeGear}
              onChange={(e) => setIncludeGear(e.target.checked)}
              className="w-5 h-5 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
            />
            <label htmlFor="includeGear" className="text-sm font-semibold text-slate-900 cursor-pointer">
              Include Starter Gear (Suit, Smoker, Tool - ~$120)
            </label>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-start space-y-6">
          <div>
            <p className="text-sm text-slate-500 font-medium mb-1">Total Setup Cost</p>
            <p className="text-4xl font-bold text-amber-600 tracking-tight">
              ${totalCost.toLocaleString()}
            </p>
            <p className="text-sm text-slate-500 mt-2">({hives > 0 ? `$${costPerHive.toLocaleString()} per hive` : 'No hives'})</p>
          </div>
          
          <div className="pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500 font-medium mb-3">Itemized Breakdown</p>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex justify-between">
                <span>Boxes & Frames ({hives}x):</span>
                <span className="font-medium">${(boxesCost * hives).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Covers & Bottoms ({hives}x):</span>
                <span className="font-medium">${(coversCost * hives).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Bees ({hives}x):</span>
                <span className="font-medium">${(beeCost * hives).toLocaleString()}</span>
              </div>
              {includeGear && (
                <div className="flex justify-between text-slate-600">
                  <span>Starter Gear (One-time):</span>
                  <span className="font-medium">${gearCost}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
