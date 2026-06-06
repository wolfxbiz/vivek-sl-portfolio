import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paperwurk — Vivek S L",
  description:
    "Multi-Tenant B2B SaaS Platform for UAE Business Compliance — 14 Personas, 110+ Screens, Scoped Data Architecture, AI Document Intelligence",
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
  { id: "01", title: "Role-First Rendering", desc: "Each user sees only what their role permits. A PRO agent never sees VAT filing. A staff member never sees the supplier marketplace. No cognitive overhead from irrelevant modules." },
  { id: "02", title: "Context Continuity", desc: "Users who hold multiple roles (a founder who is also an affiliate) switch workspaces without losing orientation. The platform remembers where they were." },
  { id: "03", title: "Compliance as UX", desc: "Deadlines, renewals, and regulatory events are surfaced proactively on the founder dashboard — not buried in settings. The compliance calendar is a first-class product feature." },
  { id: "04", title: "Progressive Disclosure", desc: "Complex workflows (business setup, visa processing) are broken into guided sequential steps. Only the next required step is shown, reducing the perceived complexity of 15–20 screen journeys." },
  { id: "05", title: "Scoped Collaboration", desc: "Service providers see precisely the data they need for their engagement — nothing more, nothing less. Access is granted implicitly by engagement type and managed automatically." },
];

const keyFlows = [
  {
    num: "01",
    title: "Business Setup — Founder",
    steps: [
      "Account creation and email verification",
      "Business profile (jurisdiction: mainland vs. free zone)",
      "Compliance profile setup (VAT status, industry, employee count)",
      "First service engagement (optional — browse supplier marketplace)",
      "Dashboard activation with pre-populated compliance calendar",
    ],
    note: "Progressive disclosure — only the next required step shown throughout a 15–20 screen journey.",
  },
  {
    num: "02",
    title: "Document Upload + OCR",
    steps: [
      "User uploads a document (passport, visa, trade license)",
      "AWS Textract extracts key fields automatically",
      "AI classifies the document type",
      "System pre-fills metadata (expiry date, document number, holder)",
      "User reviews, confirms — document added to vault with version control",
    ],
    note: "~80% reduction in manual data entry for routine compliance documents.",
  },
  {
    num: "03",
    title: "Service Engagement — Client → Supplier",
    steps: [
      "Founder browses marketplace (filtered by service type, rating, jurisdiction)",
      "Sends a quote request with scope definition",
      "Supplier reviews client profile — scoped to engagement-relevant data only",
      "Supplier submits proposal with pricing and timeline",
      "Founder accepts — engagement created, data access scoped automatically",
      "Supplier delivers via task interface; client tracks progress",
      "Engagement closes — access is revoked automatically",
    ],
    note: "Suppliers never need broad account access — the system handles grant and revoke at engagement boundaries.",
  },
  {
    num: "04",
    title: "Compliance Calendar",
    steps: [
      "All deadlines aggregated from business profile, documents, and active engagements",
      "Events colour-coded by type — VAT, trade license, visa, ESR",
      "Overdue items surface at the top of the dashboard as red alerts",
      "Each item links to a guided resolution workflow",
    ],
    note: "\"Renew Trade License\" triggers a pre-filled service request directly from the alert.",
  },
];

const permissionLayers = [
  { layer: "Workspace Permissions", controls: "What a role can do within their own workspace" },
  { layer: "Engagement Permissions", controls: "What a supplier can access for a specific engagement" },
  { layer: "Document Permissions", controls: "Which specific documents are shared" },
];

const scopedAccessExample = [
  { supplier: "ProVisa (visa services)", sees: "Employee passports, visa copies, medical certificates" },
  { supplier: "TaxPro (accounting)", sees: "Financial statements, VAT documents, invoices" },
  { supplier: "AttestCo (attestation)", sees: "Two specific documents shared for a one-time task only" },
];

const techStack = [
  { layer: "Multi-tenancy", tech: "PostgreSQL with Row-Level Security — workspace data isolation" },
  { layer: "Document Intelligence", tech: "AWS Textract (OCR) + AI classification" },
  { layer: "AI / LLM", tech: "OpenAI (LLM) · Pinecone (vector search) · LangChain (agent orchestration)" },
  { layer: "Workflow Automation", tech: "n8n — compliance reminders, onboarding sequences, supplier notifications" },
  { layer: "Authentication", tech: "Ory Kratos (identity) + Ory Keto (permissions)" },
  { layer: "Payments", tech: "Stripe — subscriptions, invoicing, marketplace payouts" },
  { layer: "Communications", tech: "SendGrid (email) · Twilio (SMS) · Firebase (push)" },
  { layer: "Mobile", tech: "Flutter — 6 persona-specific apps" },
];

