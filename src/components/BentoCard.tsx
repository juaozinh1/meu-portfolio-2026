import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

export function BentoCard({ children, className = '' }: BentoCardProps) {
  return (
    <div
      className={`bg-[#0c0c0e] p-6 md:p-8 transition-colors duration-150 hover:bg-[#111115] ${className}`}
    >
      {children}
    </div>
  );
}
