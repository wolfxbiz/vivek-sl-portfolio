import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMEX Tires — Vivek S L",
  description:
    "Heavy Industrial B2B E-Commerce: Structuring a High-Reliability Technical Inventory Matrix for Global Logistics Procurement",
};

const bottlenecks = [
  {
    num: "01",
    title: "Fragmented Data Clutter",
    desc: "Heavy industrial inventory requires listing highly specialized parameters — tread compound variations, ply ratings, tire widths, and custom heavy-flange rim configurations. Traditional layouts fail to organize this data, leading to massive user confusion.",
    cost: "Lost procurement velocity",
  },
  {
    num: "02",
    title: "Ambiguous Distribution Context",
    desc: "Enterprise buyers need immediate operational validation regarding where stock is held globally to compute transit times and mitigate machinery downtime. No map, no deal.",
    cost: "Unvalidated supply chain",
  },
  {
    num: "03",
    title: "Friction-Heavy Inquiry Paths",
    desc: "Forcing an on-site supervisor or purchasing agent to navigate a complex multi-page registration portal just to ask for an emergency quote kills transactional velocity entirely.",
    cost: "Emergency quote abandonment",
  },
];

const productSegments = [
  { label: "Heavy-Duty OTR Tires", sub: "Off-The-Road Mining & Earthmoving", specs: ["Ply Rating: 20–40 PR", "Compound: E-4 / L-5", "Sizes: 27.00-49 to 40.00-57"] },
  { label: "Agricultural Tires", sub: "Large-Scale Farm & Field Machinery", specs: ["Tread Pattern: R-1W", "Compound: Multi-Season", "Sizes: 30.5L-32 to 20.8-42"] },
  { label: "TBR Tires", sub: "Truck Bus Radial — Fleet Grade", specs: ["Load Index: 148/145K", "Speed: 120 km/h rated", "Sizes: 11R22.5 to 315/80R22.5"] },
  { label: "Custom OEM Rims", sub: "Heavy-Flange Industrial Wheel Systems", specs: ["Material: Forged Steel", "Bolt Pattern: Custom OEM", "Finish: Powder-coated / Raw"] },
];

const logisticsNodes = [
  { country: "Australia", proximity: "Pilbara & Hunter Valley mining corridors" },
  { country: "UAE", proximity: "Dubai & Abu Dhabi logistics free zones" },
  { country: "India", proximity: "Rajasthan & Odisha mining belt access" },
  { country: "South Africa", proximity: "Johannesburg & Limpopo operations" },
  { country: "USA", proximity: "Texas & Nevada distribution hubs" },
];

const architectureBlocks = [
  {
    id: "A",
    title: "The Product Segment Matrix",
    desc: "A balanced multi-column component layout hosting heavy machinery inventory cards. Features crisp technical spec charts, bold section badges, and dedicated compound metric listings wrapped in ample whitespace.",
    specs: ["Technical spec charts", "Bold section badges", "Compound metric listings", "Dense data, zero clutter"],
  },
  {
    id: "B",
    title: "The Global Logistics Hub",
    desc: "A clean geographic distribution row showcasing international warehouse nodes, transit proximity indicators, and corporate scale trust anchors — instantly signaling regional supply capability.",
    specs: ["10+ country node map", "Transit proximity indicators", "Mining corridor proximity", "Supply validation layer"],
  },
  {
    id: "C",
    title: "The High-Urgency Inquiry Bar",
    desc: "A prominent dark-styled transaction tray with clear touch boundaries, prominent typography labels, and direct link shortcuts to corporate email, WhatsApp, and BOTIM channels.",
    specs: ["Direct email shortcuts", "WhatsApp rapid quote", "BOTIM integration", "Zero registration required"],
  },
];

const outcomes = [
  { title: "Authoritative Industrial Presence", desc: "Transformed a complex OTR tire and wheel catalog into an exceptionally clean, scannable interface projecting immediate corporate scale.", metric: "4 product segments" },
  { title: "Friction-Free B2B Conversion", desc: "Built a high-intent communication pipeline connecting industrial buyers directly to rapid quotation endpoints — minimizing machinery downtime.", metric: "Multi-channel inquiry" },
  { title: "Airtight Structural Execution", desc: "Enforced perfect responsive fluidity and spatial rhythm across all viewports — proving a heavy-industry corporate asset can look modern and professional.", metric: "10+ country reach" },
];