const revenueStreams = [
  {
    stream: "Client Subscription",
    model: "Monthly / annual SaaS tiered by team size, document storage, active engagements, and advanced features",
    range: "AED 300–800 / month",
  },
  {
    stream: "Supplier Subscription",
    model: "Marketplace listing and lead access, tiered by active engagements, CRM and analytics features, white-label config",
    range: "AED 500–2,000 / month",
  },
  {
    stream: "Affiliate Commissions",
    model: "Percentage of subscription revenue for referred clients. Agency affiliates earn a network override on sub-affiliates. Attribution tracked from first click through conversion.",
    range: "Recurring SaaS commission",
  },
];

const marketNumbers = [
  { metric: "200,000+", label: "Active UAE businesses" },
  { metric: "~180,000", label: "Businesses requiring VAT compliance" },
  { metric: "~150,000", label: "Businesses employing non-UAE nationals" },
  { metric: "AED 30–80K", label: "Avg. annual compliance spend per SME" },
];

const competitiveAdvantages = [
  { title: "Regulatory Moat", desc: "Built specifically for UAE compliance (VAT, ESR, trade licenses, DMCC). Generic document or CRM tools cannot replicate this depth without years of local domain knowledge." },
  { title: "Network Effects", desc: "More suppliers → more client choice. More clients → more supplier leads. Both sides improve with scale." },
  { title: "Switching Cost", desc: "Once a client's compliance calendar, documents, and supplier relationships live in Paperwurk, migration cost is high. The platform becomes the business's operational backbone." },
  { title: "AI Flywheel", desc: "Document intelligence, Paperbot, and automation reduce manual overhead — creating a flywheel where the platform gets more useful the more documents a client stores." },
];

const deliverables = [
  { num: "14", label: "Detailed user personas" },
  { num: "100+", label: "User scenarios across all roles" },
  { num: "12", label: "End-to-end flows with screen-by-screen specs" },
  { num: "110+", label: "Screen specifications" },
  { num: "95+", label: "Architecture and flow diagrams" },
  { num: "90+", label: "API endpoints identified" },
];

const aiDeliverables = [
  { num: "14,000+", label: "Lines of production-ready AI module code" },
  { num: "265+", label: "Automated tests" },
  { num: "93%+", label: "Average test coverage" },
  { num: "6", label: "Independent AI modules" },
];

const keyDecisions = [
  { title: "Scoped Access Over Open Access", desc: "Defaulting to minimal data exposure required more engineering effort but created a fundamentally safer and more trustworthy product. Clients are more willing to engage multiple suppliers when they know each sees only their slice." },
  { title: "Role-First UI Over Feature-First UI", desc: "Organising the interface around who the user is — rather than what features exist — reduced cognitive load dramatically. The navigation itself is a permission system." },
  { title: "Compliance as a Product Feature", desc: "Making the compliance calendar the centrepiece of the founder experience (not a buried admin screen) reframes the product from 'document tool' to 'business operating system.'" },
  { title: "AI as Accelerator, Not Replacement", desc: "Paperbot and document intelligence reduce friction in existing workflows rather than replacing them. Users remain in control; the AI handles data extraction, document classification, and deadline calculation." },
];

