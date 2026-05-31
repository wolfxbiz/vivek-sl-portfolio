import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Vivek S L",
  description: "Case studies in UX design, conversion engineering, and product strategy.",
};

const caseStudies: {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
}[] = [
  {
    slug: "paperwurk",
    category: "UX Design / Enterprise Platform",
    title: "Paperwurk",
    subtitle: "Architecting a Multi-Tenant B2B Ecosystem: Traditional UX Mapping and Comprehensive System Layout Design",
    image: "/images/paperwurk-thumb.webp",
    tags: ["User Research", "Wireframing", "System Design", "Bilingual UX"],
  },
  {
    slug: "alya-auditors",
    category: "CRO / Lead Generation",
    title: "Alya Auditors",
    subtitle: "Conversion-Focused Campaign Engineering: Translating Corporate Strategy Into High-Impact Digital Ad Experiences",
    image: "/images/alya-auditors-thumb.webp",
    tags: ["Landing Pages", "Ad Design", "CRO", "Mobile-First"],
  },
  {
    slug: "4bc-global",
    category: "Brand / Web Design",
    title: "4BC Global",
    subtitle: "Redesigning Corporate Market Research: Turning Static Presentation Slides into a High-Performance Digital Platform",
    image: "/images/4bc-global-thumb.webp",
    tags: ["Brand Identity", "Web Design", "AI-Accelerated Build", "Design System"],
  },
  {
    slug: "ensurio-first",
    category: "B2B Growth / Funnel Engineering",
    title: "Ensurio First",
    subtitle: "Engineering an End-to-End B2B Lead Acquisition Engine: From Paid Social Conversion Funnels to Interactive Diagnostics",
    image: "/images/ensurio-first.webp",
    tags: ["Growth Funnel", "Interactive Tool", "Lead Capture", "Email Nurture"],
  },
  {
    slug: "talk-of-the-town",
    category: "Brand / Editorial UX",
    title: "Talk of the Town",
    subtitle: "Architecting an Editorial Digital Ecosystem: Balancing Whimsical Visual Storytelling with Structured Conversion Funnels for a Modern Publishing House",
    image: "/images/talk-of-the-town.webp",
    tags: ["Brand Identity", "Editorial UX", "WordPress Hand-off", "Conversion Funnel"],
  },
  {
    slug: "turquoic",
    category: "In-House / Brand Overhaul / Frontend Engineering",
    title: "Turquoic",
    subtitle: "In-House Corporate Brand Evolution: Overhauling Legacy Product Architecture and Engineering a Modern Frontend Presence",
    image: "/images/turquoic.webp",
    tags: ["Next.js", "Component Architecture", "Design System", "Production Build"],
  },
  {
    slug: "imex-tires",
    category: "Industrial B2B / Heavy Machinery / Global Procurement",
    title: "IMEX Tires",
    subtitle: "Heavy Industrial B2B E-Commerce: Structuring a High-Reliability Technical Inventory Matrix for Global Logistics Procurement",
    image: "/images/imex-tires.webp",
    tags: ["B2B E-Commerce", "Technical Matrix", "Global Logistics", "Multi-Channel Inquiry"],
  },
  {
    slug: "greek-street-lab",
    category: "Food-Tech / Culinary UX / CRO",
    title: "Greek Street Lab",
    subtitle: "Sensory-Driven Culinary UX: Engineering a Clean, High-Conversion Landing Architecture for Modern Street Culture",
    image: "/images/greek-street-lab.webp",
    tags: ["Sensory UX", "Mobile-First", "CRO", "Food-Tech"],
  },
];

export default function WorkPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Back nav */}
      <div className="px-8 md:px-16 lg:px-24 py-6 border-b border-neutral-100">
        <Link href="/" className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase">
          ← vivek s l
        </Link>
      </div>

      {/* Header */}
      <header className="px-8 md:px-16 lg:px-24 pt-20 pb-16 border-b border-neutral-100">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">Selected Work</p>
        <h1 className="text-neutral-900 text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight max-w-3xl">
          Case Studies
        </h1>
        <p className="text-neutral-400 text-lg leading-relaxed max-w-xl mt-6">
          End-to-end design and engineering work across enterprise platforms, B2B funnels, and brand systems.
        </p>
      </header>

      {/* Case study list */}
      <div className="px-8 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col divide-y divide-neutral-100">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/case-study/${cs.slug}`}
              className="group flex flex-col md:flex-row gap-8 py-14 hover:bg-neutral-50 transition-colors duration-300 -mx-8 md:-mx-16 lg:-mx-24 px-8 md:px-16 lg:px-24"
            >
              {/* Image */}
              <div className="w-full md:w-72 lg:w-80 aspect-video relative overflow-hidden bg-neutral-100 shrink-0">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  priority={i === 0}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center gap-4 flex-1">
                <div className="flex items-center gap-4">
                  <span className="text-neutral-300 text-xs tracking-widest">0{i + 1}</span>
                  <p className="text-neutral-400 text-xs tracking-wider uppercase">{cs.category}</p>
                </div>
                <h2 className="text-neutral-900 text-2xl md:text-3xl tracking-tight leading-snug group-hover:text-neutral-600 transition-colors duration-300">
                  {cs.title}
                </h2>
                <p className="text-neutral-400 text-base leading-relaxed max-w-xl">
                  {cs.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-neutral-100 text-neutral-400 text-xs tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-neutral-400 text-sm tracking-wider group-hover:text-black transition-colors duration-300 mt-2">
                  Read Case Study →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 md:px-16 lg:px-24 py-16 border-t border-neutral-100 flex items-center justify-between">
        <Link href="/" className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase">
          ← Back to Portfolio
        </Link>
        <a href="mailto:vivekshajilekha@gmail.com" className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase">
          Start a Project
        </a>
      </div>
    </main>
  );
}
