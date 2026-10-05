import { useState, useEffect } from 'react';
import { 
  GitFork, 
  Star, 
  ExternalLink, 
  GitCommit, 
  Code2, 
  Sparkles, 
  Terminal, 
  ArrowUpRight,
  FolderGit2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { githubShowcase, personalInfo } from '../data/portfolioData';

export default function GitHub() {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Try fetching public GitHub stats gracefully with fallback
  useEffect(() => {
    async function fetchGithubUser() {
      try {
        const res = await fetch(`https://api.github.com/users/${githubShowcase.username}`);
        if (res.ok) {
          const data = await res.json();
          setGithubData(data);
        }
      } catch (err) {
        console.log('Using offline GitHub fallback stats');
      } finally {
        setLoading(false);
      }
    }

    fetchGithubUser();
  }, []);

  // Generate simulated contribution heatmap grid (52 weeks x 7 days)
  const generateContributionHeatmap = () => {
    const weeks = [];
    for (let w = 0; w < 30; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // Pseudo-random level based on index to look realistic and consistent
        const seed = (w * 7 + d * 13) % 100;
        let level = 0;
        if (seed > 85) level = 4;
        else if (seed > 65) level = 3;
        else if (seed > 40) level = 2;
        else if (seed > 20) level = 1;
        days.push({ level, day: d, week: w });
      }
      weeks.push(days);
    }
    return weeks;
  };

  const heatmap = generateContributionHeatmap();

  const getHeatmapColor = (level) => {
    switch (level) {
      case 4:
        return 'bg-emerald-400 dark:bg-emerald-400';
      case 3:
        return 'bg-emerald-500/80 dark:bg-emerald-500';
      case 2:
        return 'bg-emerald-600/50 dark:bg-emerald-600/70';
      case 1:
        return 'bg-emerald-700/30 dark:bg-emerald-800/50';
      default:
        return 'bg-slate-200 dark:bg-slate-800/60';
    }
  };

  const publicRepos = githubData?.public_repos || githubShowcase.stats.publicRepos;
  const followers = githubData?.followers !== undefined ? githubData.followers : 5;

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Open Source & Git Activity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            GitHub <span className="gradient-text">Activity & Contributions</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            Consistent code commits, version-controlled architectures, and public software repositories.
          </p>
        </div>

        {/* Profile Card & Activity Visual */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 mb-12 shadow-xl">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/70 dark:border-slate-800">
            {/* User Details */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-800 border-2 border-indigo-500/40 flex items-center justify-center text-white shadow-lg overflow-hidden shrink-0">
                {githubData?.avatar_url ? (
                  <img src={githubData.avatar_url} alt="Sarapharaj Ansari" className="w-full h-full object-cover" />
                ) : (
                  <GithubIcon className="w-8 h-8 text-indigo-400" />
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Sarapharaj Ansari
                  </h3>
                  <a
                    href={githubShowcase.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-0.5"
                  >
                    <span>@{githubShowcase.username}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {githubShowcase.bio}
                </p>
              </div>
            </div>

            {/* Profile CTA */}
            <a
              href={githubShowcase.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Follow on GitHub</span>
            </a>
          </div>

          {/* Developer Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-slate-200/70 dark:border-slate-800">
            <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Public Repositories</span>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white font-mono">{publicRepos}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Total Contributions</span>
              <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">350+ Commits</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Active Status</span>
              <span className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">Consistent</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Primary Languages</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">JS, Python, C++</span>
            </div>
          </div>

          {/* Contribution Heatmap Graphic */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5 text-indigo-500" />
                <span>Contributions in the last year</span>
              </span>

              {/* Legend */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-xs bg-slate-200 dark:bg-slate-800" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-700/40" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600/70" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400" />
                <span>More</span>
              </div>
            </div>

            {/* Heatmap Grid scrollable */}
            <div className="overflow-x-auto pb-2">
              <div className="inline-flex gap-1">
                {heatmap.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3 h-3 rounded-xs ${getHeatmapColor(day.level)} transition-all hover:scale-125 cursor-pointer`}
                        title={`Activity level: ${day.level}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Repository Highlights */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-indigo-500" />
            <span>Highlighted Repositories</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {githubShowcase.topRepos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-mono">
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${repo.language === 'JavaScript' ? 'bg-amber-400' : 'bg-blue-400'}`} />
                    <span>{repo.language}</span>
                  </span>

                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-500" />
                    <span>{repo.stars}</span>
                  </span>

                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-slate-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
