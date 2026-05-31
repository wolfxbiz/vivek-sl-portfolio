const roles = [
  {
    title: "UI/UX Designer & Web Developer",
    company: "Turquoic IT Consultancy",
    period: "Feb 2025 — Present",
    points: [
      "Owned end-to-end product design for client platforms — from discovery and user research through to developer handoff and QA review.",
      "Defined information architecture, user flows, and wireframes for multi-stakeholder digital products across UAE and GCC markets.",
      "Collaborated cross-functionally with developers and stakeholders to ship production-ready interfaces on scope and schedule.",
    ],
  },
  {
    title: "Jewelry Consultant Intern",
    company: "CaratLane by Tanishq",
    period: "Oct 2024 — Jan 2025",
    points: [
      "Contributed to in-store marketing campaigns and customer engagement initiatives.",
      "Gained direct exposure to retail consumer behaviour and brand positioning execution.",
    ],
  },
  {
    title: "Freelance Experience Designer",
    company: "Independent",
    period: "2018 — 2024",
    points: [
      "Designed end-to-end brand systems and conversion-focused web layouts for scaling clients — building the execution foundation for the complex product work that followed.",
      "Evaluated user interaction data and structural content formats to optimize digital engagement across platform touchpoints.",
      "Managed full client lifecycle independently — discovery, scoping, iterative design, and delivery.",
    ],
  },
  {
    title: "Customer Relations Intern",
    company: "Bharti Airtel Limited",
    period: "Jun 2023 — Aug 2023",
    points: [
      "Engaged customers directly on service promotions — applied consumer psychology and objection handling in a live retail environment.",
    ],
  },
];

const education = [
  "MBA – Marketing & Finance  |  Amity University, Kochi  (2022 – 2024)",
  "BBA – Business Administration  |  Amity University, Kochi  (2022 – 2024)",
  "Diploma in Advanced Animation  |  Cavalier Animation, Trivandrum  (2016 – 2018)",
];

export default function Experience() {
  return (
    <section className="bg-black px-8 md:px-16 lg:px-24 py-24 border-t border-white/5">
      <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-16">
        Experience
      </p>

      <div className="flex flex-col">
        {roles.map((r, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:gap-20 py-10 border-b border-white/5"
          >
            <div className="md:w-48 shrink-0 mb-4 md:mb-0">
              <p className="text-white/20 text-sm tracking-wider leading-relaxed">
                {r.period}
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-2xl">
              <p className="text-white text-xl tracking-tight">{r.title}</p>
              <p className="text-white/30 text-sm tracking-wider uppercase">
                {r.company}
              </p>
              <ul className="mt-2 flex flex-col gap-2">
                {r.points.map((pt, j) => (
                  <li key={j} className="text-white/30 text-base leading-relaxed flex gap-4">
                    <span className="mt-2.5 shrink-0 w-1 h-1 rounded-full bg-white/20 block" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="flex flex-col md:flex-row md:gap-20 py-10">
          <div className="md:w-48 shrink-0 mb-4 md:mb-0">
            <p className="text-white/20 text-sm tracking-wider">Education</p>
          </div>
          <ul className="flex flex-col gap-3 max-w-2xl">
            {education.map((e, i) => (
              <li key={i} className="text-white/30 text-base leading-relaxed">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
