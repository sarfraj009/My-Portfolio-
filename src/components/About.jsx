import {
  GraduationCap,
  Code2,
  BrainCircuit,
  Sparkles,
  CheckCircle,
  Rocket,
  Compass,
  Layers, Award, BookOpen
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      title: "Full Stack Web Engineering",
      description: "Building responsive, modern architectures using React, Next.js, Node.js, Express, and MongoDB with secure JWT auth & payment integrations.",
      icon: Code2,
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "AI & Machine Learning Focus",
      description: "Developing intelligent computer vision and NLP solutions using Python, OpenCV, Scikit-learn, and integrating external AI LLM APIs.",
      icon: BrainCircuit,
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Real-World Problem Solving",
      description: "Creating tangible utility applications like Eventora (QR ticket booking) and RealState platform with secure transaction workflows.",
      icon: Rocket,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Continuous Engineering Growth",
      description: "Pursuing B.Tech in CSE at BIET Lucknow (graduating 2027) with continuous active learning in Data Structures, Algorithms, and System Design.",
      icon: GraduationCap,
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Driven by curiosity, powered by <span className="gradient-text">code & algorithms</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            A developer who bridges solid Computer Science foundations with modern web frameworks and applied machine learning.
          </p>
        </div>

        {/* Top Stats Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl flex flex-col items-center text-center border border-slate-200/80 dark:border-slate-800/80"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono tracking-tight">
                {item.value}
              </span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                {item.label}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {item.description}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content Grid: Narrative & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3">
                <BookOpen className="w-4 h-4" />
                <span>My Background</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Engineering Practical Solutions From First Principles
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a passionate <strong className="text-slate-900 dark:text-white">Computer Science & Engineering student</strong> at <strong className="text-indigo-600 dark:text-indigo-400">Bansal Institute of Engineering & Technology, Lucknow</strong> (Class of 2027). My journey began with an inquisitive drive to understand how complex software systems operate behind the scenes.
                </p>
                <p>
                  Specializing in the <strong className="text-slate-900 dark:text-white">MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong>, I have engineered full-lifecycle applications featuring secure token authentication (JWT), media uploads via Cloudinary, and payment processing through Razorpay.
                </p>
                <p>
                  Simultaneously, I actively investigate <strong className="text-slate-900 dark:text-white">Machine Learning and Computer Vision</strong> using Python, Scikit-learn, and OpenCV—building real-time models for driver safety, text classification, and predictive valuation.
                </p>
              </div>
            </div>

            {/* Quote / Philosophy Badge */}
            <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-slate-800/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm italic text-slate-600 dark:text-slate-400 font-medium">
                  "I believe great software isn't just about syntax—it's about empathy for the user, resilient architecture, and solving real human problems."
                </p>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 block">
                  — Sarapharaj Ansari
                </span>
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group hover:border-indigo-500/50 transition-all"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.gradient} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center text-xs text-indigo-600 dark:text-indigo-400 font-semibold gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Applied In Projects</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
