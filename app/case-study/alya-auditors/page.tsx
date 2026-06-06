import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALYA Nexus Auditing — Vivek S L",
  description:
    "Full-Stack Lead Generation Platform: Building UAE's First AI-Powered Audit Firm's Digital Presence with an Interactive Compliance Checker",
};

const challenges = [
  {
    num: "01",
    title: "Invisible Compliance Gaps",
    desc: "UAE businesses face escalating obligations under Corporate Tax, VAT enforcement, and free zone audit mandates — yet most SMEs are unaware of specific gaps until penalties arrive.",
    stat: "Jun 2023",
    statLabel: "UAE Corp Tax live",
  },
  {
    num: "02",
    title: "High-Friction Lead Capture",
    desc: "Traditional audit firm websites bury CTAs behind dense service listings. Busy finance managers bounce before reaching a consultation request — qualified leads evaporate at the first scroll.",
    stat: "↓ 80%",
    statLabel: "Avg. post-click retention",
  },
  {
    num: "03",
    title: "Generic Trust Signals",
    desc: "Competitor sites list credentials without demonstrating expertise. ALYA needed to prove knowledge before any sales conversation — showing prospects their specific gaps, not generic copy.",
    stat: "3 sec",
    statLabel: "Decision window",
  },
];

const funnelStages = [
  {
    num: "01",
    label: "Awareness",
    tag: "Top of Funnel",
    bar: "100%",
    pct: "100%",
    desc: "TrustBar + Hero + Service Marquee — immediate authority above the fold before a single scroll.",
    metric: "sub-3-second credibility lock",
  },
  {
    num: "02",
    label: "Education",
    tag: "Mid Funnel",
    bar: "76%",
    pct: "~76%",
    desc: "Services, Why ALYA, 4-step Process, Industries — progressive qualification of the prospect.",
    metric: "Zero bounce before checker",
  },
  {
    num: "03",
    label: "Activation",
    tag: "Inflection Point",
    bar: "60%",
    pct: ">60%",
    desc: "Audit Readiness Checker — transforms passive readers into active participants with a personal stake in their result.",
    metric: "Checker completion rate",
    highlight: true,
  },
  {
    num: "04",
    label: "Conversion",
    tag: "Bottom of Funnel",
    bar: "25%",
    pct: ">25%",
    desc: "Results CTA + Lead Form + Sticky Mobile Bar — lead capture at peak intent, after value has been delivered.",
    metric: "Lead capture rate",
  },
];

const checkerPrinciples = [
  {
    id: "01",
    title: "Zero Friction to Start",
    desc: "No sign-up to begin. Lead capture is deferred to the moment of highest motivation — after the user has invested 2 minutes and seen a personalised result they want to act on.",
  },
  {
    id: "02",
    title: "Progressive Disclosure",
    desc: "One question per screen with an animated progress indicator. Each question includes a plain-English context line explaining why it matters — reducing cognitive load while building regulatory awareness.",
  },
  {
    id: "03",
    title: "Personalised Results",
    desc: "Animated SVG score circle (0–100), colour-coded band label, gap cards for each failed area, and a dynamic CTA block with headline and subtext that changes by score band.",
  },
  {
    id: "04",
    title: "Lead Capture at Value Exchange",
    desc: "The lead form appears only when the user requests the downloadable report — a natural, non-coercive exchange. The report downloads automatically on submission.",
  },
];

const designTokens = [
  { token: "Navy", value: "#021F4B", usage: "Primary text, headings, dark section backgrounds" },
  { token: "Green Accent", value: "#7FFA7B", usage: "All CTAs, eyebrow lines, accent dots, score highlights" },
  { token: "Surface", value: "#F4F8FD", usage: "Alternate section backgrounds" },
  { token: "Panel", value: "#EDF3FB", usage: "Card backgrounds, inner panels" },
  { token: "Border", value: "#C8DAF2", usage: "All borders and dividers" },
  { token: "Muted Text", value: "#5A7090", usage: "Body copy, captions, secondary labels" },
];

