import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greek Street Lab — Vivek S L",
  description:
    "Sensory-Driven Culinary UX: Engineering a Clean, High-Conversion Landing Architecture for Modern Street Culture",
};

const frictionPoints = [
  {
    num: "01",
    title: "Text-Heavy Cognitive Load",
    desc: "Menus built around long ingredient lists and item descriptions force hungry users to read before they can feel. It completely short-circuits the visual appetite trigger that drives food decisions.",
    stat: "< 3s",
    statLabel: "Appetite window",
  },
  {
    num: "02",
    title: "Chaotic Layout Crowding",
    desc: "Heavy background textures, competing visual elements, and dense category structures cause the food photography — the single most powerful conversion asset in food-tech — to disappear into the noise.",
    stat: "↓ Food focus",
    statLabel: "Lost to clutter",
  },
  {
    num: "03",
    title: "Friction-Heavy Conversion Paths",
    desc: "Every unnecessary tap, redirect, or UI ambiguity between a user and the Order Now button is a leak in the funnel. On mobile, with a hungry user, that friction compounds fast.",
    stat: "↑ Abandonment",
    statLabel: "Per friction point",
  },
];

const pipelineSteps = [
  {
    step: "01",
    title: "Culinary Strategy Brief",
    desc: "Absorbed the brand DNA — street culture roots, Mediterranean identity, Dubai delivery market dynamics — and mapped this into a clear visual language before a single line of code was written.",
  },
  {
    step: "02",
    title: "Direct Component Architecture",
    desc: "Bypassed static mockup tools entirely. Translated the brand concept into functional frontend components immediately, verifying spacing, image behavior, and layout rhythm across real mobile viewports.",
  },
  {
    step: "03",
    title: "Mobile Viewport Tuning",
    desc: "Tweaked padding, flex variables, and touch target sizing directly in the codebase — instantly seeing how menu categories responded across different operating systems and screen densities.",
  },
  {
    step: "04",
    title: "Imagery Performance Pipeline",
    desc: "Structured a media delivery system using compression, lazy-loading, and modern image formats — ensuring dish photography loaded at full fidelity without degrading scroll performance on mobile networks.",
  },
];

const architectureBlocks = [
  {
    id: "A",
    tag: "Component Block A",
    title: "Visual Menu Matrix",
    desc: "A responsive grid displaying all menu categories — Savory Crepes, Greek Bowls, Signature Pitas — with high-fidelity image wrappers, clean pricing displays, and disciplined whitespace that gives every dish maximum room to breathe and drive appetite.",
    specs: ["Imagery-forward card grid", "Clean price matrix", "Generous whitespace constraints", "Category label hierarchy"],
  },
  {
    id: "B",
    tag: "Component Block B",
    title: "Mobile Action Target",
    desc: "A persistent, high-contrast Order Now interaction point engineered for one-tap access at every scroll depth. Styled with crisp borders, prominent scaling, and minimal surrounding clutter to isolate conversion focus completely.",
    specs: ["Sticky scroll positioning", "High-contrast color blocking", "Thumb-friendly touch target", "Zero surrounding noise"],
  },
  {
    id: "C",
    tag: "Component Block C",
    title: "Spatial Rhythm System",
    desc: "The exact micro-padding rules, item margins, and whitespace parameters that give dish photography its breathing room. The restraint itself is the design — a clean stage that makes food the hero of every viewport.",
    specs: ["Systematic margin rules", "Breathing-room enforcement", "Inter-item spacing grid", "Photography-first logic"],
  },
];

const outcomes = [
  {
    metric: "Appetite-first design",
    title: "Sensory Conversion Architecture",
    desc: "Delivered an ultra-clean, imagery-forward interface where the food does the selling — no copy required to trigger craving.",
  },
  {
    metric: "Mobile-first execution",
    title: "Frictionless Ordering Funnel",
    desc: "Engineered a lightweight responsive framework guiding on-the-go Dubai users straight to the ordering channel in a single tap.",
  },
  {
    metric: "Premium brand elevation",
    title: "Street Culture, Digital Premium",
    desc: "Synthesized bold urban typography with a minimalist canvas — elevating an authentic street-food concept into a premium digital destination.",
  },
];

