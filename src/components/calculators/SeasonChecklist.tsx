import { useState } from 'react';

const TASKS: Record<string, Record<string, string[]>> = {
  cold: {
    Jan: ["Monitor hive entrances for deadouts/snow blockage.", "Build and paint new woodenware.", "Order package bees or nucs."],
    Feb: ["Check food stores via hefting the hive.", "Add winter patties or dry sugar if light.", "Finalize equipment orders."],
    Mar: ["First warm day (50°F+), conduct brief inspection.", "Clean bottom boards.", "Begin 1:1 syrup feeding if needed."],
    Apr: ["Begin regular inspections.", "Reverse boxes if cluster is high.", "Monitor for swarm preparations."],
    May: ["Add honey supers.", "Intensive swarm management.", "Install new packages or nucs."],
    Jun: ["Monitor nectar flow.", "Add additional supers as needed.", "Check queen laying pattern."],
    Jul: ["Extract early honey if capped.", "Monitor for nectar dearth and robbing.", "Perform varroa mite wash."],
    Aug: ["Harvest main honey crop.", "Crucial varroa mite treatment window.", "Begin feeding 2:1 syrup for winter weight."],
    Sep: ["Ensure queen is laying winter bees.", "Continue feeding if light.", "Combine weak hives."],
    Oct: ["Remove queen excluders.", "Add mouse guards.", "Final winter prep (insulation, wind breaks)."],
    Nov: ["Avoid opening the hive.", "Ensure hive is strapped down.", "Clean up apiary yard."],
    Dec: ["Oxalic acid vaporization (broodless period).", "Read beekeeping books.", "Review year's notes."]
  },
  moderate: {
    Jan: ["Check food stores.", "Add supplemental feed if light.", "Build new equipment."],
    Feb: ["First thorough inspection on warm days.", "Clean bottom boards.", "Begin stimulative feeding."],
    Mar: ["Reverse brood boxes.", "Check for swarm cells.", "Add honey supers for early flows."],
    Apr: ["Intense swarm management.", "Split strong hives.", "Add additional supers."],
    May: ["Main nectar flow.", "Extract early honey.", "Monitor super space."],
    Jun: ["Extract honey.", "Perform varroa mite wash.", "Monitor for summer dearth."],
    Jul: ["Treat for mites if threshold met.", "Feed if in severe dearth.", "Reduce entrances to prevent robbing."],
    Aug: ["Final honey harvest.", "Assess colony strength for winter.", "Feed 2:1 syrup."],
    Sep: ["Ensure winter stores are adequate.", "Combine weak colonies.", "Install mouse guards."],
    Oct: ["Final winter preparations.", "Ensure adequate ventilation.", "Remove queen excluders."],
    Nov: ["Monitor hive weight.", "Clean and store extracted equipment.", "Attend local bee club meetings."],
    Dec: ["Oxalic acid treatment if required.", "Order supplies for next year.", "Review apiary records."]
  },
  warm: {
    Jan: ["Inspect for disease.", "Check food stores.", "Feed if needed."],
    Feb: ["Swarm season begins.", "Split strong hives.", "Add honey supers."],
    Mar: ["Main nectar flow.", "Intensive swarm prevention.", "Monitor honey production."],
    Apr: ["Extract spring honey.", "Check mite levels.", "Add more supers for next flow."],
    May: ["Continue harvesting.", "Monitor for robbing.", "Ensure adequate water supply."],
    Jun: ["Summer dearth begins.", "Reduce entrances.", "Feed if necessary."],
    Jul: ["Monitor mite levels.", "Treat for mites.", "Maintain water sources."],
    Aug: ["Prepare for fall flow.", "Check queen health.", "Feed if needed."],
    Sep: ["Fall nectar flow.", "Add supers if flow is strong.", "Monitor mite levels."],
    Oct: ["Harvest fall honey.", "Assess winter stores.", "Feed 2:1 syrup if light."],
    Nov: ["Combine weak hives.", "Final inspections.", "Ensure pest protection."],
    Dec: ["Equipment maintenance.", "Order new bees/queens.", "Plan next year's apiary layout."]
  }
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function SeasonChecklist() {
  const [climate, setClimate] = useState('moderate');
  const [month, setMonth] = useState(MONTHS[new Date().getMonth()]);

  const currentTasks = TASKS[climate][month] || [];
  
  const currentMonthIdx = MONTHS.indexOf(month);
  const nextMonthIdx = currentMonthIdx === 11 ? 0 : currentMonthIdx + 1;
  const nextMonth = MONTHS[nextMonthIdx];
  const nextTasks = TASKS[climate][nextMonth] || [];

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-sm mb-8 bg-white border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6 md:col-span-1 border-r border-slate-100 md:pr-8">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Region Climate</label>
            <select value={climate} onChange={(e) => setClimate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              <option value="cold">Cold Winter (Zone 3-5)</option>
              <option value="moderate">Moderate (Zone 6-8)</option>
              <option value="warm">Warm/No Winter (Zone 9+)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Current Month</label>
            <select value={month} onChange={(e) => setMonth(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              {MONTHS.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="font-bold text-slate-900 text-xl border-b border-slate-200 pb-2 mb-4 flex items-center gap-2">
              <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-sm">{month}</span>
              Priority Action Checklist
            </h3>
            <ul className="space-y-3">
              {currentTasks.map((task, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-amber-600 rounded border-slate-300 focus:ring-amber-500 cursor-pointer" />
                  <span className="text-slate-700">{task}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-semibold text-slate-600 text-sm mb-2 uppercase tracking-wide">Looking ahead to {nextMonth}:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-500">
              {nextTasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
