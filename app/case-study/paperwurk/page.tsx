import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paperwurk — Vivek S L",
  description:
    "Architecting a Multi-Tenant B2B Ecosystem: Traditional UX Mapping and Comprehensive System Layout Design",
};

const personas = [
  {
    role: "Founders (Clients)",
    color: "border-blue-200 bg-blue-50",
    dot: "bg-blue-400",
    needs: [
      "Multi-tier journey for company profiles",
      "Team invitation modules",
      "Service engagement states",
      "Macro-visibility into setup velocity",
    ],
  },
  {
    role: "Financial & Operations Staff",
    color: "border-amber-200 bg-amber-50",
    dot: "bg-amber-400",
    needs: [
      "VAT filing workflows",
      "Visa processing queues",
      "High-density status-driven task lists",
      "Reduced human data-entry errors",
    ],
  },
  {
    role: "Supplier Admins & Sales",
    color: "border-purple-200 bg-purple-50",
    dot: "bg-purple-400",
    needs: [
      "Lead conversion pipelines",
      "Proposal creation funnels",
      "Secure document uploads",
      "Isolated tenant data boundaries",
    ],
  },
  {
    role: "Internal Corporate Management",
    color: "border-emerald-200 bg-emerald-50",
    dot: "bg-emerald-400",
    needs: [
      "Macro-visibility across workspaces",
      "Real-time ticket resolution tools",
      "System override capabilities",
      "Cross-department reporting",
    ],
  },
];

const architectureRows = [
  {
    label: "Row 01 — Client Core Architecture",
    blocks: [
      { title: "Founder — Business Setup Journey", desc: "Multi-card registration UI with breadcrumb tracking and modular input cards for corporate profiling." },
      { title: "Founder — Team Invitation Interface", desc: "User grid list with multi-select permission levels and role assignment architecture." },
      { title: "Founder — Service Engagement Catalog", desc: "Pricing matrix containers with inline contact anchors and service procurement flows." },
    ],
  },
  {
    label: "Row 02 — Operational Data Terminals",
    blocks: [
      { title: "Accountant Terminal", desc: "VAT tracking cards, data audit logs, error mitigation modals, and document-heavy status tags." },
      { title: "PRO Agent Terminal", desc: "Split-pane document previewers, visa tracking steps, and government approval state boards." },
      { title: "Supplier & Sales Dashboard", desc: "Proposal creation blocks, lead status kanban board, and CRM interaction tracking." },
    ],
  },
  {
    label: "Row 03 — Structural Control Systems",
    blocks: [
      { title: "Corporate Workspace Switcher", desc: "Centralized account switcher displaying active company entities, billing categories, and operation queues." },
      { title: "System Notifications Core", desc: "Activity log feed with deep-linking triggers to specific client tickets and system bottleneck alerts." },
      { title: "Super Admin Control Panel", desc: "Macro-visibility dashboard with rapid override tools across all client workspaces simultaneously." },
    ],
  },
];

const outcomes = [
  { title: "Untangled Platform Complexity", desc: "Successfully mapped a massive multi-role ecosystem into cohesive, logic-driven screen hierarchies with zero ambiguity." },
  { title: "Production-Ready System Logic", desc: "Handed off extensive Visily wireframe infrastructure eliminating guesswork for backend engineers and product teams." },
  { title: "True UX Craftsmanship", desc: "Demonstrated the power of deep manual blueprinting and user flow documentation for enterprise-grade data structures." },
];

