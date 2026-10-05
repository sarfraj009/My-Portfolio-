import { 
  GraduationCap, 
  Code2, 
  BrainCircuit, 
  GitBranch, 
  Calendar, 
  CheckCircle2,
  Milestone,
  Sparkles
} from 'lucide-react';
import { journeyTimeline } from '../data/portfolioData';

export default function Experience() {
  const iconMap = {
    GraduationCap: GraduationCap,
    Code2: Code2,
    Brain: BrainCircuit,
    GitBranch: GitBranch,
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Developer Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & <span className="gradient-text">Engineering Journey</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            An authentic roadmap of academic rigor, intensive full stack project development, and open-source contributions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central timeline line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30 dark:opacity-40" />

          <div className="space-y-12">
            {journeyTimeline.map((item, idx) => {
              const Icon = iconMap[item.icon] || Code2;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 z-10 shadow-lg shadow-indigo-500/20 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Empty Spacer on opposite side for desktop layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-6">
                    <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 group-hover:border-indigo-500/50 transition-all">
                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{item.period}</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5 mb-3">
                        {item.institution}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                        {item.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Commitment Badge */}
      </div>
    </section>
  );
}
