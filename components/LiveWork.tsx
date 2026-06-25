'use client';

import { useState } from 'react';

const sites = [
  {
    name: "Turquoic",
    url: "https://www.turquoic.com",
    domain: "turquoic.com",
    role: "Brand & Web Design",
    market: "UAE · IT Consultancy",
    color: "#00C2CB",
    num: "01",
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
  },
  {
    name: "Arco Angola",
    url: "https://www.arcoangola.com",
    domain: "arcoangola.com",
    role: "Brand & Web Design",
    market: "Angola · Construction",
    color: "#E85D26",
    num: "04",
  },
  {
    name: "Tott Books",
    url: "https://tottbooks.com",
    domain: "tottbooks.com",
    role: "E-commerce · UI Design",
    market: "E-commerce · Publishing",
    color: "#A259FF",
    num: "05",
  },
];

export default function LiveWork() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="bg-black border-t border-white/8 px-8 md:px-30 lg:px-60 pt-16 md:pt-24 pb-8 md:pb-12">

      <div className="flex items-end justify-between mb-12 md:mb-16">
        <div>
          <p className="text-[#FF4D00] text-[10px] tracking-[0.4em] uppercase mb-3">Live Work</p>
          <h2 className="text-white text-3xl md:text-4xl tracking-tight">
            Shipped & live
          </h2>
        </div>
        <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">{sites.length} sites</span>
      </div>

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
              {/* Colour fill on hover */}
              <div
                className="absolute inset-0 origin-left transition-transform duration-500 ease-out"
                style={{
                  backgroundColor: site.color,
                  transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                  opacity: 0.08,
                }}
              />

              {/* Left — number + name + role */}
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
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 transition-colors duration-300 group-hover:text-white/50">
                      {site.role}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/15" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/20">
                      {site.market}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right — domain link */}
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

        {/* Bottom border */}
        <div className="border-t border-white/8" />
      </div>

    </section>
  );
}
