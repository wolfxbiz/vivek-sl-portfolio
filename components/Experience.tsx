const roles = [
  {
    title: "UI/UX & Graphic Designer",
    company: "Turquoic IT Consultancy",
    period: "Feb 2025 — Present",
    points: [
      "Designing user-friendly digital experiences, brand assets, and core marketing creatives.",
    ],
  },
  {
    title: "Freelance Creative Professional",
    company: "Independent",
    period: "2018 — 2024",
    points: [
      "Executing video editing, digital illustrations, and end-to-end social media growth assets.",
    ],
  },
];

const education = [
  "MBA in Marketing & Finance — Amity University",
  "BBA in Business Administration — Amity University",
  "Diploma in Advanced Animation — Cavalier Animation",
];

export default function Experience() {
  return (
    <section className="px-8 py-24 border-t border-white/5">
      <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-16">
        Experience
      </p>

      <div className="flex flex-col gap-0 max-w-3xl">
        {roles.map((r, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:gap-16 py-8 border-b border-white/5"
          >
            <div className="md:w-48 shrink-0 mb-4 md:mb-0">
              <p className="text-white/20 text-xs tracking-wider leading-relaxed">
                {r.period}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white text-sm tracking-wide">{r.title}</p>
              <p className="text-white/30 text-xs tracking-wider uppercase">
                {r.company}
              </p>
              <ul className="mt-2 flex flex-col gap-1">
                {r.points.map((pt, j) => (
                  <li key={j} className="text-white/30 text-sm leading-relaxed">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="flex flex-col md:flex-row md:gap-16 py-8">
          <div className="md:w-48 shrink-0 mb-4 md:mb-0">
            <p className="text-white/20 text-xs tracking-wider">Education</p>
          </div>
          <ul className="flex flex-col gap-2">
            {education.map((e, i) => (
              <li key={i} className="text-white/30 text-sm leading-relaxed">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