const technicalBlocks = [
  {
    id: "A",
    title: "Custom Hook Architecture",
    tag: "Technical Layer A",
    desc: "Three purpose-built hooks eliminate repeated imperative logic. useScrollReveal wraps IntersectionObserver with configurable delay and threshold. useCounterAnimation drives requestAnimationFrame counters that trigger only on viewport entry. useParallax links scroll position to a translateY transform for hero depth.",
    specs: ["useScrollReveal<T> — scroll-triggered fade-in", "useCounterAnimation — viewport-aware RAF counter", "useParallax<T> — scroll-linked translate", "Rules of Hooks compliant sub-component splits"],
  },
  {
    id: "B",
    title: "Checker State Machine",
    tag: "Technical Layer B",
    desc: "Three-phase state machine: intro → questions → results. Answers stored as Record<questionIndex, optionIndex>. Score calculated as raw sum (max 20) mapped to 0–100 display score. Popup state ('hidden' | 'open' | 'minimized') managed separately with a hasShownIdlePopup ref gating automatic triggers.",
    specs: ["Phase transitions: intro → questions → results", "rawScore / 20 × 100 display mapping", "30s idle + exit-intent popup triggers", "Minimises to sticky pill on close"],
  },
  {
    id: "C",
    title: "Client-Side Report Generation",
    tag: "Technical Layer C",
    desc: "Downloadable audit reports generated entirely client-side as self-contained HTML files using Blob + URL.createObjectURL. No server dependency. The report includes the score, band badge, all gap cards with UAE penalty context, and a WhatsApp CTA — print-formatted and ready to forward.",
    specs: ["Blob + createObjectURL — zero server cost", "Self-contained HTML with inline styles", "Gap cards with UAE penalty language", "WhatsApp CTA embedded in report"],
  },
];

const keyDecisions = [
  {
    title: "WhatsApp as Primary CTA",
    desc: "Every major CTA routes to a pre-filled WhatsApp message rather than a form. This matches how UAE B2B buyers prefer to initiate conversations and dramatically reduces friction compared to a standard inquiry form.",
  },
  {
    title: "Deferred Lead Capture",
    desc: "The checker requires no details to start or view results. Lead capture triggers only when the user requests the downloadable report — the highest-intent moment in the session. This increases both completion rate and lead quality.",
  },
  {
    title: "Single Accent Colour",
    desc: "One bright green (#7FFA7B) for every interactive element creates an unambiguous visual language. Users always know what they can click. The contrast against navy and white also ensures accessibility.",
  },
  {
    title: "Score Personalisation Over Generic Messaging",
    desc: "Rather than one CTA for all visitors, the results screen delivers one of three distinct messages based on score band — each with a different tone (confirmatory / supportive / urgent). The CTA feels responsive, not generic.",
  },
];

const metrics = [
  { metric: ">60%", label: "Checker completion rate", sub: "of starters" },
  { metric: ">25%", label: "Lead capture rate", sub: "of completers via report download" },
  { metric: ">40%", label: "WhatsApp CTA clicks", sub: "of completers from results screen" },
  { metric: "<2.5s", label: "Page LCP target", sub: "Mobile & desktop" },
];

