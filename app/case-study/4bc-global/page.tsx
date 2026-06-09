import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiTailwindcss, SiFramer, SiGreensock } from "react-icons/si";

export const metadata: Metadata = {
  title: "4BC Global — Vivek S L",
  description:
    "Premium B2B Digital Platform for MEA's Leading Specialist Research & Advisory Firm — Next.js, WebGL, GSAP, Framer Motion",
};

const scaleStats = [
  { value: "450+", label: "Completed engagements" },
  { value: "40+", label: "Countries served" },
  { value: "100+", label: "Years combined team experience" },
  { value: "10+", label: "Sectors covered" },
];

const positioningPillars = [
  { id: "01", title: "Method Neutral", desc: "No preferred methodology. The approach is designed around the question, not around available tools." },
  { id: "02", title: "Ground-Level", desc: "Fieldwork and analysis conducted with genuine regional presence, not proxied through offshore teams." },
  { id: "03", title: "Bespoke", desc: "Every engagement is custom-designed. No off-the-shelf reports or templated surveys." },
  { id: "04", title: "AI-Integrated", desc: "Modern analytical tools layered over traditional research rigour for faster and deeper insights." },
  { id: "05", title: "Senior-Led", desc: "Every project is led by a director with 15+ years of experience. No junior-only engagements." },
];

const lifecycleStages = [
  {
    stage: "Stage 1",
    label: "Inception",
    tagline: "Enter with Confidence",
    services: ["Go-to-Market Strategy", "Market Feasibility Assessment", "Business Plan Development", "Market Entry Strategy", "Go/No-Go Decision Support", "Partner Identification & Evaluation"],
  },
  {
    stage: "Stage 2",
    label: "Growth",
    tagline: "Scale Smart. Outpace Your Rivals",
    services: ["Product Strategy", "Customer Growth Intelligence", "Pricing Strategy", "Distribution Strategy", "Network Planning", "Partner Evaluation"],
  },
  {
    stage: "Stage 3",
    label: "Maturity",
    tagline: "Defend Position. Optimise Returns",
    services: ["Network Optimisation Strategy", "Customer Retention Programs", "Brand Health Tracking", "Channel Efficiency Review", "Competitive Response Planning"],
  },
  {
    stage: "Stage 4",
    label: "Renewal",
    tagline: "Pivot. Diversify. Grow Again",
    services: ["Diversification Strategy", "Portfolio Rebalancing", "Feasibility Studies", "New Market Assessment"],
  },
];

const proprietaryPlatforms = [
  {
    id: "InfUSE",
    type: "Secondary Research Intelligence Platform",
    benefit: "Delivers structured MEA market intelligence in as little as 5 working days — bypassing months of primary research where secondary data suffices.",
    coverage: "Pan-MEA, sector-specific databases, regulatory environments, competitive landscapes",
  },
  {
    id: "Landscape",
    type: "Geo-Mapping & Network Expansion Tool",
    benefit: "Combines thousands of GPS data points with cluster mapping and format optimisation to identify optimal expansion locations.",
    coverage: "Mall catchment, fuel station networks, branch optimisation, pedestrian flow studies",
  },
  {
    id: "ImpactIQ",
    type: "Socio-Economic Impact Measurement Framework",
    benefit: "Provides defensible, structured impact data for government, development, and corporate clients who need to demonstrate economic or social contribution.",
    coverage: "Economic impact, social impact, environmental impact, event performance",
  },
];

const colorTokens = [
  { token: "Primary", label: "Navy Blue", hex: "#2B4A8C", bg: "#2B4A8C", usage: "Navigation, headings, authority surfaces" },
  { token: "Accent", label: "Golden Amber", hex: "#E8A020", bg: "#E8A020", usage: "CTAs, highlights, pill buttons, active states" },
  { token: "Secondary", label: "Deep Plum", hex: "#7D2B5E", bg: "#7D2B5E", usage: "Section separation, selective visual contrast" },
  { token: "Background", label: "Light Navy Tint", hex: "#EEF3FF", bg: "#EEF3FF", usage: "Subtle section backgrounds, card tints" },
  { token: "Body text", label: "Dark Charcoal", hex: "#1A1A2E", bg: "#1A1A2E", usage: "All body copy and secondary headings" },
  { token: "Borders", label: "Warm Grey", hex: "#E2DEDE", bg: "#E2DEDE", usage: "Card borders, dividers, input outlines" },
];

