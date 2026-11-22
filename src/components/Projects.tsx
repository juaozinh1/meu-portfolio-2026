import { ArrowUpRight, Github } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolio';

const linkCls = 'inline-flex items-center gap-1.5 text-sm font-semibold underline';

function ProjectRow({ project }: { project: Project }) {
  const [name, subtitle] = project.title.split(' — ');
  const featured = project.featured;

  const wrap = featured
    ? 'bg-azul text-papel rounded-[2rem] p-7 md:p-12'
    : 'border-t-2 border-tinta py-9 md:py-12 px-1';

  return (
    <article className={`${wrap} grid md:grid-cols-12 gap-8 md:gap-12`}>
      <div className="md:col-span-5">
        <p
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
            featured ? 'bg-sol text-noite' : 'border border-tinta/40'
          }`}
        >
          {project.status}
        </p>
        <h3 className="display mt-4 text-4xl md:text-5xl">{name}</h3>
        {subtitle && (
          <p className={`mt-3 text-lg font-medium ${featured ? 'text-papel/85' : 'text-tinta/70'}`}>
            {subtitle}
          </p>
        )}
      </div>

      <div className="md:col-span-7">
        <p className="max-w-[62ch] text-lg leading-relaxed">{project.description}</p>

        <ul className={`mt-6 divide-y ${featured ? 'divide-papel/25 border-y border-papel/25' : 'divide-tinta/15 border-y border-tinta/15'}`}>
          {project.highlights.map((item) => (
            <li key={item} className="py-3 text-base">{item}</li>
          ))}
        </ul>

        <p className={`mt-5 text-sm ${featured ? 'text-papel/85' : 'text-tinta/70'}`}>
          {project.techs.join(', ')}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-6">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className={`${linkCls} ${featured ? 'decoration-papel/50 hover:text-sol' : 'decoration-tinta/30 hover:text-accent'}`}
          >
            <Github className="w-4 h-4" aria-hidden />
            Ver código
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className={`${linkCls} ${featured ? 'decoration-papel/50 hover:text-sol' : 'decoration-tinta/30 hover:text-accent'}`}
            >
              Ver demo
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { projects } = portfolioData;
  const ordered = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
    <section id="projetos" aria-labelledby="projetos-heading" className="scroll-mt-20">
      <h2 id="projetos-heading" className="display text-5xl md:text-7xl">Projetos</h2>
      <div className="mt-10 md:mt-14 space-y-4">
        {ordered.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
