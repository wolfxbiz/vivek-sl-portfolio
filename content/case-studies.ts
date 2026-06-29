export type CaseStudySection = {
  num: string;
  title: string;
  body: Array<
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] }
    | { type: "decision"; label: string; text: string }
  >;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "paperwurk",
    title: "Paperwurk",
    subtitle:
      "Designing a Mobile-Aware, Bilingual UX Ecosystem for a Complex Three-Sided Platform",
    sections: [
      {
        num: "01",
        title: "The Situation",
        body: [
          {
            type: "paragraph",
            text: "Setting up a business in the UAE involves more critical decisions than most first-time founders are prepared for. Which jurisdiction — mainland or free zone? Which business activity code out of thousands? Which documents, in what format, submitted to which authority, and in what exact order? Get any of it wrong, and you don't just face a delay — you restart the entire process.",
          },
          {
            type: "paragraph",
            text: "The system as it existed was built for lawyers and corporate consultants, not the people actually going through it. Paperwurk was built to change that. Paperwurk is a complex, three-sided platform connecting clients who need business services with the suppliers who deliver them, while Paperwurk sits in the middle managing compliance and coordinating delivery. This case study focuses explicitly on the client side of that platform: the high-stakes experience of a founder navigating business formation for the very first time.",
          },
        ],
      },
      {
        num: "02",
        title: "The Tension & Constraints",
        body: [
          {
            type: "paragraph",
            text: "The challenge wasn't any single interface element; it was managing immense regulatory complexity without letting the product feel like a dry compliance form. Simplify too much, and you strip out legal data people actually need; leave too much in, and the process collapses under its own weight.",
          },
          {
            type: "paragraph",
            text: "To make things more challenging, the design had to hold up under strict, unyielding constraints:",
          },
          {
            type: "list",
            items: [
              "The Persona Spectrum: It had to serve the first-time founder who moves slowly and reads carefully, while simultaneously allowing an experienced PRO agent to move fast and skip what they already know.",
              "Mobile as a Reality, Not an Afterthought: While desktop was a deliverable, user research revealed that agents were using the product in the field — parking lots, government offices, and waiting rooms — on mobile devices under extreme time pressure.",
              "True Bilingual Parity (LTR to RTL): The product had to function seamlessly in both English and Arabic. This meant true Right-to-Left (RTL) layout mirroring that respected visual hierarchy and localized legal logic, not just direct text translation.",
              "Timeline: Design and map 12 core product flows within a strict execution window.",
            ],
          },
        ],
      },
      {
        num: "03",
        title: "Research & Real-World Insights",
        body: [
          {
            type: "paragraph",
            text: "Through stakeholder interviews, discovery user research, and moderated usability testing, four core insights completely shifted our design strategy:",
          },
          {
            type: "list",
            items: [
              "Founders Don't Know What They Don't Know: Users lacked the legal vocabulary (jurisdictions, activity codes) to fill out standard forms. They didn't need an input box; they needed a digital guide.",
              "Context Dictates the Experience: Desktop layouts felt fragile in the field. Mobile-first was a user reality driven by low connections and on-the-go agents.",
              "Language Parity ≠ Translation: Form labels that felt neutral in English carried different psychological weight in Arabic. RTL mirroring required rethinking how information was sequenced.",
              "Errors Are the True User Journey: On a happy path, users do fine. The product's actual value was proven when something went wrong — a rejected document or an invalid field. The recovery flow determined whether they trusted the platform or abandoned it.",
            ],
          },
        ],
      },
      {
        num: "04",
        title: "Core Design Decisions",
        body: [
          {
            type: "decision",
            label: "Decision 1 — Transforming Compliance into a Guided Conversation",
            text: "Instead of a massive, overwhelming legal form, we restructured the entire onboarding flow into an explicit, step-by-step wizard. Because UAE regulation mandates a strict sequence (Jurisdiction → Activity → Licence Type → Documents), the wizard made this hierarchy logical. This isolated each major decision, creating structural room to give users contextual guidance without cluttering the screen.",
          },
          {
            type: "decision",
            label: "Decision 2 — Radical Progressive Disclosure",
            text: "Regulatory processes carry thousands of data points (such as massive lists of business activity codes). Our approach was strict progressive disclosure: surface only what the user needs to make the current decision, and hold back the rest. To mitigate errors, we implemented validation on step-exit rather than final form submission, allowing users to catch and fix mistakes instantly.",
          },
          {
            type: "decision",
            label: "Decision 3 — Component-Level Mobile Awareness",
            text: "Instead of designing a desktop layout and shrinking it down later, mobile responsiveness was baked directly into the component architecture from day one. Touch target sizes, input behaviors, data table scanning, and status visibilities were resolved at the component level. The result was a robust desktop interface that adapted flawlessly to mobile viewports without requiring a separate mobile design pass.",
          },
        ],
      },
      {
        num: "05",
        title: "The Resolution & Outputs",
        body: [
          {
            type: "paragraph",
            text: "The final design package delivered a highly disciplined, developer-ready architecture that completely removed ambiguity during the engineering handoff:",
          },
          {
            type: "list",
            items: [
              "12 Core Flows & 98 Screens mapped across 14 distinct user personas.",
              "A Scalable Component Library featuring reusable elements built to handle complex data states.",
              "Comprehensive Handoff Documentation: Detailed layout specs and API endpoint mapping that drastically reduced development grooming sessions and sprint cycles.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "alya-auditors",
    title: "Alya Auditors Nexus",
    subtitle:
      "Full-Stack Compliance Platform: React SPA with Multi-Stage Audit Readiness Architecture and Idle-Triggered Lead Capture",
    sections: [
      {
        num: "01",
        title: "The Challenge",
        body: [
          {
            type: "paragraph",
            text: "Alya Auditors is a UAE-based audit and compliance firm serving mainland and free zone entities. The core challenge was converting a static brochure site into a full-stack compliance platform that demonstrates audit expertise through the product itself — not just through copy.",
          },
          {
            type: "paragraph",
            text: "Three friction points defined the brief: most audit sites force users to read dense compliance jargon before they understand if they need the service; free consultations convert poorly when users haven't yet identified their own exposure; and high-intent users who don't convert on first visit are rarely recovered. The platform had to solve all three simultaneously.",
          },
        ],
      },
      {
        num: "02",
        title: "Conversion Architecture",
        body: [
          {
            type: "paragraph",
            text: "The core conversion mechanism is a four-stage audit readiness checker built directly into the platform. Unlike a static contact form, the checker progressively surfaces the user's compliance gaps — making the audit need concrete before asking for contact information.",
          },
          {
            type: "list",
            items: [
              "Stage 01 — Business Profile (100% entry): Jurisdiction, entity type, activity code — frictionless qualification.",
              "Stage 02 — Compliance Snapshot (76% completion): Trade license status, VAT registration, ESR obligations.",
              "Stage 03 — Exposure Assessment (60% completion): The inflection point — users answering these questions are actively discovering their risk.",
              "Stage 04 — Lead Capture (25% conversion): Contact information requested after the user has already engaged with their own compliance state.",
            ],
          },
        ],
      },
      {
        num: "03",
        title: "Key Decisions",
        body: [
          {
            type: "decision",
            label: "Idle Popup Strategy",
            text: "A hasShownIdlePopup flag gates a popup that triggers after 45 seconds of inactivity on compliance-heavy pages. The popup offers a free audit checklist download — a value exchange timed to catch users who are reading carefully rather than bouncing. Once shown, it never shows again, preventing repeat-visit annoyance.",
          },
          {
            type: "decision",
            label: "State Machine Architecture",
            text: "The checker uses an explicit state machine rather than conditional rendering. Each stage transition is a deliberate state event — preventing back-navigation corruption and enabling clean analytics on drop-off by stage.",
          },
          {
            type: "decision",
            label: "Report Engine",
            text: "On completion, the platform generates a personalised PDF compliance summary using the user's inputs. This document becomes the deliverable that converts a digital interaction into a physical artefact the user can share with their accountant or board.",
          },
        ],
      },
      {
        num: "04",
        title: "Resolution",
        body: [
          {
            type: "paragraph",
            text: "Stack: React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui. Live at accounting.alyaauditors.com.",
          },
          {
            type: "list",
            items: [
              "A compliance platform that proves expertise through interaction — not brochure copy.",
              "Four-stage audit readiness checker with progressive disclosure and stage-exit validation.",
              "Idle-triggered lead capture with one-time flag to prevent annoyance on return visits.",
              "Personalised compliance report generated on flow completion — a take-away artefact.",
              "Design system built around Navy #021F4B and Green #7FFA7B for clinical authority with approachability.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "4bc-global",
    title: "4BC Global",
    subtitle:
      "Modernizing the Digital Presence and Visual Identity for a Market Research & Advisory Firm",
    sections: [
      {
        num: "01",
        title: "The Situation",
        body: [
          {
            type: "paragraph",
            text: "4BC Global is a market research and advisory firm that delivers deep industry insights to enterprise clients. To attract corporate decision-makers, a research firm must project absolute authority, modern intelligence, and analytical precision. However, their existing digital presence failed to reflect their industry status, making it difficult to effectively showcase their dense research reports and advisory services.",
          },
          {
            type: "paragraph",
            text: "My responsibility on this project was comprehensive: I executed the end-to-end UI/UX design, built the brand-new corporate website, and redesigned their visual identity from the ground up.",
          },
        ],
      },
      {
        num: "02",
        title: "The Tension",
        body: [
          {
            type: "paragraph",
            text: "The primary challenge of this project lay in Information Architecture. Market research firms produce massive amounts of complex data, whitepapers, and corporate advisory text.",
          },
          {
            type: "paragraph",
            text: "The core tension was presenting this heavy, data-dense content without overwhelming the reader. If the website was too unstructured, enterprise clients wouldn't be able to find the insights they needed. If it was too academic and textbook-like, the digital experience would feel outdated. The design had to strike a perfect balance: project premium corporate trustworthiness while maintaining a clean, highly scannable visual hierarchy.",
          },
        ],
      },
      {
        num: "03",
        title: "The Journey: Systematic Modernization",
        body: [
          {
            type: "paragraph",
            text: "To solve the data presentation problem and elevate the firm's credibility, I approached the design through three core phases:",
          },
          {
            type: "decision",
            label: "Strategic Phase 1 — Structural Information Architecture",
            text: "I restructured the entire website navigation to separate their public-facing corporate capabilities from their deep research reports. By prioritizing whitespace, establishing clear typographic scales, and using modular layout grids, I turned intimidating walls of text into highly readable, bite-sized corporate insights.",
          },
          {
            type: "decision",
            label: "Strategic Phase 2 — Tailored Identity (The 2 Logos)",
            text: "A full digital transformation requires a matching visual identity. To support their core business modules, I designed two distinct, professional logos for their product wing, 4BC Global Research Advisory. The logos were engineered to look clean at microscopic sizes (like mobile nav bars) while commanding authority when placed on executive PDF research covers.",
          },
          {
            type: "decision",
            label: "Strategic Phase 3 — Agile Iteration & Feedback Integration",
            text: "Corporate websites require precise positioning. Working directly with the client's leadership team, I managed a tight feedback loop to ensure the visual tone perfectly matched their corporate messaging. Because I handled both the interface design in Figma and the actual frontend build, I was able to rapidly implement revisions without any loss of design fidelity or performance bottlenecks.",
          },
        ],
      },
      {
        num: "04",
        title: "The Resolution & Outputs",
        body: [
          {
            type: "paragraph",
            text: "The final delivery package successfully transitioned 4BC Global into a modern, digitally native authority in the research space:",
          },
          {
            type: "list",
            items: [
              "The New 4BC Global Website: A fully responsive, optimized corporate platform built to present complex market insights with a premium aesthetic.",
              "Refreshed Brand Identity: Two custom-designed logos for the Research Advisory division, complete with a clean corporate typography and color palette.",
              "Seamless Deployment: A live, high-performance web asset that bridges the gap between massive data presentation and modern user experience.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "insure-first",
    title: "Insure First",
    subtitle:
      "Multi-Route B2B Landing Platform for a CBUAE-Licensed, Conflict-Free Insurance Advisory Firm",
    sections: [
      {
        num: "01",
        title: "The Market Tension",
        body: [
          {
            type: "paragraph",
            text: "Insure First Risk Management Consultancies (CBUAE License No. 143) operates in a market dominated by direct insurance brokers who earn commission from placing business with insurers. This creates a structural conflict of interest: the advisor is financially incentivised to recommend the insurer that pays the highest commission — not the one that provides the best coverage for the client.",
          },
          {
            type: "paragraph",
            text: "Insure First's model is different: they charge for advisory, not placement. Their recommendations are commercially clean. But this distinction only converts if the market understands it — and most SME founders have never considered the difference between a commission-based broker and a conflict-free advisor. The site's primary job was to make this positioning legible before the first scroll.",
          },
        ],
      },
      {
        num: "02",
        title: "Site Architecture",
        body: [
          {
            type: "paragraph",
            text: "The platform is a three-route architecture, not a single scrollable page. Each route serves a distinct point in the consultative sales cycle:",
          },
          {
            type: "list",
            items: [
              "/ (Home) — Cold traffic: 13-section narrative arc building from problem awareness to trust to conversion.",
              "/services — Warm traffic: Persona-led service grid for visitors already evaluating the firm.",
              "/contact — High-intent traffic: Form + FAQ + sticky mobile bar for visitors ready to act.",
            ],
          },
        ],
      },
      {
        num: "03",
        title: "Key Design Decisions",
        body: [
          {
            type: "decision",
            label: "Sharp Corners Throughout",
            text: "No border-radius on any primary surface. Corporate financial services audiences associate rounded UI with consumer apps. Sharp corners signal precision, formality, and trust — appropriate for an advisory brand where the purchase decision involves significant financial or legal exposure.",
          },
          {
            type: "decision",
            label: "Named Founder in Conversion Touchpoints",
            text: "'Fredrick will review your enquiry' replaces every generic 'a member of our team' line. B2B advisory is a personal trust sale. Naming the advisor converts an anonymous form into a personal commitment.",
          },
          {
            type: "decision",
            label: "WhatsApp as Primary Channel",
            text: "In the UAE, WhatsApp is a primary business communication channel across all segments. The sticky mobile bar offers Call and WhatsApp in parallel — not a consumer concession but market-appropriate channel design.",
          },
        ],
      },
      {
        num: "04",
        title: "Resolution",
        body: [
          {
            type: "paragraph",
            text: "Stack: React 18 · Vite · Framer Motion · Tailwind CSS · React Router. Live at ensurio-frist.vercel.app.",
          },
          {
            type: "list",
            items: [
              "Three-route site architecture with a distinct buyer journey per route.",
              "25+ years / 130+ businesses / $40M+ premiums / 98% retention — credibility anchors above the fold.",
              "13-section homepage narrative arc: problem → empathy → solution → trust → conversion.",
              "Two-pillar service model (insurance consultancy + management consultancy) for natural upsell.",
              "Design system: Navy #0D1B4B, Teal #00B899, Plus Jakarta Sans + Inter.",
            ],
          },
        ],
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
