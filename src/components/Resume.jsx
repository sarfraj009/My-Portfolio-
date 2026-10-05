import { FileText, Download, ExternalLink, CheckCircle2, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo, educationDetails } from '../data/portfolioData';

export default function Resume() {
  const resumeUrl = personalInfo.resumeUrl || '/Sarapharaj_Ansari_Resume.pdf';

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="relative rounded-3xl glass-card overflow-hidden border border-slate-200/80 dark:border-slate-800/80 p-8 sm:p-12 lg:p-16 text-center max-w-5xl mx-auto shadow-2xl">
          
          {/* Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Looking for a verified <span className="gradient-text">Resume?</span>
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Inspect my formal academic background at BIET Lucknow (CGPA: {educationDetails.cgpa}), Digi Coders Technologies summer training, MERN projects, and verified machine learning skillsets.
            </p>

            {/* Quick checkmarks */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>ATS-Friendly PDF</span>
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                <span>CGPA 7.79 / 10</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-cyan-500" />
                <span>Digi Coders Trained</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href={resumeUrl}
                download="Sarapharaj_Ansari_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 text-indigo-500" />
                <span>View in New Tab</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
