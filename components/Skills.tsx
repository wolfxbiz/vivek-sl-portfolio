import {
  SiFigma,
  SiClaude,
  SiAffinitydesigner,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiVisualstudiocode,
} from "react-icons/si";
import Image from "next/image";

const capabilities = [
  {
    label: "Experience Architecture",
    items: ["User Flows", "Information Architecture", "Wireframing", "Progressive Disclosure"],
    note: "Paperwurk — 12 flows, 98 screens across 14 personas",
  },
  {
    label: "Interface Systems",
    items: ["Figma Component Libraries", "Responsive Web Design", "Bilingual Layout Design (LTR → RTL)", "Design Systems"],
    note: "Paperwurk — scalable component library with full RTL parity",
  },
  {
    label: "Conversion & CRO",
    items: ["Landing Page Architecture", "Trust Framework Design", "Lead Capture Optimisation", "Funnel Mapping"],
    note: "Alya Auditors & Ensurio First — B2B lead generation funnels",
  },
  {
    label: "User Research",
    items: ["Stakeholder Interviews", "Usability Testing", "Competitive Analysis", "Persona Development"],
    note: "Paperwurk — moderated testing across field agents and first-time founders",
  },
];

const tools = [
  { label: "Figma", icon: <SiFigma size={16} color="#F24E1E" /> },
  { label: "Affinity Designer", icon: <SiAffinitydesigner size={16} color="#1B72BE" /> },
  { label: "Adobe Photoshop", icon: <SiAdobephotoshop size={16} color="#31A8FF" /> },
  { label: "Adobe After Effects", icon: <SiAdobeaftereffects size={16} color="#9999FF" /> },
  { label: "Adobe Premiere Pro", icon: <SiAdobepremierepro size={16} color="#9999FF" /> },
  { label: "VS Code", icon: <SiVisualstudiocode size={16} color="#007ACC" /> },
  { label: "Claude Code", icon: <SiClaude size={16} color="#D97757" /> },
  {
    label: "Cursor",
    icon: (
      <Image
        src="/icons/cursor.svg"
        alt="Cursor"
        width={16}
        height={16}
        className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
      />
    ),
  },
];

export default function Skills() {
  return (
    <section className="bg-white px-8 md:px-16 lg:px-24 py-24 border-t border-neutral-100">
      <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-16">
        Capabilities
      </p>

      <div className="flex flex-col gap-12 mb-20">
        {capabilities.map((g) => (
          <div key={g.label} className="flex flex-col md:flex-row md:gap-20 gap-5">
            <div className="md:w-48 shrink-0">
              <p className="text-neutral-300 text-xs tracking-widest uppercase pt-3">
                {g.label}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {g.items.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 border border-neutral-200 text-neutral-500 text-sm tracking-wide hover:border-black hover:text-black transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-neutral-100 pt-14">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-10">
          Tools
        </p>
        <div className="flex flex-wrap gap-6">
          {tools.map((tool) => (
            <div
              key={tool.label}
              className="flex items-center gap-2.5 px-5 py-3 border border-neutral-200 text-neutral-500 text-sm hover:border-black hover:text-black transition-all duration-300 group"
            >
                {tool.icon && (
                <span className="opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  {tool.icon}
                </span>
              )}
              <span>{tool.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