export default function AlyaAuditorsPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Back nav */}
      <div className="px-8 md:px-30 lg:px-60 py-6 border-b border-neutral-100">
        <Link href="/" className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase">
          ← vivek s l
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-black px-8 md:px-30 lg:px-60 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 20% 70%, #021F4B 0%, #000000 60%)" }}
        />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="relative">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Lead Generation / CRO / Full-Stack Build</p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mb-6">
            ALYA Nexus Auditing
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Building a full-stack compliance lead generation platform — multi-page marketing site, interactive Audit Readiness Checker, and client-side report engine — for UAE's first AI-powered audit firm.
          </p>
          <a
            href="https://accounting.alyaauditors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white/20 text-white/60 text-xs tracking-widest uppercase px-5 py-3 hover:border-white/50 hover:text-white/90 transition-colors duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
            accounting.alyaauditors.com
            <span className="text-white/30">↗</span>
          </a>
        </div>
      </section>

      {/* ── META STRIP ── */}
      <div className="px-8 md:px-30 lg:px-60 py-10 border-b border-neutral-100 bg-neutral-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Role", value: "Lead Experience Designer & Frontend Engineer" },
            { label: "Stack", value: "React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui" },
            { label: "Platform", value: "Multi-page Marketing Site + Interactive Lead-Gen Tooling" },
            { label: "Deliverables", value: "Full Site Build, Audit Checker, Downloadable Report Engine" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-neutral-400 text-xs tracking-widest uppercase">{item.label}</p>
              <p className="text-neutral-800 text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 CHALLENGE ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">01 — The Challenge</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            UAE compliance is urgent — but most businesses don't know it yet
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              ALYA Nexus Auditing is a UAE-based financial services firm — statutory audit, internal audit, VAT advisory, Corporate Tax advisory, accounting outsourcing, and business setup. With 30+ years of experience and a Six Sigma-driven 99.99% accuracy rate, their credentials were exceptional.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              The problem: UAE businesses are navigating their most complex compliance environment ever — Corporate Tax live since June 2023, tightening VAT enforcement, and mandatory annual audit requirements across most free zones. Most SMEs and mid-market companies remain unaware of their specific gaps until penalties arrive. ALYA needed a digital presence that could capture, educate, qualify, and convert inbound leads before any sales conversation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100">
          {challenges.map((c) => (
            <div key={c.num} className="bg-white p-10 flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <span className="text-neutral-300 text-xs tracking-widest">{c.num}</span>
                <div className="text-right">
                  <p className="text-neutral-900 text-2xl tracking-tight">{c.stat}</p>
                  <p className="text-neutral-400 text-xs tracking-wider mt-0.5">{c.statLabel}</p>
                </div>
              </div>
              <p className="text-neutral-900 text-lg">{c.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed image placeholder */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center">
          <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Landing Page Overview</span>
        </div>
      </div>

      {/* ── 02 CONVERSION FUNNEL ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">02 — Conversion Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            A progressive commitment funnel built around one inflection point
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              The site is not a brochure — it is a funnel. Every section serves a specific role in moving the visitor from awareness to action. The Audit Readiness Checker sits at the exact inflection point where passive readers become active participants. By the time they reach it, they are already qualified. By the time they finish it, they want to act.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              No single section converts on its own. The architecture is designed so that each section earns the next one: trust before education, education before activation, activation before conversion.
            </p>
          </div>
        </div>

        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-8">Site Conversion Funnel</p>
          <div className="border border-neutral-100 divide-y divide-neutral-100">
            {funnelStages.map((stage) => (
              <div key={stage.num} className={`p-8 ${stage.highlight ? "bg-neutral-900" : "bg-white"}`}>
                {/* Top row: label + percentage */}
                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-neutral-300 text-xs tracking-widest tabular-nums">{stage.num}</span>
                    <span className={`text-xl tracking-tight ${stage.highlight ? "text-white" : "text-neutral-900"}`}>{stage.label}</span>
                    <span className={`text-xs tracking-wider hidden sm:block ${stage.highlight ? "text-white/40" : "text-neutral-400"}`}>{stage.tag}</span>
                  </div>
                  <span className={`text-2xl tabular-nums tracking-tight ${stage.highlight ? "text-white" : "text-neutral-900"}`}>{stage.pct}</span>
                </div>
                {/* Bar */}
                <div className={`w-full h-1.5 rounded-full mb-5 ${stage.highlight ? "bg-white/10" : "bg-neutral-100"}`}>
                  <div
                    className={`h-full rounded-full ${stage.highlight ? "bg-white" : "bg-neutral-900"}`}
                    style={{ width: stage.bar }}
                  />
                </div>
                {/* Bottom row: description + metric tag */}
                <div className="flex items-end justify-between gap-6">
                  <p className={`text-sm leading-relaxed max-w-xl ${stage.highlight ? "text-white/60" : "text-neutral-500"}`}>{stage.desc}</p>
                  <span className={`text-xs tracking-wider shrink-0 ${stage.highlight ? "text-white/30" : "text-neutral-300"}`}>{stage.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 AUDIT READINESS CHECKER ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24 bg-neutral-50">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">03 — The Audit Readiness Checker</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            An 8-question tool that qualifies leads and proves expertise simultaneously
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              The checker is the most complex UX component on the site — and the most important. It transforms the site from a passive brochure into an active compliance diagnostic. Visitors who complete it have invested 2 minutes, learned something specific about their situation, and arrived at the conversion point already convinced they need help.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              The results screen delivers a 0–100 score with an animated SVG circle, a colour-coded band label (High / Moderate / Low / Not Ready), red and amber gap cards for each failed compliance area, and a dynamic CTA block whose headline and subtext change based on the user's exact score band.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 mb-16">
          {checkerPrinciples.map((p) => (
            <div key={p.id} className="bg-white p-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-neutral-300 text-xs tracking-widest">{p.id}</span>
                <p className="text-neutral-900 text-xl">{p.title}</p>
              </div>
              <p className="text-neutral-400 text-base leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Popup trigger logic */}
        <div className="bg-white border border-neutral-100 p-10">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-8">Lead Popup Strategy</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { trigger: "30-Second Idle", condition: "User on intro screen, hasn't started", note: "Fires once per session — then never again" },
              { trigger: "Exit Intent", condition: "Mouse leaves viewport top edge", note: "Fires once per session — then never again" },
              { trigger: "Download Gate", condition: "User clicks Get Full Report", note: "Intentional — gates the lead capture exchange" },
            ].map((row) => (
              <div key={row.trigger} className="flex flex-col gap-2 border-l-2 border-neutral-100 pl-5">
                <p className="text-neutral-900 text-base">{row.trigger}</p>
                <p className="text-neutral-500 text-sm leading-relaxed">{row.condition}</p>
                <p className="text-neutral-300 text-xs tracking-wider">{row.note}</p>
              </div>
            ))}
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed mt-8 max-w-2xl">
            A <code className="text-neutral-600 text-xs bg-neutral-100 px-1.5 py-0.5 rounded">hasShownIdlePopup</code> ref gates both automatic triggers — the popup appears at most once per session without user action. On close, it minimises to a sticky green pill at bottom-right that persists and can be reopened at will.
          </p>
        </div>
      </section>

      {/* Full-bleed image placeholder — dark */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full aspect-16/7 bg-black flex items-center justify-center">
          <span className="text-white/20 text-xs tracking-widest uppercase">Project Image — Audit Readiness Checker Results Screen</span>
        </div>
      </div>

      {/* ── 04 DESIGN SYSTEM ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">04 — Design System</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            One accent colour. Zero ambiguity. Total visual control.
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              The design system is built on Tailwind CSS with a custom token set. The palette is deliberately constrained: Navy (#021F4B) anchors all authority surfaces, a single bright green (#7FFA7B) handles every interactive element. Users never wonder what they can click.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              Typography uses PP Neue Montreal (self-hosted) with fluid type scaling via <code className="text-neutral-600 text-xs bg-neutral-50 px-1.5 py-0.5 rounded">clamp()</code> throughout — headings scale from mobile to desktop without breakpoint jumps. Eyebrow labels at 11px / 0.2em tracking provide consistent section hierarchy.
            </p>
          </div>
        </div>

        {/* Colour tokens */}
        <div className="mb-12">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Colour Tokens</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100">
            {designTokens.map((t) => (
              <div key={t.token} className="bg-white p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-sm shrink-0 border border-neutral-100"
                    style={{ backgroundColor: t.value }}
                  />
                  <div>
                    <p className="text-neutral-900 text-sm">{t.token}</p>
                    <p className="text-neutral-400 text-xs">{t.value}</p>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{t.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section rhythm */}
        <div className="bg-neutral-50 border border-neutral-100 p-10">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Section Background Rhythm</p>
          <div className="flex flex-col md:flex-row gap-4">
            {[
              { label: "White", sections: "Hero · WhyALYA · Process", bg: "bg-white border border-neutral-200" },
              { label: "Surface #F4F8FD", sections: "Services · Industries · FAQ · AuditChecker", bg: "bg-[#F4F8FD] border border-[#C8DAF2]" },
              { label: "Navy #021F4B", sections: "StatsBar · LeadForm · Footer", bg: "bg-[#021F4B]" },
            ].map((item) => (
              <div key={item.label} className="flex-1 flex flex-col gap-3">
                <div className={`w-full h-12 rounded-sm ${item.bg}`} />
                <p className="text-neutral-900 text-sm">{item.label}</p>
                <p className="text-neutral-400 text-xs leading-relaxed">{item.sections}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 TECHNICAL BUILD ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24 bg-neutral-50">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">05 — Technical Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Custom hooks, a checker state machine, and a serverless report engine
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            Every interactive layer is backed by purpose-built engineering. Sections that use React hooks inside lists are split into typed sub-components to comply with Rules of Hooks. Blog content is served from a headless WordPress instance via the WP REST API with React Query caching. The downloadable report requires no server — generated entirely client-side.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
          {technicalBlocks.map((block) => (
            <div key={block.id} className="bg-white flex flex-col">
              <div className="w-full aspect-video bg-neutral-50 border-b border-neutral-100 flex items-center justify-center">
                <span className="text-neutral-200 text-xs tracking-widest uppercase">{block.tag}</span>
              </div>
              <div className="p-8 flex flex-col gap-4 flex-1">
                <p className="text-neutral-900 text-lg">{block.title}</p>
                <p className="text-neutral-500 text-sm leading-relaxed">{block.desc}</p>
                <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-neutral-100">
                  {block.specs.map((s) => (
                    <li key={s} className="text-neutral-400 text-sm flex gap-3">
                      <span className="text-neutral-200 shrink-0">—</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed image placeholder */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center">
          <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Mobile Site + Checker Flow</span>
        </div>
      </div>

      {/* ── 06 RESOLUTION ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">06 — Resolution</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-4 max-w-3xl">
          Four key decisions that made the difference
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-16 max-w-2xl">
          Every strategic decision was made to increase lead quality and reduce friction — not to add features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100 mb-16">
          {keyDecisions.map((item) => (
            <div key={item.title} className="bg-white p-10 flex flex-col gap-4">
              <p className="text-neutral-900 text-xl">{item.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Metrics targets */}
        <div className="mb-16">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-8">Performance Targets</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-100">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white p-8 flex flex-col gap-2">
                <p className="text-neutral-900 text-3xl tracking-tight">{m.metric}</p>
                <p className="text-neutral-700 text-sm">{m.label}</p>
                <p className="text-neutral-400 text-xs">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final takeaway */}
        <div className="bg-black p-10 md:p-16 max-w-3xl">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Key Takeaway</p>
          <p className="text-white text-2xl md:text-3xl leading-snug tracking-tight">
            A compliance tool that proves expertise before asking for a lead converts better than any form ever will. The checker isn't a gimmick — it's the product.
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
          <Link href="/case-study/paperwurk" className="group flex flex-col gap-1">
            <p className="text-neutral-300 text-xs tracking-widest uppercase">← Previous</p>
            <p className="text-neutral-700 text-sm group-hover:text-black transition-colors duration-300">Paperwurk</p>
          </Link>
          <Link href="/case-study/insure-first" className="group flex flex-col gap-1 text-right">
            <p className="text-neutral-300 text-xs tracking-widest uppercase">Next →</p>
            <p className="text-neutral-700 text-sm group-hover:text-black transition-colors duration-300">Insure First</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
