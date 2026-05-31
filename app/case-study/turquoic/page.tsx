import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turquoic — Vivek S L",
  description:
    "In-House Corporate Brand Evolution: Overhauling Legacy Product Architecture and Engineering a Modern Frontend Presence",
};

const technicalDebt = [
  {
    num: "01",
    title: "Auditing Technical Debt",
    desc: "The previous site relied on monolithic, unoptimized components causing rendering bottlenecks and layout breakage across mobile viewports.",
    before: "Monolithic components",
    after: "Modular, isolated blocks",
  },
  {
    num: "02",
    title: "Visual Alignment Gaps",
    desc: "The corporate interface lacked a distinct visual signature, resulting in a generic aesthetic that failed to mirror our high-end engineering standards.",
    before: "Generic aesthetic",
    after: "High-contrast technical identity",
  },
  {
    num: "03",
    title: "Performance Optimization",
    desc: "Heavy asset delivery pipelines and unorganized file structures degraded page load speeds and search engine visibility.",
    before: "Heavy asset pipelines",
    after: "Optimized DOM + clean delivery",
  },
];

const processSteps = [
  { step: "01", title: "Legacy Visual Audit", desc: "Full structural teardown of the existing codebase — identifying layout breakages, unoptimized assets, and component anti-patterns." },
  { step: "02", title: "Component-Driven Remapping", desc: "Re-architected every layout block as an isolated, reusable component module with strict prop interfaces and zero layout mutation across pages." },
  { step: "03", title: "Natively Compiled Code Layouts", desc: "Bypassed static canvas handoffs entirely — moved from structural wireframes directly into the code environment with concurrent responsive testing." },
  { step: "04", title: "Production Release", desc: "Managed the full production build, asset optimization pipeline, and Vercel deployment — with GitHub repository organized to modern frontend engineering standards." },
];

const architectureBlocks = [
  {
    id: "A",
    title: "The Header & Navigation Hub",
    desc: "A sticky, lightweight navigation bar featuring minimal padding, micro-interaction states, and quick action anchors to guarantee instant accessibility across all viewports.",
    specs: ["Sticky positioning", "Micro-interaction states", "Quick action anchors", "Viewport-fluid"],
  },
  {
    id: "B",
    title: "The Corporate Grid Array",
    desc: "A multi-column responsive grid displaying internal project pillars. Uses strict grid layout definitions, sharp card borders, and generous background contrast to highlight information instantly.",
    specs: ["Multi-column responsive", "Sharp card borders", "High-contrast backgrounds", "Information hierarchy"],
  },
  {
    id: "C",
    title: "Structural Space Framework",
    desc: "A type-scale and margin visual guide detailing the precise layout padding rules used to enforce consistent spatial rhythm across all product views.",
    specs: ["Type-scale system", "Margin precision", "Spatial rhythm enforcement", "Cross-view consistency"],
  },
];

const outcomes = [
  { title: "Successful In-House Transformation", desc: "Delivered a highly polished, completely redesigned web asset that elevates the company's technical and digital authority.", metric: "Full ownership" },
  { title: "Eradicated Structural Friction", desc: "Eliminated chaotic legacy components in favor of clean, modular, and reusable layout blocks with zero mutation across pages.", metric: "Zero layout breakage" },
  { title: "Performance-Ready Code Architecture", desc: "Shipped a production-ready, ultra-responsive codebase on GitHub guaranteeing fast page speeds, clean asset loading, and absolute responsiveness.", metric: "Live on Vercel" },
];

