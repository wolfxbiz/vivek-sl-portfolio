'use client';

import { useState } from 'react';
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
    preview: "/images/previews/turquoic.webp",
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
    preview: "/images/previews/4bc-global.webp",
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
    preview: "/images/previews/alya-auditors.webp",
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
    preview: "/images/previews/insure-first.webp",
  },
  {
    name: "Planet Blue Marine",
    url: "https://planetbluemarine.vercel.app/",
    domain: "planetbluemarine",
    role: "Brand & Web Design",
    market: "UAE · Marine Services",
    color: "#06B6D4",
    num: "05",
    preview: "/images/previews/planet-blue.webp",
  },
  {
    name: "Arco Angola",
    url: "https://www.arcoangola.com",
    domain: "arcoangola",
    role: "Brand & Web Design",
    market: "Angola · Industrial Certification",
    color: "#E85D26",
    num: "06",
    preview: "/images/previews/arco-angola.webp",
  },
];

function SiteCard({ site }: { site: typeof sites[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden flex flex-col cursor-pointer"
      style={{
        border: `1px solid ${hovered ? site.color + '60' : 'rgba(255,255,255,0.07)'}`,
        transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 60px ${site.color}20` : '0 0 0 transparent',
      }}
    >
      {/* Screenshot */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#111]">
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${site.color}20, #0a0a0a)`,
            opacity: hovered ? 0 : 1,
          }}
        />
        <Image
          src={site.preview}
          alt={`${site.name} website`}
          fill
          className="object-cover object-top transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
          sizes="(max-width: 768px) 78vw, 33vw"
        />

        {/* Overlay on hover */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{
            background: `linear-gradient(to bottom, ${site.color}18, ${site.color}40)`,
            opacity: hovered ? 1 : 0,
          }}
        >
          <span
            className="text-xs tracking-[0.3em] uppercase font-medium px-4 py-2 rounded-full"
            style={{
              backgroundColor: site.color + '22',
              color: site.color,
              border: `1px solid ${site.color}60`,
              backdropFilter: 'blur(8px)',
            }}
          >
            Visit site ↗
          </span>
        </div>

        {/* Number badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[10px] tracking-[0.2em] px-2 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: hovered ? site.color : 'rgba(255,255,255,0.3)',
              border: `1px solid ${hovered ? site.color + '40' : 'rgba(255,255,255,0.08)'}`,
              backdropFilter: 'blur(4px)',
              transition: 'color 0.3s, border-color 0.3s',
            }}
          >
            {site.num}
          </span>
        </div>
      </div>

      {/* Info bar */}
      <div
        className="px-4 py-3 flex items-center justify-between transition-colors duration-300"
        style={{ backgroundColor: hovered ? '#111' : '#0d0d0d' }}
      >
        <div className="flex flex-col gap-1">
          <h3
            className="font-semibold tracking-tight text-sm transition-colors duration-300"
            style={{ color: hovered ? site.color : 'rgba(255,255,255,0.85)' }}
          >
            {site.name}
          </h3>
          <p className="text-[10px] tracking-[0.15em] uppercase text-white/30">{site.role}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span
            className="text-[10px] tracking-wide transition-colors duration-300"
            style={{ color: hovered ? site.color + 'cc' : 'rgba(255,255,255,0.2)' }}
          >
            {site.domain}
          </span>
          <span className="text-[10px] text-white/15 tracking-wide">{site.market}</span>
        </div>
      </div>
    </a>
  );
}

export default function LiveWork() {
  return (
    <section className="bg-black border-t border-white/8 pt-16 md:pt-24 pb-12 md:pb-20">

      {/* Header */}
      <div className="flex items-end justify-between mb-10 md:mb-12 px-8 md:px-30 lg:px-60">
        <div>
          <p className="text-[#FF4D00] text-[10px] tracking-[0.4em] uppercase mb-3">Live Work</p>
          <h2 className="text-white text-3xl md:text-4xl tracking-tight">Shipped & live</h2>
        </div>
        <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">{sites.length} sites</span>
      </div>

      {/* ── MOBILE: horizontal snap scroll ── */}
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
            <div className="bg-[#0d0d0d] px-4 py-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold tracking-tight text-lg">{site.name}</h3>
                <span style={{ color: site.color }}>↗</span>
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

      {/* ── DESKTOP: 3-column card grid ── */}
      <div className="hidden md:grid grid-cols-3 gap-4 px-30 lg:px-60">
        {sites.map((site) => (
          <SiteCard key={site.num} site={site} />
        ))}
      </div>

    </section>
  );
}
