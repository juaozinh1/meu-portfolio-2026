import { useState } from 'react';
import { Check, Copy, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { profile } = portfolioData;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contato" aria-labelledby="contato-heading" className="scroll-mt-20 bg-noite text-papel dark:bg-azul">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h2 id="contato-heading" className="display text-5xl md:text-7xl">
          Vamos conversar
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="mt-10 block break-all display text-[clamp(1.5rem,4.6vw,3.75rem)] text-sol hover:underline decoration-4"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full bg-sol px-5 py-3 text-sm font-semibold text-noite hover:bg-papel transition-colors"
          >
            {copied ? <Check className="w-4 h-4" aria-hidden /> : <Copy className="w-4 h-4" aria-hidden />}
            {copied ? 'E-mail copiado' : 'Copiar e-mail'}
          </button>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-papel/40 hover:text-sol">
            <Github className="w-4 h-4" aria-hidden />
            GitHub
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-papel/40 hover:text-sol">
            <Linkedin className="w-4 h-4" aria-hidden />
            LinkedIn
          </a>
        </div>

        <p className="mt-16 text-sm text-papel/70">
          © {new Date().getFullYear()} {profile.name}. {profile.location}.
        </p>
      </div>
    </section>
  );
}
