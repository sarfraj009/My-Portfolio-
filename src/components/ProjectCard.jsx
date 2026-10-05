import { ExternalLink, Info, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { getProjectPreview } from './ProjectPreviews';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group hover:border-indigo-500/50 transition-all duration-300">
      
      {/* Top Preview Image Container */}
      <div className="relative overflow-hidden cursor-pointer" onClick={() => onSelect(project)}>
        {getProjectPreview(project.id)}
        
        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-indigo-600/90 backdrop-blur-md shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <span>View Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Badge & Category */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              {project.badge}
            </span>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              {project.category === 'mern' ? 'MERN Stack' : 'AI / Machine Learning'}
            </span>
          </div>

          {/* Project Title */}
          <h3 
            onClick={() => onSelect(project)}
            className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer flex items-center justify-between"
          >
            <span>{project.name}</span>
          </h3>

          {/* Tagline */}
          <p className="mt-1 text-xs font-medium text-indigo-600 dark:text-indigo-400/90 line-clamp-1">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech, i) => (
              <span 
                key={i}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-slate-800/70 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="View Source on GitHub"
              aria-label={`${project.name} GitHub Repository`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Live Demo"
              aria-label={`${project.name} Live Demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-white hover:bg-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 transition-all cursor-pointer"
          >
            <Info className="w-3.5 h-3.5" />
            <span>View Details</span>
          </button>
        </div>

      </div>

    </div>
  );
}
