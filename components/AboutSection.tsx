'use client';

import Image from "next/image";
import { HoverBorderGradient } from './ui/hover-border-gradient';

const capabilities = [
  { num: "01", label: "UX Architecture" },
  { num: "02", label: "AI-Directed Development" },
  { num: "03", label: "Conversion Architecture" },
  { num: "04", label: "Brand & Design Systems" },
];

const tools = [
  { label: "Figma",       src: "/icons/figma.svg" },
  { label: "Adobe CC",    src: "/icons/creative-cloud.webp" },
  { label: "VS Code",     src: "/icons/vscode.webp" },
  { label: "Claude Code", src: "/icons/claude-code.webp" },
  { label: "React",       src: "/icons/react.webp" },
  { label: "TypeScript",  src: "/icons/typescript.webp" },
  { label: "Tailwind CSS",src: "/icons/tailwind.webp" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-black px-8 md:px-30 lg:px-60 pt-20 md:pt-28 pb-20 md:pb-28">

      <p className="text-[#FF4D00] text-[10px] tracking-[0.4em] uppercase mb-12">About</p>

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
          <HoverBorderGradient
            as="a"
            href="https://wa.me/918921284894?text=Hi%20Vivek%2C%20I%27d%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
            className="text-white text-sm tracking-wide mt-2 self-start"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Book an Appointment
          </HoverBorderGradient>
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
