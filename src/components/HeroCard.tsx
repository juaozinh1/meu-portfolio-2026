import { Download, Github } from 'lucide-react';
import { BentoCard } from './BentoCard';
import { portfolioData } from '../data/portfolio';

export function HeroCard() {
  const { profile } = portfolioData;

  return (
    <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
      <div>
        <span className="inline-block text-xs font-mono text-violet-400 uppercase tracking-wider bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
          {profile.role}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight text-white">
          {profile.name}
        </h1>
        <p className="text-zinc-400 mt-3 text-sm md:text-base leading-relaxed max-w-md">
          {profile.bio}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        <a
          href={profile.cvUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
        >
          <Download className="w-4 h-4" />
          Baixar CV
        </a>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-sm font-medium transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>
    </BentoCard>
  );
}