const typographyScale = [
  { element: "Hero H1", size: "88px / 2.75rem", weight: "800", tracking: "−0.04em" },
  { element: "Section H2", size: "44–56px", weight: "700", tracking: "−0.02em" },
  { element: "Card H3", size: "18–22px", weight: "600", tracking: "−0.01em" },
  { element: "Eyebrow labels", size: "14px", weight: "600", tracking: "+0.1em (uppercase)" },
  { element: "Body copy", size: "15–16px", weight: "400", tracking: "0" },
];

const signatureElements = [
  {
    title: "Grainient (WebGL)",
    tag: "OGL · Custom Component",
    desc: "Hero background built on a custom OGL-based WebGL component. Layers multiple colour stops (navy, plum, amber) with warp/distortion, grain texture overlay, and subtle animation — a living, textured background impossible to replicate in CSS alone.",
  },
  {
    title: "Gradient Text Animation",
    tag: "CSS · Interactive",
    desc: "Key headline words use a CSS gradient effect that shifts on hover, reinforcing brand energy on the most-read copy on the site. Interactive and purposeful.",
  },
  {
    title: "SVG Ring Geometry",
    tag: "SVG · Decorative",
    desc: "Ring elements placed in the hero at 7% opacity, providing compositional balance without competing with content. Combined with a layered MEA skyline silhouette, they ground the hero in regional identity.",
  },
  {
    title: "Wave Section Dividers",
    tag: "SVG · Layout",
    desc: "Subtle SVG wave transitions between sections soften hard-edge colour changes — a detail that contributes to the premium, considered feel without relying on decorative imagery.",
  },
];

const navRoutes = [
  { route: "About Us", intent: "Who we are, our story, our team", audience: "Senior stakeholders vetting the firm" },
  { route: "Services", intent: "What we do, organised by lifecycle stage", audience: "New business prospects" },
  { route: "Sectors", intent: "Where we have depth, by industry", audience: "Prospects self-qualifying by sector" },
  { route: "Tools", intent: "Our proprietary platforms", audience: "Analysts and platform assessors" },
  { route: "Case Studies", intent: "Proof of work, filterable by sector", audience: "Returning clients and evaluators" },
];

const interactionPatterns = [
  { interaction: "Card hover", behaviour: "Lift effect (translateY −4px, shadow increase), icon scale, text colour shift" },
  { interaction: "Team card click", behaviour: "Animated bio expansion in-place — no page navigation" },
  { interaction: "Case study card click", behaviour: "Full-screen modal with challenge / approach / outcome" },
  { interaction: "Sector filter", behaviour: "Instant client-side filter with fade transition" },
  { interaction: "Navbar on scroll", behaviour: "Background transitions from transparent to white with shadow" },
  { interaction: "Mobile menu open", behaviour: "GSAP-animated hamburger — lines rotate 45°/−45°, menu slides down" },
  { interaction: "Form submission", behaviour: "Spinner state → success confirmation with same-day response messaging" },
];

const techStack = [
  { layer: "Framework", technology: "Next.js (App Router)", version: "14.2.3" },
  { layer: "Language", technology: "TypeScript", version: "5" },
  { layer: "Styling", technology: "Tailwind CSS", version: "3.4.1" },
  { layer: "Animation", technology: "Framer Motion", version: "11.0.0" },
  { layer: "Animation (advanced)", technology: "GSAP", version: "3.14.2" },
  { layer: "WebGL", technology: "OGL", version: "1.0.11" },
  { layer: "Icons", technology: "Lucide React", version: "0.379.0" },
  { layer: "React", technology: "React 18", version: "18" },
];

const archDecisions = [
  {
    title: "Custom WebGL Grainient",
    desc: "Rather than CSS gradients or third-party animation libraries, a custom OGL-based WebGL component handles the hero background. This provides finer artistic control over the animated gradient and grain texture — a deliberate investment in visual differentiation.",
  },
  {
    title: "Framer Motion + GSAP Dual Strategy",
    desc: "Framer Motion handles declarative scroll-triggered animations (section reveals, staggered cards). GSAP handles imperative animations requiring precise timeline control (hamburger rotation, complex entrance sequences). The two libraries complement rather than compete.",
  },
  {
    title: "React Context for Contact Modal",
    desc: "A ContactModalProvider wraps the entire application, enabling any component to trigger the contact modal without prop drilling. The modal pre-fills the service area when opened from a specific service page.",
  },
  {
    title: "No Headless CMS",
    desc: "Content maintained directly in TypeScript data files (/lib/case-studies-data.ts, /lib/sectors-data.ts). Prioritises developer velocity and eliminates CMS overhead for a team that updates content infrequently.",
  },
];

