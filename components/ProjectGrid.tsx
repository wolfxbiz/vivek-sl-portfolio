const projects = [
  {
    id: "01",
    title: "Paperwurk",
    subtitle: "Bilingual UX Ecosystem for an Enterprise Three-Sided Platform",
    description:
      "Designed a mobile-aware onboarding wizard and progressive disclosure architecture to streamline complex business formation and legal workflows in the UAE.",
    link: "#",
    linkLabel: "Read Case Study →",
  },
  {
    id: "02",
    title: "Alya Auditors",
    subtitle: "High-Conversion Lead Generation & CRO Funnel",
    description:
      "Engineered frictionless landing page architectures, trust frameworks, and energetic visual marketing assets optimized specifically to capture corporate financial leads.",
    link: "#",
    linkLabel: "Read Case Study →",
  },
  {
    id: "03",
    title: "4BC Global",
    subtitle: "Corporate Redesign & Brand Architecture",
    description:
      "Modernized the digital presence and data presentation layer for a market research firm, establishing a modular design system and custom identity assets.",
    link: "#",
    linkLabel: "Read Case Study →",
  },
];

export default function ProjectGrid() {
  return (
    <section className="px-8 py-24 border-t border-white/5">
      <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-16">
        Selected Work
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
        {projects.map((p) => (
          <article
            key={p.id}
            className="bg-black p-8 flex flex-col gap-6 group hover:bg-white/[0.02] transition-colors duration-500"
          >
            <div className="w-full aspect-[4/3] bg-white/[0.03] border border-white/5 rounded-sm" />
            <div className="flex flex-col gap-3 flex-1">
              <span className="text-white/20 text-xs tracking-widest">{p.id}</span>
              <h2 className="text-white text-xl tracking-tight">{p.title}</h2>
              <p className="text-white/40 text-xs tracking-wider uppercase leading-relaxed">
                {p.subtitle}
              </p>
              <p className="text-white/30 text-sm leading-relaxed flex-1">
                {p.description}
              </p>
              <a
                href={p.link}
                className="text-white/50 text-xs tracking-wider hover:text-white transition-colors duration-300 mt-2 inline-block"
              >
                {p.linkLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
