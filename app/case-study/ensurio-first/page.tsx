import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ensurio First — The Growth Funnel System — Vivek S L",
  description:
    "Engineering an End-to-End B2B Lead Acquisition Engine: From Paid Social Conversion Funnels to Interactive Diagnostics",
};

const frictionPoints = [
  {
    num: "01",
    title: "No Clear Entry Point",
    desc: "Standard corporate platforms offer generic service pages and basic contact forms. They give cold traffic nothing of value to engage with immediately — resulting in a bounce pattern where users land, scroll, and leave.",
  },
  {
    num: "02",
    title: "No Reason to Stay",
    desc: "Without an interactive asset, calculator, or diagnostic tool, there is no value creation before the formal sales conversation. Cold traffic remains completely unengaged.",
  },
  {
    num: "03",
    title: "No Follow-Up System",
    desc: "Even when brief interest exists, there is rarely a structured automated framework to capture data, qualify intent, and nurture contacts into scheduled consultation calls. Leads go cold by default.",
  },
];

const pipelineStages = [
  { label: "Social Posts", sub: "Paid / Owner / Co.", tag: "Traffic Hub" },
  { label: "Landing Page", sub: "Hero Headline", tag: "Trust Anchor" },
  { label: "Diagnostic Tool", sub: "3-Step Flow", tag: "Engagement Phase" },
  { label: "Result Capture", sub: "Scored Output", tag: "Contact Gating" },
  { label: "Email Nurture", sub: "Instant / Day 3", tag: "Call Booking" },
];

const diagnosticSteps = [
  {
    step: "Step 1",
    label: "Company Profiling",
    inputs: [
      { type: "dropdown", label: "Industry Sector", placeholder: "Select industry..." },
      { type: "toggle", label: "Company Size", options: ["1–50", "51–250", "251–1K", "1K+"] },
    ],
  },
  {
    step: "Step 2",
    label: "Coverage Matrix",
    inputs: [
      { type: "slider", label: "Annual Insurance Premium", range: "$5K — $2M+" },
      { type: "checkbox", label: "Cover Types Held", options: ["Public Liability", "Marine/Cargo", "D&O", "Cyber"] },
    ],
  },
  {
    step: "Step 3",
    label: "Claims & History",
    inputs: [
      { type: "toggle", label: "Claims Filed (Last 3 Yrs)", options: ["None", "1–2", "3–5", "5+"] },
      { type: "toggle", label: "Premium Trend", options: ["Stable", "Rising", "Unknown"] },
    ],
  },
];

const outcomes = [
  {
    title: "Eradicated Inbound Abandonment",
    desc: "Solved traditional B2B site drops by providing a high-value, interactive diagnostic tool right at the main point of entry.",
    metric: "Bounce eliminated",
  },
  {
    title: "Automated Pipeline Integration",
    desc: "Programmatically tied paid media assets, front-end state inputs, gated lead capture forms, and background email automation into a single cohesive code ecosystem.",
    metric: "5 touchpoints connected",
  },
  {
    title: "Shipped Premium Corporate Value",
    desc: "Delivered a modular, completely reusable conversion framework easily repurposed across various industrial niches under the company's brand umbrella.",
    metric: "100% reusable system",
  },
];