const designRationale = [
  { choice: "Director bios with full credentials", rationale: "Reduces 'who will actually work on this?' anxiety in high-trust B2B sales" },
  { choice: "450+ engagements stat prominent in hero", rationale: "Establishes scale credibility immediately, before a prospect reads a word" },
  { choice: "Case studies filterable by sector", rationale: "Lets prospects self-qualify — if their sector is covered, trust rises rapidly" },
  { choice: "Same-day response on contact form", rationale: "Reduces friction at the critical inquiry moment" },
  { choice: "No junior team members listed", rationale: "Reinforces senior-led positioning; the team shown is the team deployed" },
  { choice: "Lifecycle-framed services", rationale: "Positions the firm as a long-term partner, not a transactional vendor" },
];

export default function FourBCGlobalPage() {
  return (
    <main className="bg-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <section className="relative bg-black px-8 md:px-30 lg:px-60 pt-20 pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 25% 50%, #2B4A8C 0%, #7D2B5E 40%, #000000 75%)" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="relative">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Brand Identity / Web Platform / MEA Market Research</p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mb-4">
            4BC Global
          </h1>
          <p className="text-[#E8A020]/80 text-sm tracking-widest uppercase mb-6">Clarity Where Data is Opaque</p>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Premium digital platform for a specialist MEA market research and advisory firm — full brand identity, multi-route site, WebGL hero, and a filterable 30+ case study library.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://4bcglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300 text-xs tracking-widest uppercase px-4 py-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              4bcglobal.com ↗
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="border border-white/15 text-white/50 text-xs tracking-widest uppercase px-4 py-2">Dubai HQ · UK Office</span>
            <span className="border border-white/15 text-white/50 text-xs tracking-widest uppercase px-4 py-2">Founded 2020 — Ex-Kantar MENA</span>
          </div>
        </div>
      </section>

      {/* ── META STRIP ── */}
      <div className="px-8 md:px-30 lg:px-60 py-12 border-b border-neutral-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-neutral-400 text-[10px] tracking-[0.25em] uppercase">Role</p>
            <p className="text-neutral-900 text-sm leading-relaxed">Lead Designer & Frontend Engineer</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-neutral-400 text-[10px] tracking-[0.25em] uppercase">Stack</p>
            <div className="flex flex-wrap gap-2">
              {([
                { icon: <Image src="/icons/nextjs.svg" width={13} height={13} alt="Next.js" unoptimized />, label: "Next.js 14" },
                { icon: <Image src="/icons/typescript.svg" width={13} height={13} alt="TypeScript" unoptimized />, label: "TypeScript" },
                { icon: <SiTailwindcss size={13} color="#06B6D4" />, label: "Tailwind" },
                { icon: <SiFramer size={13} color="#0055FF" />, label: "Framer Motion" },
                { icon: <SiGreensock size={13} color="#88CE02" />, label: "GSAP" },
                { icon: null, label: "OGL/WebGL" },
              ] as { icon: React.ReactNode; label: string }[]).map((chip) => (
                <span key={chip.label} className="flex items-center gap-1.5 border border-neutral-200 px-2.5 py-1.5 text-neutral-600 text-xs">
                  {chip.icon}
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-neutral-400 text-[10px] tracking-[0.25em] uppercase">Client</p>
            <p className="text-neutral-900 text-sm leading-relaxed">4BC Global — MEA Market Research & Advisory</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-neutral-400 text-[10px] tracking-[0.25em] uppercase">Deliverables</p>
            <p className="text-neutral-900 text-sm leading-relaxed">Brand Identity · Multi-Route Site · WebGL Hero · Case Study Library</p>
          </div>
        </div>
      </div>

      {/* ── 01 BUSINESS OVERVIEW ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">01 — Business Overview</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Born from the leadership team that built Kantar MENA's fastest-growing research unit
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              4BC Global was founded in 2020 by the leadership team that built Kantar MENA's fastest-growing research unit between 2007 and 2020. When the founding partners stepped out as an independent firm, they brought with them 100+ years of combined regional expertise, established client relationships, proven methodologies, and deep institutional knowledge.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              The firm's thesis: MEA markets are complex, data-scarce, and frequently misunderstood by outsiders. Generic research firms apply templated, Western-biased approaches that fail to capture ground-level nuance. 4BC Global fills this gap with method-neutral, bespoke, director-led research built specifically for how these markets actually work.
            </p>
          </div>
        </div>

        {/* Before callout */}
        <div className="bg-neutral-50 border-l-2 border-neutral-300 pl-8 py-6 mb-16">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-3">The Brief</p>
          <p className="text-neutral-700 text-base leading-relaxed max-w-3xl">
            When the 4BC partners stepped out of Kantar MENA in 2020, they carried 100+ years of combined expertise, established enterprise client relationships, and a track record of building the fastest-growing research unit in the region. What they didn't carry was a digital presence. Their website was a placeholder — no case studies, no visual identity, no proposition that matched who they actually were. Enterprise clients Googling the firm before a pitch found nothing that reflected the calibre inside the room.
          </p>
          <p className="text-neutral-500 text-sm leading-relaxed mt-3 max-w-3xl">
            The task: build a full digital platform and brand identity that made the firm's credibility visible before the first meeting — not after.
          </p>
        </div>

        {/* Scale stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-100 mb-16">
          {scaleStats.map((s) => (
            <div key={s.label} className="bg-white p-10 flex flex-col gap-3">
              <p className="text-neutral-900 text-4xl tracking-tight">{s.value}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Positioning pillars */}
        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Five Differentiation Pillars</p>
          <div className="flex flex-col gap-px bg-neutral-100">
            {positioningPillars.map((p) => (
              <div key={p.id} className="bg-white px-10 py-6 flex gap-8 items-start">
                <span className="text-neutral-200 text-xs tracking-widest shrink-0 pt-0.5">{p.id}</span>
                <p className="text-neutral-900 text-base w-40 shrink-0">{p.title}</p>
                <p className="text-neutral-400 text-base leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy State image */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full relative aspect-16/7">
          <Image src="/images/4bc/legacy-state.webp" alt="4BC Global — Legacy State Documentation" fill sizes="(max-width: 768px) calc(100vw - 64px), (max-width: 1024px) calc(100vw - 256px), calc(100vw - 480px)" quality={90} className="object-cover" />
        </div>
      </div>

      {/* ── 02 SERVICE ARCHITECTURE ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24 bg-neutral-50">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">02 — Service Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Services structured around the client's stage in their business lifecycle
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            Rather than a flat list of research services, the IA frames everything around a Business Lifecycle Advisory model — a deliberate positioning choice that communicates long-term partnership rather than transactional vendor relationships. Every prospect can immediately locate where they are in the journey.
          </p>
        </div>

        {/* Lifecycle stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 mb-16">
          {lifecycleStages.map((stage, i) => (
            <div key={stage.stage} className={`p-10 flex flex-col gap-5 ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}>
              <div>
                <p className="text-neutral-300 text-xs tracking-widest mb-1">{stage.stage}</p>
                <p className="text-neutral-900 text-2xl tracking-tight">{stage.label}</p>
                <p className="text-[#E8A020] text-xs tracking-wider mt-1">{stage.tagline}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {stage.services.map((s) => (
                  <li key={s} className="text-neutral-500 text-sm flex gap-3">
                    <span className="text-neutral-200 shrink-0">—</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proprietary platforms */}
        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Three Proprietary Platforms</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
            {proprietaryPlatforms.map((p) => (
              <div key={p.id} className="bg-white p-10 flex flex-col gap-5">
                <div>
                  <p className="text-neutral-900 text-2xl tracking-tight">4BC {p.id}</p>
                  <p className="text-neutral-400 text-xs tracking-wider mt-1">{p.type}</p>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">{p.benefit}</p>
                <p className="text-neutral-300 text-xs leading-relaxed border-t border-neutral-100 pt-4">{p.coverage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 DESIGN SYSTEM ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">03 — Design System</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Navy, amber, and plum — a palette with a clear point of view
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              The visual language communicates three things simultaneously: premium quality, regional expertise, and intellectual rigour. The design avoids the bland corporate grey common in consulting websites — instead using a distinctive, confident palette that signals a firm with conviction.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              Navy/amber is the strategic pairing: navy grounds the brand in authority while amber drives action. Deep plum provides visual separation without coldness — used selectively for maximum effect.
            </p>
          </div>
        </div>

        {/* Colour tokens */}
        <div className="mb-16">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Colour System</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-neutral-100">
            {colorTokens.map((t) => (
              <div key={t.hex} className="bg-white p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 shrink-0 border border-neutral-100" style={{ backgroundColor: t.bg }} />
                  <div>
                    <p className="text-neutral-900 text-sm">{t.label}</p>
                    <p className="text-neutral-400 text-xs font-mono">{t.hex}</p>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{t.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mb-16">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Typography — Plus Jakarta Sans</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
            <div className="bg-white p-10 flex flex-col gap-4">
              <p className="text-neutral-900 text-5xl font-extrabold tracking-tight leading-none">
                Plus Jakarta Sans
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed mt-2">
                Single-font system across all elements. Tight negative tracking on large headings creates a premium, editorial feel. Generous line-height (1.55–1.65) on body copy ensures readability across long-form service descriptions.
              </p>
            </div>
            <div className="bg-white p-10">
              <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Type Scale</p>
              <div className="flex flex-col divide-y divide-neutral-100">
                {typographyScale.map((t) => (
                  <div key={t.element} className="py-3 grid grid-cols-4 items-center">
                    <p className="text-neutral-500 text-xs">{t.element}</p>
                    <p className="text-neutral-700 text-xs">{t.size}</p>
                    <p className="text-neutral-700 text-xs">{t.weight}</p>
                    <p className="text-neutral-400 text-xs font-mono">{t.tracking}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Signature visual elements */}
        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Signature Visual Elements</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
            {signatureElements.map((el) => (
              <div key={el.title} className="bg-white p-10 flex flex-col gap-4">
                <div>
                  <p className="text-neutral-900 text-xl">{el.title}</p>
                  <p className="text-[#E8A020] text-xs tracking-wider mt-1">{el.tag}</p>
                </div>
                <p className="text-neutral-400 text-base leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Identity image */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full relative aspect-16/7">
          <Image src="/images/4bc/brand-identity.webp" alt="4BC Global — Brand Identity Assets" fill sizes="(max-width: 768px) calc(100vw - 64px), (max-width: 1024px) calc(100vw - 256px), calc(100vw - 480px)" quality={90} className="object-cover" />
        </div>
      </div>

      {/* ── 04 UX & NAVIGATION ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24 bg-neutral-50">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">04 — UX & Navigation</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Five routes. Four buyer journeys. Every path ends at a contact action.
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            The IA is flat and task-oriented. Five primary destinations serve distinct user intents — from the senior stakeholder vetting the firm to the analyst exploring platform capability. All pages lead back to a contact action via a persistent navbar CTA, inline service CTAs, or the footer contact block.
          </p>
        </div>

        {/* Navigation routes */}
        <div className="border border-neutral-200 divide-y divide-neutral-100 mb-16">
          <div className="grid grid-cols-3 gap-0 bg-neutral-900 px-8 py-4">
            {["Route", "Intent", "Primary Audience"].map((h) => (
              <p key={h} className="text-white/40 text-xs tracking-widest uppercase">{h}</p>
            ))}
          </div>
          {navRoutes.map((r) => (
            <div key={r.route} className="grid grid-cols-3 gap-0 bg-white px-8 py-5 items-center">
              <p className="text-neutral-900 text-sm">{r.route}</p>
              <p className="text-neutral-500 text-sm">{r.intent}</p>
              <p className="text-neutral-400 text-sm">{r.audience}</p>
            </div>
          ))}
        </div>

        {/* Interaction patterns */}
        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Interaction Patterns</p>
          <div className="border border-neutral-200 divide-y divide-neutral-100">
            {interactionPatterns.map((p) => (
              <div key={p.interaction} className="flex items-start gap-8 px-8 py-5 bg-white">
                <p className="text-neutral-900 text-sm w-44 shrink-0">{p.interaction}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{p.behaviour}</p>
              </div>
            ))}
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed mt-4 max-w-2xl">
            Scroll animations use Framer Motion's <code className="text-neutral-600 text-xs bg-neutral-100 px-1.5 py-0.5 rounded">whileInView</code> with staggered child delays (60–80ms intervals). Fade + 20px translateY, 500ms ease-out. Creates controlled reveal rather than information dumping.
          </p>
        </div>
      </section>

      {/* Workflow Session image */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full relative aspect-16/7">
          <Image src="/images/4bc/workflow-session.webp" alt="4BC Global — Workflow Session" fill sizes="(max-width: 768px) calc(100vw - 64px), (max-width: 1024px) calc(100vw - 256px), calc(100vw - 480px)" quality={90} className="object-cover" />
        </div>
      </div>

      {/* ── 05 TECHNICAL ARCHITECTURE ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">05 — Technical Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Modern stack with deliberate architectural decisions at every layer
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            Next.js App Router enables hybrid rendering — static generation for content-heavy pages (case studies, sectors) and server components where appropriate. Two animation libraries, a custom WebGL component, and a global React Context for the contact modal all operate without friction.
          </p>
        </div>

        {/* Stack table */}
        <div className="border border-neutral-200 divide-y divide-neutral-100 mb-16">
          <div className="grid grid-cols-3 bg-neutral-900 px-8 py-4">
            {["Layer", "Technology", "Version"].map((h) => (
              <p key={h} className="text-white/40 text-xs tracking-widest uppercase">{h}</p>
            ))}
          </div>
          {techStack.map((t) => (
            <div key={t.layer} className="grid grid-cols-3 bg-white px-8 py-5 items-center">
              <p className="text-neutral-400 text-sm">{t.layer}</p>
              <p className="text-neutral-900 text-sm">{t.technology}</p>
              <p className="text-neutral-400 text-sm font-mono">{t.version}</p>
            </div>
          ))}
        </div>

        {/* Architecture decisions */}
        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Architecture Decisions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
            {archDecisions.map((d) => (
              <div key={d.title} className="bg-white p-10 flex flex-col gap-4">
                <p className="text-neutral-900 text-xl">{d.title}</p>
                <p className="text-neutral-400 text-base leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Platform image */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full relative aspect-16/7">
          <Image src="/images/4bc/live-platform.webp" alt="4BC Global — Live Platform Screenshots" fill sizes="(max-width: 768px) calc(100vw - 64px), (max-width: 1024px) calc(100vw - 256px), calc(100vw - 480px)" quality={90} className="object-cover" />
        </div>
      </div>

      {/* ── 06 RESOLUTION ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24 border-t border-neutral-100">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">06 — Resolution</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-4 max-w-3xl">
          Every design decision mapped to a business conversion rationale
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-16 max-w-2xl">
          The website's primary commercial objective: convert senior decision-makers with a credible, premium digital presence. Nothing decorative — every choice has a reason.
        </p>

        {/* Design rationale table */}
        <div className="border border-neutral-100 divide-y divide-neutral-100 mb-16">
          {designRationale.map((r) => (
            <div key={r.choice} className="flex items-start justify-between gap-8 px-8 py-6 bg-white">
              <p className="text-neutral-900 text-sm w-64 shrink-0">{r.choice}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{r.rationale}</p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="p-10 md:p-16 max-w-3xl" style={{ background: "radial-gradient(ellipse at 0% 100%, #2B4A8C 0%, #7D2B5E 40%, #0a0a0a 75%)" }}>
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Brand Narrative</p>
          <p className="text-white text-2xl md:text-3xl leading-snug tracking-tight">
            Born From Excellence. Built For What's Next. — converting a founding backstory into a competitive signal, across every page.
          </p>
        </div>
      </section>

      {/* Footer nav */}
      <div className="px-8 md:px-30 lg:px-60 py-16 border-t border-neutral-100">
        <div className="flex items-center justify-between mb-10">
          <Link href="/" className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase">
            ← Back to Portfolio
          </Link>
          <a href="mailto:vivekshajilekha@gmail.com" className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase">
            Start a Project
          </a>
        </div>
        <div className="flex items-center justify-between border-t border-neutral-100 pt-10">
          <Link href="/case-study/insure-first" className="group flex flex-col gap-1">
            <p className="text-neutral-300 text-xs tracking-widest uppercase">← Previous</p>
            <p className="text-neutral-700 text-sm group-hover:text-black transition-colors duration-300">Insure First</p>
          </Link>
          <Link href="/case-study/talk-of-the-town" className="group flex flex-col gap-1 text-right">
            <p className="text-neutral-300 text-xs tracking-widest uppercase">Next →</p>
            <p className="text-neutral-700 text-sm group-hover:text-black transition-colors duration-300">Talk of the Town</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
