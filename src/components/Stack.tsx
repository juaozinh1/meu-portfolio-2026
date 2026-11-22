import { portfolioData } from '../data/portfolio';

export function Stack() {
  const { skillGroups } = portfolioData;

  return (
    <section id="stack" aria-labelledby="stack-heading" className="scroll-mt-20">
      <h2 id="stack-heading" className="display text-5xl md:text-7xl">Stack</h2>

      <div className="mt-10 md:mt-14">
        {skillGroups.map((group) => (
          <div key={group.id} className="grid md:grid-cols-12 gap-4 md:gap-12 border-t-2 border-tinta py-8">
            <div className="md:col-span-4">
              <h3 className="display text-2xl md:text-3xl">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-tinta/70 max-w-[34ch]">{group.summary}</p>
            </div>
            <ul
              aria-label={group.title}
              className={`md:col-span-8 flex flex-wrap gap-x-2 gap-y-1 text-2xl md:text-3xl font-semibold tracking-tight ${
                group.emphasis === 'primary' ? 'text-accent' : 'text-tinta'
              }`}
            >
              {group.items.map((tech, i) => (
                <li key={tech} className="flex items-center gap-2">
                  {tech}
                  {i < group.items.length - 1 && (
                    <span aria-hidden className="text-sol font-black">/</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
