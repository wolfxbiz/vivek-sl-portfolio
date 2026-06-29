'use client';

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "01",
    slug: "paperwurk",
    title: "Paperwurk",
    image: "/images/cover-paperwurk.png",
    hover: "/images/hover-paperwurk.png",
    preload: "/images/paperwurk/platform-overview.webp",
  },
  {
    id: "02",
    slug: "alya-auditors",
    title: "Alya Auditors",
    image: "/images/cover-alya.png",
    hover: "/images/hover-alya.png",
  },
  {
    id: "03",
    slug: "4bc-global",
    title: "4BC Global",
    image: "/images/cover-4bc.png",
    hover: "/images/hover-4bc.png",
  },
  {
    id: "04",
    slug: "insure-first",
    title: "Insure First",
    image: "/images/cover-insure.png",
    hover: "/images/hover-insure.png",
  },
];

function prefetchImage(src: string) {
  const img = new window.Image();
  img.src = src;
}

export default function ProjectGrid() {
  return (
    <section className="relative bg-black border-t border-white/10">

      {/* Dot background */}
      <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#404040_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />

      {/* Header */}
      <div className="relative z-10 px-8 md:px-30 lg:px-60 pt-16 pb-10">
        <p className="text-[#FF4D00] text-[10px] tracking-[0.4em] uppercase mb-4">Selected Work</p>
        <h2 className="text-white text-3xl md:text-4xl tracking-tight leading-snug">
          Case Studies
        </h2>
      </div>

      {/* Card grid */}
      <div className="relative z-10 px-8 md:px-30 lg:px-60 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/case-study/${p.slug}`}
              className="group relative overflow-hidden rounded-xl"
              onMouseEnter={() => p.preload && prefetchImage(p.preload)}
            >
              {/* Base image */}
              <Image
                src={p.image}
                alt={p.title}
                width={687}
                height={1372}
                quality={75}
                sizes="(max-width: 768px) 45vw, 25vw"
                className="w-full h-auto"
              />
              {/* Hover image — fades in on top */}
              <Image
                src={p.hover}
                alt=""
                fill
                quality={75}
                sizes="(max-width: 768px) 45vw, 25vw"
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
