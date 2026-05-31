import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alya Auditors — Vivek S L",
  description:
    "Conversion-Focused Campaign Engineering: Translating Corporate Strategy Into High-Impact Digital Ad Experiences",
};

const frictionPoints = [
  {
    num: "01",
    title: "Immediate Drop-Off",
    desc: "Financial services ads struggle to hook user attention within the critical first three seconds of a scroll cycle. Standard corporate creatives fail the pattern-interrupt test entirely.",
    stat: "3 sec",
    statLabel: "Decision window",
  },
  {
    num: "02",
    title: "Disconnected Experiences",
    desc: "A massive friction point occurs when high-energy ad assets forward users to flat, generic, or slow-loading corporate homepages that fail to maintain scroll momentum.",
    stat: "↓ 80%",
    statLabel: "Avg. post-click retention",
  },
  {
    num: "03",
    title: "Complex Conversion Paths",
    desc: "Forcing a mobile user to fill out a standard, extensive financial inquiry form kills campaign conversion velocity before the lead is even captured.",
    stat: "↓ 60%",
    statLabel: "Form completion rate",
  },
];

const funnelStages = [
  {
    stage: "Stage 01",
    label: "The Hook",
    position: "Top of Funnel",
    color: "bg-neutral-900",
    textColor: "text-white",
    subColor: "text-white/50",
    desc: "High-energy ad media asset frames designed to eliminate scroll-past behavior within 3 seconds.",
    metric: "Target: 3-second attention capture",
  },
  {
    stage: "Stage 02",
    label: "The Bridge",
    position: "Mid Funnel",
    color: "bg-neutral-700",
    textColor: "text-white",
    subColor: "text-white/50",
    desc: "High-contrast, minimalist campaign interface seamlessly transitioning momentum from ad click to content engagement.",
    metric: "Target: Zero drop-off post-click",
  },
  {
    stage: "Stage 03",
    label: "The Conversion",
    position: "Bottom of Funnel",
    color: "bg-neutral-500",
    textColor: "text-white",
    subColor: "text-white/30",
    desc: "Hyper-focused, thumb-friendly tap targets with instant direct routing to consulting inquiry endpoints.",
    metric: "Target: Sub-2-tap inquiry submission",
  },
];

const architectureBlocks = [
  {
    id: "A",
    title: "The Media Anchor",
    tag: "Component Block A",
    desc: "Full-width, aspect-locked responsive video frame container optimized for immediate media rendering above the fold. Positioned securely as the very first asset a user interacts with — maximizing initial engagement before a single line of copy is read.",
    specs: ["Aspect-locked responsive wrapper", "Above-the-fold positioning", "Autoplay-ready container", "Mobile-optimized render"],
  },
  {
    id: "B",
    title: "The Value Grid",
    tag: "Component Block B",
    desc: "High-contrast text layout blocks utilizing bold font weighting for immediate visual impact. Strict container constraints make corporate compliance messaging incredibly easy to scan — executives extract the offer in under five seconds.",
    specs: ["Bold typographic hierarchy", "Strict column constraints", "Scannable content rows", "Zero visual noise policy"],
  },
  {
    id: "C",
    title: "The Conversion Tray",
    tag: "Component Block C",
    desc: "Persistent call-to-action touchpoints featuring large, high-contrast button styling, clear touch boundaries, and minimal surrounding background clutter to isolate user focus completely at the moment of decision.",
    specs: ["Thumb-friendly touch targets", "High-contrast color blocking", "Prominent border treatment", "Isolated focus zones"],
  },
];

const outcomes = [
  {
    title: "Bypassed Design Bottlenecks",
    desc: "Eliminated traditional, slow layout drawing phases by transforming strategy documentation into functional web components at record velocity.",
    metric: "Weeks saved",
  },
  {
    title: "Optimized Attention Funnel",
    desc: "Constructed an ultra-clean, mobile-first interface engineered to capture immediate scrolling traffic and drive it toward corporate consultations.",
    metric: "3-stage funnel",
  },
  {
    title: "Airtight Layout Control",
    desc: "Maintained complete ownership over structural spacing, responsive scaling, and element alignment — delivering a premium corporate asset ready to convert.",
    metric: "100% code ownership",
  },
];

