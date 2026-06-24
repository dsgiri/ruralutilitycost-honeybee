import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { TOOLS } from '../data/tools';
import { Disclaimer } from '../components/Disclaimer';
import { cn } from '../lib/utils';
import * as Icons from 'lucide-react';
import { HoneyEstimator } from '../components/calculators/HoneyEstimator';
import { HiveCostCalculator } from '../components/calculators/HiveCostCalculator';
import { SwarmPlanner } from '../components/calculators/SwarmPlanner';
import { QueenTimeline } from '../components/calculators/QueenTimeline';
import { SyrupMixer } from '../components/calculators/SyrupMixer';
import { ApiarySetup } from '../components/calculators/ApiarySetup';
import { HarvestYield } from '../components/calculators/HarvestYield';
import { SeasonChecklist } from '../components/calculators/SeasonChecklist';

export function ToolDetail() {
  const { toolId } = useParams();
  const tool = TOOLS.find(t => t.id === toolId);

  if (!tool) {
    return <Navigate to="/404" replace />;
  }

  const IconComponent = (Icons as any)[tool.icon] || Icons.Wrench;

  let pillColors = 'text-amber-600 bg-amber-50';
  if (tool.category.includes('feed')) pillColors = 'text-blue-600 bg-blue-50';
  if (tool.category.includes('swarm')) pillColors = 'text-emerald-600 bg-emerald-50';
  if (tool.category.includes('cost')) pillColors = 'text-purple-600 bg-purple-50';
  if (tool.category.includes('queen')) pillColors = 'text-pink-600 bg-pink-50';
  if (tool.category.includes('harvest')) pillColors = 'text-orange-600 bg-orange-50';
  if (tool.category.includes('season')) pillColors = 'text-teal-600 bg-teal-50';

  return (
    <div className="bg-transparent min-h-screen pb-16 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Hub
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
          <div>
            <span className={cn("text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md inline-flex items-center gap-1 mb-3", pillColors)}>
              {tool.category.replace('-', ' ')}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              {tool.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {tool.description}
            </p>
          </div>
          
          <div className="shrink-0 p-4 bg-white rounded-2xl shadow-sm border border-slate-200 hidden sm:block">
            <IconComponent className={cn("w-10 h-10", pillColors.split(' ')[0])} />
          </div>
        </div>

        {/* Calculator Interface Placeholder */}
        {(() => {
          switch (tool.id) {
            case 't-honey-estimator':
              return <HoneyEstimator />;
            case 't-hive-cost':
              return <HiveCostCalculator />;
            case 't-swarm-planner':
              return <SwarmPlanner />;
            case 't-queen-timeline':
              return <QueenTimeline />;
            case 't-syrup-mixer':
              return <SyrupMixer />;
            case 't-apiary-setup':
              return <ApiarySetup />;
            case 't-harvest-yield':
              return <HarvestYield />;
            case 't-season-checklist':
              return <SeasonChecklist />;
            default:
              return (
                <div className="glass-card rounded-2xl p-8 sm:p-12 shadow-sm mb-8 min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-slate-300 bg-white/50">
                  <IconComponent className="w-16 h-16 text-slate-200 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-700 mb-2">Calculator Interface</h3>
                  <p className="text-slate-500 text-center max-w-md">
                    The interactive calculator interface for <strong>{tool.title}</strong> will be implemented here. It will accept user inputs and display the <em>{tool.primaryOutcome}</em>.
                  </p>
                </div>
              );
          }
        })()}

        {/* Unified Tool Disclaimer */}
        <Disclaimer type="inline" />
      </div>
    </div>
  );
}
