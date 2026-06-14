import Link from "next/link";

const disciplines = [
  {
    num: "01",
    title: "Code-First Design",
    desc: "Static mockups don't survive contact with real viewports. Layout decisions — spacing, image behaviour, touch targets — are resolved in live code, not desktop simulations. No fidelity is lost in handoff because there is no handoff.",
    tag: "Across all projects",
    href: null,
  },
  {
    num: "02",
    title: "Full-Stack Execution",
    desc: "Design through to production deployment using AI tooling — Claude Code, Cursor. Not just Figma files handed to an engineer. The same person who drew the wireframe directed, reviewed, and shipped the build. No handoff gap means no fidelity loss.",
    tag: "4BC Global · Alya · Insure First · Turquoic",
    href: null,
  },
  {
    num: "03",
    title: "UX Architecture at Scale",
    desc: "On Paperwurk, 110+ screen UX architecture was designed across 14 personas — four workspace types, a scoped data model, and 12 end-to-end flows specified before a single line of application code. Design intent baked into the system from day one.",
    tag: "Paperwurk",
    href: "/case-study/paperwurk",
  },
  {
    num: "04",
    title: "UAE & GCC Market Depth",
    desc: "VAT compliance flows, CBUAE licensing constraints, free zone vs. mainland logic, Emirates ID document structures, Arabic RTL layout parity, and WhatsApp as a primary B2B communication channel. The regulatory and cultural context is in the work, not bolted on after.",
    tag: "Paperwurk · Alya · Insure First",
    href: null,
  },
  {
    num: "05",
    title: "Conversion Architecture",
    desc: "Every design decision is mapped to a business outcome. Idle popups timed to reading behaviour, hard-gated lead capture at peak intent, stage-exit validation to prevent drop-off, named advisors in CTAs instead of anonymous forms. Conversion rate is a design metric.",
    tag: "Alya · Insure First · Greek Street Lab",
    href: null,
  },
  {
    num: "06",
    title: "Information-Dense Without Cognitive Overload",
    desc: "Complex multi-role SaaS platforms, heavy industrial B2B catalogues, and senior-led research advisory firms all share the same UX problem: too much critical information, not enough space. The discipline is structural — not decorative.",
    tag: "Paperwurk · 4BC · IMEX Tires",
    href: null,
  },
];

export default function Ecosystem() {
  return (
    <section className="bg-white px-8 md:px-30 lg:px-60 py-14 md:py-24 border-t border-neutral-100">
      <p className="text-neutral-600 text-sm tracking-[0.3em] uppercase mb-6">
        What Makes This Work Different
      </p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
        <h2 className="text-neutral-900 text-4xl leading-tight tracking-tight max-w-xl">
          Six disciplines that run through every project
        </h2>
        <Link
          href="/work"
          className="text-neutral-600 text-sm tracking-widest uppercase hover:text-black transition-colors duration-300 flex items-center gap-2 shrink-0 pb-1"
        >
          All Work →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
        {disciplines.map((d) => (
          <div key={d.num} className="bg-white p-6 md:p-10 flex flex-col gap-4 group">
            <div className="flex items-start justify-between gap-4">
              <span className="text-neutral-500 text-sm tracking-widest shrink-0 pt-0.5">{d.num}</span>
              <span className="text-neutral-500 text-sm tracking-wider md:text-right">{d.tag}</span>
            </div>
            <p className="text-neutral-900 text-xl leading-snug">{d.title}</p>
            <p className="text-neutral-600 text-base leading-relaxed">{d.desc}</p>
            {d.href && (
              <Link
                href={d.href}
                className="text-neutral-600 text-sm tracking-widest uppercase hover:text-black transition-colors duration-300 mt-2 self-start"
              >
                Case Study →
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
