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

export default function AboutSection() {
  return (
    <section id="about" className="bg-white px-8 md:px-30 lg:px-60 py-14 md:py-24 border-t border-neutral-100">

      <p className="text-neutral-600 text-sm tracking-[0.3em] uppercase mb-12 md:mb-16">About</p>

      {/* Bio + Capabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-24">

        {/* Bio */}
        <div className="flex flex-col gap-5">
          <p className="text-neutral-900 text-2xl md:text-3xl tracking-tight leading-snug">
            Designer who ships. Not by writing code — by knowing exactly what to build.
          </p>
          <p className="text-neutral-600 text-base leading-relaxed">
            I'm Vivek S L — a product designer and AI-directed builder based in India, working with UAE and GCC clients. I started in animation, moved through brand and web design, picked up an MBA in Marketing & Finance, and figured out how to ship full products without being a traditional engineer.
          </p>
          <p className="text-neutral-600 text-base leading-relaxed">
            I use Claude Code and Cursor to build what I design. What I bring is the judgment layer — knowing what to build, how it should behave, and whether what came out of the AI actually works. I'm drawn to compliance platforms, B2B SaaS, and conversion-critical systems. Moving toward Product Management.
          </p>
        </div>

        {/* Capabilities */}
        <div className="flex flex-col gap-8">
          {capabilities.map((g) => (
            <div key={g.label} className="flex flex-col gap-3">
              <p className="text-neutral-500 text-xs tracking-[0.25em] uppercase">{g.label}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 border border-neutral-200 text-neutral-700 text-xs tracking-wide hover:border-neutral-400 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Tools */}
      <div className="border-t border-neutral-100 pt-12 md:pt-16">
        <p className="text-neutral-500 text-xs tracking-[0.25em] uppercase mb-8">Tools</p>
        <div className="flex flex-col gap-px bg-neutral-100">
          {toolGroups.map((group) => (
            <div key={group.label} className="flex gap-px">
              <div className="bg-white w-32 md:w-44 shrink-0 flex items-center px-4 md:px-7 py-6">
                <p className="text-neutral-400 text-[9px] md:text-[10px] tracking-[0.3em] uppercase leading-relaxed">
                  {group.label}
                </p>
              </div>
              {group.tools.map((tool) => (
                <div
                  key={tool.label}
                  className="bg-white flex-1 min-w-0 flex flex-col items-center justify-center gap-2 md:gap-3 py-6 md:py-10 px-3 group hover:bg-neutral-50 transition-colors duration-300"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <Image
                      src={tool.src}
                      alt={tool.label}
                      width={40}
                      height={40}
                      unoptimized
                      style={{ width: "100%", height: "100%" }}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-neutral-500 text-[9px] md:text-[10px] tracking-wider text-center leading-snug group-hover:text-neutral-900 transition-colors duration-300">
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
