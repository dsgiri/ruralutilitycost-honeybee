import { useState } from 'react';

export function ApiarySetup() {
  const [hives, setHives] = useState(1);
  const [layout, setLayout] = useState('line');

  // Constants (in feet)
  const hiveWidth = 2; // avg 2ft footprint per hive
  const hiveSpacing = 3;
  const rowSpacing = 6;
  const flightPath = 15;
  const backSpace = 4;

  let rows = 1;
  let hivesPerRow = hives;

  if (layout === 'ushape') {
    rows = 3; // 3 sides
    hivesPerRow = Math.ceil(hives / 3);
  } else if (layout === 'multi') {
    hivesPerRow = Math.min(hives, 5); // arbitrarily break at 5 per row
    rows = Math.ceil(hives / hivesPerRow);
  }

  // Width: Hives side-by-side + spacing
  const totalWidth = (hivesPerRow * hiveWidth) + ((hivesPerRow - 1) * hiveSpacing);
  
  // Depth: Back working space + hive depth (2ft) + flight path + row spacing
  const totalDepth = backSpace + 2 + flightPath + ((rows - 1) * rowSpacing);

  const sqFt = totalWidth * totalDepth;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-sm mb-8 bg-white border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Number of Hives</label>
            <input 
              type="number" min="1" value={hives} 
              onChange={(e) => setHives(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Layout Style</label>
            <select value={layout} onChange={(e) => setLayout(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              <option value="line">Straight Line (Best for small numbers)</option>
              <option value="ushape">U-Shape (Reduces drifting)</option>
              <option value="multi">Multiple Rows (Best for large apiaries)</option>
            </select>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-start space-y-6">
          <div>
            <p className="text-sm text-slate-500 font-medium mb-1">Required Space Footprint</p>
            <p className="text-4xl font-bold text-amber-600 tracking-tight">
              {sqFt} <span className="text-lg text-slate-400 font-normal">Sq Ft</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">({totalWidth}ft wide × {totalDepth}ft deep)</p>
          </div>
          
          <div className="pt-6 border-t border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Design Considerations:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
              <li>Includes {flightPath}ft clear flight path in front.</li>
              <li>Includes {backSpace}ft working space behind hives.</li>
              {rows > 1 && <li>Maintains {rowSpacing}ft distance between rows.</li>}
              <li>Provide a water source within 50 feet.</li>
              <li>Face entrances South or South-East if possible.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
