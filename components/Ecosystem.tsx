import Link from "next/link";

const steps = [
  {
    num: "01",
    label: "Social Traffic",
    desc: "High-contrast LinkedIn ad formats and pattern-interrupt copy assets targeting corporate decision-makers.",
  },
  {
    num: "02",
    label: "Landing Interface",
    desc: "Distraction-free landing layouts built around above-the-fold engagement with a single conversion objective.",
  },
  {
    num: "03",
    label: "Interactive Diagnostics",
    desc: "Frictionless 3-step validation tool to gather company context before any data collection.",
  },
  {
    num: "04",
    label: "Scored Outputs",
    desc: "High-intent lead capture hard-gated precisely at the moment of peak psychological engagement.",
  },
  {
    num: "05",
    label: "Email Nurture",
    desc: "Automated two-part inbox sequences delivering personalized analytics and recovery steps.",
  },
];

export default function Ecosystem() {
  return (
    <section className="bg-white px-8 md:px-16 lg:px-24 py-24 border-t border-neutral-100">
      <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">
        Ecosystem Framework
      </p>
      <h2 className="text-neutral-900 text-4xl leading-tight tracking-tight mb-4 max-w-3xl">
        The Growth Funnel Framework
      </h2>
      <p className="text-neutral-400 text-base leading-relaxed mb-16 max-w-xl">
        Designing end-to-end B2B lead generation mechanics across 5 interconnected
        digital touchpoints. Featured execution: Ensurio First.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100">
        {steps.map((s) => (
          <div key={s.num} className="bg-white flex flex-col group">
            <div className="w-full aspect-video bg-neutral-50 group-hover:bg-neutral-100 transition-colors duration-500" />
            <div className="p-6 flex flex-col gap-2 border-t border-neutral-100">
              <span className="text-neutral-300 text-xs tracking-widest">{s.num}</span>
              <span className="text-neutral-900 text-lg leading-snug">{s.label}</span>
              <span className="text-neutral-400 text-sm leading-relaxed">{s.desc}</span>
            </div>
          </div>
        ))}

        {/* Balance the grid to even columns */}
        <div className="bg-white hidden lg:flex flex-col items-center justify-center p-6 min-h-50">
          <Link
            href="/case-study/ensurio-first"
            className="inline-flex items-center gap-4 bg-black text-white text-sm tracking-wide px-6 py-4 hover:bg-neutral-800 transition-colors duration-200 group"
          >
            <span>View Full Funnel</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </div>

      <div className="mt-8 lg:hidden">
        <Link
          href="/case-study/ensurio-first"
          className="inline-flex items-center gap-4 bg-black text-white text-sm tracking-wide px-6 py-4 hover:bg-neutral-800 transition-colors duration-200 group"
        >
          <span>View Full Funnel</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>
    </section>
  );
}
