import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "4BC Global — Vivek S L",
  description:
    "Redesigning Corporate Market Research: Turning Static Presentation Slides into a High-Performance Digital Platform",
};

const tokens = [
  { asset: "Primary Core Color", token: "#0B132B", application: "Structural layout backgrounds, dominant section divs", swatch: "bg-[#0B132B]" },
  { asset: "Accent Glow", token: "#48CAE4", application: "High-intent CTAs, metric emphasizers, interaction states", swatch: "bg-[#48CAE4]" },
  { asset: "Typography — Header", token: "Inter Display", application: "Corporate headlines, section dividers, data cards", swatch: null },
  { asset: "Typography — Body", token: "Inter Regular", application: "Dense analytical paragraphs, research text blocks", swatch: null },
];

export default function FourBCGlobalPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Back nav */}
      <div className="px-8 md:px-16 lg:px-24 py-6 border-b border-neutral-100">
        <Link href="/" className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase">
          ← vivek s l
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-[#0B132B] px-8 md:px-16 lg:px-24 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-200 opacity-10" />
        <div className="relative">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Brand / Web Design</p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mb-6">
            4BC Global
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed">
            Redesigning Corporate Market Research: Turning Static Presentation Slides into a High-Performance Digital Platform
          </p>
        </div>
      </section>

      {/* ── META STRIP ── */}
      <div className="px-8 md:px-16 lg:px-24 py-10 border-b border-neutral-100 bg-neutral-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Role", value: "Lead Experience Designer & Frontend Engineer" },
            { label: "Timeline", value: "2 Weeks — Rapid Execution" },
            { label: "Core Stack", value: "Next.js, Tailwind CSS, Claude AI" },
            { label: "Deliverables", value: "Visual Brand Identity, Document-to-Code Platform" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-neutral-400 text-xs tracking-widest uppercase">{item.label}</p>
              <p className="text-neutral-800 text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 CHALLENGE — text + full-bleed image ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">01 — The Challenge</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            A premium firm trapped inside static documents
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-500 text-lg leading-[1.9]">
              4BC Global is a global corporate market research and strategic advisory firm delivering data-dense industry insights to enterprise executives. Their digital presence was virtually non-existent — their primary delivery method was tied up in dense, static PDF decks and physical slide documents.
            </p>
            <p className="text-neutral-500 text-lg leading-[1.9]">
              Executives had to download and sift through massive static documents to find relevant data points. The team had no way to track consumption. And the web presence didn't match the premium nature of their services.
            </p>
          </div>
        </div>
      </section>

      {/* Full-bleed comparison block */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100 mb-0">
        <div className="bg-neutral-50 px-8 md:px-16 lg:px-24 py-16 flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
            <p className="text-neutral-400 text-xs tracking-widest uppercase">Legacy Distribution</p>
          </div>
          {["Static PDF decks — download required", "No responsiveness across devices", "Zero user analytics or tracking", "Low visual engagement rate"].map((item) => (
            <div key={item} className="flex items-start gap-4">
              <span className="text-red-300 shrink-0 text-xl mt-0.5">✕</span>
              <p className="text-neutral-600 text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="bg-white px-8 md:px-16 lg:px-24 py-16 flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <p className="text-neutral-400 text-xs tracking-widest uppercase">Modern Platform Solution</p>
          </div>
          {["Interactive web layers — instant access", "Fluid grid layouts across all viewports", "Granular section-level tracking", "High-end typographic hierarchy"].map((item) => (
            <div key={item} className="flex items-start gap-4">
              <span className="text-emerald-400 shrink-0 text-xl mt-0.5">✓</span>
              <p className="text-neutral-600 text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Legacy State image */}
      <div className="w-full relative aspect-16/7">
        <Image src="/images/4bc/legacy-state.webp" alt="4BC Global — Legacy State Documentation" fill className="object-cover" />
      </div>

      {/* ── 02 WORKFLOW — split layout ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">02 — The Workflow</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Document-to-Code Acceleration
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-500 text-lg leading-[1.9]">
              Instead of relying on slow, traditional design handoff phases — spending weeks tweaking shapes on a static canvas — I deployed an AI-accelerated frontend engineering workflow.
            </p>
            <p className="text-neutral-500 text-lg leading-[1.9]">
              I took the raw strategy documentation and presentation decks directly from 4BC Global. By passing these structural parameters into my engineering environment using Claude, I skipped the concept-art phase entirely and went straight to building live layout components.
            </p>
          </div>
        </div>
      </section>

      {/* Pipeline block — full width */}
      <div className="px-8 md:px-16 lg:px-24 pb-16">
        <div className="bg-neutral-50 border border-neutral-100 p-10">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-8">Engineering Pipeline</p>
          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4">
            {["Raw Corporate Slides / Docs", "Claude Context Synthesis", "Live Responsive Components", "Rapid Visual Tweaks in Code"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-4">
                <div className="px-5 py-4 bg-white border border-neutral-200 text-neutral-700 text-base">{step}</div>
                {i < arr.length - 1 && <span className="text-neutral-300 text-xl hidden md:block">→</span>}
              </div>
            ))}
          </div>
          <p className="text-neutral-400 text-base leading-relaxed mt-8 max-w-2xl">
            This approach allowed co-authoring layout iterations, adjusting padding, and refining component scaling directly in code — reducing structural production time by weeks.
          </p>
        </div>
      </div>

      {/* Workflow Session image */}
      <div className="w-full relative aspect-16/7">
        <Image src="/images/4bc/workflow-session.webp" alt="4BC Global — Workflow Session" fill className="object-cover" />
      </div>

      {/* ── 03 DESIGN SYSTEM — text + tokens ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">03 — Design System</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Visual Identity Modernization
          </h2>
          <p className="text-neutral-500 text-lg leading-[1.9] pt-2">
            To establish immediate authority, I engineered a highly disciplined visual design system directly inside utility-first code classes — building a complete token system for color, typography, and spacing.
          </p>
        </div>

        {/* Tokens table */}
        <div className="border border-neutral-100">
          <div className="grid grid-cols-3 bg-neutral-50 px-6 py-4 border-b border-neutral-100">
            <p className="text-neutral-400 text-xs tracking-widest uppercase">Asset Type</p>
            <p className="text-neutral-400 text-xs tracking-widest uppercase">Token / Value</p>
            <p className="text-neutral-400 text-xs tracking-widest uppercase">Application</p>
          </div>
          {tokens.map((t, i) => (
            <div key={t.asset} className={`grid grid-cols-3 gap-4 px-6 py-6 items-center ${i < tokens.length - 1 ? "border-b border-neutral-100" : ""}`}>
              <p className="text-neutral-700 text-base">{t.asset}</p>
              <div className="flex items-center gap-4">
                {t.swatch && <div className={`w-6 h-6 rounded-sm shrink-0 ${t.swatch}`} />}
                <p className="text-neutral-500 text-sm font-mono">{t.token}</p>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">{t.application}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Identity image */}
      <div className="w-full relative aspect-16/7">
        <Image src="/images/4bc/brand-identity.webp" alt="4BC Global — Brand Identity Assets" fill className="object-cover" />
      </div>

      {/* ── 04 UI ARCHITECTURE ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">04 — UI Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            The Interactive Insights Grid
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-500 text-lg leading-[1.9]">
              The core structural component of the platform completely replaces the legacy slide deck approach — containerizing dense research into scannable, interactive cards.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              {[
                { title: "High-Density Data Cards", desc: "Information containerized into minimal, isolated cards that prevent cognitive overload." },
                { title: "Asymmetric Layout Hierarchy", desc: "Major macroeconomic insights in dominant span containers, secondary data in clean flanking columns." },
                { title: "Frictionless Scannability", desc: "Generous micro-spacing ensures dense industrial insights can be read in seconds." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-neutral-200 pl-5 py-1">
                  <p className="text-neutral-800 text-base mb-1">{item.title}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wireframe simulation */}
        <div className="bg-neutral-50 border border-neutral-100 p-8">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Platform Layout — Wireframe Simulation</p>
          <div className="bg-white border border-neutral-100 px-5 py-4 flex items-center justify-between mb-3">
            <div className="w-20 h-3 bg-neutral-200 rounded-sm" />
            <div className="w-32 h-8 bg-neutral-900 rounded-sm" />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white border border-neutral-100 p-6 flex flex-col gap-3">
              <div className="w-3/4 h-5 bg-neutral-200 rounded-sm" />
              <div className="w-full h-3 bg-neutral-100 rounded-sm" />
              <div className="w-2/3 h-3 bg-neutral-100 rounded-sm" />
              <div className="w-24 h-9 bg-neutral-900 rounded-sm mt-2" />
            </div>
            <div className="bg-neutral-100 flex items-center justify-center min-h-40">
              <span className="text-neutral-300 text-xs tracking-widest uppercase">Interactive Teaser</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Research A", "Research B", "Research C"].map((card) => (
              <div key={card} className="bg-white border border-neutral-100 p-4 flex flex-col gap-2">
                <div className="w-full aspect-video bg-neutral-100" />
                <div className="w-1/2 h-2 bg-neutral-200 rounded-sm" />
                <div className="w-full h-2 bg-neutral-100 rounded-sm" />
                <div className="w-2/3 h-2 bg-neutral-100 rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Platform image */}
      <div className="w-full relative aspect-16/7">
        <Image src="/images/4bc/live-platform.webp" alt="4BC Global — Live Platform Screenshots" fill className="object-cover" />
      </div>

      {/* ── 05 RESOLUTION ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">05 — Resolution</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-16 max-w-3xl">
          From static documents to a premium digital hub — in two weeks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100">
          {[
            { title: "Zero-to-One Deployment", desc: "Successfully launched a modern, highly visible brand identity and web application framework." },
            { title: "Eradicated Consumption Friction", desc: "Converted heavy, multi-page presentation decks into an intuitive, interactive digital canvas." },
            { title: "Production-Ready Front End", desc: "Delivered a modular, clean code layout that is lightweight, ultra-responsive, and scalable for future research modules." },
          ].map((item) => (
            <div key={item.title} className="bg-white p-10 flex flex-col gap-4">
              <p className="text-neutral-900 text-xl">{item.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer nav */}
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
