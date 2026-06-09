import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiVite, SiTailwindcss, SiFramer, SiReactrouter } from "react-icons/si";

export const metadata: Metadata = {
  title: "Insure First — Vivek S L",
  description:
    "B2B Insurance Consultancy Landing Platform: Multi-Route Site, Interactive Lead Magnets, and Conversion Architecture for a UAE Independent Advisory Firm",
};

const stats = [
  { value: "25+", label: "Years principal advisor experience" },
  { value: "130+", label: "Businesses served across UAE & GCC" },
  { value: "$40M+", label: "Insurance premiums optimised" },
  { value: "98%", label: "Client retention rate" },
];

const clientSegments = [
  { num: "01", label: "Business Owners & SME Founders", framing: "Broad funnel — broadest audience" },
  { num: "02", label: "Finance Directors & CFOs", framing: "TCOR and compliance framing" },
  { num: "03", label: "Operations Managers & COOs", framing: "Contract coverage and project risk" },
  { num: "04", label: "HNW Individuals & Expat Families", framing: "Personal insurance advisory" },
];

const routes = [
  { route: "/", name: "Home", purpose: "Awareness → Interest", audience: "Cold traffic", sections: "13-section scrollable brief" },
  { route: "/services", name: "Services", purpose: "Consideration → Intent", audience: "Warm, evaluating", sections: "Persona-led service grid" },
  { route: "/contact", name: "Contact", purpose: "Intent → Action", audience: "Ready to convert", sections: "Form + FAQ + sticky mobile bar" },
];

const homepageSections = [
  { num: "01", section: "Hero", role: "First impression — sharp card on photo background, above-fold CTA" },
  { num: "02", section: "Trust Bar", role: "Immediate credibility anchoring — answers 'who are these people?' before the first scroll" },
  { num: "03", section: "Problems", role: "Emotional resonance — uses the reader's own pain points as a mirror before any solution is introduced" },
  { num: "04", section: "Industries", role: "Audience recognition — signals relevance across buyer segments" },
  { num: "05", section: "Services", role: "Solution framing — two-pillar advisory model" },
  { num: "06", section: "Claims Deep-Dive", role: "High-anxiety pain point addressed in full — builds authority on the most feared scenario" },
  { num: "07", section: "Testimonials", role: "Social proof" },
  { num: "08", section: "Founder Profile", role: "Personal trust — placed late so credibility reinforces rather than replaces professional credibility" },
  { num: "09", section: "Insights", role: "Authority content hub — SEO and thought leadership" },
  { num: "10", section: "Contact CTA", role: "Conversion endpoint with named advisor and response time promise" },
];

const colorTokens = [
  { token: "--navy", value: "#0D1B4B", swatch: "#0D1B4B", usage: "Primary backgrounds, headings, hero" },
  { token: "--teal", value: "#00B899", swatch: "#00B899", usage: "CTAs, highlights, accent lines, links" },
  { token: "--teal-pale", value: "#E6FAF7", swatch: "#E6FAF7", usage: "Badge fills, success backgrounds" },
  { token: "--light-bg", value: "#F5F7FA", swatch: "#F5F7FA", usage: "Alternating section backgrounds" },
  { token: "--white", value: "#FFFFFF", swatch: "#FFFFFF", usage: "Card surfaces, body backgrounds" },
  { token: "--text-muted", value: "#6B7280", swatch: "#6B7280", usage: "Secondary copy, metadata" },
];

const formStates = [
  { state: "Default", style: "border-neutral-300 bg-white", label: "Default", labelStyle: "text-neutral-400" },
  { state: "Focus", style: "border-[#0D1B4B] bg-white ring-1 ring-[#0D1B4B]/20", label: "Focus", labelStyle: "text-[#0D1B4B]" },
  { state: "Valid", style: "border-emerald-400 bg-white", label: "Valid ✓", labelStyle: "text-emerald-600" },
  { state: "Error", style: "border-red-400 bg-red-50", label: "Error ✕", labelStyle: "text-red-500" },
];

