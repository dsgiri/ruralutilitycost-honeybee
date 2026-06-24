import { useState } from 'react';

export function SyrupMixer() {
  const [ratio, setRatio] = useState('1:1');
  const [method, setMethod] = useState('sugar');
  const [amount, setAmount] = useState(10);

  // 1:1 = 1 lb sugar to 1 pt water (1 pt water = 1.04 lbs, but we use 1 lb for simplicity in beekeeping)
  // Yield: 1 lb sugar + 1 pt water = ~1.5 pts syrup
  
  // 2:1 = 2 lb sugar to 1 pt water
  // Yield: 2 lb sugar + 1 pt water = ~2 pts syrup

  let reqSugarLbs = 0;
  let reqWaterPts = 0;
  let expectedYieldPts = 0;

  if (method === 'sugar') {
    reqSugarLbs = amount;
    if (ratio === '1:1') {
      reqWaterPts = reqSugarLbs;
      expectedYieldPts = reqSugarLbs * 1.5;
    } else {
      reqWaterPts = reqSugarLbs / 2;
      expectedYieldPts = (reqSugarLbs / 2) * 2; // = reqSugarLbs
    }
  } else {
    // amount is in gallons (1 gal = 8 pts)
    expectedYieldPts = amount * 8;
    if (ratio === '1:1') {
      reqSugarLbs = expectedYieldPts / 1.5;
      reqWaterPts = reqSugarLbs;
    } else {
      reqWaterPts = expectedYieldPts / 2;
      reqSugarLbs = reqWaterPts * 2;
    }
  }

  const formatPts = (pts: number) => {
    if (pts >= 8) {
      return `${(pts / 8).toFixed(1)} Gallons`;
    }
    return `${pts.toFixed(1)} Pints`;
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-sm mb-8 bg-white border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Target Feed Type</label>
            <select value={ratio} onChange={(e) => setRatio(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              <option value="1:1">1:1 Ratio (Spring / Stimulative)</option>
              <option value="2:1">2:1 Ratio (Fall / Winter Weight)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Input Method</label>
            <select value={method} onChange={(e) => setMethod(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              <option value="sugar">I have a specific amount of SUGAR (lbs)</option>
              <option value="volume">I need a specific volume of SYRUP (Gallons)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Amount ({method === 'sugar' ? 'lbs of sugar' : 'gallons of syrup'})
            </label>
            <input 
              type="number" min="0" step="0.1" value={amount} 
              onChange={(e) => setAmount(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px]"
            />
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-center space-y-6">
          <h3 className="font-bold text-slate-900 text-lg border-b border-slate-200 pb-2">Recipe</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Granulated Sugar</p>
              <p className="text-2xl font-bold text-slate-800">{reqSugarLbs.toFixed(1)} <span className="text-sm font-normal text-slate-500">lbs</span></p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-100 text-center">
              <p className="text-xs text-blue-500 uppercase tracking-wider font-semibold mb-1">Warm Water</p>
              <p className="text-2xl font-bold text-blue-800">{formatPts(reqWaterPts)}</p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500 font-medium mb-1">Expected Syrup Yield</p>
            <p className="text-3xl font-bold text-amber-600 tracking-tight">
              {formatPts(expectedYieldPts)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