export default function PaperwurkPage() {
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
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 20% 60%, #1e3a5f 0%, #000000 65%)" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="relative">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">SaaS Platform / UX Architecture / AI Integration</p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mb-6">
            Paperwurk
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Multi-tenant B2B SaaS platform centralising UAE business compliance, HR/immigration, and service provider engagement into a single role-aware workspace — connecting clients, suppliers, affiliates, and platform administrators.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 border border-white/15 text-white/50 text-xs tracking-widest uppercase px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
              Architecture Complete · Development in Progress
            </span>
            <span className="border border-white/15 text-white/50 text-xs tracking-widest uppercase px-4 py-2">
              UAE & GCC Market
            </span>
          </div>
        </div>
      </section>

      {/* ── META STRIP ── */}
      <div className="px-8 md:px-30 lg:px-60 py-10 border-b border-neutral-100 bg-neutral-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Role", value: "Lead UX Architect & AI Module Engineer" },
            { label: "Platform", value: "Multi-tenant B2B SaaS — 4 workspace types, 14 personas" },
            { label: "Design Deliverables", value: "110+ screens · 12 flows · 95+ diagrams · 90+ API endpoints mapped" },
            { label: "AI Deliverables", value: "14,000+ lines · 265+ tests · 93%+ coverage · 6 AI modules" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-neutral-400 text-xs tracking-widest uppercase">{item.label}</p>
              <p className="text-neutral-800 text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 PROBLEM ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">01 — The Problem</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            UAE compliance is legally mandated. The tooling doesn't exist.
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              UAE businesses face a uniquely fragmented operational environment. Trade licenses, VAT filings, ESR reports, and visa renewals each involve separate government portals and deadlines. Companies engage separate PRO agents, accountants, legal advisors, and compliance consultants with no unified coordination layer. The cost of non-compliance is direct and steep: fines, license suspension, and visa cancellations.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              Available tooling is either enterprise-grade (too expensive, too complex) or non-existent for SMEs. Founders manage compliance calendars in spreadsheets, documents in email threads, and supplier relationships through WhatsApp.
            </p>
          </div>
        </div>

        {/* Problem points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100 mb-16">
          {[
            { title: "Regulatory Complexity", desc: "Trade licenses, VAT filings, ESR reports, and visa renewals each involve separate government portals and deadlines — no single view exists." },
            { title: "Fragmented Service Providers", desc: "Companies engage separate PRO agents, accountants, legal advisors, and compliance consultants with no unified coordination layer." },
            { title: "Information Silos", desc: "Each service provider works with copies of documents, creating version drift, duplication, and security exposure." },
            { title: "No Single Source of Truth", desc: "Founders manage compliance calendars in spreadsheets, documents in email threads, and relationships through WhatsApp." },
          ].map((p) => (
            <div key={p.title} className="bg-white p-10 flex flex-col gap-3">
              <p className="text-neutral-900 text-xl">{p.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Market numbers */}
        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Market Opportunity — UAE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-100">
            {marketNumbers.map((m) => (
              <div key={m.label} className="bg-white p-8 flex flex-col gap-3">
                <p className="text-neutral-900 text-3xl tracking-tight">{m.metric}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed placeholder */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center">
          <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Platform Overview</span>
        </div>
      </div>

      {/* ── 02 WORKSPACE ARCHITECTURE ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24 bg-neutral-50">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">02 — Workspace Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Four independent workspaces. Fourteen distinct personas. One platform.
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              The core design challenge: making a deeply complex, permission-layered system feel simple for each individual user. Every persona should feel as if the product was built specifically for them, even though they share the same platform.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              Navigation is role-gated within each workspace. The workspaces are independent but interoperable — a supplier's workspace looks like a clean, purpose-built tool for their service, while the client sees a unified view of all engagements with granular control.
            </p>
          </div>
        </div>

        {/* Design principles */}
        <div className="mb-16">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Five Design Principles</p>
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
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Workspace & Role Map</p>
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

      {/* ── 03 SCOPED DATA MODEL ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">03 — The Core UX Innovation</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Scoped data sharing — suppliers see their slice, clients see everything
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              The most technically and experientially complex challenge: a single client company may simultaneously engage three suppliers, each needing access to entirely different documents. Neither client nor supplier should ever face a complex access control screen.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              The solution is a three-layer permission model where access is granted implicitly by engagement type and managed automatically. Suppliers never need to be granted broad account access — the system handles it at engagement creation and revokes it on close.
            </p>
          </div>
        </div>

        {/* Permission layer table */}
        <div className="border border-neutral-200 divide-y divide-neutral-100 mb-12">
          <div className="grid grid-cols-2 bg-neutral-900 px-8 py-4">
            {["Permission Layer", "What It Controls"].map((h) => (
              <p key={h} className="text-white/40 text-xs tracking-widest uppercase">{h}</p>
            ))}
          </div>
          {permissionLayers.map((l) => (
            <div key={l.layer} className="grid grid-cols-2 bg-white px-8 py-5 items-center">
              <p className="text-neutral-900 text-sm">{l.layer}</p>
              <p className="text-neutral-500 text-sm">{l.controls}</p>
            </div>
          ))}
        </div>

        {/* Scoped access visual diagram */}
        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Example — One Client, Three Simultaneous Engagements</p>

          {/* Client document vault - top */}
          <div className="bg-neutral-900 px-8 py-6 mb-0 flex items-center justify-between">
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Client Document Vault</p>
              <p className="text-white text-base">All business documents in one place</p>
            </div>
            <p className="text-white/30 text-xs">Founder sees everything</p>
          </div>

          {/* Document rows - the "full" vault */}
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

          {/* Connector lines visual */}
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

          {/* Three supplier cards */}
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
            Neither the client nor any supplier ever sees a complex access control screen. Access is granted implicitly by engagement type, scoped automatically at creation, and revoked on close.
          </p>
        </div>
      </section>

      {/* Full-bleed placeholder */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full aspect-16/7 bg-neutral-900 flex items-center justify-center">
          <span className="text-white/20 text-xs tracking-widest uppercase">Project Image — Scoped Data Model & Flow Diagrams</span>
        </div>
      </div>

      {/* ── 04 KEY UX FLOWS ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24 bg-neutral-50">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">04 — Key UX Flows</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            12 end-to-end flows. Every step, every state, every branch specified.
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            Four critical flows define the platform's core value proposition. Each was manually validated — every branch, decision diamond, and transition state — before entering wireframe software. These are the ones that required the deepest design thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
          {keyFlows.map((flow) => (
            <div key={flow.num} className="bg-white p-10 flex flex-col gap-6">
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

      {/* ── 05 PAPERBOT AI ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">05 — AI Layer — Paperbot</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            An embedded AI assistant that knows your compliance state — not generic chatbot answers
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              Paperbot is accessible from any workspace. It uses a RAG (Retrieval-Augmented Generation) architecture backed by Pinecone, giving context-aware answers about the user's actual business — not generic compliance FAQs. It doesn't replace the UI — it accelerates it, reducing time to find information or trigger a workflow.
            </p>
          </div>
        </div>

        {/* What Paperbot answers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100 mb-16">
          {[
            { q: "\"When does my trade license expire?\"", tag: "Document status" },
            { q: "\"What are my VAT filing deadlines this quarter?\"", tag: "Compliance requirements" },
            { q: "\"Which supplier handles DMCC visa applications?\"", tag: "Service recommendations" },
            { q: "\"How do I add a new employee?\"", tag: "Workflow guidance" },
          ].map((item) => (
            <div key={item.q} className="bg-white p-8 flex items-start gap-5">
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-neutral-900 text-base">{item.q}</p>
                <p className="text-neutral-400 text-xs tracking-wider">{item.tag}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI tech stack */}
        <div className="bg-neutral-900 p-10">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">AI Architecture</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "OpenAI", role: "LLM — natural language understanding and generation" },
              { label: "Pinecone", role: "Vector database — semantic search over compliance documents and workflows" },
              { label: "LangChain", role: "Agent orchestration — chaining retrieval, context injection, and response generation" },
            ].map((t) => (
              <div key={t.label} className="flex flex-col gap-2 border-l border-white/10 pl-5">
                <p className="text-white text-base">{t.label}</p>
                <p className="text-white/40 text-sm leading-relaxed">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed placeholder */}
      <div className="px-8 md:px-30 lg:px-60 py-10">
        <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center">
          <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Wireframe Spread & Screen Inventory</span>
        </div>
      </div>

      {/* ── 06 TECH ARCHITECTURE ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24 bg-neutral-50">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">06 — Technical Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Built to support a 24-engineer team across six independent modules
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            Multi-tenant PostgreSQL with Row-Level Security ensures workspace data isolation at the database layer. Service-oriented backend with independently deployable modules enables parallel development without bottlenecks. Six Flutter apps deliver persona-specific mobile experiences.
          </p>
        </div>

        <div className="border border-neutral-200 divide-y divide-neutral-100 mb-16">
          <div className="grid grid-cols-3 bg-neutral-900 px-8 py-4">
            {["Layer", "Technology", ""].map((h, i) => (
              <p key={i} className="text-white/40 text-xs tracking-widest uppercase">{h}</p>
            ))}
          </div>
          {techStack.map((t) => (
            <div key={t.layer} className="grid grid-cols-3 bg-white px-8 py-5 items-start">
              <p className="text-neutral-400 text-sm">{t.layer}</p>
              <p className="text-neutral-900 text-sm col-span-2 leading-relaxed">{t.tech}</p>
            </div>
          ))}
        </div>

        {/* Design system callout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
          {[
            { title: "Component Library", detail: "Material UI (MUI) with custom theming" },
            { title: "Dark Mode", detail: "Supported across all workspaces" },
            { title: "Accessibility", detail: "WCAG 2.1 AA compliance target" },
          ].map((d) => (
            <div key={d.title} className="bg-white p-8 flex flex-col gap-2">
              <p className="text-neutral-900 text-base">{d.title}</p>
              <p className="text-neutral-400 text-sm">{d.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 07 BUSINESS MODEL ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">07 — Business Model</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Multi-sided marketplace with compliance-driven retention on every side
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed pt-2">
            Three revenue streams, aligned incentives, and a structural demand advantage: compliance is legally mandated in the UAE, not discretionary. Clients cannot stop filing VAT or renewing visas — anchoring recurring usage to legal obligation rather than habit or preference.
          </p>
        </div>

        {/* Revenue streams */}
        <div className="flex flex-col gap-px bg-neutral-100 mb-16">
          {revenueStreams.map((r) => (
            <div key={r.stream} className="bg-white p-10 flex items-start gap-10">
              <div className="w-48 shrink-0">
                <p className="text-neutral-900 text-base">{r.stream}</p>
                <p className="text-neutral-400 text-sm mt-2 font-mono">{r.range}</p>
              </div>
              <div className="w-px bg-neutral-100 self-stretch shrink-0" />
              <p className="text-neutral-500 text-sm leading-relaxed">{r.model}</p>
            </div>
          ))}
        </div>

        {/* Competitive advantages */}
        <div>
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Competitive Advantages</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
            {competitiveAdvantages.map((a) => (
              <div key={a.title} className="bg-white p-10 flex flex-col gap-3">
                <p className="text-neutral-900 text-xl">{a.title}</p>
                <p className="text-neutral-400 text-base leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 KEY DECISIONS ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24 bg-neutral-50">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">08 — Key Design Decisions</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-16 max-w-3xl">
          Four decisions that define what kind of product Paperwurk is
        </h2>
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

      {/* ── 09 RESOLUTION ── */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">09 — Resolution</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-4 max-w-3xl">
          An operating system for UAE businesses — not a compliance tool
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-16 max-w-2xl">
          Paperwurk makes regulatory complexity invisible and supplier collaboration frictionless. Every deliverable below was designed and built before a single line of the full-stack application.
        </p>

        {/* Design deliverables */}
        <div className="mb-12">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Design Phase Deliverables</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-neutral-100">
            {deliverables.map((d) => (
              <div key={d.label} className="bg-white p-8 flex flex-col gap-2">
                <p className="text-neutral-900 text-3xl tracking-tight">{d.num}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{d.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI deliverables */}
        <div className="mb-16">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">AI Module Deliverables</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-100">
            {aiDeliverables.map((d) => (
              <div key={d.label} className="bg-white p-8 flex flex-col gap-2">
                <p className="text-neutral-900 text-3xl tracking-tight">{d.num}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{d.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projected impact */}
        <div className="mb-16">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-6">Projected Post-Launch Impact</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
            {[
              { pct: "80%", label: "Reduction in manual document data entry", driver: "OCR automation via AWS Textract" },
              { pct: "~0", label: "Compliance deadline miss rate", driver: "Automated calendar + proactive reminders" },
              { pct: "60%", label: "Reduction in time-to-engage a new supplier", driver: "Marketplace + automatic scoped sharing" },
              { pct: "↓", label: "Supplier delivery friction", driver: "Removal of document access back-and-forth" },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8 flex gap-6 items-start">
                <p className="text-neutral-900 text-3xl tracking-tight shrink-0 w-16">{item.pct}</p>
                <div>
                  <p className="text-neutral-700 text-sm">{item.label}</p>
                  <p className="text-neutral-400 text-xs mt-1">{item.driver}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dual-role callout */}
        <div className="border border-neutral-200 p-10 md:p-12 mb-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="w-1 h-16 bg-neutral-900 shrink-0 hidden md:block" />
          <div>
            <p className="text-neutral-400 text-xs tracking-widest uppercase mb-4">One Person. Both Halves.</p>
            <p className="text-neutral-900 text-xl md:text-2xl leading-snug tracking-tight mb-4">
              The same person who designed the 110+ screen UX architecture also wrote 14,000+ lines of production AI code with 265+ automated tests at 93%+ coverage.
            </p>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">
              This is unusual. Most platforms have separate design and engineering teams — and the gap between them is where details fall apart. On Paperwurk, the architect of the user experience is also the engineer who built the intelligence layer, which means every AI capability was designed with UX intent baked in from the start, not integrated as an afterthought.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="bg-black p-10 md:p-16 max-w-3xl">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Status</p>
          <p className="text-white text-2xl md:text-3xl leading-snug tracking-tight">
            Architecture and AI modules complete. Full-stack development in progress. The hardest design problems have been solved — the ones that can't be patched in later.
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
