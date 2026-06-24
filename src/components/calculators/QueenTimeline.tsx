import { useState } from 'react';

export function QueenTimeline() {
  const [eventDate, setEventDate] = useState(new Date().toISOString().split('T')[0]);
  const [eventType, setEventType] = useState('egg');

  // Days offset from Egg Laid (Day 0)
  const offset = eventType === 'egg' ? 0 : eventType === 'graft' ? 4 : 4; 

  const addDays = (baseDateStr: string, days: number) => {
    if (!baseDateStr) return null;
    const date = new Date(baseDateStr);
    // Subtract offset so all calculations are relative to Day 0
    date.setDate(date.getDate() + days - offset);
    return date;
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '---';
    return date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-sm mb-8 bg-white border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Starting Event</label>
            <select value={eventType} onChange={(e) => setEventType(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white">
              <option value="egg">Egg Laid (Day 0)</option>
              <option value="graft">Grafting Date (Day 4)</option>
              <option value="split">Hive Split / Queenless (Day 4)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Event Date</label>
            <input 
              type="date" 
              value={eventDate} 
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px] bg-white"
            />
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-start space-y-4">
          <h3 className="font-bold text-slate-900 border-b border-slate-200 pb-2">Development Milestones</h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Cell Capped (Day 8):</span>
              <span className="font-semibold text-slate-900">{formatDate(addDays(eventDate, 8))}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Queen Emerges (Day 16):</span>
              <span className="font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">{formatDate(addDays(eventDate, 16))}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Mating Flights (Day 20-24):</span>
              <span className="font-semibold text-slate-900">{formatDate(addDays(eventDate, 20))} - {formatDate(addDays(eventDate, 24))}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Starts Laying (Day 28+):</span>
              <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{formatDate(addDays(eventDate, 28))}</span>
            </div>
          </div>

          <div className="mt-4 bg-red-50 text-red-800 p-3 rounded-lg border border-red-100 text-xs leading-relaxed">
            <strong>Warning: Do Not Disturb</strong><br/>
            Avoid opening the hive between <strong>{formatDate(addDays(eventDate, 14))}</strong> and <strong>{formatDate(addDays(eventDate, 25))}</strong> to prevent the colony from killing the virgin queen or interrupting mating.
          </div>
        </div>
      </div>
    </div>
  );
}
