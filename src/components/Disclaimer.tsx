import { AlertTriangle } from 'lucide-react';
import { cn } from '../lib/utils';

interface DisclaimerProps {
  type?: 'inline' | 'footer' | 'full';
  overrideText?: string;
  className?: string;
}

const DEFAULT_DISCLAIMER = "Disclaimer: These figures are estimates based on standard assumptions and user inputs. This tool is for informational purposes only and does not replace professional financial, legal, engineering, or agricultural advice. We disclaim all liability for decisions, costs, losses, or damages arising from reliance on these results. Please consult qualified local professionals or certified advisors for guidance specific to your situation.";

const SHORT_DISCLAIMER = "Estimates are for planning purposes only and do not replace professional advice. Verify independently.";

export function Disclaimer({ type = 'inline', overrideText, className }: DisclaimerProps) {
  if (type === 'footer') {
    return (
      <div className={cn("text-[10px] md:text-[11px] text-slate-400 leading-relaxed", className)}>
        {overrideText || SHORT_DISCLAIMER} <a href="https://ruralutilitycost.com/disclaimer" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600 whitespace-nowrap">Read full disclaimer.</a>
      </div>
    );
  }

  if (type === 'inline') {
    return (
      <div className={cn("bg-amber-50/80 backdrop-blur-sm border border-amber-200/60 rounded-xl p-4 sm:p-5 flex items-start gap-4 text-amber-900 shadow-sm transition-all", className)}>
        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" aria-hidden="true" />
        <p className="text-xs sm:text-sm leading-relaxed font-medium">
          {overrideText || DEFAULT_DISCLAIMER} <a href="https://ruralutilitycost.com/disclaimer" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-800 ml-1">Read full disclaimer.</a>
        </p>
      </div>
    );
  }

  // 'full' type for legal/disclaimer page
  return (
    <div className={cn("bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm", className)}>
      <div className="flex items-center gap-4 mb-5 border-b border-slate-100 pb-5">
        <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl text-amber-600">
          <AlertTriangle className="w-6 h-6" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Master Ecosystem Disclaimer</h2>
          <p className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-1">Application-wide Legal Notice</p>
        </div>
      </div>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
        {overrideText || DEFAULT_DISCLAIMER}
      </p>
    </div>
  );
}