export default function AlyaAuditorsPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Back nav */}
      <div className="px-8 md:px-16 lg:px-24 py-6 border-b border-neutral-100">
        <Link href="/" className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase">
          ← vivek s l
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-black px-8 md:px-16 lg:px-24 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 30% 60%, #1a1a2e 0%, #000000 65%)" }}
        />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="relative">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">CRO / Lead Generation / Campaign Design</p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mb-6">
            Alya Auditors
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed">
            Conversion-Focused Campaign Engineering: Translating Corporate Strategy Into High-Impact Digital Ad Experiences
          </p>
        </div>
      </section>

      {/* ── META STRIP ── */}
      <div className="px-8 md:px-16 lg:px-24 py-10 border-b border-neutral-100 bg-neutral-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Role", value: "Lead Experience Designer & Frontend Engineer" },
            { label: "Workflow Type", value: "Strategy-to-Code Pipeline" },
            { label: "Platform", value: "Mobile-First Campaign Landing Interface" },
            { label: "Core Deliverables", value: "Ad Assets, Landing Interface, CTA Components" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-neutral-400 text-xs tracking-widest uppercase">{item.label}</p>
              <p className="text-neutral-800 text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 CHALLENGE ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">01 — The Challenge</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Corporate finance is a high-friction category — by default
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-500 text-lg leading-[1.9]">
              Alya Auditors is an established corporate finance and professional tax consultancy firm. To scale their market acquisition, they required an energetic, high-impact campaign designed to capture the attention of busy business owners and executive decision-makers.
            </p>
            <p className="text-neutral-500 text-lg leading-[1.9]">
              Corporate finance, auditing, and tax compliance are traditionally perceived as dense, high-friction, and low-engagement topics. When transitioning these services into a digital marketing environment, traditional pipelines suffer from three distinct operational bottlenecks.
            </p>
          </div>
        </div>

        {/* Friction point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100 mb-16">
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

        {/* Attention funnel diagram */}
        <div className="max-w-2xl mx-auto">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-8 text-center">Campaign Attention Funnel</p>
          <div className="flex flex-col gap-px">
            {funnelStages.map((stage, i) => (
              <div
                key={stage.stage}
                className={`${stage.color} p-8 flex flex-col md:flex-row md:items-center gap-6 ${
                  i === 1 ? 'md:mx-6' : i === 2 ? 'md:mx-12' : ''
                }`}
              >
                <div className="shrink-0">
                  <p className={`text-xs tracking-widest uppercase mb-1 ${stage.subColor}`}>{stage.stage}</p>
                  <p className={`text-xl ${stage.textColor}`}>{stage.label}</p>
                  <p className={`text-xs tracking-wider mt-1 ${stage.subColor}`}>{stage.position}</p>
                </div>
                <div className={`w-px h-12 bg-white/10 hidden md:block shrink-0`} />
                <div className="flex flex-col gap-2">
                  <p className={`text-sm leading-relaxed ${stage.textColor} opacity-80`}>{stage.desc}</p>
                  <p className={`text-xs tracking-wider ${stage.subColor}`}>{stage.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center border-y border-neutral-100">
        <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Campaign Creative Assets</span>
      </div>

      {/* ── 02 PROCESS ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">02 — The Process</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Strategy-to-Code — no static canvas, no handoff delay
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-500 text-lg leading-[1.9]">
              Instead of letting the campaign pipeline get bogged down in multi-week design-to-developer handoff cycles, I operated at the intersection of layout engineering and conversion design.
            </p>
            <p className="text-neutral-500 text-lg leading-[1.9]">
              The client's marketing team provided foundational content documentation, target audience strategies, and campaign parameters. From there, I bypassed static canvas wireframes and moved immediately into production code layouts.
            </p>
          </div>
        </div>

        {/* Pipeline */}
        <div className="bg-neutral-50 border border-neutral-100 p-10 mb-12">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-8">Execution Pipeline</p>
          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4">
            {[
              "Marketing Copy & Strategy Brief",
              "Direct Frontend Structural Layout",
              "Dynamic Visual Tuning",
              "Live Optimization",
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-4">
                <div className="px-5 py-4 bg-white border border-neutral-200 text-neutral-700 text-base">{step}</div>
                {i < arr.length - 1 && <span className="text-neutral-300 text-xl hidden md:block">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Process details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
          {[
            {
              title: "Direct Text-to-Interface Layouts",
              desc: "Converted the marketing team's strategy notes directly into structural code layout blocks — immediately building responsive video containers, typography grids, and content layouts in real time without an intermediate mockup phase.",
            },
            {
              title: "Live Component Prototyping",
              desc: "Instead of guessing how marketing copy would look across viewports, I styled and adjusted padding, alignment, and scale natively in code — immediately verifying how the design adapted to various mobile screen configurations.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white p-10 flex flex-col gap-4">
              <p className="text-neutral-900 text-xl">{item.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed image — dark */}
      <div className="w-full aspect-16/7 bg-black flex items-center justify-center border-y border-neutral-100">
        <span className="text-white/20 text-xs tracking-widest uppercase">Project Image — Mobile Landing Interface</span>
      </div>

      {/* ── 03 UI ARCHITECTURE ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">03 — UI Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Engineering intent containers for mobile-first conversion
          </h2>
          <p className="text-neutral-500 text-lg leading-[1.9] pt-2">
            Digital ad traffic is overwhelmingly generated through mobile platforms. The campaign layout had to be explicitly engineered for rapid scannability and friction-free interaction loops — three distinct layers stacked in precise psychological sequence.
          </p>
        </div>

        {/* Mobile layout wireframe simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="bg-neutral-50 border border-neutral-100 p-8">
            <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Mobile Landing — Layout Simulation</p>
            <div className="max-w-xs mx-auto border-2 border-neutral-200 rounded-2xl overflow-hidden bg-white">
              {/* Phone notch */}
              <div className="bg-neutral-900 h-8 flex items-center justify-center">
                <div className="w-20 h-2 bg-neutral-700 rounded-full" />
              </div>
              {/* Video frame */}
              <div className="bg-neutral-800 aspect-video flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-white/60 ml-1" />
                  </div>
                  <span className="text-white/30 text-xs">Video Asset</span>
                </div>
              </div>
              {/* Typography block */}
              <div className="p-4 flex flex-col gap-2 border-b border-neutral-100">
                <div className="w-full h-5 bg-neutral-900 rounded-sm" />
                <div className="w-3/4 h-4 bg-neutral-700 rounded-sm" />
                <div className="w-full h-3 bg-neutral-100 rounded-sm mt-1" />
                <div className="w-5/6 h-3 bg-neutral-100 rounded-sm" />
              </div>
              {/* CTA */}
              <div className="p-4">
                <div className="w-full h-12 bg-neutral-900 rounded-sm flex items-center justify-center">
                  <div className="w-24 h-3 bg-white/40 rounded-sm" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 pt-4">
            {architectureBlocks.map((block) => (
              <div key={block.id} className="border-l-2 border-neutral-200 pl-6 py-2">
                <p className="text-neutral-300 text-xs tracking-widest uppercase mb-1">{block.tag}</p>
                <p className="text-neutral-900 text-xl mb-3">{block.title}</p>
                <p className="text-neutral-500 text-base leading-relaxed">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Component spec blocks */}
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
      <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center border-y border-neutral-100">
        <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Live Landing Page & Ad Assets</span>
      </div>

      {/* ── 05 RESOLUTION ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">05 — Resolution</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-4 max-w-3xl">
          A high-performance digital campaign framework delivered at maximum velocity
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-16 max-w-2xl">
          By pairing a data-driven corporate strategy brief with an agile frontend layout workflow, the result was a conversion-optimized campaign asset built to capture busy executives at scroll speed.
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

        {/* Final takeaway */}
        <div className="bg-black p-10 md:p-16 max-w-3xl">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Key Takeaway</p>
          <p className="text-white text-2xl md:text-3xl leading-snug tracking-tight">
            The gap between a corporate strategy document and a live, converting campaign asset should be measured in days — not months. This project proved it.
          </p>
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
