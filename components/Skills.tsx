import Image from "next/image";

const capabilities = [
  {
    label: "UX Architecture",
    items: [
      "Multi-Tenant System Design",
      "User Flow Mapping",
      "Permission-Scoped UX",
      "Progressive Disclosure",
      "Compliance UX Patterns",
      "14-Persona Scale Design",
    ],
  },
  {
    label: "AI-Directed Development",
    items: [
      "Next.js · React · TypeScript",
      "Tailwind CSS",
      "Framer Motion · GSAP · WebGL",
      "Component Architecture",
      "Production Deployment — Vercel",
      "Claude Code · Cursor",
    ],
  },
  {
    label: "Conversion Architecture",
    items: [
      "State Machine Flow Design",
      "Idle-Triggered Lead Capture",
      "Hard-Gated Conversion Timing",
      "B2B Trust Framework Design",
      "Multi-Route Site Architecture",
    ],
  },
  {
    label: "Brand & Design Systems",
    items: [
      "Visual Identity Design",
      "Colour Token Architecture",
      "Typography Systems",
      "Design System Documentation",
      "Bilingual Layout Design (LTR → RTL)",
    ],
  },
  {
    label: "UAE & GCC Market",
    items: [
      "VAT & ESR Compliance Flows",
      "CBUAE Regulatory Context",
      "Free Zone vs. Mainland UX Logic",
      "Arabic RTL Layout Parity",
      "MEA Research & Advisory Context",
    ],
  },
];

const toolGroups: { label: string; tools: { label: string; src: string }[] }[] = [
  {
    label: "Design & Creative",
    tools: [
      { label: "Figma",                src: "/icons/figma.svg" },
      { label: "Affinity Designer",    src: "/icons/affinity.svg" },
      { label: "Adobe Creative Cloud", src: "/icons/creative-cloud.svg" },
    ],
  },
  {
    label: "IDE & AI",
    tools: [
      { label: "VS Code",     src: "/icons/vscode.svg" },
      { label: "Claude Code", src: "/icons/claude-code.svg" },
      { label: "Cursor",      src: "/icons/cursor.svg" },
    ],
  },
  {
    label: "Framework & Language",
    tools: [
      { label: "Next.js",    src: "/icons/nextjs.svg" },
      { label: "React",      src: "/icons/react.svg" },
      { label: "TypeScript", src: "/icons/typescript.svg" },
      { label: "Vite",       src: "/icons/vite.svg" },
    ],
  },
  {
    label: "Styling & Deployment",
    tools: [
      { label: "Tailwind CSS", src: "/icons/tailwind.svg" },
      { label: "shadcn/ui",    src: "/icons/shadcn.svg" },
      { label: "Vercel",       src: "/icons/vercel.svg" },
    ],
  },
  {
    label: "Motion & Animation",
    tools: [
      { label: "Framer Motion", src: "/icons/framer-motion.svg" },
      { label: "GSAP",          src: "/icons/gsap.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-white px-8 md:px-30 lg:px-60 py-14 md:py-24 border-t border-neutral-100">
      <p className="text-neutral-600 text-sm tracking-[0.3em] uppercase mb-16">
        Capabilities
      </p>

      {/* Capabilities */}
      <div className="flex flex-col gap-12 mb-24">
        {capabilities.map((g) => (
          <div key={g.label} className="flex flex-col md:flex-row md:gap-20 gap-5">
            <div className="md:w-48 shrink-0">
              <p className="text-neutral-600 text-sm tracking-wider md:tracking-widest uppercase pt-3">
                {g.label}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {g.items.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 border border-neutral-200 text-neutral-700 text-sm tracking-wide hover:border-black hover:text-black transition-all duration-300"
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
        <p className="text-neutral-600 text-sm tracking-[0.3em] uppercase mb-14">
          Tools
        </p>

        <div className="flex flex-col gap-px bg-neutral-100">
          {toolGroups.map((group) => (
            <div key={group.label} className="flex gap-px">

              {/* Category label — left column */}
              <div className="bg-white w-36 md:w-44 shrink-0 flex items-center px-5 md:px-7 py-8">
                <p className="text-neutral-400 text-[9px] md:text-[10px] tracking-[0.3em] uppercase leading-relaxed">
                  {group.label}
                </p>
              </div>

              {/* Tiles — fill remaining width equally */}
              {group.tools.map((tool) => (
                <div
                  key={tool.label}
                  className="bg-white flex-1 min-w-0 flex flex-col items-center justify-center gap-3 md:gap-4 py-8 md:py-12 px-3 group hover:bg-neutral-50 transition-colors duration-300"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <Image
                      src={tool.src}
                      alt={tool.label}
                      width={48}
                      height={48}
                      unoptimized
                      style={{ width: "100%", height: "100%" }}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-neutral-600 text-[10px] md:text-xs tracking-wider text-center leading-snug group-hover:text-neutral-900 transition-colors duration-300">
                    {tool.label}
                  </span>
                </div>
              ))}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