export default function TurquoicPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Back nav */}
      <div className="px-8 md:px-16 lg:px-24 py-6 border-b border-neutral-100">
        <Link href="/" className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase">
          ← vivek s l
        </Link>
      </div>

      {/* ── HERO ── sharp matte black */}
      <section className="relative bg-neutral-950 px-8 md:px-16 lg:px-24 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />
        <div className="relative">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-sm bg-white" />
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase">In-House / Brand Overhaul / Frontend Engineering</p>
          </div>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mb-4">
            Turquoic
          </h1>
          <p className="text-white/30 text-sm tracking-widest uppercase mb-4">Internal Corporate Asset Overhaul — Full Ownership</p>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed">
            In-House Corporate Brand Evolution: Overhauling Legacy Product Architecture and Engineering a Modern Frontend Presence
          </p>
        </div>
      </section>

      {/* ── META STRIP ── */}
      <div className="px-8 md:px-16 lg:px-24 py-10 border-b border-neutral-100 bg-neutral-950">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Role", value: "In-House Experience Designer & Lead Frontend Engineer" },
            { label: "Project Origin", value: "Internal Corporate Asset Overhaul" },
            { label: "Target Stack", value: "Next.js, Tailwind CSS, Component Architecture" },
            { label: "Deployment", value: "Vercel + GitHub Production Build" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-white/30 text-xs tracking-widest uppercase">{item.label}</p>
              <p className="text-white/70 text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 CHALLENGE ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">01 — The Challenge</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            The company's digital face no longer reflected the product inside it
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-500 text-lg leading-[1.9]">
              Turquoic operates as an internal product and design infrastructure firm. As the company scaled its digital footprint, the core digital face faced a distinct hurdle — the legacy web presence had become severely outdated, failing to demonstrate engineering capabilities, structural design discipline, or modern full-stack development ethos.
            </p>
            <p className="text-neutral-500 text-lg leading-[1.9]">
              Unlike a standard client contract where a designer delivers static files, working as an in-house experience architect demanded deep, long-term product ownership — with full accountability for performance, visual alignment, and shipping velocity.
            </p>
          </div>
        </div>

        {/* Technical debt cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100 mb-0">
          {technicalDebt.map((item) => (
            <div key={item.num} className="bg-white p-10 flex flex-col gap-5">
              <span className="text-neutral-300 text-xs tracking-widest">{item.num}</span>
              <p className="text-neutral-900 text-xl">{item.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
              <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-neutral-100">
                <div className="flex items-center gap-3">
                  <span className="text-red-300 text-sm">Before</span>
                  <span className="text-neutral-300 text-xs px-3 py-1 border border-neutral-100">{item.before}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 text-sm">After</span>
                  <span className="text-neutral-500 text-xs px-3 py-1 border border-neutral-200">{item.after}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed dark image */}
      <div className="w-full aspect-16/7 bg-neutral-950 flex items-center justify-center border-y border-neutral-100">
        <span className="text-white/20 text-xs tracking-widest uppercase">Project Image — Legacy vs Rebuilt Interface Comparison</span>
      </div>

      {/* ── 02 PROCESS ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">02 — The Process</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            End-to-end design-to-code execution — zero handoff friction
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-500 text-lg leading-[1.9]">
              Operating with full ownership over both creative direction and the frontend development layer, I established an agile, integrated execution pipeline. Deep contextual knowledge of our brand identity meant I could completely bypass traditional handoff friction — translating conceptual design directly into clean, type-safe production code.
            </p>
          </div>
        </div>

        {/* Pipeline */}
        <div className="bg-neutral-950 p-10 mb-12">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-8">Execution Pipeline</p>
          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4">
            {[
              "Legacy Visual Audit",
              "Component-Driven Remapping",
              "Natively Compiled Code",
              "Production Release",
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-4">
                <div className="px-5 py-4 bg-white/5 border border-white/10 text-white/70 text-base">{step}</div>
                {i < arr.length - 1 && <span className="text-white/20 text-xl hidden md:block">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
          {processSteps.map((item) => (
            <div key={item.step} className="bg-white p-10 flex flex-col gap-4">
              <span className="text-neutral-300 text-xs tracking-widest">{item.step}</span>
              <p className="text-neutral-900 text-xl">{item.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed image */}
      <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center border-y border-neutral-100">
        <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Component Architecture Spread</span>
      </div>

      {/* ── 03 UI ARCHITECTURE ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">03 — UI Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Engineering a technical presence — minimal, high-contrast, data-first
          </h2>
          <p className="text-neutral-500 text-lg leading-[1.9] pt-2">
            The structural re-engineering focused on establishing absolute digital authority. Every layout decision was made to signal engineering precision — because for a product and design firm, the website itself is the portfolio.
          </p>
        </div>

        {/* Architecture layout diagram */}
        <div className="bg-neutral-950 p-8 mb-12">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Interface Structure — Layout Diagram</p>
          <div className="flex flex-col gap-px">
            {[
              { label: "Persistent Global Navigation", sub: "Micro-Component States", height: "h-12" },
              { label: "Component-Driven Hero Trunk", sub: "High-Contrast Typography Hierarchy + Clean Layouts", height: "h-32" },
              { label: "Structural Data Cards", sub: "Crisp Grid Systems + Strict Boundary Padding Control", height: "h-24" },
            ].map((block) => (
              <div key={block.label} className={`${block.height} border border-white/5 bg-white/5 flex items-center px-6 gap-6`}>
                <div className="w-1 h-full max-h-6 bg-white/20" />
                <div>
                  <p className="text-white/70 text-sm">{block.label}</p>
                  <p className="text-white/30 text-xs mt-0.5">{block.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Component blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100">
          {architectureBlocks.map((block) => (
            <div key={block.id} className="bg-white flex flex-col">
              <div className="w-full aspect-video bg-neutral-950 flex items-center justify-center border-b border-neutral-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)", backgroundSize: "30px 30px" }}
                />
                <span className="text-white/20 text-xs tracking-widest uppercase relative z-10">Block {block.id}</span>
              </div>
              <div className="p-8 flex flex-col gap-4">
                <p className="text-neutral-300 text-xs tracking-widest uppercase">Component Block {block.id}</p>
                <p className="text-neutral-900 text-lg">{block.title}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{block.desc}</p>
                <ul className="flex flex-col gap-2 mt-2">
                  {block.specs.map((s) => (
                    <li key={s} className="text-neutral-400 text-sm flex gap-3">
                      <span className="text-neutral-200 shrink-0">—</span>{s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed image */}
      <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center border-y border-neutral-100">
        <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Live Site Screens</span>
      </div>

      {/* ── 05 RESOLUTION ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-neutral-100">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">05 — Resolution</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-4 max-w-3xl">
          Turquoic's digital presence now reflects the engineering standard of the product inside it
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-16 max-w-2xl">
          By bridging the gap between deep visual strategy and modern frontend execution, the Turquoic digital hub entered the modern web era — built entirely in-house, shipped to production, and fully owned end-to-end.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100 mb-16">
          {outcomes.map((item) => (
            <div key={item.title} className="bg-white p-10 flex flex-col gap-4">
              <p className="text-neutral-300 text-xs tracking-widest uppercase">{item.metric}</p>
              <p className="text-neutral-900 text-xl">{item.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing — matte black */}
        <div className="bg-neutral-950 p-10 md:p-16 max-w-3xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)", backgroundSize: "60px 60px" }}
          />
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6 relative z-10">In-House Mandate</p>
          <p className="text-white text-2xl md:text-3xl leading-snug tracking-tight relative z-10">
            When the product and design firm's own website becomes the proof of capability — there is no room for legacy components, broken viewports, or generic aesthetics.
          </p>
          <div className="flex items-center gap-3 mt-8 relative z-10">
            <div className="w-2 h-2 rounded-sm bg-white" />
            <p className="text-white/30 text-xs tracking-widest uppercase">Production Build — Shipped & Live</p>
          </div>
        </div>
      </section>

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
