import { BentoCard } from './BentoCard';
import { portfolioData } from '../data/portfolio';

export function StackCard() {
  return (
    <BentoCard className="md:col-span-2 md:row-span-1 flex flex-col justify-between">
      <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-2 mt-3">
        {portfolioData.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-lg bg-zinc-800/80 border border-white/5 text-xs font-mono text-zinc-200 hover:border-violet-500/40 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
