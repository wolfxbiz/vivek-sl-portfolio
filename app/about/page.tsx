import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import AboutVideo from "@/components/AboutVideo";

export const metadata: Metadata = {
  title: "About — Vivek S L",
  description:
    "Product designer and AI-directed builder with an MBA in Marketing & Finance. I design and ship digital products for UAE/GCC clients using AI tooling — without being a traditional engineer.",
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
    <main className="bg-white min-h-screen pt-16">

      {/* Hero */}
      <section className="px-8 md:px-30 lg:px-60 pt-14 md:pt-20 pb-14 md:pb-24 border-b border-neutral-100">
        <p className="text-neutral-600 text-sm tracking-[0.3em] uppercase mb-12">About</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Video — first in DOM so it appears on top when stacked on mobile */}
          <div className="w-full lg:order-last">
            <AboutVideo />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-10 lg:order-first">
            <h1 className="text-neutral-900 text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
              Designer who ships. Not by writing code — by knowing exactly what to build.
            </h1>
            <div className="flex flex-col gap-6">
              <p className="text-neutral-700 text-base leading-relaxed">
                I'm Vivek S L — a product designer and AI-directed builder based in India, working with UAE and GCC clients. I started in animation, moved into brand and web design, picked up an MBA in Marketing & Finance, and eventually figured out how to ship full products without becoming a traditional engineer.
              </p>
              <p className="text-neutral-700 text-base leading-relaxed">
                I don't write code from scratch. I use AI — Claude Code, Cursor — to build what I design. What I bring is the judgment layer: knowing what to build, how it should behave, and whether what came out of the AI actually works. Most people who can design can't ship. I can ship.
              </p>
              <p className="text-neutral-700 text-base leading-relaxed">
                I'm drawn to products where the design problem and the business problem are the same problem — compliance platforms, B2B SaaS, conversion-critical landing systems. Places where a wrong UX call has a direct financial consequence.
              </p>
              <p className="text-neutral-700 text-base leading-relaxed">
                I'm moving toward Product Management because the work I already do — owning outcomes, not just deliverables — is already that job.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* What I actually do */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24 border-b border-neutral-100">
        <p className="text-neutral-600 text-sm tracking-[0.3em] uppercase mb-12 md:mb-16">What I Actually Do</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100">

          {/* UX Architecture */}
          <div className="bg-white p-6 md:p-10 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-neutral-900 text-xl">UX Architecture</p>
              <p className="text-neutral-600 text-base leading-relaxed">
                This is the actual work. Information architecture, user flow mapping, multi-stakeholder permission systems, and wireframes that resolve complexity before a single component gets built. I work at the structural level — the part AI can't do without someone who understands what users need and what the business requires.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-2 border-t border-neutral-100">
              {["/icons/figma.svg", "/icons/affinity.svg"].map((src, i) => (
                <Image key={i} src={src} alt="" width={28} height={28} unoptimized className="object-contain opacity-60 hover:opacity-100 transition-opacity" />
              ))}
            </div>
          </div>

          {/* AI-Directed Development */}
          <div className="bg-white p-6 md:p-10 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-neutral-900 text-xl">AI-Directed Development</p>
              <p className="text-neutral-600 text-base leading-relaxed">
                I use Claude Code and Cursor to ship what I design. I'm not a software engineer — I'm the person who knows what to build, reviews what the AI produces, catches what's wrong, and gets it deployed. The gap between a Figma file and a live product is where most designers stop. I don't.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-2 border-t border-neutral-100">
              {["/icons/claude-code.svg", "/icons/cursor.svg", "/icons/vscode.svg", "/icons/nextjs.svg", "/icons/react.svg", "/icons/typescript.svg"].map((src, i) => (
                <Image key={i} src={src} alt="" width={28} height={28} unoptimized className="object-contain opacity-60 hover:opacity-100 transition-opacity" />
              ))}
            </div>
          </div>

          {/* AI Systems */}
          <div className="bg-white p-6 md:p-10 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-neutral-900 text-xl">AI Systems</p>
              <p className="text-neutral-600 text-base leading-relaxed">
                On Paperwurk I designed and directed the build of a full RAG pipeline — LangChain orchestration, Pinecone vector search, AWS Textract OCR, and OpenAI integration. I didn't write every line, but I architected the system, defined the data flow, and owned the output quality. That's the role I play.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-2 border-t border-neutral-100">
              <span className="text-neutral-500 text-sm tracking-widest uppercase">Icons coming</span>
            </div>
          </div>

        </div>
      </section>

      {/* How I think */}
      <section className="bg-neutral-50 px-8 md:px-30 lg:px-60 py-14 md:py-24 border-b border-neutral-100">
        <p className="text-neutral-600 text-sm tracking-[0.3em] uppercase mb-12 md:mb-16">How I Think</p>
        <div className="flex flex-col gap-px bg-neutral-200">
          {values.map((v) => (
            <div key={v.title} className="bg-white p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-16 items-start">
              <p className="text-neutral-900 text-base md:w-64 shrink-0 leading-snug">{v.title}</p>
              <p className="text-neutral-600 text-base leading-relaxed max-w-2xl">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24 border-b border-neutral-100">
        <p className="text-neutral-600 text-sm tracking-[0.3em] uppercase mb-12 md:mb-16">Background</p>
        <div className="flex flex-col">
          {timeline.map((t, i) => (
            <div key={i} className="flex flex-col md:flex-row md:gap-20 py-10 border-b border-neutral-100 last:border-0">
              <div className="md:w-40 shrink-0 mb-4 md:mb-0">
                <p className="text-neutral-500 text-sm tracking-wider">{t.period}</p>
              </div>
              <div className="flex flex-col gap-2 max-w-2xl">
                <p className="text-neutral-900 text-lg">{t.title}</p>
                <p className="text-neutral-600 text-sm tracking-widest uppercase">{t.place}</p>
                <p className="text-neutral-600 text-base leading-relaxed mt-1">{t.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-30 lg:px-60 py-14 md:py-24">
        <div className="max-w-2xl">
          <p className="text-neutral-600 text-sm tracking-[0.3em] uppercase mb-8">Currently</p>
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
              className="text-neutral-600 text-sm tracking-widest uppercase border border-neutral-300 px-8 py-4 hover:border-black hover:text-black transition-all duration-300 text-center"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 text-sm tracking-widest uppercase border border-neutral-300 px-8 py-4 hover:border-black hover:text-black transition-all duration-300 text-center"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
