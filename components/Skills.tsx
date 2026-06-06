import React from "react";
import Image from "next/image";
import { SiNextdotjs, SiReact } from "react-icons/si";

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
    label: "Frontend Engineering",
    items: [
      "Next.js · React 18 · TypeScript",
      "Tailwind CSS",
      "Framer Motion · GSAP",
      "WebGL / OGL",
      "Component Architecture",
      "Production Deployment — Vercel",
    ],
  },
  {
    label: "AI & Intelligent Systems",
    items: [
      "RAG Pipeline Architecture",
      "LangChain Agent Orchestration",
      "Pinecone Vector Search",
      "OpenAI Integration",
      "AWS Textract / OCR",
      "Automated Test Engineering (93%+)",
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

const tools: { label: string; src?: string; icon?: React.ReactNode }[] = [
  { label: "Figma",                src: "/icons/figma.svg" },
  { label: "Affinity Designer",   src: "/icons/affinity.svg" },
  { label: "Adobe Creative Cloud",src: "/icons/creative-cloud.svg" },
  { label: "VS Code",             src: "/icons/vscode.svg" },
  { label: "Claude Code",         src: "/icons/claude-code.svg" },
  { label: "Cursor",              src: "/icons/cursor.svg" },
  { label: "Next.js",             icon: <SiNextdotjs size={64} color="#000000" /> },
  { label: "React",               icon: <SiReact size={64} color="#61DAFB" /> },
  { label: "TypeScript",          src: "/icons/typescript.svg" },
];

export default function Skills() {
  return (
    <section className="bg-white px-8 md:px-30 lg:px-60 py-24 border-t border-neutral-100">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-100">
          {tools.map((tool) => (
            <div
              key={tool.label}
              className="bg-white flex flex-col items-center justify-center gap-6 py-16 px-8 group hover:bg-neutral-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                {tool.src ? (
                  <Image
                    src={tool.src}
                    alt={tool.label}
                    width={64}
                    height={64}
                    unoptimized
                    style={{ width: "64px", height: "64px" }}
                    className="object-contain"
                  />
                ) : (
                  tool.icon
                )}
              </div>
              <span className="text-neutral-400 text-sm tracking-wider text-center leading-snug group-hover:text-neutral-900 transition-colors duration-300">
                {tool.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
