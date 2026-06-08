import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Vivek S L",
  description:
    "Product-minded designer and engineer with an MBA in Marketing & Finance. Specialising in UAE/GCC digital products, UX architecture, and full-stack execution.",
};

const timeline = [
  {
    period: "2016 – 2018",
    title: "Diploma in Advanced Animation",
    place: "Cavalier Animation, Trivandrum",
    note: "Where visual thinking started — composition, motion, and the discipline of communicating without words.",
  },
  {
    period: "2018 – 2022",
    title: "Freelance Designer",
    place: "Independent",
    note: "Six years of client work across brand identity, web, and digital products. Built the execution foundation before the business education arrived.",
  },
  {
    period: "2019 – 2022",
    title: "BBA – Business Administration",
    place: "Amity University",
    note: "Business fundamentals — strategy, marketing, finance — running in parallel with live client work.",
  },
  {
    period: "2022 – 2024",
    title: "MBA – Marketing & Finance",
    place: "Amity University",
    note: "Formalised the business lens. Concepts like market positioning, unit economics, and funnel strategy became tools I could apply directly in product design.",
  },
  {
    period: "2025 – Present",
    title: "UI/UX Designer & Web Developer",
    place: "Turquoic IT Consultancy",
    note: "End-to-end product design for UAE and GCC clients — from discovery through to production deployment.",
  },
];

const values = [
  {
    title: "Business outcomes over design artefacts",
    body: "A well-crafted screen that doesn't move a business metric is a decorative object. Every layout decision maps back to a conversion goal, a user trust signal, or a compliance constraint. The artefact is the byproduct.",
  },
  {
    title: "Code as a design tool",
    body: "Figma is a proposal. Code is the product. I resolve layout decisions — spacing behaviour, image scaling, touch targets — in a live browser, not a desktop simulation. The fidelity gap between design and engineering is where most products fall apart. I close it by working on both sides.",
  },
  {
    title: "Complexity is a structural problem",
    body: "Complex SaaS platforms, compliance-heavy B2B products, and multi-role systems aren't hard to use because the domain is hard. They're hard because the information architecture is wrong. Progressive disclosure, role-first rendering, and scoped data access are structural answers to structural problems.",
  },
  {
    title: "Domain depth is a design input",
    body: "VAT compliance flows, CBUAE regulatory constraints, and Arabic RTL layout parity are not implementation details. They're the product. Designers who treat regulatory context as an edge case ship products that break at the edges users hit most.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Back nav */}
      <div className="px-8 md:px-30 lg:px-60 py-6 border-b border-neutral-100">
        <Link href="/" className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase">
          ← vivek s l
        </Link>
      </div>

      {/* Hero */}
      <section className="px-8 md:px-30 lg:px-60 pt-20 pb-24 border-b border-neutral-100">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-8">About</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <h1 className="text-neutral-900 text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
            Designer who thinks like a PM. Engineer who ships what he designs.
          </h1>
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-neutral-700 text-base leading-relaxed">
              I'm Vivek S L — a product-minded designer and front-end engineer based in India, working primarily with UAE and GCC clients. I started in animation and motion design, moved into brand and web work, picked up an MBA in Marketing & Finance, and eventually crossed over into full-stack product design and AI engineering.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              The throughline across all of it: I'm drawn to products where the design problem and the business problem are the same problem. Compliance platforms, B2B SaaS, and conversion-critical landing systems — products where a wrong UX decision has a direct financial or regulatory consequence.
            </p>
            <p className="text-neutral-700 text-base leading-relaxed">
              I'm transitioning toward Product Management. Not because I'm done with design, but because the work I find most interesting already requires both.
            </p>
          </div>
        </div>
      </section>

      {/* What I actually do */}
      <section className="px-8 md:px-30 lg:px-60 py-24 border-b border-neutral-100">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-16">What I Actually Do</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100">
          {[
            {
              label: "UX Architecture",
              body: "Information architecture, user flow mapping, multi-tenant permission systems, and wireframes for complex multi-stakeholder platforms. I work at the structural level before touching any visual layer.",
            },
            {
              label: "AI-Directed Development",
              body: "I work code-first using AI tooling — Claude Code and Cursor. I direct, review, and ship production builds (Next.js, React, TypeScript, Tailwind, GSAP, WebGL) without being a traditional software engineer. The same person who drew the wireframe owns the deployment.",
            },
            {
              label: "AI Engineering",
              body: "RAG pipeline architecture, LangChain agent orchestration, Pinecone vector search, AWS Textract OCR. On Paperwurk, I designed the UX architecture and wrote 14,000+ lines of production AI code.",
            },
          ].map((item) => (
            <div key={item.label} className="bg-white p-10 flex flex-col gap-4">
              <p className="text-neutral-900 text-xl">{item.label}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How I think */}
      <section className="bg-neutral-50 px-8 md:px-30 lg:px-60 py-24 border-b border-neutral-100">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-16">How I Think</p>
        <div className="flex flex-col gap-px bg-neutral-200">
          {values.map((v) => (
            <div key={v.title} className="bg-white p-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <p className="text-neutral-900 text-base md:w-64 shrink-0 leading-snug">{v.title}</p>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-8 md:px-30 lg:px-60 py-24 border-b border-neutral-100">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-16">Background</p>
        <div className="flex flex-col">
          {timeline.map((t, i) => (
            <div key={i} className="flex flex-col md:flex-row md:gap-20 py-10 border-b border-neutral-100 last:border-0">
              <div className="md:w-40 shrink-0 mb-4 md:mb-0">
                <p className="text-neutral-300 text-sm tracking-wider">{t.period}</p>
              </div>
              <div className="flex flex-col gap-2 max-w-2xl">
                <p className="text-neutral-900 text-lg">{t.title}</p>
                <p className="text-neutral-400 text-xs tracking-widest uppercase">{t.place}</p>
                <p className="text-neutral-500 text-sm leading-relaxed mt-1">{t.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-30 lg:px-60 py-24">
        <div className="max-w-2xl">
          <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-8">Currently</p>
          <p className="text-neutral-900 text-3xl md:text-4xl tracking-tight leading-snug mb-12">
            Open to product roles, design leadership, and high-growth teams building in the UAE, GCC, or remotely.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:vivekshajilekha@gmail.com"
              className="text-neutral-900 text-sm tracking-widest uppercase border border-neutral-900 px-8 py-4 hover:bg-neutral-900 hover:text-white transition-all duration-300 text-center"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/viveksl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 text-sm tracking-widest uppercase border border-neutral-200 px-8 py-4 hover:border-black hover:text-black transition-all duration-300 text-center"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 text-sm tracking-widest uppercase border border-neutral-200 px-8 py-4 hover:border-black hover:text-black transition-all duration-300 text-center"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
