const steps = [
  {
    num: "01",
    label: "Social Traffic",
    desc: "High-contrast LinkedIn ad formats and pattern-interrupt copy assets.",
  },
  {
    num: "02",
    label: "Landing Interface",
    desc: "Distraction-free landing layouts built around above-the-fold engagement.",
  },
  {
    num: "03",
    label: "Interactive Diagnostics",
    desc: "Frictionless 3-step validation tool to gather context before data collection.",
  },
  {
    num: "04",
    label: "Scored Outputs",
    desc: "High-intent lead capture gated precisely at the moment of peak psychological engagement.",
  },
  {
    num: "05",
    label: "Email Nurture",
    desc: "Automated two-part inbox sequences delivering personalized analytics and recovery steps.",
  },
];

export default function Ecosystem() {
  return (
    <section className="px-8 py-24 border-t border-white/5">
      <div className="max-w-4xl">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-6">
          Ecosystem Framework
        </p>
        <h2 className="text-white text-3xl md:text-4xl leading-tight tracking-tight mb-4">
          The Growth Funnel Framework — Featured Execution: Ensurio First
        </h2>
        <p className="text-white/40 text-sm leading-relaxed mb-16 max-w-xl">
          Designing end-to-end B2B lead generation mechanics across 5
          interconnected digital touchpoints.
        </p>

        <div className="flex flex-col divide-y divide-white/5">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex flex-col md:flex-row md:items-start gap-4 py-6 group"
            >
              <span className="text-white/20 text-xs tracking-widest w-12 shrink-0 pt-0.5">
                {s.num}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-white text-sm tracking-wider">
                  {s.label}
                </span>
                <span className="text-white/30 text-sm leading-relaxed">
                  {s.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#"
            className="text-white/50 text-xs tracking-wider hover:text-white transition-colors duration-300"
          >
            View Full Funnel System →
          </a>
        </div>
      </div>
    </section>
  );
}