export default function ImexTiresPage() {
  return (
    <main className="bg-white min-h-screen pt-16">

      {/* ── HERO ── industrial stone */}
      <section className="relative bg-stone-900 px-8 md:px-30 lg:px-60 pt-14 md:pt-20 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, #1c1917 0%, #292524 60%, #1c1917 100%)" }}
        />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}
        />
        <div className="relative">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-orange-400" />
            <p className="text-stone-400 text-xs tracking-[0.3em] uppercase">Industrial B2B / Heavy Machinery / Global Procurement</p>
          </div>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mb-4">
            IMEX Tires
          </h1>
          <p className="text-stone-400 text-sm tracking-widest uppercase mb-4">OTR / Mining / Earthmoving / Agricultural — Global Distribution</p>
          <p className="text-stone-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Heavy Industrial B2B E-Commerce: Structuring a High-Reliability Technical Inventory Matrix for Global Logistics Procurement
          </p>
        </div>
      </section>

      {/* ── META STRIP ── */}
      <div className="px-8 md:px-30 lg:px-60 py-10 border-b border-stone-200 bg-stone-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Role", value: "Lead Experience Designer & Frontend Engineer" },
            { label: "Core Focus", value: "Industrial B2B Architecture, High-Density Technical Matrices" },
            { label: "Target Market", value: "Mining, Earthmoving, Construction, Fleet Procurement" },
            { label: "Deliverables", value: "Product Blocks, Logistics Map, Multi-Channel Inquiry Integration" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-stone-400 text-xs tracking-widest uppercase">{item.label}</p>
              <p className="text-stone-800 text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 STRATEGIC CONTEXT ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">01 — Strategic Context</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-12">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Equipment downtime costs millions per day — the platform cannot add friction
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              IMEX Tires operates at the absolute macro-scale of global heavy industry — sourcing and distributing massive Off-The-Road (OTR), earthmoving, mining, and agricultural tires and wheels. In the heavy machinery and mining sectors, equipment downtime can cost operations millions of dollars per day.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              B2B industrial procurement officers do not browse for aesthetic novelty. They operate under extreme operational stress and tight timelines — facing distinct informational bottlenecks when navigating traditional supplier platforms.
            </p>
          </div>
        </div>

        {/* Downtime callout */}
        <div className="bg-stone-900 p-8 mb-12 flex items-center gap-8">
          <div className="shrink-0">
            <p className="text-orange-400 text-4xl md:text-5xl tracking-tight">$M+</p>
            <p className="text-stone-400 text-xs tracking-widest uppercase mt-1">Per Day Downtime Cost</p>
          </div>
          <div className="w-px h-16 bg-stone-700 hidden md:block shrink-0" />
          <p className="text-stone-300 text-base leading-relaxed">
            In mining and earthmoving operations, every hour a piece of equipment sits idle compounds exponentially. The procurement platform's job is to eliminate every second of unnecessary friction between "we need a tire" and "the tire is ordered."
          </p>
        </div>

        {/* Bottleneck cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
          {bottlenecks.map((b) => (
            <div key={b.num} className="bg-white p-10 flex flex-col gap-4">
              <span className="text-stone-300 text-xs tracking-widest">{b.num}</span>
              <p className="text-neutral-900 text-xl">{b.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{b.desc}</p>
              <div className="flex items-center gap-2 mt-2 pt-4 border-t border-stone-100">
                <span className="text-orange-400 text-sm">↓</span>
                <span className="text-stone-400 text-xs tracking-wider">{b.cost}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed dark image */}
      <div className="px-8 md:px-30 lg:px-60 py-10">

        <div className="w-full aspect-16/7 bg-stone-900 flex items-center justify-center">

          <span className="text-stone-600 text-xs tracking-widest uppercase">Project Image — Industrial Product Interface</span>

        </div>

      </div>

      {/* ── 02 PROCESS ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">02 — The Process</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Component-driven industrial architecture — direct from spec to grid
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              To build a highly authoritative digital asset for IMEX Tires' global partners, I skipped slow static asset-drafting pipelines and translated heavy industrial inventory requirements directly into an agile, type-safe production code environment.
            </p>
          </div>
        </div>

        {/* Pipeline */}
        <div className="bg-stone-900 p-10 mb-12">
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-8">Execution Pipeline</p>
          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4">
            {["Complex Inventory Brief", "Direct Component Grid Blueprinting", "Production-Ready Logistics Storefront"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-4">
                <div className="px-5 py-4 bg-white/5 border border-white/10 text-stone-300 text-base">{step}</div>
                {i < arr.length - 1 && <span className="text-stone-600 text-xl hidden md:block">→</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200">
          {[
            { title: "Direct-to-Grid Layout Engineering", desc: "Moved straight from technical specifications into active CSS grid and flexbox definitions — crafting highly organized data cards and inventory matrix containers natively in code." },
            { title: "Flawless Responsive Fluidity", desc: "Building directly in a live frontend setup ensured heavy technical data tables, multi-parameter sizing lists, and high-contrast inventory imagery scale flawlessly across field mobile devices and enterprise desktop terminals." },
          ].map((item) => (
            <div key={item.title} className="bg-white p-10 flex flex-col gap-4">
              <p className="text-neutral-900 text-xl">{item.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03 UI ARCHITECTURE ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">03 — UI Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            The technical data matrix — four product silos, zero cognitive overload
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            The core solution was maintaining absolute corporate visual discipline — a highly structured, ultra-clean framework to display complex product definitions without creating cognitive data dumps. Every element earns its position on the screen.
          </p>
        </div>

        {/* Product segment grid */}
        <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Product Segment Matrix — Technical Inventory Blocks</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 mb-12">
          {productSegments.map((seg) => (
            <div key={seg.label} className="bg-white flex flex-col">
              <div className="bg-stone-900 p-6 flex flex-col gap-1">
                <p className="text-white text-base leading-snug">{seg.label}</p>
                <p className="text-stone-400 text-xs">{seg.sub}</p>
              </div>
              <div className="p-6 flex flex-col gap-2">
                {seg.specs.map((spec) => (
                  <div key={spec} className="flex items-start gap-2">
                    <span className="text-orange-400 text-xs shrink-0 mt-0.5">—</span>
                    <p className="text-stone-500 text-xs leading-relaxed font-mono">{spec}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Logistics map */}
        <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Global Supply Infrastructure — Warehouse Nodes</p>
        <div className="border border-stone-200 mb-12">
          <div className="bg-stone-900 px-8 py-5 flex items-center justify-between">
            <p className="text-stone-300 text-sm tracking-wide">Global Distribution Coverage</p>
            <p className="text-orange-400 text-xs tracking-widest uppercase">10+ Countries</p>
          </div>
          <div className="divide-y divide-stone-100">
            {logisticsNodes.map((node, i) => (
              <div key={node.country} className="flex items-center gap-8 px-8 py-5 hover:bg-stone-50 transition-colors duration-200">
                <div className="w-8 h-8 bg-stone-900 flex items-center justify-center shrink-0">
                  <span className="text-white text-xs">0{i + 1}</span>
                </div>
                <p className="text-neutral-900 text-base w-32 shrink-0">{node.country}</p>
                <p className="text-stone-400 text-sm leading-relaxed">{node.proximity}</p>
                <div className="ml-auto w-2 h-2 rounded-full bg-orange-400 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Component spec blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
          {architectureBlocks.map((block) => (
            <div key={block.id} className="bg-white flex flex-col">
              <div className="w-full aspect-video bg-stone-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)", backgroundSize: "15px 15px" }}
                />
                <span className="text-stone-500 text-xs tracking-widest uppercase relative z-10">Block {block.id}</span>
              </div>
              <div className="p-8 flex flex-col gap-4">
                <p className="text-stone-400 text-xs tracking-widest uppercase">Component Block {block.id}</p>
                <p className="text-neutral-900 text-lg">{block.title}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{block.desc}</p>
                <ul className="flex flex-col gap-2 mt-2">
                  {block.specs.map((s) => (
                    <li key={s} className="text-stone-400 text-sm flex gap-3">
                      <span className="text-orange-400 shrink-0">—</span>{s}
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

        <div className="w-full aspect-16/7 bg-stone-100 flex items-center justify-center">

          <span className="text-stone-300 text-xs tracking-widest uppercase">Project Image — Full Interface Spread</span>

        </div>

      </div>

      {/* ── 04 RESOLUTION ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24 border-t border-neutral-100">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">04 — Resolution</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-4 max-w-3xl">
          A global B2B procurement hub built to withstand the demands of international heavy industry
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-16 max-w-2xl">
          By combining strict grid disciplines with a streamlined B2B acquisition path, the result is a digital hub built for procurement officers operating under extreme operational pressure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 mb-16">
          {outcomes.map((item) => (
            <div key={item.title} className="bg-white p-10 flex flex-col gap-4">
              <p className="text-orange-400 text-xs tracking-widest uppercase">{item.metric}</p>
              <p className="text-neutral-900 text-xl">{item.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing — industrial */}
        <div className="bg-stone-900 p-10 md:p-16 max-w-3xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)", backgroundSize: "25px 25px" }}
          />
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-6 relative z-10">The Industrial Standard</p>
          <p className="text-white text-2xl md:text-3xl leading-snug tracking-tight relative z-10">
            A procurement officer in a Pilbara mine site should be able to find, validate, and quote a 40.00-57 OTR tire in under three minutes. That is the only design brief that matters.
          </p>
          <div className="flex items-center gap-3 mt-8 relative z-10">
            <div className="w-2 h-2 bg-orange-400" />
            <p className="text-stone-400 text-xs tracking-widest uppercase">Built for Field Operations — Not Boardrooms</p>
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
          <Link href="/case-study/turquoic" className="group flex flex-col gap-1">
            <p className="text-neutral-300 text-xs tracking-widest uppercase">← Previous</p>
            <p className="text-neutral-700 text-sm group-hover:text-black transition-colors duration-300">Turquoic</p>
          </Link>
          <Link href="/case-study/greek-street-lab" className="group flex flex-col gap-1 text-right">
            <p className="text-neutral-300 text-xs tracking-widest uppercase">Next →</p>
            <p className="text-neutral-700 text-sm group-hover:text-black transition-colors duration-300">Greek Street Lab</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