export default function GreekStreetLabPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Back nav */}
      <div className="px-8 md:px-30 lg:px-60 py-6 border-b border-neutral-100">
        <Link href="/" className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase">
          ← vivek s l
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-neutral-900 px-8 md:px-30 lg:px-60 pt-20 pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 60% 40%, #2d1f0e 0%, #0a0a0a 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, #c8a96e 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <div className="relative">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">
            Food-Tech / Culinary UX / CRO
          </p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mb-6">
            Greek Street Lab
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed">
            Sensory-Driven Culinary UX: Engineering a Clean, High-Conversion Landing Architecture for Modern Street Culture
          </p>
        </div>
      </section>

      {/* ── META STRIP ── */}
      <div className="px-8 md:px-30 lg:px-60 py-10 border-b border-neutral-100 bg-neutral-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Role", value: "Lead Experience Designer & Frontend Engineer" },
            { label: "Core Focus", value: "Sensory UI Design, CRO, Mobile-First Layouts" },
            { label: "Market", value: "High-Velocity Dubai Culinary Delivery" },
            { label: "Deliverables", value: "Visual Menu Grid, CTA Modules, Mobile Funnel" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-neutral-400 text-xs tracking-widest uppercase">{item.label}</p>
              <p className="text-neutral-800 text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 THE CHALLENGE ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">01 — The Challenge</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            The Dubai delivery market has zero tolerance for friction
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              Greek Street Lab is a high-energy culinary brand delivering authentic Mediterranean street food — signature pitas, artisanal gyros, traditional bougatsa pastries, and sweet and savory crepes — directly into one of the most competitive food delivery markets in the world.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              A user who arrives hungry has one intent and almost no patience. If the digital storefront fails to communicate appetite, credibility, and ease of ordering within the first few seconds, they are gone. The brand needed a digital experience that worked as fast as the food itself. Their existing interface hit every structural failure point that kills mobile conversion in food-tech.
            </p>
          </div>
        </div>

        {/* Friction point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100">
          {frictionPoints.map((f) => (
            <div key={f.num} className="bg-white p-10 flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <span className="text-neutral-300 text-xs tracking-widest">{f.num}</span>
                <div className="text-right">
                  <p className="text-neutral-900 text-2xl tracking-tight">{f.stat}</p>
                  <p className="text-neutral-400 text-xs tracking-wider mt-0.5">{f.statLabel}</p>
                </div>
              </div>
              <p className="text-neutral-900 text-lg">{f.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed image */}
      <div className="px-8 md:px-30 lg:px-60 py-10">

        <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center">

          <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Brand & Market Context</span>

        </div>

      </div>

      {/* ── 02 THE PROCESS ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">02 — The Process</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Strategy brief to live components — no static canvas in between
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              To capture the bold, soulful energy of the Greek Street Lab brand without getting trapped in slow design-to-handoff cycles, I bypassed static canvas tools entirely. The culinary concept was translated directly into functional frontend components from day one.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              This meant layout decisions were verified against real mobile viewports, not desktop simulations. Spacing behavior, image performance, and touch target scaling were resolved at the component level — not discovered during development.
            </p>
          </div>
        </div>

        {/* Pipeline */}
        <div className="bg-neutral-50 border border-neutral-100 p-10 mb-12">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-8">Execution Pipeline</p>
          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4">
            {[
              "Culinary Strategy Brief",
              "Direct Component Build",
              "Mobile Viewport Tuning",
              "Imagery Performance Pipeline",
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-4">
                <div className="px-5 py-4 bg-white border border-neutral-200 text-neutral-700 text-base">{step}</div>
                {i < arr.length - 1 && <span className="text-neutral-300 text-xl hidden md:block">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Process step blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
          {pipelineSteps.map((item) => (
            <div key={item.step} className="bg-white p-10 flex flex-col gap-4">
              <span className="text-neutral-300 text-xs tracking-widest">{item.step}</span>
              <p className="text-neutral-900 text-xl">{item.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed image — dark */}
      <div className="px-8 md:px-30 lg:px-60 py-10">

        <div className="w-full aspect-16/7 bg-neutral-900 flex items-center justify-center">

          <span className="text-white/20 text-xs tracking-widest uppercase">Project Image — Mobile Component Build Process</span>

        </div>

      </div>

      {/* ── 03 UI ARCHITECTURE ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">03 — UI Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            The Digital Appetite Framework — food as the interface
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            The solution was building what I call the Digital Appetite Framework: a set of layered design decisions that collectively create an interface where the food photography does the selling. The layout is stripped of everything that competes with the dish — leaving only the visual stimulus, the price, and the action.
          </p>
        </div>

        {/* Mobile mockup + architecture blocks side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="bg-neutral-50 border border-neutral-100 p-8">
            <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Mobile Storefront — Layout Simulation</p>
            <div className="max-w-xs mx-auto border-2 border-neutral-200 rounded-2xl overflow-hidden bg-white">
              {/* Phone bar */}
              <div className="bg-neutral-900 h-8 flex items-center justify-center">
                <div className="w-20 h-2 bg-neutral-700 rounded-full" />
              </div>
              {/* Hero dish image */}
              <div className="bg-neutral-100 aspect-video flex items-center justify-center border-b border-neutral-100">
                <span className="text-neutral-300 text-xs tracking-widest">Hero Dish Image</span>
              </div>
              {/* Menu grid */}
              <div className="p-4 grid grid-cols-2 gap-2 border-b border-neutral-100">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-neutral-50 border border-neutral-100 p-2 flex flex-col gap-1.5">
                    <div className="w-full aspect-video bg-neutral-100 rounded-sm" />
                    <div className="w-3/4 h-2.5 bg-neutral-200 rounded-sm" />
                    <div className="w-1/2 h-2 bg-neutral-100 rounded-sm" />
                  </div>
                ))}
              </div>
              {/* CTA */}
              <div className="p-4">
                <div className="w-full h-12 bg-neutral-900 rounded-sm flex items-center justify-center">
                  <div className="w-24 h-2.5 bg-white/40 rounded-sm" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 pt-4">
            {architectureBlocks.map((block) => (
              <div key={block.id} className="border-l-2 border-neutral-200 pl-6 py-2">
                <p className="text-neutral-300 text-xs tracking-widest uppercase mb-1">{block.tag}</p>
                <p className="text-neutral-900 text-xl mb-3">{block.title}</p>
                <p className="text-neutral-700 text-base leading-relaxed">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Component spec grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100">
          {architectureBlocks.map((block) => (
            <div key={block.id} className="bg-white flex flex-col">
              <div className="w-full aspect-video bg-neutral-50 border-b border-neutral-100 flex items-center justify-center">
                <span className="text-neutral-200 text-xs tracking-widest uppercase">{block.tag}</span>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <p className="text-neutral-900 text-lg">{block.title}</p>
                <ul className="flex flex-col gap-2">
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

      {/* Full-bleed image */}
      <div className="px-8 md:px-30 lg:px-60 py-10">

        <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center">

          <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Live Menu Interface & Component Spread</span>

        </div>

      </div>

      {/* ── 04 RESOLUTION ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">04 — Resolution</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-4 max-w-3xl">
          A digital storefront that sells with visuals before a word is read
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-16 max-w-2xl">
          By combining sensory UX disciplines with a focused, clean conversion layout, the result was an elite digital storefront purpose-built for the high-velocity Dubai delivery market.
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

        {/* Key takeaway */}
        <div className="bg-neutral-900 p-10 md:p-16 max-w-3xl">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Key Takeaway</p>
          <p className="text-white text-2xl md:text-3xl leading-snug tracking-tight">
            In food-tech, the interface that gets out of the way fastest is the one that converts. Restraint is a design decision — and it is the most powerful one on this page.
          </p>
        </div>
      </section>

      {/* Footer nav */}
      <div className="px-8 md:px-30 lg:px-60 py-16 border-t border-neutral-100 flex items-center justify-between">
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
