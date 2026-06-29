'use client';

import Image from 'next/image';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const roles = ['Product Designer', 'Brand Designer', 'Web Experience Designer'];
const services = [
  'Product Design',
  'Website Design & Development',
  'Brand Identity',
  'CRO Landing Pages',
];
const tools = [
  { src: '/icons/figma.svg', alt: 'Figma' },
  { src: '/icons/creative-cloud.webp', alt: 'Adobe CC' },
  { src: '/icons/affinity.webp', alt: 'Affinity' },
  { src: '/icons/vscode.webp', alt: 'VS Code' },
  { src: '/icons/claude-code.webp', alt: 'Claude' },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col px-8 md:px-30 lg:px-60 pt-24 md:pt-28 pb-12 md:pb-16 bg-black overflow-hidden">

      {/* Background geometric grid */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-grid" x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse">
            <path
              d="M 72 0 L 36 36 L 72 72 M 0 0 L 36 36 L 0 72"
              fill="none"
              stroke="white"
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" opacity="0.06" />
      </svg>

      {/* ── Main content ──────────────────────────────────── */}
      <div className="relative z-10 flex flex-col md:flex-row items-start gap-7 md:gap-10">

        <div className="flex flex-col gap-7 md:gap-9 flex-1">

        {/* Roles */}
        <div className="flex flex-wrap items-center gap-y-1">
          {roles.map((role, i) => (
            <span key={role} className="flex items-center">
              <span className="text-white/50 text-[8px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] uppercase">
                {role}
              </span>
              {i < roles.length - 1 && (
                <span className="text-white/20 mx-2 md:mx-6 select-none">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-[1.08] tracking-tight max-w-4xl">
          I design digital products and experiences that help startups launch, grow, and convert.
        </h1>

        {/* Subtext */}
        <p className="text-white/40 text-xs md:text-sm leading-relaxed max-w-lg">
          Product Designer with 2+ years experience shipping SaaS platforms, websites, and digital products across UAE, India, and global markets.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <HoverBorderGradient
            as="a"
            href="https://wa.me/918921284894?text=Hi%20Vivek%2C%20I%27d%20like%20to%20work%20together"
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
            className="text-white text-sm tracking-wide justify-center w-full sm:w-auto"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Let's Work Together
          </HoverBorderGradient>
        </div>

        {/* Services */}
        <div className="hidden sm:flex flex-wrap items-center gap-y-2">
          {services.map((service, i) => (
            <span key={service} className="flex items-center">
              <span className="text-white/50 text-[10px] md:text-[11px] tracking-[0.25em] uppercase">
                • {service}
              </span>
              {i < services.length - 1 && (
                <span className="text-white/20 mx-3 md:mx-5 select-none">|</span>
              )}
            </span>
          ))}
        </div>

        </div>

        {/* Video + logos — right column */}
        <div className="flex flex-col flex-shrink-0 md:self-stretch w-full md:w-auto">
          <div className="hidden md:block h-14 flex-shrink-0" />
          <div className="w-full md:w-64 h-44 md:h-44 overflow-hidden rounded-2xl">
            <video
              src="/videos/hero.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block flex-1" />
          <div className="flex items-center justify-center md:justify-end gap-4 mt-8 md:mt-0">
            {tools.map((tool) => (
              <div key={tool.alt} className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center">
                <Image src={tool.src} alt={tool.alt} width={32} height={32} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
