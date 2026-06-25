'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const sites = [
  {
    name: "Turquoic",
    url: "https://www.turquoic.com",
    domain: "turquoic",
    role: "Brand & Web Design",
    market: "UAE · IT Consultancy",
    color: "#00C2CB",
    num: "01",
    preview: "/images/previews/turquoic.jpg",
  },
  {
    name: "4BC Global",
    url: "https://www.4bcglobal.com",
    domain: "4bcglobal",
    role: "Brand Identity · Web Design",
    market: "MEA · Research & Advisory",
    color: "#C9A84C",
    num: "02",
    caseStudy: "/case-study/4bc-global",
    preview: "/images/previews/4bc-global.jpg",
  },
  {
    name: "ALYA Auditors",
    url: "https://accounting.alyaauditors.com",
    domain: "alyaauditors",
    role: "Full-Stack · CRO · Lead Gen",
    market: "UAE · Audit & Compliance",
    color: "#7FFA7B",
    num: "03",
    caseStudy: "/case-study/alya-auditors",
    preview: "/images/previews/alya-auditors.jpg",
  },
  {
    name: "Insure First",
    url: "https://ensurio-first.vercel.app/",
    domain: "insurefirst.ae",
    role: "UI/UX Design · Web Design",
    market: "UAE · Insurance",
    color: "#3B82F6",
    num: "04",
    caseStudy: "/case-study/insure-first",
    preview: "/images/previews/insure-first.jpg",
  },
  {
    name: "Planet Blue Marine",
    url: "https://planetbluemarine.vercel.app/",
    domain: "planetbluemarine",
    role: "Brand & Web Design",
    market: "UAE · Marine Services",
    color: "#06B6D4",
    num: "05",
    preview: "/images/previews/planet-blue.jpg",
  },
  {
    name: "Arco Angola",
    url: "https://www.arcoangola.com",
    domain: "arcoangola",
    role: "Brand & Web Design",
    market: "Angola · Industrial Certification",
    color: "#E85D26",
    num: "06",
    preview: "/images/previews/arco-angola.jpg",
  },
];

export default function LiveWork() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mouseY, setMouseY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hoveredSite = sites.find(s => s.num === hovered);

  return (
    <section
      ref={sectionRef}
      className="bg-black border-t border-white/8 pt-16 md:pt-24 pb-8 md:pb-12 relative"
      onMouseMove={(e) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (rect) setMouseY(e.clientY - rect.top);
      }}
    >
      {/* ── Header ── */}
      <div className="flex items-end justify-between mb-10 md:mb-16 px-8 md:px-30 lg:px-60">
        <div>
          <p className="text-[#FF4D00] text-[10px] tracking-[0.4em] uppercase mb-3">Live Work</p>
          <h2 className="text-white text-3xl md:text-4xl tracking-tight">Shipped & live</h2>
        </div>
        <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">{sites.length} sites</span>
      </div>

      {/* ── MOBILE: horizontal snap scroll cards ── */}
      <div
        className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory px-8 pb-8"
        style={{ scrollbarWidth: 'none' }}
      >
        {sites.map((site) => (
          <a
            key={site.num}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-start shrink-0 w-[78vw] rounded-2xl overflow-hidden flex flex-col"
            style={{ border: `1px solid ${site.color}30` }}
          >
            {/* Screenshot */}
            <div className="relative w-full aspect-video overflow-hidden bg-[#111]">
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${site.color}18, #111)` }}
              />
              <Image
                src={site.preview}
                alt={`${site.name} website`}
                fill
                className="object-cover object-top"
                sizes="78vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-12"
                style={{ background: 'linear-gradient(to top, #000, transparent)' }}
              />
            </div>

            {/* Info */}
            <div className="bg-[#0d0d0d] px-4 py-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold tracking-tight text-lg">{site.name}</h3>
                <span className="text-[10px] tracking-widest" style={{ color: site.color }}>↗</span>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/35">{site.role}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] text-white/20 tracking-wide">{site.market}</span>
                <span className="text-[10px] tracking-wide" style={{ color: site.color + '80' }}>{site.domain}</span>
              </div>
            </div>
          </a>
        ))}
        <div className="shrink-0 w-4" />
      </div>

      {/* ── DESKTOP: hover rows with floating preview ── */}
      <div className="hidden md:block px-30 lg:px-60">

        {/* Floating preview card */}
        <div
          className="absolute pointer-events-none z-50 w-72 transition-all duration-300"
          style={{
            right: '4rem',
            top: mouseY - 100,
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(8px)',
          }}
        >
          <div
            className="rounded-xl overflow-hidden shadow-2xl border"
            style={{ borderColor: hoveredSite ? hoveredSite.color + '40' : 'transparent' }}
          >
            <div className="relative w-full aspect-video bg-[#111]">
              {hoveredSite && (
                <>
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${hoveredSite.color}22, #111)` }}
                  />
                  <Image
                    src={hoveredSite.preview}
                    alt={hoveredSite.name + ' website preview'}
                    fill
                    className="object-cover object-top"
                    sizes="288px"
                  />
                </>
              )}
            </div>
            {hoveredSite && (
              <div className="bg-[#0d0d0d] px-4 py-3 flex items-center justify-between">
                <span className="text-white/60 text-xs">{hoveredSite.name}</span>
                <span className="text-[10px] tracking-widest uppercase" style={{ color: hoveredSite.color }}>
                  Live ↗
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col">
          {sites.map((site) => {
            const isHovered = hovered === site.num;
            return (
              <a
                key={site.num}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(site.num)}
                onMouseLeave={() => setHovered(null)}
                className="group relative flex items-center justify-between border-t border-white/8 py-8 overflow-hidden transition-all duration-500 cursor-pointer"
              >
                <div
                  className="absolute inset-0 origin-left transition-transform duration-500 ease-out"
                  style={{
                    backgroundColor: site.color,
                    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                    opacity: 0.07,
                  }}
                />
                <div className="relative flex items-center gap-10">
                  <span
                    className="text-[10px] tracking-[0.3em] transition-colors duration-300"
                    style={{ color: isHovered ? site.color : 'rgba(255,255,255,0.2)' }}
                  >
                    {site.num}
                  </span>
                  <div>
                    <h3
                      className="text-4xl lg:text-5xl font-semibold tracking-tight leading-none transition-colors duration-300 mb-2"
                      style={{ color: isHovered ? site.color : 'rgba(255,255,255,0.85)' }}
                    >
                      {site.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 group-hover:text-white/50 transition-colors duration-300">
                        {site.role}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/15" />
                      <span className="text-[10px] tracking-[0.2em] uppercase text-white/20">
                        {site.market}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center gap-4">
                  {site.caseStudy && (
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase transition-all duration-300"
                      style={{ color: isHovered ? site.color : 'transparent' }}
                    >
                      Case study →
                    </span>
                  )}
                  <span
                    className="text-xs tracking-wide border px-3 py-2 transition-all duration-300 whitespace-nowrap"
                    style={{
                      borderColor: isHovered ? site.color : 'rgba(255,255,255,0.12)',
                      color: isHovered ? site.color : 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {site.domain} ↗
                  </span>
                </div>
              </a>
            );
          })}
          <div className="border-t border-white/8" />
        </div>
      </div>

    </section>
  );
}