const keyDecisions = [
  {
    num: "01",
    title: "Sharp Corners Throughout",
    desc: "No border-radius values on any primary surface — cards, hero panels, containers are all rectangular. Corporate financial services audiences associate rounded UI with consumer apps. Sharp corners signal precision, formality, and trustworthiness — appropriate for an advisory brand where the purchase decision involves significant financial or legal exposure.",
  },
  {
    num: "02",
    title: "Named Founder in Conversion Touchpoints",
    desc: "\"Fredrick will review your enquiry\" replaces every generic \"a member of our team\" line in the contact flow. B2B advisory is a personal trust sale. Naming the advisor makes the commitment feel personal, increases accountability, and gives the prospect someone to direct their follow-up expectation toward.",
  },
  {
    num: "03",
    title: "Free Consultation as Primary CTA",
    desc: "An insurance audit or risk assessment is an unfamiliar purchase for most SME buyers. The free consultation removes the first financial barrier and lets the advisor demonstrate value before a commercial relationship begins. Secondary CTAs — Free Insurance Premium Check and Free Family Business Readiness Check — qualify visitors by intent at earlier funnel stages.",
  },
  {
    num: "04",
    title: "Two-Pillar Service Model",
    desc: "Insurance consultancy and management consultancy are structured as two distinct pillars rather than a flat service list. This communicates strategic breadth, positions the business as more than an insurance reviewer, creates natural upsell pathways from the risk pillar to the management pillar, and allows different buyer types (CFOs vs. founders) to self-select.",
  },
  {
    num: "05",
    title: "WhatsApp as Parallel Conversion Path",
    desc: "In the UAE, WhatsApp is a primary business communication channel across all segments. The sticky mobile bar offers Call Now and WhatsApp in parallel — not as a consumer concession but as market-appropriate channel design. Visitors who prefer synchronous contact over form submission have an immediately accessible alternative at every scroll depth.",
  },
];

const navTiers = [
  { tier: "Tier 1", label: "License Bar", content: "CBUAE Licensed · License No. 143", visibility: "Desktop only", purpose: "Regulatory credibility" },
  { tier: "Tier 2", label: "Contact Bar", content: "Phone · Email · Location (Dubai)", visibility: "Desktop only", purpose: "Accessibility — direct contact pre-form" },
  { tier: "Tier 3", label: "Main Nav", content: "Who We Help · Solutions · Insurance Services · Get A Quote", visibility: "Both — hamburger on mobile", purpose: "Service discovery + persistent CTA" },
];

const uxGaps = [
  { area: "Social Proof Depth", observation: "Testimonials are brief; no company names or photos", improvement: "Add client logos or LinkedIn-attributed quotes" },
  { area: "Pricing Anchoring", observation: "No pricing information or engagement structure", improvement: "A 'How We Work' section or pricing FAQ would reduce a major B2B objection" },
  { area: "Exit Intent", observation: "No re-engagement for visitors who scroll without converting", improvement: "Exit-intent popup offering the free Premium Check as a download" },
  { area: "Blog / Insights", observation: "Preview section exists but links to no content", improvement: "Dead links undermine the authority signal — build out or remove" },
];

const metricsTargets = [
  { metric: "Consultation form submissions", method: "Form success event → Google Analytics" },
  { metric: "Free Premium Check CTA clicks", method: "CTA click event" },
  { metric: "Scroll depth to Founder section", method: "Scroll depth event at 75%" },
  { metric: "Mobile contact bar taps", method: "CTA click on sticky bar" },
  { metric: "WhatsApp click-through rate", method: "Outbound link click event" },
  { metric: "Time on page", method: "Session duration — >2 min target" },
];

