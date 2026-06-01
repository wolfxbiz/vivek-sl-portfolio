import Image from "next/image";

const capabilities = [
  {
    label: "Experience Architecture",
    items: ["User Flows", "Information Architecture", "Wireframing", "Progressive Disclosure"],
  },
  {
    label: "Interface Systems",
    items: ["Figma Component Libraries", "Responsive Web Design", "Bilingual Layout Design (LTR → RTL)", "Design Systems"],
  },
  {
    label: "Conversion & CRO",
    items: ["Landing Page Architecture", "Trust Framework Design", "Lead Capture Optimisation", "Funnel Mapping"],
  },
  {
    label: "User Research",
    items: ["Stakeholder Interviews", "Usability Testing", "Competitive Analysis", "Persona Development"],
  },
];

const tools = [
  { label: "Figma",                  src: "/icons/figma.svg" },
  { label: "Affinity Designer",      src: "/icons/affinity.svg" },
  { label: "Adobe Creative Cloud",   src: "/icons/creative-cloud.svg" },
  { label: "VS Code",                src: "/icons/vscode.svg" },
  { label: "Claude Code",            src: "/icons/claude-code.svg" },
  { label: "Cursor",                 src: "/icons/cursor.svg" },
];

export default function Skills() {
  return (
    <section className="bg-white px-8 md:px-16 lg:px-24 py-24 border-t border-neutral-100">
      <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-16">
        Capabilities
      </p>

      {/* Capabilities */}
      <div className="flex flex-col gap-12 mb-24">
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

      {/* Tools */}
      <div className="border-t border-neutral-100 pt-16">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-12">
          Tools
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-neutral-100">
          {tools.map((tool) => (
            <div
              key={tool.label}
              className="bg-white flex flex-col items-center justify-center gap-5 py-10 px-6 group hover:bg-neutral-50 transition-colors duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src={tool.src}
                  alt={tool.label}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-neutral-500 text-xs tracking-wider text-center leading-snug group-hover:text-neutral-900 transition-colors duration-300">
                {tool.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
