import { Download, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export function Hero() {
  const { profile } = portfolioData;
  const [first, second, third, fourth] = profile.name.split(' ');

  return (
    <section id="top" aria-labelledby="top-heading" className="scroll-mt-20 pt-10 md:pt-16">
      <div>
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-sol text-noite px-3.5 py-1.5 text-sm font-semibold">
            {profile.availability}
          </p>

          <h1
            id="top-heading"
            className="display mt-6 text-[clamp(2.5rem,9vw,7.5rem)]"
          >
            <span className="block">{first} {second}</span>
            <span className="block">{third}</span>
            <span className="block text-accent">{fourth}</span>
          </h1>

          <p className="mt-8 text-xl font-semibold">{profile.role}</p>
          <p className="mt-3 max-w-[58ch] text-lg leading-relaxed text-tinta/80">{profile.bio}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={profile.cvUrl}
              download="CV.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-azul px-5 py-3 text-sm font-semibold text-papel hover:bg-noite dark:hover:bg-papel dark:hover:text-noite transition-colors"
            >
              <Download className="w-4 h-4" aria-hidden />
              Baixar CV
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-tinta/30 hover:decoration-accent hover:text-accent">
              <Github className="w-4 h-4" aria-hidden />
              GitHub
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-tinta/30 hover:decoration-accent hover:text-accent">
              <Linkedin className="w-4 h-4" aria-hidden />
              LinkedIn
            </a>
          </div>

          <p className="mt-6 text-sm text-tinta/70">
            {profile.location}. {profile.workMode}.
          </p>
        </div>
      </div>
    </section>
  );
}
