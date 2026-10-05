import { GraduationCap,MapPin,Calendar,BookOpen,Award,CheckCircle2,Code} from 'lucide-react';
import { educationDetails } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Formal <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            Solid foundations in computer science theories, algorithms, and software engineering principles.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xl relative overflow-hidden">
            
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Degree & Institution */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    {educationDetails.status}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{educationDetails.duration}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {educationDetails.degree}
                  </h3>
                  <div className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                    {educationDetails.field}
                  </div>
                </div>

                <div className="space-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <div className="font-semibold text-slate-800 dark:text-slate-200 text-base">
                    {educationDetails.institution}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{educationDetails.location}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Key Highlights
                  </h4>
                  {educationDetails.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Relevant Coursework */}
              <div className="lg:col-span-5 bg-slate-100/60 dark:bg-slate-950/60 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-4">
                  <BookOpen className="w-4 h-4 text-indigo-500" />
                  <span>Key Coursework</span>
                </div>

                <div className="flex flex-col gap-2">
                  {educationDetails.relevantCourses.map((course, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 text-center">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Graduation Expected: June 2027
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