export default function PaperwurkPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Back nav */}
      <div className="px-8 md:px-16 lg:px-24 py-6 border-b border-neutral-100">
        <Link href="/" className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase">
          ← vivek s l
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-neutral-900 px-8 md:px-16 lg:px-24 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse at 70% 50%, #1e3a5f 0%, #0a0a0a 70%)" }}
        />
        <div className="relative">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">UX Design / Enterprise Platform</p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mb-6">
            Paperwurk
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed">
            Architecting a Multi-Tenant B2B Ecosystem: Traditional UX Mapping and Comprehensive System Layout Design
          </p>
        </div>
      </section>

      {/* ── META STRIP ── */}
      <div className="px-8 md:px-16 lg:px-24 py-10 border-b border-neutral-100 bg-neutral-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Role", value: "Lead UX Architect & Interface Designer" },
            { label: "Core Assets", value: "Userflow Diagrams, System Topology Maps, Hi-Fi Wireframes" },
            { label: "Tools", value: "Visily, Traditional Whiteboarding, Mind Mapping" },
            { label: "Ecosystem", value: "8+ Core Personas, Multi-Tenant Workspaces, Compliance Funnels" },
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
            An enterprise network too complex for a single user path
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-500 text-lg leading-[1.9]">
              Paperwurk is an enterprise-scale digital workspace managing heavy corporate setups, financial tracking, and cross-organization compliance logistics. Because it serves an entire network of distinct corporate users, the architecture could not rely on a simple template or linear user path.
            </p>
            <p className="text-neutral-500 text-lg leading-[1.9]">
              The core problem was untangling a massive web of conflicting user motivations, operational data requirements, and authorization boundaries — different personas interact with entirely different data pools and have completely conflicting operational goals.
            </p>
          </div>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personas.map((p) => (
            <div key={p.role} className={`border ${p.color} p-8 flex flex-col gap-4`}>
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full shrink-0 ${p.dot}`} />
                <p className="text-neutral-700 text-sm tracking-wide uppercase">{p.role}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {p.needs.map((n) => (
                  <li key={n} className="text-neutral-500 text-base leading-relaxed flex gap-3">
                    <span className="text-neutral-300 shrink-0 mt-1">—</span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed image */}
      <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center border-y border-neutral-100">
        <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — System Complexity Overview</span>
      </div>

      {/* ── 02 PROCESS ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">02 — The Process</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Deep traditional UX architecture — no shortcuts taken
          </h2>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-500 text-lg leading-[1.9]">
              This project could not be shortcutted. Because of the vast web of cross-role dependencies, I executed this platform using a disciplined, traditional UX design methodology. Every branch, decision diamond, and transition state had to be manually validated before moving into design software.
            </p>
          </div>
        </div>

        {/* Process pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100 mb-12">
          {[
            { step: "01", title: "Manual Flow Logic Sprints", desc: "Days spent wire-framing the cognitive paths of each distinct user — mapping exactly what happens when a Founder triggers a Team Invitation and how that action propagates across all admin dashboards." },
            { step: "02", title: "Extensive Visily Blueprinting", desc: "Translated hand-drawn user flows into a comprehensive visual blueprint — dozens of individual screens, modal overlays, active form inputs, and conditional dashboard views." },
            { step: "03", title: "Infrastructural Integrity Engineering", desc: "Focused heavily on recurring mechanics — workspace switchers and notification center loops — ensuring they remained uniform and logically consistent across all persona contexts." },
            { step: "04", title: "System Handoff Documentation", desc: "Delivered absolute layout specifications and developer-ready flow documentation with zero ambiguity, dramatically reducing engineering grooming sessions." },
          ].map((item) => (
            <div key={item.step} className="bg-white p-10 flex flex-col gap-4">
              <span className="text-neutral-300 text-xs tracking-widest">{item.step}</span>
              <p className="text-neutral-900 text-xl">{item.title}</p>
              <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="bg-neutral-50 border border-neutral-100 p-10">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-8">Design Pipeline</p>
          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4">
            {[
              "Dense Business Rules",
              "Manual Userflow Mapping",
              "Extensive Visily Wireframes",
              "System Handoff Repo",
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-4">
                <div className="px-5 py-4 bg-white border border-neutral-200 text-neutral-700 text-base">{step}</div>
                {i < arr.length - 1 && <span className="text-neutral-300 text-xl hidden md:block">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <div className="w-full aspect-16/7 bg-neutral-900 flex items-center justify-center border-y border-neutral-100">
        <span className="text-white/20 text-xs tracking-widest uppercase">Project Image — Whiteboard Flow Sessions</span>
      </div>

      {/* ── 03 UI ARCHITECTURE ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">03 — UI Architecture</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            Multi-tenant workspace blueprints
          </h2>
          <p className="text-neutral-500 text-lg leading-[1.9] pt-2">
            The definitive proof of this design sprint lives in the highly detailed user flow matrices built for each user class. Three distinct workspace environments — each serving radically different operational needs — had to coexist inside a single coherent platform entry point.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="bg-neutral-50 border border-neutral-100 p-8 mb-16">
          <p className="text-neutral-400 text-xs tracking-widest uppercase mb-8">Platform Architecture — System Topology</p>
          <div className="flex flex-col items-center gap-0">
            <div className="px-8 py-4 bg-neutral-900 text-white text-sm tracking-wide mb-0">
              Core Platform Entry
            </div>
            <div className="w-px h-8 bg-neutral-300" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100 w-full">
              {[
                { label: "Founder Workspace", items: ["Setup Flow", "Team Invite", "Service Engagement"] },
                { label: "Operations Workspaces", items: ["VAT Filing", "Visa Processing", "Proposals"] },
                { label: "Super Admin Control", items: ["Workspace Switcher", "Tickets Centre", "System Overrides"] },
              ].map((col) => (
                <div key={col.label} className="bg-white p-6 flex flex-col gap-3">
                  <p className="text-neutral-700 text-sm tracking-wide border-b border-neutral-100 pb-3">{col.label}</p>
                  {col.items.map((item) => (
                    <p key={item} className="text-neutral-400 text-sm leading-relaxed pl-2 border-l border-neutral-100">{item}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 rows of blueprint blocks */}
        {architectureRows.map((row) => (
          <div key={row.label} className="mb-12">
            <p className="text-neutral-400 text-xs tracking-widest uppercase mb-4">{row.label}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100">
              {row.blocks.map((block) => (
                <div key={block.title} className="bg-white flex flex-col">
                  <div className="w-full aspect-video bg-neutral-50 border-b border-neutral-100 flex items-center justify-center">
                    <span className="text-neutral-200 text-xs tracking-widest uppercase px-4 text-center">Wireframe Asset</span>
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <p className="text-neutral-900 text-base">{block.title}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{block.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Full-bleed image */}
      <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center border-y border-neutral-100">
        <span className="text-neutral-300 text-xs tracking-widest uppercase">Project Image — Complete Wireframe Spread</span>
      </div>

      {/* ── 05 RESOLUTION ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">05 — Resolution</p>
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight mb-16 max-w-3xl">
          A bulletproof structural blueprint ready for full-scale software development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100">
          {outcomes.map((item) => (
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
