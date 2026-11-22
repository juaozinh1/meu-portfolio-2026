import { useState } from 'react';
import { Check, Copy, Download, Github, Linkedin, MapPin, Terminal } from 'lucide-react';
import { BentoCard } from './BentoCard';
import { portfolioData } from '../data/portfolio';

export function AboutSection() {
  const [copied, setCopied] = useState(false);
  const { profile, currentlyBuilding, experience } = portfolioData;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="sobre" aria-labelledby="sobre-heading" className="scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/15 border border-white/15">
        {/* Bloco Principal: Identidade + Bio + Ações */}
        <BentoCard className="lg:col-span-7 flex flex-col justify-between gap-10">
          <div>
            <h1
              id="sobre-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.02] text-white"
            >
              {profile.name}
            </h1>
            <p className="mt-3 font-mono text-sm sm:text-base text-violet-300">
              {profile.role}
            </p>
            <p className="mt-6 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-[60ch]">
              {profile.bio}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={profile.cvUrl}
              download="CV.pdf"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-100 hover:bg-violet-400 text-zinc-950 text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Baixar CV
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/15 hover:border-white/40 bg-transparent hover:bg-white/[0.04] text-zinc-100 text-xs font-mono uppercase tracking-wider transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/15 hover:border-white/40 bg-transparent hover:bg-white/[0.04] text-zinc-100 text-xs font-mono uppercase tracking-wider transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/15 hover:border-violet-400/60 bg-transparent hover:bg-violet-500/10 text-zinc-200 text-xs font-mono uppercase tracking-wider transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  Copiar e-mail
                </>
              )}
            </button>
          </div>
        </BentoCard>

        {/* Coluna Lateral: Status + Foco Atual */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-px bg-white/15">
          <BentoCard className="flex flex-col justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 bg-emerald-400 shrink-0" />
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-300">
                {profile.availability}
              </span>
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                {profile.location}
              </p>
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mt-1.5">
                {profile.workMode}
              </p>
            </div>
          </BentoCard>

          <BentoCard className="flex flex-col justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-300">
              <Terminal className="w-3.5 h-3.5 shrink-0" />
              <span>Construindo agora</span>
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">
                {currentlyBuilding.title}
              </h2>
              <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">
                {currentlyBuilding.detail}
              </p>
            </div>
          </BentoCard>
        </div>

        {/* Trajetória: Grade horizontal de 3 colunas sem cantos arredondados */}
        <div className="lg:col-span-12 bg-[#0c0c0e] p-6 md:p-8">
          <div className="flex items-baseline justify-between gap-4 pb-5 border-b border-white/10">
            <h2 className="text-lg font-semibold tracking-tight text-white">
              Trajetória
            </h2>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Formação & Prática
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {experience.map((item, idx) => (
              <div
                key={item.role}
                className={`py-5 md:py-0 md:pt-5 flex flex-col justify-between gap-3 ${
                  idx === 0
                    ? 'md:pr-6'
                    : idx === 1
                    ? 'md:px-6'
                    : 'md:pl-6'
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-sm font-semibold text-zinc-100">
                      {item.role}
                    </h3>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-violet-300 tabular-nums shrink-0">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-zinc-500 mt-1">
                    {item.place}
                  </p>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
