import { ArrowUpRight, Github } from 'lucide-react';
import { BentoCard } from './BentoCard';
import { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const spanClass = project.featured
    ? 'md:col-span-2 md:row-span-2'
    : 'md:col-span-1 md:row-span-2';

  return (
    <BentoCard className={`${spanClass} flex flex-col justify-between group`}>
      <div>
        <span className="text-xs font-mono text-violet-400">{project.badge}</span>
        <h3 className="text-xl font-bold mt-1.5 text-white group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-400 mt-2.5 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-md bg-zinc-800/70 border border-white/5 text-[11px] font-mono text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6 text-xs font-mono">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-violet-400 transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          Código
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-zinc-300 hover:text-violet-400 transition-colors"
          >
            Demo
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </BentoCard>
  );
}