export default function EnsurioFirstPage() {
  return (
    <main className="bg-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <section className="relative bg-black px-8 md:px-30 lg:px-60 pt-20 pb-16 overflow-hidden">
        <Image
          src="/images/insure-first/businesswoman-handshake.webp"
          alt="Professional advisory consultation"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 15% 60%, rgba(13,27,75,0.85) 0%, rgba(0,0,0,0.88) 65%)" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="relative">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">B2B Lead Generation / CRO / Full-Stack Build</p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mb-6">
            Insure First
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Multi-route landing platform for a CBUAE-licensed, conflict-free insurance advisory firm — built to convert cold UAE & GCC business audiences into consultation bookings without relying on an existing brand reputation.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://ensurio-frist.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300 text-xs tracking-widest uppercase px-4 py-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              ensurio-frist.vercel.app ↗
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 border border-white/15 text-white/50 text-xs tracking-widest uppercase px-4 py-2">
              CBUAE Licensed · No. 143
            </span>
            <span className="inline-flex items-center gap-2 border border-white/15 text-white/50 text-xs tracking-widest uppercase px-4 py-2">
              UAE & GCC Region
            </span>
          </div>
        </div>
      </section>

      {/* ── META STRIP ── */}
      <div className="px-8 md:px-30 lg:px-60 py-12 border-b border-neutral-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-neutral-400 text-[10px] tracking-[0.25em] uppercase">Role</p>
            <p className="text-neutral-900 text-sm leading-relaxed">Lead Experience Designer & Frontend Engineer</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-neutral-400 text-[10px] tracking-[0.25em] uppercase">Stack</p>
            <div className="flex flex-wrap gap-2">
              {([
                { icon: <Image src="/icons/react.svg" width={13} height={13} alt="React" unoptimized />, label: "React 18" },
                { icon: <SiVite size={13} color="#646CFF" />, label: "Vite" },
                { icon: <SiFramer size={13} color="#0055FF" />, label: "Framer Motion" },
                { icon: <SiTailwindcss size={13} color="#06B6D4" />, label: "Tailwind" },
                { icon: <SiReactrouter size={13} color="#CA4245" />, label: "React Router" },
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
            <p className="text-neutral-900 text-sm leading-relaxed">Insure First Risk Management Consultancies</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-neutral-400 text-[10px] tracking-[0.25em] uppercase">Deliverables</p>
            <p className="text-neutral-900 text-sm leading-relaxed">3-Route Site · Lead Magnets · Form System · Email Nurture</p>
          </div>
        </div>
      </div>

      {/* ── 01 MARKET POSITIONING ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">01 — Market Positioning</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            The only advisor in the room with no incentive to mislead you
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              The UAE insurance advisory market is dominated by direct brokers who earn commission from placing business with insurers. This creates a structural conflict of interest: the advisor is incentivised to select insurers that pay the highest commission — not the ones that offer the best coverage.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              Insure First's differentiator is independence. They charge for advisory, not placement — meaning their recommendations are commercially clean. This is a strong and demonstrable value proposition, but it requires educating the market. The site had to make that positioning legible to a business owner who has never considered the distinction before.
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-100 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-10 flex flex-col gap-3">
              <p className="text-neutral-900 text-4xl tracking-tight">{s.value}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Client segments */}
        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Target Audience — Four Buyer Personas</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
            {clientSegments.map((seg) => (
              <div key={seg.num} className="bg-white p-8 flex items-center gap-6">
                <span className="text-neutral-200 text-xs tracking-widest shrink-0">{seg.num}</span>
                <div>
                  <p className="text-neutral-900 text-base">{seg.label}</p>
                  <p className="text-neutral-400 text-sm mt-1">{seg.framing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homepage screenshot */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full relative overflow-hidden border border-neutral-200">
          <Image
            src="/images/insure-first/site-homepage.webp"
            alt="Insure First homepage — navigation and hero section"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
        <p className="text-neutral-400 text-xs tracking-widest uppercase mt-3 text-center">Insure First — Homepage</p>
      </div>

      {/* ── 02 INFORMATION ARCHITECTURE ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24 bg-neutral-50">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">02 — Information Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Three routes, one funnel — each page built for a specific buyer stage
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            The site is not a single scrollable page — it is a three-route architecture where each route serves a distinct point in the consultative sales cycle. Navigation reinforces this hierarchy with dropdowns grouped into three clusters: Who We Help, Solutions, and Insurance Services — matching the three questions every B2B buyer asks before engaging an advisor.
          </p>
        </div>

        {/* Route table */}
        <div className="overflow-x-auto mb-16">
          <div className="border border-neutral-200 divide-y divide-neutral-100 min-w-140">
            <div className="grid grid-cols-4 gap-0 bg-neutral-900 px-8 py-4">
              {["Route", "Purpose", "Audience", "Structure"].map((h) => (
                <p key={h} className="text-white/40 text-xs tracking-widest uppercase">{h}</p>
              ))}
            </div>
            {routes.map((r) => (
              <div key={r.route} className="grid grid-cols-4 gap-0 bg-white px-8 py-6 items-center">
                <p className="text-neutral-900 text-sm font-mono">{r.route}</p>
                <p className="text-neutral-700 text-sm">{r.purpose}</p>
                <p className="text-neutral-400 text-sm">{r.audience}</p>
                <p className="text-neutral-400 text-sm">{r.sections}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Homepage 13-section narrative */}
        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Homepage — 13-Section Scrollable Brief</p>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-2xl">
            The homepage is structured as a long-form scrollable brief — common in high-value B2B services where trust must be earned before a prospect will commit to contact. Each section has a specific role in the narrative arc.
          </p>
          <div className="overflow-x-auto">
            <div className="border border-neutral-200 divide-y divide-neutral-100 min-w-120">
              {homepageSections.map((s) => (
                <div key={s.num} className="flex items-start gap-8 px-8 py-5 bg-white">
                  <span className="text-neutral-300 text-xs tracking-widest shrink-0 pt-0.5">{s.num}</span>
                  <p className="text-neutral-900 text-sm w-32 shrink-0">{s.section}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed">{s.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 UX DESIGN ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">03 — UX Design</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Navigation as a trust signal. Contact as a personal commitment.
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            Two UX moments define the site: the navigation communicates legitimacy at three registers simultaneously before a single section is read. The contact page is designed so that the person reviewing the inquiry has a name, not a job title — converting an anonymous form into a personal exchange.
          </p>
        </div>

        {/* 3-tier nav */}
        <div className="mb-16">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Navigation — Three-Tier Structure</p>
          <div className="border border-neutral-200 divide-y divide-neutral-100">
            {navTiers.map((tier) => (
              <div key={tier.tier} className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white px-8 py-6 items-start">
                <div>
                  <p className="text-neutral-300 text-xs tracking-widest">{tier.tier}</p>
                  <p className="text-neutral-900 text-sm mt-1">{tier.label}</p>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed">{tier.content}</p>
                <p className="text-neutral-400 text-xs">{tier.visibility}</p>
                <p className="text-neutral-400 text-sm">{tier.purpose}</p>
              </div>
            ))}
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed mt-4 max-w-2xl">
            On mobile, the license bar is hidden to reduce cognitive load — mobile users are more likely to be in contact mode than exploration mode. Core navigation is preserved in a hamburger menu with expandable accordion sections.
          </p>
        </div>

        {/* Contact page UX */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Contact Page — Form Architecture</p>
            <div className="border border-neutral-200 overflow-hidden">
              <div className="bg-neutral-900 px-8 py-6">
                <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Book a Consultation</p>
                <p className="text-white text-lg">Fredrick will review your enquiry</p>
                <p className="text-white/30 text-xs mt-1 tracking-wider">Response within one business day</p>
              </div>
              <div className="bg-white p-8 flex flex-col gap-4">
                {["Full Name", "Work Email", "Phone Number", "Enquiry Type (optional)"].map((field) => (
                  <div key={field} className="border border-neutral-200 px-4 py-3">
                    <p className="text-neutral-300 text-sm">{field}</p>
                  </div>
                ))}
                <div className="bg-[#0D1B4B] text-white text-sm tracking-wider text-center py-4 mt-2">
                  Book Free Consultation →
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 pt-4">
            <div>
              <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Form Validation — Four States</p>
              <div className="flex flex-col gap-3">
                {formStates.map((s) => (
                  <div key={s.state} className={`border ${s.style} px-4 py-3 flex items-center justify-between`}>
                    <p className="text-neutral-400 text-sm">Work Email</p>
                    <span className={`text-xs tracking-wider ${s.labelStyle}`}>{s.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mt-4">
                Four-state validation (default → focus → valid → error) with live on-blur feedback rather than on-submit. This exceeds the typical two-state implementation and dramatically reduces form abandonment.
              </p>
            </div>

            <div className="border-l-2 border-neutral-100 pl-6">
              <p className="text-neutral-900 text-base mb-2">Enquiry type is optional</p>
              <p className="text-neutral-400 text-sm leading-relaxed">Making it required would increase drop-off for users who don't know which service category fits their need — the right call for a multi-service advisory firm.</p>
            </div>
          </div>
        </div>

        {/* UX gaps */}
        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Identified UX Gaps — Next Iteration</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
            {uxGaps.map((gap) => (
              <div key={gap.area} className="bg-white p-8 flex flex-col gap-3">
                <p className="text-neutral-900 text-base">{gap.area}</p>
                <p className="text-neutral-500 text-sm leading-relaxed">{gap.observation}</p>
                <p className="text-[#00B899] text-xs tracking-wider">→ {gap.improvement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Premium Check — process flow */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-100">
          {[
            { src: "/images/insure-first/tool-step-1.webp", step: "01", label: "Company Profile", alt: "Step 1 — Industry sector, company size, annual turnover" },
            { src: "/images/insure-first/tool-step-2.webp", step: "02", label: "Coverage Details", alt: "Step 2 — Annual premium, active policies, cover types held" },
            { src: "/images/insure-first/tool-step-3.webp", step: "03", label: "Claims History", alt: "Step 3 — Claims filed, last audit, premium trend" },
            { src: "/images/insure-first/tool-results.webp", step: "→", label: "Risk Assessment", alt: "Results — Risk score, estimated savings, recommendations" },
          ].map((item) => (
            <div key={item.step} className="bg-white flex flex-col">
              <div className="px-4 pt-4 pb-3 border-b border-neutral-100 flex items-baseline gap-2">
                <span className="text-neutral-300 text-xs tracking-widest">{item.step}</span>
                <span className="text-neutral-700 text-xs">{item.label}</span>
              </div>
              <div className="overflow-hidden">
                <Image src={item.src} alt={item.alt} width={860} height={900} className="w-full h-auto" />
              </div>
            </div>
          ))}
        </div>
        <p className="text-neutral-400 text-xs tracking-widest uppercase mt-3 text-center">Insurance Premium Check — Free 3-Step Diagnostic Tool</p>
      </div>

      {/* ── 04 DESIGN SYSTEM ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24 bg-neutral-50">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">04 — Design System</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Navy and teal. Sharp corners. No border-radius anywhere.
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              The design system is built around a navy and teal pairing that communicates professional authority (navy) with forward-looking confidence (teal). The teal accent at #00B899 is distinctive enough to function as a brand identifier without departing from sector norms.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              Typography pairs <strong className="text-neutral-900">Plus Jakarta Sans</strong> for headings with <strong className="text-neutral-900">Inter</strong> for body copy — fluid type scaling via <code className="text-neutral-600 text-xs bg-neutral-100 px-1.5 py-0.5 rounded">clamp()</code> throughout. Eyebrow labels at 11px / 0.18em letter-spacing in teal establish section hierarchy for scanners.
            </p>
          </div>
        </div>

        {/* Colour tokens */}
        <div className="mb-16">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Colour System</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-neutral-200">
            {colorTokens.map((t) => (
              <div key={t.token} className="bg-white p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 shrink-0 border border-neutral-100"
                    style={{ backgroundColor: t.swatch }}
                  />
                  <div>
                    <p className="text-neutral-900 text-sm font-mono">{t.token}</p>
                    <p className="text-neutral-400 text-xs">{t.value}</p>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{t.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sharp corners + hero component callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
          <div className="bg-white p-10 flex flex-col gap-4">
            <p className="text-neutral-400 text-xs tracking-widest uppercase">Hero — Card on Photo</p>
            <p className="text-neutral-900 text-xl">Sharp card on photographic background</p>
            <p className="text-neutral-400 text-base leading-relaxed">
              The hero uses a handshake photograph with a sharp-cornered white overlay card. The card reads as a clean white object against a visual context rather than a flat colored background — a distinctive choice that sets the page apart from the gradient-heavy aesthetic common in InsurTech.
            </p>
          </div>
          <div className="bg-white p-10 flex flex-col gap-4">
            <p className="text-neutral-400 text-xs tracking-widest uppercase">Service Cards — Featured Tag</p>
            <p className="text-neutral-900 text-xl">3px solid teal top border on priority content</p>
            <p className="text-neutral-400 text-base leading-relaxed">
              The 3px solid teal top border on featured cards functions as a hierarchical signal — marks content as primary without requiring background color changes. "High Demand" and "Most Requested" tags on Claims Advisory and Insurance Audit provide social proof by implication while directing attention in a content-dense grid.
            </p>
          </div>
        </div>
      </section>

      {/* Site sections grid */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="grid grid-cols-2 gap-px bg-neutral-100">
          {[
            { src: "/images/insure-first/site-story.webp", label: "Our Story", alt: "From Insure First to Ensurio First — founder narrative and stats" },
            { src: "/images/insure-first/site-iop.webp", label: "IOP Framework", alt: "Insurance Optimisation Programme — 4-phase structured engagement" },
            { src: "/images/insure-first/site-solutions.webp", label: "Pain Points & Solutions", alt: "Common pain points mirrored against six-service solution grid" },
            { src: "/images/insure-first/site-industries.webp", label: "Industries We Serve", alt: "Construction, Manufacturing, Logistics, Hospitality, Aviation, Engineering" },
          ].map((img) => (
            <div key={img.src} className="bg-white flex flex-col">
              <div className="px-4 pt-4 pb-3 border-b border-neutral-100">
                <span className="text-neutral-500 text-xs tracking-widest uppercase">{img.label}</span>
              </div>
              <Image src={img.src} alt={img.alt} width={1440} height={900} className="w-full h-auto" />
            </div>
          ))}
        </div>
        <p className="text-neutral-400 text-xs tracking-widest uppercase mt-3 text-center">Site Sections — Our Story · IOP Framework · Solutions · Industries</p>
      </div>

      {/* ── 05 KEY DECISIONS ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">05 — Key Decisions</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Five decisions that shaped the conversion architecture
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            Each decision was made in response to a specific constraint — the purchase context, the buyer psychology, or the UAE market. None were aesthetic preferences.
          </p>
        </div>

        <div className="flex flex-col gap-px bg-neutral-100">
          {keyDecisions.map((d) => (
            <div key={d.num} className="bg-white p-10 flex gap-10 items-start">
              <span className="text-neutral-200 text-xs tracking-widest shrink-0 pt-1">{d.num}</span>
              <div className="flex flex-col gap-3">
                <p className="text-neutral-900 text-xl">{d.title}</p>
                <p className="text-neutral-400 text-base leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 06 RESOLUTION ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24 border-t border-neutral-100">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">06 — Resolution</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-4 max-w-3xl">
          A complete lead acquisition platform for a business with a story worth telling
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-16 max-w-2xl">
          The independence positioning is the product. The site's job was to make that positioning legible — and to convert the moment a prospect recognised it.
        </p>

        {/* Metrics */}
        <div className="mb-16">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Post-Launch Metrics to Track</p>
          <div className="border border-neutral-100 divide-y divide-neutral-100">
            {metricsTargets.map((m) => (
              <div key={m.metric} className="flex items-center justify-between px-8 py-5 bg-white">
                <p className="text-neutral-900 text-sm">{m.metric}</p>
                <p className="text-neutral-400 text-xs tracking-wider text-right">{m.method}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="bg-[#0D1B4B] p-10 md:p-16 max-w-3xl">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Key Takeaway</p>
          <p className="text-white text-2xl md:text-3xl leading-snug tracking-tight">
            The homepage qualifies and pre-educates before a sales conversation happens — compressing what would otherwise be a first meeting into the pre-click experience.
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
          <Link href="/case-study/alya-auditors" className="group flex flex-col gap-1">
            <p className="text-neutral-300 text-xs tracking-widest uppercase">← Previous</p>
            <p className="text-neutral-700 text-sm group-hover:text-black transition-colors duration-300">Alya Auditors</p>
          </Link>
          <Link href="/case-study/4bc-global" className="group flex flex-col gap-1 text-right">
            <p className="text-neutral-300 text-xs tracking-widest uppercase">Next →</p>
            <p className="text-neutral-700 text-sm group-hover:text-black transition-colors duration-300">4BC Global</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