export default function EnsurioFirstPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Back nav */}
      <div className="px-8 md:px-20 lg:px-32 py-6 border-b border-neutral-100">
        <Link href="/" className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase">
          ← vivek s l
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 px-8 md:px-20 lg:px-32 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0B132B 0%, #1a2744 50%, #0d1b2a 100%)" }}
        />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #48CAE4 0%, transparent 50%)" }}
        />
        <div className="relative">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase">CRO / B2B Lead Generation / Growth Systems</p>
          </div>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mb-4">
            Ensurio First
          </h1>
          <p className="text-cyan-400/70 text-sm tracking-widest uppercase mb-4">The Growth Funnel System</p>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed">
            Engineering an End-to-End B2B Lead Acquisition Engine: From Paid Social Conversion Funnels to Interactive Diagnostics
          </p>
        </div>
      </section>

      {/* ── META STRIP ── */}
      <div className="px-8 md:px-20 lg:px-32 py-10 border-b border-neutral-100 bg-neutral-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Role", value: "Lead Conversion Experience Architect & Frontend Engineer" },
            { label: "Ecosystem", value: "The Growth Funnel System — Turquoic" },
            { label: "Core Stack", value: "Next.js, Tailwind CSS, Component State Management" },
            { label: "Deliverables", value: "3-Tier Funnel, Diagnostic Tool, Scored Output, Email Nurture" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-neutral-400 text-xs tracking-widest uppercase">{item.label}</p>
              <p className="text-neutral-800 text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 STRATEGIC CONTEXT ── */}
      <section className="px-8 md:px-20 lg:px-32 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">01 — Strategic Context</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Three systemic friction points killing every B2B funnel
          </h2>
          <p className="text-neutral-500 text-lg leading-[1.9] pt-2">
            Most B2B digital architectures suffer from structural lead drop-off. The Growth Funnel System was engineered specifically to solve all three failure points in one unified, interconnected pipeline — replacing passive corporate pages with an active acquisition engine.
          </p>
        </div>

        {/* Friction points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100 mb-16">
          {frictionPoints.map((f) => (
            <div key={f.num} className="bg-white p-10 flex flex-col gap-4">
              <span className="text-neutral-300 text-xs tracking-widest">{f.num}</span>
              <p className="text-neutral-900 text-xl">{f.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Path comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
          <div className="bg-neutral-50 p-10 flex flex-col gap-6">
            <p className="text-neutral-400 text-xs tracking-widest uppercase">Traditional Web Path</p>
            <div className="flex flex-wrap items-center gap-3">
              {["Land on Page", "View Contact Form", "High Friction", "Churn / Leave"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="px-4 py-2 bg-white border border-neutral-200 text-neutral-500 text-sm">{step}</span>
                  {i < arr.length - 1 && <span className="text-neutral-300 text-sm">→</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 p-10 flex flex-col gap-6">
            <p className="text-cyan-400/70 text-xs tracking-widest uppercase">Growth Funnel Path</p>
            <div className="flex flex-wrap items-center gap-3">
              {["Paid Ad / Post", "Interactive Tool", "Immediate Value", "High-Intent Capture"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="px-4 py-2 bg-white/10 border border-white/10 text-white text-sm">{step}</span>
                  {i < arr.length - 1 && <span className="text-white/30 text-sm">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <div className="w-full aspect-16/7 bg-slate-900 flex items-center justify-center border-y border-neutral-100">
        <span className="text-white/20 text-xs tracking-widest uppercase">Project Image — Full Funnel System Overview</span>
      </div>

      {/* ── 02 ARCHITECTURE ── */}
      <section className="px-8 md:px-20 lg:px-32 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">02 — The Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            End-to-end pipeline — 5 stages, zero drop-off gaps
          </h2>
          <p className="text-neutral-500 text-lg leading-[1.9] pt-2">
            To establish a continuous flow of high-value corporate inquiries, I mapped and engineered a 5-stage customer journey matrix — each stage precisely designed to hand the user forward to the next with minimal friction and maximum psychological momentum.
          </p>
        </div>

        {/* Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-neutral-100 mb-16">
          {pipelineStages.map((stage, i) => (
            <div key={stage.label} className="bg-white p-8 flex flex-col gap-3 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral-300 text-xs tracking-widest">0{i + 1}</span>
                {i < pipelineStages.length - 1 && (
                  <span className="text-neutral-200 text-sm hidden md:block">→</span>
                )}
              </div>
              <p className="text-neutral-900 text-base">{stage.label}</p>
              <p className="text-neutral-400 text-sm">{stage.sub}</p>
              <span className="text-xs tracking-wider text-cyan-600 uppercase mt-2">{stage.tag}</span>
            </div>
          ))}
        </div>

        {/* Social assets detail */}
        <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Deliverable 01 — Multi-Channel Traffic Generation</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100">
          {[
            {
              type: "Paid Ad",
              tag: "Pattern Interrupt",
              desc: "Bold, problem-first hook leveraging a stark industry truth. High-contrast teal element pulls the eye to a critical metric before hitting the dark CTA bar.",
              preview: "bg-slate-800",
              accent: "bg-cyan-400",
            },
            {
              type: "Owner Post",
              tag: "Organic Trust",
              desc: "Story-led, minimalist text post in the founder's authentic voice — a real-world case study of a Dubai trading company discovering 22% insurance overpayment. Zero graphic clutter.",
              preview: "bg-white border border-neutral-100",
              accent: null,
            },
            {
              type: "Company Post",
              tag: "Corporate Credibility",
              desc: "Metrics-driven layout dominated by a large typographic stat readout ($40M+ in premiums optimised across the GCC) to establish market authority.",
              preview: "bg-neutral-900",
              accent: null,
            },
          ].map((item) => (
            <div key={item.type} className="bg-white flex flex-col">
              <div className={`${item.preview} aspect-video flex flex-col justify-between p-5 relative overflow-hidden`}>
                {item.accent && <div className={`${item.accent} w-16 h-1 mb-2`} />}
                <div className="flex flex-col gap-2">
                  <div className="w-3/4 h-4 bg-white/20 rounded-sm" />
                  <div className="w-1/2 h-3 bg-white/10 rounded-sm" />
                </div>
                {item.accent && (
                  <div className="w-full h-8 bg-slate-900 flex items-center px-3">
                    <div className="w-20 h-2 bg-white/40 rounded-sm" />
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <p className="text-neutral-900 text-base">{item.type}</p>
                  <span className="text-xs text-neutral-400 tracking-wider">{item.tag}</span>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed image */}
      <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center border-y border-neutral-100">
        <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Social Ad Layouts</span>
      </div>

      {/* ── 03 DIAGNOSTIC TOOL ── */}
      <section className="px-8 md:px-20 lg:px-32 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">03 — The Diagnostic Tool</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            A 3-step interactive insurance diagnostic — embedded above the fold
          </h2>
          <p className="text-neutral-500 text-lg leading-[1.9] pt-2">
            The central interactive milestone of the platform. Each step is programmatically engineered to gather critical underwriting data without triggering user fatigue — progressive disclosure built directly into the interaction model.
          </p>
        </div>

        {/* Diagnostic steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100 mb-12">
          {diagnosticSteps.map((step, idx) => (
            <div key={step.step} className="bg-white p-8 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center">
                  <span className="text-white text-xs">{idx + 1}</span>
                </div>
                <div>
                  <p className="text-neutral-300 text-xs tracking-widest">{step.step}</p>
                  <p className="text-neutral-900 text-base">{step.label}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {step.inputs.map((input) => (
                  <div key={input.label} className="flex flex-col gap-2">
                    <p className="text-neutral-500 text-xs tracking-wider uppercase">{input.label}</p>
                    {input.type === "dropdown" && "placeholder" in input && (
                      <div className="border border-neutral-200 px-4 py-3 flex items-center justify-between">
                        <span className="text-neutral-300 text-sm">{input.placeholder}</span>
                        <span className="text-neutral-300 text-xs">▾</span>
                      </div>
                    )}
                    {input.type === "slider" && "range" in input && (
                      <div className="flex flex-col gap-2">
                        <div className="w-full h-1.5 bg-neutral-100 rounded-full relative">
                          <div className="w-1/3 h-full bg-neutral-900 rounded-full" />
                          <div className="w-4 h-4 rounded-full bg-neutral-900 absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2" />
                        </div>
                        <p className="text-neutral-400 text-xs">{input.range as string}</p>
                      </div>
                    )}
                    {(input.type === "toggle" || input.type === "checkbox") && input.options && (
                      <div className="flex flex-wrap gap-2">
                        {input.options.map((opt, i) => (
                          <span
                            key={opt}
                            className={`px-3 py-1.5 text-xs border ${i === 0 ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-200 text-neutral-400"}`}
                          >
                            {opt}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed image */}
      <div className="w-full aspect-16/7 bg-neutral-900 flex items-center justify-center border-y border-neutral-100">
        <span className="text-white/20 text-xs tracking-widest uppercase">Project Image — Diagnostic Tool Interface</span>
      </div>

      {/* ── 04 SCORED OUTPUT ── */}
      <section className="px-8 md:px-20 lg:px-32 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">04 — Scored Output & Lead Gate</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            The psychological lead gate — shown at peak intent, not before
          </h2>
          <p className="text-neutral-500 text-lg leading-[1.9] pt-2">
            Upon completing Step 3, the user is not hit with a generic thank-you page. The system processes their exact selections to present an authoritative, scored dashboard — then gates the full report behind a 3-field lead form at the moment of highest conversion intent.
          </p>
        </div>

        {/* Score output mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="border border-neutral-100 overflow-hidden">
            {/* Score header */}
            <div className="bg-neutral-900 p-8 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-white/40 text-xs tracking-widest uppercase">Risk Assessment Score</p>
                <p className="text-white text-5xl tracking-tight">55<span className="text-white/30 text-2xl">/100</span></p>
                <p className="text-amber-400 text-sm tracking-wider">Moderate Risk Status</p>
              </div>
              <div className="w-20 h-20 rounded-full border-4 border-amber-400/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border-4 border-amber-400 flex items-center justify-center">
                  <span className="text-white text-lg">55</span>
                </div>
              </div>
            </div>

            {/* Financial hook */}
            <div className="bg-emerald-50 border-b border-neutral-100 p-6 flex items-center justify-between">
              <p className="text-neutral-500 text-sm tracking-wider uppercase">Est. Annual Savings via IOP</p>
              <p className="text-emerald-700 text-2xl tracking-tight">$41,600</p>
            </div>

            {/* Risk flags */}
            <div className="divide-y divide-neutral-100">
              <div className="p-6 flex items-start gap-4">
                <span className="text-amber-400 text-lg shrink-0">⚠</span>
                <div>
                  <p className="text-neutral-700 text-sm">Potential coverage gaps detected in active policy lines</p>
                  <p className="text-neutral-400 text-xs mt-1">Risk Flag 01</p>
                </div>
              </div>
              <div className="p-6 flex items-start gap-4">
                <span className="text-emerald-500 text-lg shrink-0">✓</span>
                <div>
                  <p className="text-neutral-700 text-sm">An IOP Phase I audit will benchmark your full TCOR exposure</p>
                  <p className="text-neutral-400 text-xs mt-1">Risk Flag 02</p>
                </div>
              </div>
            </div>

            {/* Lead gate */}
            <div className="bg-neutral-50 border-t border-neutral-100 p-6 flex flex-col gap-4">
              <p className="text-neutral-700 text-sm tracking-wide">Unlock Your Free Premium Efficiency Report</p>
              <div className="grid grid-cols-1 gap-3">
                {["Full Name", "Work Email", "Company Name"].map((field) => (
                  <div key={field} className="border border-neutral-200 px-4 py-3 bg-white">
                    <p className="text-neutral-300 text-sm">{field}</p>
                  </div>
                ))}
              </div>
              <div className="w-full bg-neutral-900 text-white text-sm tracking-wider text-center py-4">
                Send My Report →
              </div>
            </div>
          </div>

          {/* Right: breakdown */}
          <div className="flex flex-col gap-8 pt-4">
            {[
              { title: "The Score Radial", desc: "An emotional, high-visibility maturity gauge providing immediate cognitive validation. The 55/100 score triggers the user's need to understand their risk before they leave." },
              { title: "The Financial Hook", desc: "Calculates and renders a bold, high-contrast estimate of annual optimizations — EST. ANNUAL SAVINGS VIA IOP: $41,600 — to maximize the perceived value of unlocking the full report." },
              { title: "Dynamic Risk Flags", desc: "Generates contextual alerts tied directly to their data selections — missing policies or exposure markers — creating urgency that is personalized, not generic." },
              { title: "Post-Investment Lead Capture", desc: "Input fields only appear after the user has invested energy running the diagnostic. Leads are captured at the moment of highest conversion intent — not before." },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-neutral-200 pl-6 py-1">
                <p className="text-neutral-900 text-lg mb-2">{item.title}</p>
                <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center border-y border-neutral-100">
        <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Scored Output & Lead Capture Screen</span>
      </div>

      {/* ── 05 EMAIL NURTURE ── */}
      <section className="px-8 md:px-20 lg:px-32 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">05 — Email Nurture Sequence</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Automated 2-stage inbox sequence to prevent leads going cold
          </h2>
          <p className="text-neutral-500 text-lg leading-[1.9] pt-2">
            The system doesn't stop at the lead form. A precisely timed 2-part automated email architecture ensures every captured contact is immediately nurtured toward a consultation booking — while the diagnostic score is still front of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
          {[
            {
              timing: "Sent: Instantly",
              subject: "Your Insurance Risk Report Is Ready",
              tag: "Email 01 — Instant Delivery",
              body: "Delivers the personalized PDF report immediately, highlighting the user's single highest-risk flag (e.g., Governance Score: 0) and confirming the estimated annual savings figure they saw on the score screen.",
              cta: "Download Your Full Report →",
              ctaStyle: "bg-neutral-900 text-white",
            },
            {
              timing: "Sent: Day 3",
              subject: "How a Dubai Firm Saved $38K on Insurance",
              tag: "Email 02 — Story-Led Follow-Up",
              body: "A powerful client story mirroring the exact risk profile the user identified — a relatable B2B case study that builds trust and ends with a single, direct call-to-action to book a 30-minute consultation.",
              cta: "Book a 30-Min Consultation →",
              ctaStyle: "bg-slate-900 text-white",
            },
          ].map((email) => (
            <div key={email.tag} className="bg-white flex flex-col">
              <div className="bg-neutral-50 border-b border-neutral-100 px-8 py-5 flex items-center justify-between">
                <p className="text-neutral-400 text-xs tracking-widest uppercase">{email.tag}</p>
                <p className="text-neutral-300 text-xs">{email.timing}</p>
              </div>
              <div className="p-8 flex flex-col gap-6 flex-1">
                <div className="border-b border-neutral-100 pb-5">
                  <p className="text-neutral-300 text-xs mb-1">Subject</p>
                  <p className="text-neutral-900 text-base">{email.subject}</p>
                </div>
                <p className="text-neutral-500 text-base leading-relaxed flex-1">{email.body}</p>
                <div className={`${email.ctaStyle} text-sm tracking-wider text-center py-4 px-6 self-start`}>
                  {email.cta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 06 RESOLUTION ── */}
      <section className="px-8 md:px-20 lg:px-32 py-24 border-t border-neutral-100">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">06 — Resolution</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-4 max-w-3xl">
          Passive corporate pages replaced with a live B2B customer acquisition engine
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-16 max-w-2xl">
          Built, tested, and actively operational on a live management consultancy business — proving the efficacy of the full system layout.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100 mb-16">
          {outcomes.map((item) => (
            <div key={item.title} className="bg-white p-10 flex flex-col gap-4">
              <p className="text-cyan-600 text-xs tracking-widest uppercase">{item.metric}</p>
              <p className="text-neutral-900 text-xl">{item.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="bg-slate-900 p-10 md:p-16 max-w-3xl"
          style={{ background: "linear-gradient(135deg, #0B132B 0%, #1a2744 100%)" }}
        >
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">System Status</p>
          <p className="text-white text-2xl md:text-3xl leading-snug tracking-tight">
            The Growth Funnel System is live. Every component — from the LinkedIn ad to the Day 3 email — functions as one connected acquisition machine.
          </p>
          <div className="flex items-center gap-3 mt-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-cyan-400/70 text-xs tracking-widest uppercase">Actively Operational</p>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <div className="px-8 md:px-20 lg:px-32 py-16 border-t border-neutral-100 flex items-center justify-between">
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
