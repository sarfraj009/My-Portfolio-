import { useState } from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Code2, 
  BrainCircuit, 
  Wrench, 
  Sparkles, 
  Search,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    frontend: Layout,
    backend: Server,
    database: Database,
    programming: Code2,
    aiml: BrainCircuit,
    tools: Wrench,
  };

  const filteredCategories = skillCategories.filter((category) => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) {
      return false;
    }

    if (searchQuery.trim() === '') {
      return true;
    }

    const query = searchQuery.toLowerCase();
    const hasCategoryMatch = category.title.toLowerCase().includes(query);
    const hasSkillMatch = category.skills.some((s) => s.name.toLowerCase().includes(query));

    return hasCategoryMatch || hasSkillMatch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Competence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            A comprehensive overview of frameworks, languages, databases, and machine learning tools I utilize to craft modern software.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto p-1.5 rounded-2xl bg-slate-200/60 dark:bg-slate-900/60 border border-slate-300/80 dark:border-slate-800">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300/80 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers;

            // Highlight skills matching search query
            const displayedSkills = searchQuery.trim() === ''
              ? category.skills
              : category.skills.filter(s => 
                  s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  category.title.toLowerCase().includes(searchQuery.toLowerCase())
                );

            if (displayedSkills.length === 0) return null;

            return (
              <div
                key={category.id}
                className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group hover:border-indigo-500/50 transition-all"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {displayedSkills.length} core competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-2">
                    {displayedSkills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-500/60 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/15 transition-all cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover/pill:text-indigo-600 dark:group-hover/pill:text-indigo-400">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 font-medium">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer indicator */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Actively Practiced</span>
                  </span>
                  <span className="font-mono text-[10px] text-indigo-500">Verified Stack</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Note (avoiding fake percentages as requested) */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono"></p>
        </div>
      </div>
    </section>
  );
}
