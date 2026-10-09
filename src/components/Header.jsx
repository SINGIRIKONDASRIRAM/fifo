import { Cpu, Menu, Moon, RotateCcw, Sun } from 'lucide-react';
import { useSimulation } from '../context/SimulationContext';
import { ALGORITHMS } from '../lib/algorithms';

export default function Header({ theme, onToggleTheme, onOpenMenu }) {
  const { config, resetAll } = useSimulation();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-ink/75">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
        <button type="button" onClick={onOpenMenu} className="btn-icon lg:hidden" aria-label="Open navigation">
          <Menu size={18} />
        </button>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 via-green-600 to-teal-400 text-white shadow-lg shadow-emerald-600/30">
          <Cpu size={20} />
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-lg font-semibold leading-tight tracking-tight text-slate-900 dark:text-white">OS Memory Lab</h1>
          <p className="muted hidden truncate text-xs sm:block">Interactive Page Replacement Simulator</p>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-700 dark:text-teal-300"
            title="Algorithm currently used by the simulator"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            {config.algorithm ? ALGORITHMS[config.algorithm].name : 'No algorithm'}
          </span>
          <button
            type="button"
            onClick={onToggleTheme}
            className="btn-icon"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button type="button" onClick={resetAll} className="btn-secondary !px-3 sm:!px-4" title="Clear all entered data">
            <RotateCcw size={16} />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>
    </header>
  );
}
