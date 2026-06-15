'use client';

import Image from "next/image";

const capabilities = [
  { num: "01", label: "UX Architecture" },
  { num: "02", label: "AI-Directed Development" },
  { num: "03", label: "Conversion Architecture" },
  { num: "04", label: "Brand & Design Systems" },
];

const tools = [
  { label: "Figma",       src: "/icons/figma.svg" },
  { label: "Adobe CC",    src: "/icons/creative-cloud.svg" },
  { label: "VS Code",     src: "/icons/vscode.svg" },
  { label: "Claude Code", src: "/icons/claude-code.svg" },
  { label: "React",       src: "/icons/react.svg" },
  { label: "TypeScript",  src: "/icons/typescript.svg" },
  { label: "Tailwind CSS",src: "/icons/tailwind.svg" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-black px-8 md:px-30 lg:px-60 pt-20 md:pt-28 pb-20 md:pb-28">

      <p className="text-[#FF4D00] text-xs tracking-[0.4em] uppercase mb-12">About</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Bio */}
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-3xl md:text-4xl leading-snug tracking-tight">
            Designer who ships. Not by writing code — by knowing exactly what to build.
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            I'm Vivek S L — a product designer and AI-directed builder based in India, working with UAE and GCC clients. I started in animation, moved through brand and web design, picked up an MBA in Marketing & Finance, and figured out how to ship full products without being a traditional engineer.
          </p>
          <p className="text-white/60 text-base leading-relaxed">
            I use Claude Code and Cursor to build what I design. What I bring is the judgment layer — knowing what to build, how it should behave, and whether what came out of the AI actually works. Moving toward Product Management.
          </p>
        </div>

        {/* Capabilities + Tools */}
        <div>

          {/* Capability list */}
          <p className="text-white/25 text-[10px] tracking-[0.4em] uppercase mb-6">Capabilities</p>
          <div className="flex flex-col mb-10">
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                className="group flex items-center justify-between py-4 border-b border-white/8 cursor-default hover:border-white/20 transition-all duration-200"
              >
                <span className="text-white/80 text-lg tracking-tight group-hover:text-[#FF4D00] transition-colors duration-200">
                  {cap.label}
                </span>
                <span className="text-white/20 text-xs tracking-widest group-hover:text-[#FF4D00] transition-colors duration-200">
                  {cap.num}
                </span>
              </div>
            ))}
          </div>

          {/* Tool logos */}
          <p className="text-white/25 text-[10px] tracking-[0.4em] uppercase mb-4">Tools & Stack</p>
          <div className="grid grid-cols-7 gap-2">
            {tools.map((tool) => (
              <div
                key={tool.label}
                title={tool.label}
                className="aspect-square bg-white/[0.04] border border-white/[0.07] rounded-xl flex items-center justify-center p-3.5 hover:scale-105 hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300 ease-out cursor-default"
              >
                <Image
                  src={tool.src}
                  alt={tool.label}
                  width={32}
                  height={32}
                  unoptimized
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
