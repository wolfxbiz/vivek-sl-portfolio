import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paperwurk — Vivek S L",
  description:
    "A multi-tenant B2B SaaS platform for UAE business compliance — designed so 14 different people can share one product and each feel it was built just for them.",
};

const workspaces = [
  {
    label: "Client Workspace",
    color: "bg-blue-950",
    accent: "text-blue-300",
    roles: [
      { role: "Founder / Master", scope: "Full access — business setup, compliance, team, finance" },
      { role: "Accountant", scope: "Financial scope — VAT, expenses, invoices" },
      { role: "PRO Agent", scope: "Immigration scope — visas, work permits, Emirates IDs" },
      { role: "Staff / Employee", scope: "Personal scope — own documents, visa status" },
    ],
  },
  {
    label: "Supplier Workspace",
    color: "bg-purple-950",
    accent: "text-purple-300",
    roles: [
      { role: "Supplier Admin", scope: "Full business access — clients, team, analytics" },
      { role: "Delivery Operations Manager", scope: "Active client service delivery" },
      { role: "Sales Representative", scope: "Lead generation, proposals, CRM" },
      { role: "Compliance Lead", scope: "Quality assurance, service audits" },
    ],
  },
  {
    label: "Affiliate Workspace",
    color: "bg-emerald-950",
    accent: "text-emerald-300",
    roles: [
      { role: "Individual Affiliate", scope: "Direct referral tracking and commissions" },
      { role: "Agency Affiliate", scope: "Network management, sub-affiliate oversight" },
    ],
  },
  {
    label: "Platform Admin Workspace",
    color: "bg-neutral-900",
    accent: "text-neutral-400",
    roles: [
      { role: "Super Admin", scope: "Full system access" },
      { role: "Support Manager", scope: "Client and supplier support" },
      { role: "Operations Analyst", scope: "Reporting and monitoring" },
      { role: "Compliance Officer", scope: "Regulatory oversight" },
    ],
  },
];

const designPrinciples = [
  { id: "01", title: "Show only what matters", desc: "A PRO agent should never see VAT filing. A staff member should never see the supplier marketplace. Keeping irrelevant things invisible isn't a permission problem — it's a clarity problem." },
  { id: "02", title: "Don't make users manage access", desc: "When a founder hires a new accountant, access to the right documents should just happen. The system knows the relationship; it shouldn't ask the user to configure it." },
  { id: "03", title: "Compliance lives on the dashboard", desc: "Renewal deadlines and regulatory events belong at the top of the founder's day — not buried three levels deep in a settings menu. If it's urgent, the product should make it feel urgent." },
  { id: "04", title: "Break big journeys into small steps", desc: "Setting up a UAE business involves a lot of decisions. Showing every field at once is overwhelming. Progressive disclosure lets users focus on one thing at a time without losing sight of where they are." },
  { id: "05", title: "Every workspace feels purpose-built", desc: "A supplier shouldn't feel like they're using a client's tool with parts hidden. Their workspace looks and behaves like software made for exactly what they do." },
];

const keyFlows = [
  {
    num: "01",
    title: "First-time Setup — Founder",
    steps: [
      "Choose jurisdiction: mainland or free zone — shapes everything that follows",
      "Set compliance profile: VAT status, industry, headcount",
      "Review the compliance calendar, pre-populated from the business profile",
      "Optionally browse the supplier marketplace to engage a first service provider",
    ],
    note: "The goal was to get a founder to their first meaningful moment — a populated compliance calendar — without overwhelming them. Every screen asks for exactly one thing.",
  },
  {
    num: "02",
    title: "Engaging a Supplier",
    steps: [
      "Founder browses marketplace, filtered by service type and jurisdiction",
      "Sends a scoped quote request — supplier only sees what's relevant",
      "Supplier reviews, submits a proposal with timeline",
      "Founder accepts — access is automatically scoped to the engagement",
      "Supplier delivers via a dedicated task view; founder tracks progress",
      "Engagement closes — supplier access is revoked automatically",
    ],
    note: "The founder never touches an access settings screen. Neither does the supplier. The platform manages the whole handshake.",
  },
  {
    num: "03",
    title: "Compliance Calendar",
    steps: [
      "All deadlines pulled from the business profile, documents, and active engagements",
      "Events colour-coded by type — VAT, trade license, visa, ESR",
      "Overdue items rise to the top of the dashboard as red alerts",
      "Each alert links directly into a guided resolution workflow",
    ],
    note: "\"Renew Trade License\" doesn't take you to a help article — it opens a pre-filled service request with one tap.",
  },
];

