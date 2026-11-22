import { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { BentoCard } from './BentoCard';
import { portfolioData, Project } from '../data/portfolio';

type FilterOption = 'Todos' | Project['category'];

const filters: FilterOption[] = ['Todos', 'Full-Stack', 'Back-end'];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('Todos');
  const { projects } = portfolioData;

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projetos" aria-labelledby="projetos-heading" className="scroll-mt-20">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2
            id="projetos-heading"
            className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-white"
          >
            Projetos
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-zinc-400 max-w-[65ch]">
            Sistemas selecionados com foco em regras de negócio, modelagem de dados e entrega prática.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Filtrar projetos por categoria"
          className="inline-flex items-center divide-x divide-white/15 border border-white/15 bg-[#0c0c0e] self-start sm:self-auto"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/15 border border-white/15">
        {filteredProjects.map((project) => {
          const isFeatured = project.featured && activeFilter === 'Todos';
          const spanClass = isFeatured ? 'md:col-span-12' : 'md:col-span-6';

          return (
            <BentoCard
              key={project.id}
              className={`${spanClass} flex flex-col justify-between gap-6 group`}
            >
              <div className={isFeatured ? 'grid grid-cols-1 lg:grid-cols-12 gap-6' : ''}>
                <div className={isFeatured ? 'lg:col-span-7' : ''}>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider">
                    <span className="text-violet-300">{project.category}</span>
                    <span className="text-zinc-600">/</span>
                    <span className="text-zinc-400">{project.status}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-2 text-white group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-300 mt-3 leading-relaxed max-w-[65ch]">
                    {project.description}
                  </p>
                </div>

                {project.highlights.length > 0 && (
                  <ul
                    className={`space-y-2.5 text-sm text-zinc-400 ${
                      isFeatured
                        ? 'lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-6 flex flex-col justify-center'
                        : 'mt-5 pt-4 border-t border-white/10'
                    }`}
                  >
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 bg-violet-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <ul className="flex flex-wrap gap-1.5" aria-label={`Tecnologias de ${project.title}`}>
                  {project.techs.map((tech) => (
                    <li
                      key={tech}
                      className="px-2 py-0.5 bg-[#09090b] border border-white/10 text-[11px] font-mono text-zinc-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider shrink-0">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-violet-300 underline decoration-white/25 hover:decoration-violet-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Código
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-200 hover:text-violet-300 underline decoration-white/25 hover:decoration-violet-400 transition-colors"
                    >
                      Demo
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </BentoCard>
          );
        })}
      </div>
    </section>
  );
}
