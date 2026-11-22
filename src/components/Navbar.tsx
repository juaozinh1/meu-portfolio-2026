import { Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { portfolioData } from '../data/portfolio';

const navLinks = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#stack', label: 'Stack' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar() {
  const { profile } = portfolioData;

  return (
    <header className="sticky top-0 z-40 bg-cal border-b border-tinta/15">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-6">
        <a href="#top" className="display text-lg text-tinta hover:text-accent transition-colors">
          João Vitor
        </a>

        <nav aria-label="Navegação principal" className="flex items-center gap-4 sm:gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent hover:underline">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
        <ThemeToggle />
        <a
          href={profile.cvUrl}
          download="CV.pdf"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-tinta px-4 py-2 text-sm font-semibold text-cal hover:bg-azul hover:text-papel transition-colors"
        >
          <Download className="w-4 h-4" aria-hidden />
          Baixar CV
        </a>
        </div>
      </div>
    </header>
  );
}
