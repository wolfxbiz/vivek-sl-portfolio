const primaryRoles = [
  {
    title: "UI/UX Designer & Web Developer",
    company: "Turquoic IT Consultancy",
    period: "Feb 2025 — Present",
    active: true,
    points: [
      "Owned end-to-end product design for client platforms — from discovery and user research through to developer handoff and QA review.",
      "Defined information architecture, user flows, and wireframes for multi-stakeholder digital products across UAE and GCC markets.",
      "Collaborated cross-functionally with developers and stakeholders to ship production-ready interfaces on scope and schedule.",
    ],
  },
  {
    title: "Freelance Graphic & Brand Designer",
    company: "Independent",
    period: "2018 — 2024",
    active: false,
    points: [
      "Designed brand identities, visual systems, and web layouts for scaling clients across 6 years — building the visual craft foundation that underlies the product and UX work that followed.",
      "Managed full client lifecycle independently — discovery, scoping, iterative design, and delivery.",
    ],
  },
];

const supportingRoles = [
  {
    title: "Jewelry Consultant Intern",
    company: "CaratLane by Tanishq",
    period: "Oct 2024 — Jan 2025",
    note: "Consumer behaviour and purchase psychology in high-involvement retail scenarios.",
  },
  {
    title: "Customer Relations Intern",
    company: "Bharti Airtel Limited",
    period: "Jun 2023 — Aug 2023",
    note: "Live objection handling and consumer engagement during MBA.",
  },
];

const education = [
  {
    degree: "MBA — Marketing & Finance",
    institution: "Amity University",
    period: "Aug 2022 – Jul 2024",
    note: "The business layer behind the design practice — market positioning, unit economics, funnel strategy, and financial modelling applied directly to product work.",
    primary: true,
  },
  {
    degree: "BBA — Business Administration",
    institution: "Amity University",
    period: "Aug 2019 – May 2022",
    primary: false,
  },
  {
    degree: "Diploma in Advanced Animation",
    institution: "Cavalier Animation, Trivandrum",
    period: "2016 – 2018",
    primary: false,
  },
];

export default function Experience() {
  return (
    <section className="bg-black px-8 md:px-30 lg:px-60 py-24 border-t border-white/5">

      {/* Section label */}
      <p className="text-white/65 text-sm tracking-[0.3em] uppercase mb-16">
        Experience
      </p>

      {/* Two-column layout: Work left, Education right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* ── LEFT: Work ── */}
        <div className="lg:col-span-7 flex flex-col">

          {/* Primary roles */}
          {primaryRoles.map((r, i) => (
            <div key={i} className="flex flex-col gap-4 py-10 border-b border-white/8">

              {/* Period + active badge */}
              <div className="flex items-center gap-3">
                <span className="text-white/70 text-sm tracking-widest">{r.period}</span>
                {r.active && (
                  <span className="flex items-center gap-1.5 text-white/70 text-sm tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Current
                  </span>
                )}
              </div>

              {/* Title + company */}
              <div>
                <p className="text-white text-xl tracking-tight mb-1">{r.title}</p>
                <p className="text-white/70 text-sm tracking-widest uppercase">{r.company}</p>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-3 mt-1">
                {r.points.map((pt, j) => (
                  <li key={j} className="flex gap-4 items-start">
                    <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-white/25 block" />
                    <p className="text-white/85 text-base leading-relaxed">{pt}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Earlier roles — compact */}
          <div className="pt-10">
            <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-5">Earlier</p>
            <div className="flex flex-col gap-px bg-white/5">
              {supportingRoles.map((r, i) => (
                <div key={i} className="bg-black px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 items-start">
                  <div className="sm:col-span-1">
                    <p className="text-white/80 text-base leading-snug">{r.title}</p>
                    <p className="text-white/60 text-sm tracking-widest uppercase mt-1">{r.company}</p>
                  </div>
                  <div className="sm:col-span-2 flex flex-col gap-1">
                    <p className="text-white/60 text-sm tracking-wider">{r.period}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{r.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Education (sticky) ── */}
        <div className="lg:col-span-4 lg:col-start-9 lg:sticky lg:top-28 flex flex-col gap-px">

          <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-5">Education</p>

          {/* MBA — elevated */}
          <div className="border border-white/10 p-7 flex flex-col gap-3 mb-px">
            <div>
              <p className="text-white/90 text-base leading-snug">{education[0].degree}</p>
              <p className="text-white/65 text-sm tracking-widest uppercase mt-1">{education[0].institution}</p>
            </div>
            <p className="text-white/65 text-sm tracking-wider">{education[0].period}</p>
            <p className="text-white/75 text-sm leading-relaxed border-t border-white/8 pt-3 mt-1">
              {education[0].note}
            </p>
          </div>

          {/* BBA + Animation — secondary */}
          {education.slice(1).map((e, i) => (
            <div key={i} className="bg-white/3 px-7 py-5 flex flex-col gap-1.5">
              <p className="text-white/80 text-base">{e.degree}</p>
              <p className="text-white/60 text-sm tracking-widest uppercase">{e.institution}</p>
              <p className="text-white/60 text-sm tracking-wider mt-0.5">{e.period}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
