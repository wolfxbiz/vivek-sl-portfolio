import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk of the Town — Vivek S L",
  description:
    "Architecting an Editorial Digital Ecosystem: Balancing Whimsical Visual Storytelling with Structured Conversion Funnels for a Modern Publishing House",
};

const palette = [
  { name: "Deep Teal", hex: "#11454F", bg: "bg-[#11454F]", text: "text-white" },
  { name: "Mint", hex: "#BBDCCE", bg: "bg-[#BBDCCE]", text: "text-[#11454F]" },
  { name: "Warm Ivory", hex: "#F5E9CE", bg: "bg-[#F5E9CE]", text: "text-[#11454F]" },
  { name: "Accent Gold", hex: "#FFD264", bg: "bg-[#FFD264]", text: "text-[#11454F]" },
];

const designPrinciples = [
  {
    num: "01",
    title: "Visual Storytelling",
    desc: "Instead of bogging the interface down with dense corporate text, rich symbolic illustrations convey the brand narrative — reinforcing an author-friendly environment through screen space.",
  },
  {
    num: "02",
    title: "The Soft Palette",
    desc: "A calculated arrangement of earthy, calming tones anchored by Deep Teal, Mint, Warm Ivory, and Accent Gold ensures strong contrast and accessibility metrics without compromising warmth.",
  },
  {
    num: "03",
    title: "Elegant Typographic Pairing",
    desc: "Headings leverage a sophisticated serif (Cormorant Infant / Martel) mirroring literary elegance, while body structures are locked into clean Montserrat to maximize reading comfort.",
  },
  {
    num: "04",
    title: "Grid-Based UI Discipline",
    desc: "The layout maps strictly to a multi-column grid alignment system. Clean boundary padding and predictable component spacing maintain visual harmony across all layout transitions.",
  },
];

const pageStructure = [
  { block: "Hero Section", desc: "Whimsical artwork + main value card — 'From Concepts to Best Sellers'" },
  { block: "About Block", desc: "Mission statement and brand introduction — Meet TOTT" },
  { block: "Why TOTT Grid", desc: "4 value proposition quadrants with custom character art icons" },
  { block: "Process Track", desc: "4-step roadmap from Concept → Design → Publishing → Success" },
  { block: "Workbook CTA", desc: "Gated free writing workbook — lead capture + download mechanism" },
  { block: "Contact Form", desc: "Minimalist inline capture fields against a forest landscape graphic" },
];

const funnelStages = [
  {
    stage: "Explore",
    label: "Landing View & Core Grids",
    desc: "Users arrive, engage with the illustrative hero block, and naturally progress through introductory service sections to establish foundational interest.",
    tag: "Initial Interest",
    color: "bg-[#11454F]",
    textColor: "text-white",
    subColor: "text-white/50",
  },
  {
    stage: "Engage",
    label: "Workbook Download CTA",
    desc: "Users enter a low-stress interaction layer — reviewing the 4-step roadmap or downloading the free writing workbook, creating a value-first engagement.",
    tag: "Soft Value Step",
    color: "bg-[#BBDCCE]",
    textColor: "text-[#11454F]",
    subColor: "text-[#11454F]/60",
  },
  {
    stage: "Convert",
    label: "Book Store or Inquiries",
    desc: "With trust established, users encounter hard conversion targets — purchasing from the e-commerce catalog or initiating direct publishing consultations.",
    tag: "Hard Conversion",
    color: "bg-[#F5E9CE]",
    textColor: "text-[#11454F]",
    subColor: "text-[#11454F]/60",
  },
  {
    stage: "Re-engage",
    label: "Editorial Newsletter",
    desc: "For users exiting without a contract, a clean footer with blog links, social nodes, and newsletter sign-up ensures secondary capture for long-term relationship building.",
    tag: "Retention Loop",
    color: "bg-[#FFD264]",
    textColor: "text-[#11454F]",
    subColor: "text-[#11454F]/60",
  },
];

const whyTott = [
  { title: "Made-to-Order Publishing", desc: "Every manuscript is handled as a bespoke creative project — no generic print templates." },
  { title: "Your Literary Architects", desc: "A dedicated creative team guiding authors from initial concept through final publication." },
  { title: "Bespoke Bookmaking", desc: "Custom cover design, interior typesetting, and physical print quality matched to each author's vision." },
  { title: "Books Without Boundaries", desc: "Global distribution pipelines ensuring every title reaches readers across digital and physical channels." },
];

const processSteps = [
  { num: "01", title: "Concept & Creation", desc: "Manuscript development, editorial alignment, and structural story outlining." },
  { num: "02", title: "Design & Development", desc: "Cover art, interior layout typesetting, and brand-matched visual production." },
  { num: "03", title: "Publishing & Distribution", desc: "ISBN registration, print-on-demand setup, and global platform distribution." },
  { num: "04", title: "Promotion & Success", desc: "Launch strategy, social media assets, and reader acquisition campaigns." },
];

