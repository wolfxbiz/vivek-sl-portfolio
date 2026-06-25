'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const sites = [
  {
    name: "Turquoic",
    url: "https://www.turquoic.com",
    domain: "turquoic.com",
    role: "Brand & Web Design",
    market: "UAE · IT Consultancy",
    color: "#00C2CB",
    num: "01",
    preview: "/images/previews/turquoic.jpg",
  },
  {
    name: "4BC Global",
    url: "https://www.4bcglobal.com",
    domain: "4bcglobal.com",
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
    domain: "accounting.alyaauditors.com",
    role: "Full-Stack · CRO · Lead Gen",
    market: "UAE · Audit & Compliance",
    color: "#7FFA7B",
    num: "03",
    caseStudy: "/case-study/alya-auditors",
    preview: "/images/previews/alya-auditors.jpg",
  },
  {
    name: "Arco Angola",
    url: "https://www.arcoangola.com",
    domain: "arcoangola.com",
    role: "Brand & Web Design",
    market: "Angola · Construction",
    color: "#E85D26",
    num: "04",
    preview: "/images/previews/arco-angola.jpg",
  },
  {
    name: "Tott Books",
    url: "https://tottbooks.com",
    domain: "tottbooks.com",
    role: "E-commerce · UI Design",
    market: "E-commerce · Publishing",
    color: "#A259FF",
    num: "05",
    preview: "/images/previews/tott-books.jpg",
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
      className="bg-black border-t border-white/8 px-8 md:px-30 lg:px-60 pt-16 md:pt-24 pb-8 md:pb-12 relative"
      onMouseMove={(e) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (rect) setMouseY(e.clientY - rect.top);
      }}
    >
      {/* Floating preview card */}
      <div
        className="hidden md:block absolute pointer-events-none z-50 w-72 transition-all duration-300"
        style={{
          right: '2rem',
          top: mouseY - 100,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(8px)',
        }}
      >
        <div
          className="rounded-xl overflow-hidden shadow-2xl border"
          style={{ borderColor: hoveredSite ? hoveredSite.color + '40' : 'transparent' }}
        >
          {/* Preview image or color placeholder */}
          <div className="relative w-full aspect-video">
            {hoveredSite && (
              <>
                {/* Placeholder gradient — replace with screenshot later */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${hoveredSite.color}22, ${hoveredSite.color}08)`, backgroundColor: '#111' }}
                >
                  <span className="text-xs tracking-widest uppercase" style={{ color: hoveredSite.color + '80' }}>
                    Preview
                  </span>
                  <span className="text-white/20 text-[10px] tracking-widest">
                    {hoveredSite.domain}
                  </span>
                </div>
                {/* Actual screenshot — shows when file exists */}
                <Image
                  src={hoveredSite.preview}
                  alt={hoveredSite.name + ' website preview'}
                  fill
                  className="object-cover object-top"
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                />
              </>
            )}
          </div>
          {/* Caption */}
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

      {/* Header */}
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <div>
          <p className="text-[#FF4D00] text-[10px] tracking-[0.4em] uppercase mb-3">Live Work</p>
          <h2 className="text-white text-3xl md:text-4xl tracking-tight">Shipped & live</h2>
        </div>
        <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">{sites.length} sites</span>
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
              className="group relative flex items-center justify-between border-t border-white/8 py-6 md:py-8 overflow-hidden transition-all duration-500 cursor-pointer"
            >
              {/* Colour fill */}
              <div
                className="absolute inset-0 origin-left transition-transform duration-500 ease-out"
                style={{
                  backgroundColor: site.color,
                  transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                  opacity: 0.07,
                }}
              />

              {/* Left */}
              <div className="relative flex items-center gap-5 md:gap-10">
                <span
                  className="text-[10px] tracking-[0.3em] transition-colors duration-300 hidden md:block"
                  style={{ color: isHovered ? site.color : 'rgba(255,255,255,0.2)' }}
                >
                  {site.num}
                </span>
                <div>
                  <h3
                    className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-none transition-colors duration-300 mb-2"
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

              {/* Right */}
              <div className="relative flex items-center gap-4">
                {site.caseStudy && (
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase transition-all duration-300 hidden md:block"
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

    </section>
  );
}