const keyDecisions = [
  {
    title: "Navigation is the permission system",
    desc: "Instead of showing everything and graying out what a role can't access, we show only what they can. The navigation itself reflects who you are. A PRO agent logs in and sees a PRO agent's tool — nothing more, nothing less.",
  },
  {
    title: "Access should be invisible",
    desc: "The hardest UX problem on this project wasn't designing screens — it was designing a model where a client could work with three suppliers simultaneously, each seeing completely different data, without anyone ever configuring it. We solved it by tying access to engagement type, not manual grants.",
  },
  {
    title: "The compliance calendar is the product",
    desc: "Every other feature in the platform flows into or out of the compliance calendar. Making it the centrepiece of the founder dashboard — not a utility tucked into settings — changed how the whole product felt. It went from 'document storage with reminders' to 'your business, on track.'",
  },
  {
    title: "Assume the user won't read the instructions",
    desc: "Visa processing, business setup, supplier onboarding — these are long, consequential flows. We designed each one as if the user would start it without any prior knowledge. Every step has one clear action. The system explains itself through context, not tooltips.",
  },
];

const deliverables = [
  { num: "14", label: "User personas, fully detailed" },
  { num: "100+", label: "User scenarios across all roles" },
  { num: "12", label: "End-to-end flows, screen by screen" },
  { num: "110+", label: "Screen specifications" },
  { num: "95+", label: "Flow and architecture diagrams" },
  { num: "90+", label: "API endpoints identified and mapped" },
];

