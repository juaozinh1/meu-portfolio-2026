import { BentoCard } from './BentoCard';
import { portfolioData } from '../data/portfolio';

export function StackSection() {
  const { skillGroups } = portfolioData;

  return (
    <section id="stack" aria-labelledby="stack-heading" className="scroll-mt-20">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div>
          <h2
            id="stack-heading"
            className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-white"
          >
            Stack de habilidades
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-zinc-400 max-w-[65ch]">
            Tecnologias usadas para projetar APIs, bancos de dados, interfaces e sistemas de automação.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/15 border border-white/15">
        {skillGroups.map((group, index) => {
          const spanClass =
            index === 0 || index === 3 ? 'md:col-span-7' : 'md:col-span-5';

          return (
            <BentoCard
              key={group.id}
              className={`${spanClass} flex flex-col justify-between gap-6`}
            >
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {group.title}
                </h3>
                <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">
                  {group.summary}
                </p>
              </div>

              <ul className="flex flex-wrap gap-1.5" aria-label={group.title}>
                {group.items.map((tech) => (
                  <li
                    key={tech}
                    className={`px-2.5 py-1 text-xs font-mono border transition-colors ${
                      group.emphasis === 'primary'
                        ? 'bg-violet-500/15 border-violet-400/35 text-violet-200'
                        : 'bg-[#09090b] border-white/10 text-zinc-200 hover:border-white/30'
                    }`}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </BentoCard>
          );
        })}
      </div>
    </section>
  );
}
