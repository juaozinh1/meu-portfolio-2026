import { portfolioData } from '../data/portfolio';

export function Journey() {
  const { experience } = portfolioData;

  return (
    <section id="trajetoria" aria-labelledby="trajetoria-heading" className="scroll-mt-20">
      <h2 id="trajetoria-heading" className="display text-5xl md:text-7xl">Trajetória</h2>

      <div className="mt-10 md:mt-14">
        {experience.map((item) => (
          <div key={item.role} className="grid md:grid-cols-12 gap-3 md:gap-12 border-t-2 border-tinta py-8">
            <p className="md:col-span-3 display text-xl text-accent">{item.period}</p>
            <div className="md:col-span-9">
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className="mt-1 text-sm text-tinta/70">{item.place}</p>
              <p className="mt-3 max-w-[62ch] text-lg leading-relaxed">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
