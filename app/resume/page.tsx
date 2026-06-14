"use client";

import { useEffect } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ResumePage() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Vivek_SL_UI_UX_Growth_Designer";
    return () => { document.title = prev; };
  }, []);
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          nav { display: none !important; }
          body { background: white !important; color: black !important; }
          .resume-root { padding-top: 0 !important; }
          @page { margin: 0.6in 0.75in; size: A4; }
          a { color: inherit !important; text-decoration: none !important; }
          .resume-bullet-icon { color: #021F4B !important; }
          .job-entry { break-inside: avoid; page-break-inside: avoid; }
          .project-entry { break-inside: avoid; page-break-inside: avoid; }
          .ref-entry { break-inside: avoid; page-break-inside: avoid; }
        }
      `}</style>

      {/* Download button */}
      <div className="no-print fixed bottom-8 right-8 z-50 flex flex-col items-end gap-1">
        <button
          onClick={() => window.print()}
          className="bg-[#021F4B] text-white text-xs tracking-widest uppercase px-5 py-3 rounded-full hover:bg-black transition-colors duration-200 shadow-lg"
        >
          Save as PDF
        </button>
        <span className="text-[10px] text-neutral-400 pr-1">
          Select "Save as PDF" in the print dialog
        </span>
      </div>

      <div className="resume-root bg-white text-[#0a0a0a] min-h-screen print:min-h-0 pt-24 pb-20 print:pb-4">
        <div className="max-w-[780px] mx-auto px-8">

          {/* ── Top action bar ──────────────────────────────────── */}
          <div className="no-print flex items-center justify-end gap-3 mb-8 pb-4 border-b border-neutral-100">
            <span className="text-[10px] text-neutral-400">Tip: uncheck &ldquo;Headers and footers&rdquo; in the print dialog</span>
            <button
              onClick={() => window.print()}
              className="bg-[#021F4B] text-white text-xs tracking-widest uppercase px-5 py-2.5 rounded-full hover:bg-black transition-colors duration-200 shrink-0"
            >
              Save as PDF
            </button>
          </div>

          {/* ── Header ─────────────────────────────────────────── */}
          <header className="mb-4">
            <h1 className="text-5xl font-semibold tracking-tight text-[#021F4B] mb-1">
              Vivek S L
            </h1>
            <p className="text-xs text-neutral-500 mb-3">
              UI/UX Designer &amp; Marketing Strategist — Targeting Brand Strategy, CRO &amp; Marketing Design Roles
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <ContactItem icon={<MapPin size={12} />} text="India · Open to UAE / GCC / Remote" />
              <ContactItem icon={<Phone size={12} />} href="tel:+918921284894" text="+91 8921284894" />
              <ContactItem icon={<Mail size={12} />} href="mailto:vivekshajilekha@gmail.com" text="vivekshajilekha@gmail.com" />
              <ContactItem icon={<LinkedInIcon />} href="https://linkedin.com/in/viveksl" text="linkedin.com/in/viveksl" />
              <ContactItem icon={<Globe size={12} />} href="https://viveksl.com" text="viveksl.com" />
            </div>
            <div className="mt-4 h-0.5 bg-[#021F4B]" />
          </header>

          {/* ── Profile ─────────────────────────────────────────── */}
          <section className="mb-4">
            <SectionLabel>Profile</SectionLabel>
            <p className="text-xs text-neutral-700 leading-normal mt-2">
              Animation training and six years of freelance brand and content design built the visual foundation.
              That practice evolved into UI/UX design and CRO — delivering landing pages, SaaS platforms, and lead
              generation systems for 10+ UAE and GCC clients where visual craft and conversion architecture work together.
            </p>
            <p className="text-xs text-neutral-700 leading-normal mt-1">
              An MBA in Marketing &amp; Finance adds the strategic layer — consumer behaviour, funnel design, brand
              positioning, and market context. Targeting roles where design execution, marketing thinking, and
              conversion strategy converge.
            </p>
          </section>

          {/* ── Work Experience ─────────────────────────────────── */}
          <section className="mb-4">
            <SectionLabel>Work Experience</SectionLabel>

            <div className="mt-3 space-y-3">
              <JobEntry
                title="UI/UX Designer & Graphic Designer"
                company="Turquoic IT Consultancy"
                period="Jun 2024 – Jun 2026"
                bullets={[
                  "Designed conversion-focused landing pages, product interfaces, and digital experiences for 10+ clients across UAE and GCC markets.",
                  "Built brand identity systems and marketing creatives aligned with client acquisition and retention goals.",
                  "Produced wireframes, user flows, and screen designs for web and SaaS products — from brief through to development handoff.",
                  "Collaborated with stakeholders to align UX decisions with business objectives, campaign performance, and CRO outcomes.",
                ]}
              />
              <JobEntry
                title="Freelance UI/UX & Brand Designer"
                company="Independent"
                period="2018 – 2024"
                bullets={[
                  "Designed social media graphics, reels, posters, and promotional content across 6+ years — developing a fluency in what visual formats drive engagement and action.",
                  "Built brand identity systems and visual language for scaling businesses, translating positioning strategy into design.",
                  "Produced marketing creatives and video content for client campaigns, with increasing focus on conversion and audience growth metrics.",
                  "Designed landing pages and digital assets with lead generation as a primary brief — an early entry point into CRO thinking.",
                  "Managed full client lifecycle independently — discovery, scoping, design iteration, and delivery.",
                ]}
              />
              <JobEntry
                title="Customer Relations Intern"
                company="Bharti Airtel Limited"
                period="Jun 2023 – Aug 2023"
                bullets={[
                  "Engaged customers through service pitching and promotion; gained direct exposure to retail marketing and conversion strategies.",
                ]}
              />
            </div>
          </section>

          {/* ── Design Projects ─────────────────────────────────── */}
          <section className="mb-4">
            <SectionLabel>Design Projects</SectionLabel>

            <div className="mt-3 space-y-3">
              <ProjectEntry
                name="Paperwurk — B2B Compliance SaaS Platform"
                tags="UX Design · Information Architecture"
                description="End-to-end UX design for a multi-tenant compliance platform for UAE businesses — user flows, screen design, and information architecture structured across multiple user personas and permission levels."
              />
              <ProjectEntry
                name="Alya Auditors — Audit Readiness Platform"
                tags="CRO · Conversion Design"
                description="Designed a multi-stage compliance checker and lead capture flow for a UAE audit firm — conversion architecture, trust signal placement, and funnel optimisation throughout."
              />
              <ProjectEntry
                name="4BC Global — MEA Research Firm Platform"
                tags="Brand Identity · Web Design"
                description="Full brand identity system and digital platform for a specialist MEA market research and advisory firm — visual design, typography, layout architecture, and 30+ case study library."
              />
              <ProjectEntry
                name="Insure First — Insurance Advisory Platform"
                tags="Landing Page · CRO · B2B"
                description="Multi-route landing platform for a CBUAE-licensed insurance advisory firm — conversion-focused UX balancing regulatory context with lead generation for UAE and GCC audiences."
              />
            </div>
          </section>

          {/* ── Skills ──────────────────────────────────────────── */}
          <section className="mb-4">
            <SectionLabel>Skills</SectionLabel>

            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4">
              <SkillGroup
                category="UI/UX & Conversion Design"
                skills="User flows, wireframing, screen design, landing page design, CRO, lead generation architecture, information architecture, UX research"
              />
              <SkillGroup
                category="Brand & Visual Design"
                skills="Brand identity systems, social media graphics, digital illustration, video editing, marketing creatives, visual storytelling, motion design"
              />
              <SkillGroup
                category="Marketing & Growth"
                skills="Content strategy, social media management, SEO fundamentals, funnel strategy, campaign management, consumer behaviour, audience engagement"
              />
              <SkillGroup
                category="Business & Strategy"
                skills="Market positioning, brand strategy, stakeholder collaboration, client management, UAE/GCC market context, MBA-level marketing and finance"
              />
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-100">
              <span className="text-xs font-semibold text-[#021F4B]">Tools: </span>
              <span className="text-xs text-neutral-600">
                Figma, Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro), Canva, Affinity Designer, VS Code, Claude Code, Cursor
              </span>
            </div>
          </section>

          {/* ── Education ───────────────────────────────────────── */}
          <section className="mb-8">
            <SectionLabel>Education</SectionLabel>

            <div className="mt-3 space-y-2">
              <EduEntry degree="MBA — Marketing & Finance" institution="Amity University, Noida" period="2022 – 2024" />
              <EduEntry degree="BBA — Business Administration" institution="Amity University, Noida" period="2019 – 2022" />
              <EduEntry degree="Diploma in Advanced Animation" institution="Cavalier Animation, Trivandrum" period="2016 – 2018" />
            </div>
          </section>

          {/* ── References ──────────────────────────────────────── */}
          <section>
            <SectionLabel>References</SectionLabel>

            <div className="mt-3 space-y-2">
              <div className="ref-entry">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-semibold text-[#0a0a0a]">Cristus Cleetus</span>
                  <a href="mailto:cristus@turquoic.com" className="text-xs text-neutral-500 hover:text-[#021F4B] transition-colors">cristus@turquoic.com</a>
                </div>
                <p className="text-xs text-neutral-500 italic">Founder &amp; Principal Consultant, Turquoic Consulting FZC</p>
              </div>
              <div className="ref-entry">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-semibold text-[#0a0a0a]">Dr. Liya Rajesh</span>
                  <a href="mailto:lrajesh@kch.amity.edu" className="text-xs text-neutral-500 hover:text-[#021F4B] transition-colors">lrajesh@kch.amity.edu</a>
                </div>
                <p className="text-xs text-neutral-500 italic">Assistant Professor, Amity Global Business School Kochi</p>
              </div>
              <div className="ref-entry">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-semibold text-[#0a0a0a]">Dr. Ranjith Somasundaran C</span>
                  <a href="mailto:rschakkambath@kch.amity.edu" className="text-xs text-neutral-500 hover:text-[#021F4B] transition-colors">rschakkambath@kch.amity.edu</a>
                </div>
                <p className="text-xs text-neutral-500 italic">Assistant Professor, Amity Global Business School Kochi</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

/* ── Sub-components ───────────────────────────────────────── */

function LinkedInIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ContactItem({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) {
  const inner = (
    <span className="flex items-center gap-1.5 text-xs text-neutral-500">
      <span className="text-[#021F4B] shrink-0">{icon}</span>
      {text}
    </span>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-[#021F4B] transition-colors">
      {inner}
    </a>
  ) : inner;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-0.75 h-4 bg-[#7FFA7B] rounded-full shrink-0" />
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#021F4B]">
        {children}
      </span>
      <div className="flex-1 h-px bg-neutral-100" />
    </div>
  );
}

function JobEntry({
  title,
  company,
  period,
  bullets,
}: {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="job-entry">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-semibold text-[#0a0a0a]">{title}</span>
        <span className="text-xs text-neutral-400 whitespace-nowrap shrink-0">{period}</span>
      </div>
      <p className="text-xs text-neutral-500 italic mb-2">{company}</p>
      <ul className="space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="text-xs text-neutral-700 leading-relaxed flex gap-2">
            <span className="resume-bullet-icon text-[#7FFA7B] mt-0.75 shrink-0">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectEntry({
  name,
  tags,
  description,
}: {
  name: string;
  tags: string;
  description: string;
}) {
  return (
    <div className="project-entry pl-4 border-l border-neutral-100">
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <span className="text-sm font-semibold text-[#0a0a0a]">{name}</span>
        <span className="text-[10px] text-[#021F4B] tracking-wide whitespace-nowrap shrink-0">{tags}</span>
      </div>
      <p className="text-xs text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
}

function SkillGroup({ category, skills }: { category: string; skills: string }) {
  return (
    <div>
      <p className="text-xs font-semibold text-[#0a0a0a] mb-1">{category}</p>
      <p className="text-xs text-neutral-600 leading-relaxed">{skills}</p>
    </div>
  );
}

function EduEntry({
  degree,
  institution,
  period,
}: {
  degree: string;
  institution: string;
  period: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <div>
        <span className="text-sm font-semibold text-[#0a0a0a]">{degree}</span>
        <span className="text-neutral-400 mx-2 text-xs">·</span>
        <span className="text-xs text-neutral-500 italic">{institution}</span>
      </div>
      <span className="text-xs text-neutral-400 whitespace-nowrap shrink-0">{period}</span>
    </div>
  );
}