export default function PaperwurkPage() {
  return (
    <main className="bg-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <section className="relative bg-black px-8 md:px-30 lg:px-60 pt-14 md:pt-20 pb-12 md:pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 20% 60%, #1e3a5f 0%, #000000 65%)" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="relative">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">UX Design · B2B SaaS · UAE Market</p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mb-6">
            Paperwurk
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            UAE business compliance is legally mandated and deeply fragmented. Paperwurk brings clients, service providers, and administrators into one platform — and makes each of them feel like they're using software built just for them.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 border border-white/15 text-white/50 text-xs tracking-widest uppercase px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
              Design Complete · Development in Progress
            </span>
            <span className="border border-white/15 text-white/50 text-xs tracking-widest uppercase px-4 py-2">
              UAE & GCC Market
            </span>
          </div>
        </div>
      </section>

      {/* ── META STRIP ── */}
      <div className="px-8 md:px-30 lg:px-60 py-10 border-b border-neutral-100 bg-neutral-50">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { label: "Role", value: "Lead UX Designer & Architect" },
            { label: "Scope", value: "4 workspace types · 14 personas · end-to-end product design" },
            { label: "Deliverables", value: "110+ screens · 12 flows · 95+ diagrams" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-neutral-400 text-xs tracking-widest uppercase">{item.label}</p>
              <p className="text-neutral-800 text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 THE PROBLEM ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">01 — The Problem</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Running a business in the UAE means juggling five compliance systems that don't talk to each other.
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              Trade licenses, VAT filings, visa renewals, Emirates IDs, ESR reports — each one lives in a different government portal with its own deadline and process. Founders deal with this by spreading their compliance across spreadsheets, email threads, WhatsApp chains, and whoever their PRO agent is this month.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              Missing a deadline isn't just an inconvenience — it's fines, suspended licenses, cancelled visas. The stakes are real, but the tooling isn't. SMEs are too small for enterprise software and too complex for anything off-the-shelf.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
          {[
            { title: "No single calendar", desc: "VAT, trade license, visa — three separate systems, three separate renewal cycles. Founders piece it together manually or miss things entirely." },
            { title: "No shared source of truth", desc: "Every service provider gets a different version of the same document. Things fall out of sync. Nobody knows which passport copy is current." },
            { title: "Trust is fragile", desc: "Founders are uncomfortable sharing sensitive financial or immigration documents with new suppliers. But they have to, to get anything done." },
            { title: "Processes that feel longer than they are", desc: "Business setup, visa processing, service engagement — these are manageable steps presented as overwhelming walls of requirements." },
          ].map((p) => (
            <div key={p.title} className="bg-white p-10 flex flex-col gap-3">
              <p className="text-neutral-900 text-xl">{p.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed placeholder */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center">
          <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Platform Overview</span>
        </div>
      </div>

      {/* ── 02 DESIGNING FOR 14 PEOPLE ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24 bg-neutral-50">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">02 — Designing for Everyone at Once</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            14 people. One platform. Each one should feel like it was built for them.
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              The founding insight was that this couldn't be designed as one product with role-based restrictions bolted on. A compliance supplier doesn't want to use a "client compliance tool with parts turned off." They want their own tool — one that looks and feels like it was made for delivering services, not managing a business.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              So we designed four distinct workspaces that share infrastructure but feel independent. The client experience, the supplier experience, the affiliate experience, the admin experience — each one was designed as if it were a standalone product.
            </p>
          </div>
        </div>

        {/* Design principles */}
        <div className="mb-16">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">The Five Design Principles Behind Every Decision</p>
          <div className="flex flex-col gap-px bg-neutral-200">
            {designPrinciples.map((p) => (
              <div key={p.id} className="bg-white px-10 py-6 flex gap-8 items-start">
                <span className="text-neutral-200 text-xs tracking-widest shrink-0 pt-0.5">{p.id}</span>
                <p className="text-neutral-900 text-sm w-44 shrink-0">{p.title}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workspace + persona grid */}
        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">The Four Workspaces</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
            {workspaces.map((ws) => (
              <div key={ws.label} className={`${ws.color} p-8 flex flex-col gap-5`}>
                <p className={`text-xs tracking-widest uppercase ${ws.accent}`}>{ws.label}</p>
                <div className="flex flex-col gap-3">
                  {ws.roles.map((r) => (
                    <div key={r.role} className="flex flex-col gap-1 border-l border-white/10 pl-4">
                      <p className="text-white/80 text-sm">{r.role}</p>
                      <p className="text-white/30 text-xs leading-relaxed">{r.scope}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 THE ACCESS PROBLEM ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">03 — The Hardest Part</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Three suppliers. Three completely different views of the same client. Zero configuration screens.
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              A UAE business might simultaneously engage a visa processing firm, an accounting firm, and an attestation service. Each one needs access to entirely different documents. The visa firm shouldn't see VAT records. The accountant shouldn't see passports.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              The challenge wasn't the access control logic — it was designing a system where neither the client nor the supplier ever faces a screen that says "configure permissions." The right access should just appear, automatically, based on what the engagement is.
            </p>
          </div>
        </div>

        {/* Scoped access visual diagram */}
        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">How It Works — One Client, Three Active Suppliers</p>

          <div className="bg-neutral-900 px-8 py-6 flex items-center justify-between">
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-1">The Client's Document Vault</p>
              <p className="text-white text-base">Everything in one place — the founder sees it all</p>
            </div>
            <p className="text-white/30 text-xs hidden md:block">Full view</p>
          </div>

          <div className="border-l border-r border-neutral-200 grid grid-cols-3 gap-px bg-neutral-200">
            {[
              { label: "Passports & Visas", color: "bg-blue-50 border-blue-100", accent: "bg-blue-400" },
              { label: "VAT & Financials", color: "bg-purple-50 border-purple-100", accent: "bg-purple-400" },
              { label: "Attestation Docs", color: "bg-emerald-50 border-emerald-100", accent: "bg-emerald-400" },
            ].map((doc) => (
              <div key={doc.label} className={`${doc.color} border px-6 py-4 flex items-center gap-3`}>
                <div className={`w-2 h-2 rounded-full ${doc.accent} shrink-0`} />
                <p className="text-neutral-700 text-sm">{doc.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {[
              { color: "border-blue-300", bg: "bg-blue-50" },
              { color: "border-purple-300", bg: "bg-purple-50" },
              { color: "border-emerald-300", bg: "bg-emerald-50" },
            ].map((c, i) => (
              <div key={i} className={`${c.bg} flex justify-center py-3`}>
                <div className={`w-px h-8 border-l-2 border-dashed ${c.color}`} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
            {[
              {
                supplier: "ProVisa",
                type: "Visa Services",
                headerColor: "bg-blue-950",
                accentText: "text-blue-300",
                seesDocs: ["Employee passports", "Visa copies", "Medical certificates"],
                blocked: ["VAT documents", "Financial statements", "Attestation files"],
              },
              {
                supplier: "TaxPro",
                type: "Accounting",
                headerColor: "bg-purple-950",
                accentText: "text-purple-300",
                seesDocs: ["Financial statements", "VAT documents", "Invoices"],
                blocked: ["Visa & passport files", "Medical records", "Attestation files"],
              },
              {
                supplier: "AttestCo",
                type: "Attestation",
                headerColor: "bg-emerald-950",
                accentText: "text-emerald-300",
                seesDocs: ["2 specific shared documents"],
                blocked: ["All other documents — engagement-scoped only"],
              },
            ].map((s) => (
              <div key={s.supplier} className="bg-white flex flex-col">
                <div className={`${s.headerColor} px-6 py-4`}>
                  <p className={`${s.accentText} text-xs tracking-widest uppercase mb-0.5`}>{s.type}</p>
                  <p className="text-white text-base">{s.supplier}</p>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <p className="text-neutral-400 text-xs tracking-widest uppercase mb-2">Sees only:</p>
                    <div className="flex flex-col gap-1.5">
                      {s.seesDocs.map((d) => (
                        <div key={d} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <p className="text-neutral-700 text-sm">{d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-neutral-100 pt-4">
                    <p className="text-neutral-300 text-xs tracking-widest uppercase mb-2">Cannot access:</p>
                    <div className="flex flex-col gap-1.5">
                      {s.blocked.map((d) => (
                        <div key={d} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-200 shrink-0" />
                          <p className="text-neutral-300 text-xs leading-relaxed">{d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-neutral-400 text-sm leading-relaxed mt-4 max-w-2xl">
            Access is tied to the engagement, not configured by the user. When a supplier is engaged, they get exactly what they need. When the engagement closes, access disappears. The client never touches a permissions panel.
          </p>
        </div>
      </section>

      {/* Full-bleed placeholder */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full aspect-16/7 bg-neutral-900 flex items-center justify-center">
          <span className="text-white/20 text-xs tracking-widest uppercase">Project Image — Flow Diagrams & Screen Spreads</span>
        </div>
      </div>

      {/* ── 04 KEY FLOWS ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24 bg-neutral-50">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">04 — The Flows That Matter</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Every journey mapped before a single screen was drawn.
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            12 end-to-end flows were fully validated — every branch, every decision point, every edge case — before entering Figma. Three of them shaped the product more than any other.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
          {keyFlows.map((flow, i) => (
            <div key={flow.num} className={`bg-white p-10 flex flex-col gap-6${i === keyFlows.length - 1 && keyFlows.length % 2 !== 0 ? " md:col-span-2" : ""}`}>
              <div>
                <p className="text-neutral-300 text-xs tracking-widest mb-1">{flow.num}</p>
                <p className="text-neutral-900 text-xl">{flow.title}</p>
              </div>
              <ol className="flex flex-col gap-2">
                {flow.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 items-start">
                    <span className="text-neutral-300 text-xs shrink-0 mt-0.5 tabular-nums">{i + 1}</span>
                    <p className="text-neutral-500 text-sm leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
              <p className="text-neutral-400 text-xs leading-relaxed border-t border-neutral-100 pt-4 italic">{flow.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 05 DECISIONS ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">05 — Design Decisions</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-4 max-w-3xl">
          The choices that shaped what this product is.
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-16 max-w-2xl">
          Every product has a handful of decisions that define its character. These are Paperwurk's.
        </p>
        <div className="flex flex-col gap-px bg-neutral-200">
          {keyDecisions.map((d, i) => (
            <div key={d.title} className="bg-white p-10 flex gap-10 items-start">
              <span className="text-neutral-200 text-xs tracking-widest shrink-0 pt-1">0{i + 1}</span>
              <div className="flex flex-col gap-3">
                <p className="text-neutral-900 text-xl">{d.title}</p>
                <p className="text-neutral-400 text-base leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed placeholder */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center">
          <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Screen Inventory</span>
        </div>
      </div>

      {/* ── 06 OUTCOME ── */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24 bg-neutral-50">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">06 — What Was Delivered</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            A complete design system, ready for a team to build from.
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            The entire UX was resolved before development began — every screen, every flow, every state. A 24-engineer team has a design foundation they can build against without waiting on design decisions mid-sprint.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-neutral-100 mb-16">
          {deliverables.map((d) => (
            <div key={d.label} className="bg-white p-8 flex flex-col gap-2">
              <p className="text-neutral-900 text-3xl tracking-tight">{d.num}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{d.label}</p>
            </div>
          ))}
        </div>

        {/* What changed */}
        <div className="mb-16">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">What the Design Changes for Users</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
            {[
              { before: "Compliance deadlines tracked in a spreadsheet", after: "A live calendar on the dashboard, pre-populated from the business profile" },
              { before: "Sending documents to suppliers over WhatsApp", after: "Suppliers get exactly what they need, automatically, when an engagement starts" },
              { before: "Starting a new service relationship from scratch every time", after: "A marketplace with scoped, trustable data sharing built in" },
              { before: "Complex onboarding that feels overwhelming", after: "A guided setup that shows one decision at a time" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <p className="text-neutral-300 text-xs tracking-widest uppercase">Before</p>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.before}</p>
                </div>
                <div className="w-full h-px bg-neutral-100" />
                <div className="flex flex-col gap-1.5">
                  <p className="text-neutral-400 text-xs tracking-widest uppercase">After</p>
                  <p className="text-neutral-900 text-sm leading-relaxed">{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="bg-black p-10 md:p-16 max-w-3xl">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Status</p>
          <p className="text-white text-2xl md:text-3xl leading-snug tracking-tight">
            Design complete. Development in progress. The hardest problems — the ones that determine what kind of product this is — were solved before a line of code was written.
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
          <Link href="/case-study/greek-street-lab" className="group flex flex-col gap-1">
            <p className="text-neutral-300 text-xs tracking-widest uppercase">← Previous</p>
            <p className="text-neutral-700 text-sm group-hover:text-black transition-colors duration-300">Greek Street Lab</p>
          </Link>
          <Link href="/case-study/alya-auditors" className="group flex flex-col gap-1 text-right">
            <p className="text-neutral-300 text-xs tracking-widest uppercase">Next →</p>
            <p className="text-neutral-700 text-sm group-hover:text-black transition-colors duration-300">Alya Auditors</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
