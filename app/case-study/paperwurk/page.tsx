import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paperwurk — Vivek S L",
  description:
    "A multi-tenant B2B SaaS platform for UAE business compliance — designed so 14 different people can share one product and each feel it was built just for them.",
};

export default function PaperwurkPage() {
  return (
    <main className="bg-white min-h-screen pt-16">

      {/* ── HERO — extends under navbar via -mt-16, blue fills the gap ── */}
      <section className="bg-[#0F2461] overflow-hidden -mt-16">
        <div className="px-8 md:px-20 lg:px-32 pt-28 pb-8 text-center">
          <p className="text-blue-300/60 text-xs tracking-[0.35em] uppercase mb-5">
            B2B Compliance SaaS Platform · UAE Market
          </p>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl mx-auto mb-5">
            One Platform.<br />
            4 Workspaces.<br />
            14 Personas.
          </h1>
          <p className="text-blue-200/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-8">
            Bringing clients, service providers, and administrators into a unified, zero-configuration compliance ecosystem.
          </p>
          <div className="flex justify-center gap-10 mb-10">
            {[
              { num: "110+", label: "Screens" },
              { num: "12", label: "Flows" },
              { num: "95+", label: "Diagrams" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <span className="text-white text-2xl font-semibold tracking-tight">{item.num}</span>
                <span className="text-blue-300/50 text-xs tracking-[0.25em] uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="px-8 md:px-20 lg:px-32">
          <Image
            src="/images/paperwurk/platform-overview.webp"
            alt="Paperwurk platform overview — product screens and mobile mockups"
            width={1400}
            height={900}
            className="w-full rounded-t-md"
            priority
          />
        </div>
      </section>

      {/* ── CASE STUDY SLIDES ── */}
      <div className="flex flex-col">

        <Image
          src="/images/paperwurk/problem.webp"
          alt="01 — The Problem"
          width={1400}
          height={850}
          className="w-full"
        />

        <Image
          src="/images/paperwurk/designing.webp"
          alt="02 — Designing for Everyone at Once"
          width={1400}
          height={950}
          className="w-full"
        />

        <Image
          src="/images/paperwurk/hardest-part.webp"
          alt="03 — The Hardest Part"
          width={1400}
          height={2100}
          className="w-full"
        />

        <Image
          src="/images/paperwurk/journeys.webp"
          alt="04 — Key Product Journeys"
          width={1400}
          height={2500}
          className="w-full"
        />

        <div className="bg-[#0D1B40]">
          <Image
            src="/images/paperwurk/decisions.webp"
            alt="05 — Design Decisions"
            width={1400}
            height={2200}
            className="w-full"
          />
        </div>

        <Image
          src="/images/paperwurk/delivered-v2.webp"
          alt="06 — What Was Delivered"
          width={1400}
          height={1050}
          className="w-full"
        />

      </div>

      {/* ── HERO OUTRO ── */}
      <Image
        src="/images/paperwurk/hero.webp"
        alt="Paperwurk — B2B Compliance SaaS Platform"
        width={1400}
        height={850}
        className="w-full"
      />

      {/* ── FOOTER NAV ── */}
      <div className="px-8 md:px-20 lg:px-32 py-16 border-t border-neutral-100">
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/"
            className="text-neutral-400 text-xs tracking-[0.25em] hover:text-black transition-colors duration-300 uppercase"
          >
            ← Back to Portfolio
          </Link>
          <a
            href="mailto:vivekshajilekha@gmail.com"
            className="text-neutral-400 text-xs tracking-[0.25em] hover:text-black transition-colors duration-300 uppercase"
          >
            Start a Project
          </a>
        </div>
        <div className="flex items-center justify-between border-t border-neutral-100 pt-10">
          <Link href="/case-study/insure-first" className="group flex flex-col gap-1">
            <p className="text-neutral-300 text-xs tracking-widest uppercase">← Previous</p>
            <p className="text-neutral-700 text-sm group-hover:text-black transition-colors duration-300">Insure First</p>
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
