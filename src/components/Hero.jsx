import { useState, useEffect } from 'react';
import { ArrowDown, FileDown, Mail, CheckCircle2, Copy, Check, Code, Layers, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState('developer.js');

  const roles = personalInfo.roles;

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseDelay = isDeleting ? 200 : 2000;

    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDelay);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const codeSnippet = `const developer = {
  name: "Sarapharaj Ansari",
  college: "BIET Lucknow",
  degree: "B.Tech CSE (2023 - 2027)",
  coreStack: ["React", "Node.js", "Express", "MongoDB"],
  aiMlSkills: ["Python", "Scikit-Learn", "OpenCV", "AI APIs"],
  currentStatus: "Building high-performance web applications",
  hireable: true
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Animated Role */}
            <div className="h-10 sm:h-12 mt-3 flex items-center">
              <span className="text-xl sm:text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
                &gt; {displayText}
                <span className="animate-pulse ml-0.5">_</span>
              </span>
            </div>

            {/* Subheading & Intro */}
            <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
              {personalInfo.tagline}
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              Computer Science & Engineering student at <strong className="text-slate-800 dark:text-slate-200">Bansal Institute of Engineering & Technology, Lucknow (2027)</strong>. Passionate about architecting production-grade MERN architectures, integrating real-time AI solutions, and engineering impactful digital experiences.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('projects')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <a
                href={personalInfo.resumeUrl || '/Sarapharaj_Ansari_Resume.pdf'}
                download="Sarapharaj_Ansari_Resume.pdf"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-700/80 shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-indigo-500" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => handleScrollTo('contact')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800/60 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Trust row */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-mono text-xs uppercase tracking-wider">Connect:</span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 font-medium transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-500 font-medium transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-rose-500 font-medium transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Modern Developer Terminal Card */}
          <div className="lg:col-span-5 relative">
            {/* Outer Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-30 dark:opacity-40 animate-pulse-slow" />

            <div className="relative rounded-2xl glass-card overflow-hidden border border-slate-300/80 dark:border-slate-700/80 shadow-2xl">
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-200/80 dark:bg-slate-900/90 border-b border-slate-300/80 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">sarapharaj-dev-box</span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={copyCode}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800 transition-colors"
                    title="Copy code snippet"
                    aria-label="Copy snippet"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center border-b border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-950/50 text-xs font-mono px-2">
                <button
                  onClick={() => setActiveTab('developer.js')}
                  className={`px-3 py-2 border-b-2 font-medium transition-colors flex items-center gap-1.5 ${activeTab === 'developer.js'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-white/50 dark:bg-slate-900/50'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                    }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>developer.js</span>
                </button>
                <button
                  onClick={() => setActiveTab('stack.json')}
                  className={`px-3 py-2 border-b-2 font-medium transition-colors flex items-center gap-1.5 ${activeTab === 'stack.json'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-white/50 dark:bg-slate-900/50'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                    }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>stack.json</span>
                </button>
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`px-3 py-2 border-b-2 font-medium transition-colors flex items-center gap-1.5 ${activeTab === 'metrics'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-white/50 dark:bg-slate-900/50'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                    }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>metrics</span>
                </button>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto bg-slate-900 text-slate-200">
                {activeTab === 'developer.js' && (
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-yellow-300">developer</span> = &#123;
                    <br />
                    &nbsp;&nbsp;<span className="text-cyan-300">name</span>:{' '}
                    <span className="text-emerald-400">"{personalInfo.name}"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-cyan-300">college</span>:{' '}
                    <span className="text-emerald-400">"Bansal Inst. of Engg. & Tech"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-cyan-300">degree</span>:{' '}
                    <span className="text-emerald-400">"B.Tech CSE (2023 - 2027)"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-cyan-300">coreStack</span>: [
                    <span className="text-emerald-400">"React"</span>,{' '}
                    <span className="text-emerald-400">"Node.js"</span>,{' '}
                    <span className="text-emerald-400">"Express"</span>,{' '}
                    <span className="text-emerald-400">"MongoDB"</span>],
                    <br />
                    &nbsp;&nbsp;<span className="text-cyan-300">aiMlSkills</span>: [
                    <span className="text-emerald-400">"Python"</span>,{' '}
                    <span className="text-emerald-400">"Scikit-learn"</span>,{' '}
                    <span className="text-emerald-400">"OpenCV"</span>],
                    <br />
                    &nbsp;&nbsp;<span className="text-cyan-300">openForInternship</span>:{' '}
                    <span className="text-indigo-400">true</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-cyan-300">readyToBuild</span>:{' '}
                    <span className="text-purple-400">function</span>() &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span>{' '}
                    <span className="text-emerald-400">"Scalable & AI-powered web solutions"</span>;
                    <br />
                    &nbsp;&nbsp;&#125;
                    <br />
                    &#125;;
                  </div>
                )}

                {activeTab === 'stack.json' && (
                  <div>
                    &#123;
                    <br />
                    &nbsp;&nbsp;<span className="text-indigo-400">"frontend"</span>: [
                    <span className="text-emerald-400">"React.js"</span>,{' '}
                    <span className="text-emerald-400">"Next.js"</span>,{' '}
                    <span className="text-emerald-400">"Tailwind CSS"</span>],
                    <br />
                    &nbsp;&nbsp;<span className="text-indigo-400">"backend"</span>: [
                    <span className="text-emerald-400">"Node.js"</span>,{' '}
                    <span className="text-emerald-400">"Express.js"</span>,{' '}
                    <span className="text-emerald-400">"REST APIs"</span>],
                    <br />
                    &nbsp;&nbsp;<span className="text-indigo-400">"database"</span>: [
                    <span className="text-emerald-400">"MongoDB"</span>,{' '}
                    <span className="text-emerald-400">"MySQL"</span>],
                    <br />
                    &nbsp;&nbsp;<span className="text-indigo-400">"integrations"</span>: [
                    <span className="text-emerald-400">"Razorpay"</span>,{' '}
                    <span className="text-emerald-400">"Cloudinary"</span>,{' '}
                    <span className="text-emerald-400">"JWT"</span>],
                    <br />
                    &nbsp;&nbsp;<span className="text-indigo-400">"ai_ml"</span>: [
                    <span className="text-emerald-400">"Python"</span>,{' '}
                    <span className="text-emerald-400">"Scikit-learn"</span>,{' '}
                    <span className="text-emerald-400">"OpenCV"</span>]
                    <br />
                    &#125;
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div className="space-y-2 text-slate-300">
                    <div className="flex justify-between items-center py-1 border-b border-slate-800">
                      <span className="text-slate-400">Academic Standing:</span>
                      <span className="text-emerald-400 font-semibold">B.Tech CSE (3rd Year)</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800">
                      <span className="text-slate-400">Projects Built:</span>
                      <span className="text-indigo-400 font-semibold">10+ Verified Projects</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800">
                      <span className="text-slate-400">Architecture:</span>
                      <span className="text-cyan-400 font-semibold">MERN + AI Microservices</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-400">Status:</span>
                      <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        Available for Hiring
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer status */}
              <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </span>
                <span>UTF-8 • Node v20 LTS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