const outcomes = [
  { title: "Established Brand Authority", desc: "Translated an abstract concept into a fully realized publishing identity — custom print elements, media assets, and logomarks." },
  { title: "Engineered Intentional UX Paths", desc: "Replaced generic gallery templates with a structured, conversion-driven editorial landing built on solid layout logic." },
  { title: "Flawless Developer Hand-Off", desc: "Structured specification blueprints enabling a developer to deploy on WordPress while preserving every margin, color token, and grid parameter." },
];

export default function TalkOfTheTownPage() {
  return (
    <main className="bg-white min-h-screen pt-16">

      {/* ── HERO ── editorial teal */}
      <section className="relative bg-[#11454F] px-8 md:px-30 lg:px-60 pt-14 md:pt-20 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 90% 10%, #BBDCCE 0%, transparent 50%)" }}
        />
        <div className="relative">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FFD264]" />
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase">Brand / Web Design / Editorial UX</p>
          </div>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mb-4">
            Talk of the Town
          </h1>
          <p className="text-[#BBDCCE]/70 text-sm tracking-widest uppercase mb-4">TOTT Books — First Professional Project</p>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed">
            Architecting an Editorial Digital Ecosystem: Balancing Whimsical Visual Storytelling with Structured Conversion Funnels for a Modern Publishing House
          </p>
        </div>
      </section>

      {/* ── META STRIP ── */}
      <div className="px-8 md:px-30 lg:px-60 py-10 border-b border-neutral-100 bg-[#F5E9CE]/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Role", value: "Lead Brand Architect & UI/UX Designer" },
            { label: "Project Nature", value: "First Professional Project — Full Creative Ownership" },
            { label: "Core Deliverables", value: "Brand Identity, UX Components, User Flow Framework" },
            { label: "Target Framework", value: "Custom WordPress Platform — Strategic Developer Hand-off" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-neutral-400 text-xs tracking-widest uppercase">{item.label}</p>
              <p className="text-neutral-800 text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 CHALLENGE ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">01 — The Challenge & Creative Identity</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            A publishing house that needed to feel poetic and convert like a business
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              TOTT Books was established as a contemporary publishing house built to empower independent authors, celebrate bold storytelling, and remove entry barriers in literature. The core challenge was designing a platform that honors the traditional craft of bespoke bookmaking while functioning as an active lead-acquisition system.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              The interface needed to feel welcoming, poetic, and creative — while keeping user goals organized through clear visual parameters. A balance most publishing sites fail to strike.
            </p>
          </div>
        </div>

        {/* Journey pipeline */}
        <div className="bg-[#F5E9CE]/40 border border-[#F5E9CE] p-10">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-8">The Experience Paradigm</p>
          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4">
            {["Manuscript Spark", "Bespoke Bookmaking Architecture", "Global Distribution Layouts"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-4">
                <div className="px-5 py-4 bg-white border border-[#BBDCCE] text-[#11454F] text-base">{step}</div>
                {i < arr.length - 1 && <span className="text-[#11454F]/30 text-xl hidden md:block">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <div className="px-8 md:px-30 lg:px-60 py-10">

        <div className="w-full aspect-16/7 bg-[#11454F] flex items-center justify-center">

          <span className="text-white/20 text-xs tracking-widest uppercase">Project Image — TOTT Brand Identity & Landing</span>

        </div>

      </div>

      {/* ── 02 DESIGN PRINCIPLES ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">02 — UI Design Principles</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            The editorial canvas — four disciplines that define the system
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            The visual system relies on clear UI disciplines to support an emotional tone of trust, growth, and creativity. Every design decision was grounded in one question: does this feel like a place where authors belong?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100 mb-16">
          {designPrinciples.map((p) => (
            <div key={p.num} className="bg-white p-10 flex flex-col gap-4">
              <span className="text-neutral-300 text-xs tracking-widest">{p.num}</span>
              <p className="text-neutral-900 text-xl">{p.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Colour palette */}
        <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Brand Colour Palette</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-100">
          {palette.map((c) => (
            <div key={c.name} className={`${c.bg} p-8 flex flex-col gap-3`}>
              <div className={`text-xs tracking-widest uppercase ${c.text} opacity-60`}>{c.name}</div>
              <div className={`text-2xl font-mono tracking-tight ${c.text}`}>{c.hex}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed image */}
      <div className="px-8 md:px-30 lg:px-60 py-10">

        <div className="w-full aspect-16/7 bg-[#F5E9CE] flex items-center justify-center">

          <span className="text-[#11454F]/30 text-xs tracking-widest uppercase">Project Image — Design System & Component Library</span>

        </div>

      </div>

      {/* ── 03 PAGE STRUCTURE ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">03 — UX Blueprint</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Page structure map — six sequential intent blocks
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            The storefront layout is organized into distinct, bite-sized components designed to introduce the brand and handle user intent sequentially — each block passing the visitor forward with increasing conversion pressure.
          </p>
        </div>

        {/* Page structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Wireframe sim */}
          <div className="bg-neutral-50 border border-neutral-100 p-8">
            <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Page Layout — Wireframe Simulation</p>
            <div className="flex flex-col gap-1">
              {pageStructure.map((section, i) => (
                <div
                  key={section.block}
                  className="flex items-stretch gap-0"
                >
                  <div className="w-1 shrink-0" style={{ background: i === 0 ? "#11454F" : i === 4 ? "#FFD264" : "#BBDCCE" }} />
                  <div className="bg-white border border-neutral-100 p-4 flex-1 flex flex-col gap-0.5 ml-3">
                    <p className="text-neutral-700 text-sm">{section.block}</p>
                    <p className="text-neutral-400 text-xs leading-relaxed">{section.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why TOTT grid */}
          <div className="flex flex-col gap-6">
            <p className="text-neutral-400 text-xs tracking-widest uppercase">The "Why TOTT" Core Matrix</p>
            <div className="grid grid-cols-2 gap-px bg-neutral-100">
              {whyTott.map((item) => (
                <div key={item.title} className="bg-white p-6 flex flex-col gap-2">
                  <div className="w-6 h-6 rounded-sm bg-[#BBDCCE] mb-2" />
                  <p className="text-neutral-900 text-sm">{item.title}</p>
                  <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process steps */}
        <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">The Step Roadmap — Concept to Success</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-neutral-100">
          {processSteps.map((step, i) => (
            <div key={step.num} className="bg-white p-8 flex flex-col gap-3 relative">
              <span className="text-neutral-300 text-xs tracking-widest">{step.num}</span>
              <p className="text-neutral-900 text-base">{step.title}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
              {i < processSteps.length - 1 && (
                <span className="text-neutral-200 text-lg absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden md:block">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed image */}
      <div className="px-8 md:px-30 lg:px-60 py-10">

        <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center">

          <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Full Page Screens</span>

        </div>

      </div>

      {/* ── 04 USER FLOW ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">04 — User Flow Breakdown</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            The 4-tier funnel path — from curious visitor to published author
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            To ensure the interface successfully converts curious site visitors into published authors, the component layout maps tightly to a 4-tiered interaction framework — each stage progressively increasing trust and commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-neutral-100">
          {funnelStages.map((stage) => (
            <div key={stage.stage} className={`${stage.color} p-8 flex flex-col gap-4`}>
              <div>
                <p className={`text-xs tracking-widest uppercase mb-1 ${stage.subColor}`}>{stage.stage}</p>
                <p className={`text-xl ${stage.textColor}`}>{stage.label}</p>
              </div>
              <p className={`text-sm leading-relaxed ${stage.textColor} opacity-70`}>{stage.desc}</p>
              <span className={`text-xs tracking-wider ${stage.subColor} border-t border-current/10 pt-4 mt-auto`}>
                {stage.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 05 RESOLUTION ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24 border-t border-neutral-100">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">05 — Resolution</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-4 max-w-3xl">
          A first professional project delivered as a fully realized, conversion-driven publishing identity
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-16 max-w-2xl">
          By taking complete ownership of TOTT's creative strategy and visual architecture, this project became a foundational proof of cross-disciplinary design — brand, UX, and developer hand-off in one unified delivery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100 mb-16">
          {outcomes.map((item) => (
            <div key={item.title} className="bg-white p-10 flex flex-col gap-4">
              <p className="text-neutral-900 text-xl">{item.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing — brand colored */}
        <div className="bg-[#11454F] p-10 md:p-16 max-w-3xl">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Reflection</p>
          <p className="text-white text-2xl md:text-3xl leading-snug tracking-tight">
            TOTT proved that a publishing house doesn't have to choose between feeling like literature and functioning like a business. Great UX makes both true at once.
          </p>
          <div className="flex items-center gap-3 mt-8">
            <div className="w-2 h-2 rounded-full bg-[#FFD264]" />
            <p className="text-[#FFD264]/70 text-xs tracking-widest uppercase">First Professional Project — Full Creative Ownership</p>
          </div>
        </div>
      </section>

      {/* Footer */}
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
          <Link href="/case-study/4bc-global" className="group flex flex-col gap-1">
            <p className="text-neutral-300 text-xs tracking-widest uppercase">← Previous</p>
            <p className="text-neutral-700 text-sm group-hover:text-black transition-colors duration-300">4BC Global</p>
          </Link>
          <Link href="/case-study/turquoic" className="group flex flex-col gap-1 text-right">
            <p className="text-neutral-300 text-xs tracking-widest uppercase">Next →</p>
            <p className="text-neutral-700 text-sm group-hover:text-black transition-colors duration-300">Turquoic</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
