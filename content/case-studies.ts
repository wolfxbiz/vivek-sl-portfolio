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
    title: "Alya Auditors",
    subtitle:
      "Driving Enterprise Lead Generation Through Strategic CRO and Targeted Visual Assets",
    sections: [
      {
        num: "01",
        title: "The Situation",
        body: [
          {
            type: "paragraph",
            text: "Alya Auditors is a professional services firm delivering financial auditing and compliance solutions. In the corporate B2B sector, securing high-quality leads is notoriously difficult. The firm needed an optimized digital funnel that could capture the attention of busy business owners, establish immediate institutional trust, and convert traffic into qualified audit leads.",
          },
          {
            type: "paragraph",
            text: "My role on this project was to handle the end-to-end user experience: defining the visual strategy, designing high-energy video advertising concepts, and building conversion-driven landing pages.",
          },
        ],
      },
      {
        num: "02",
        title: "The Tension",
        body: [
          {
            type: "paragraph",
            text: "Financial and auditing services are heavily dependent on trust, but corporate websites often suffer from 'regulatory fatigue' — they are overly dense, dry, and uninspiring. The core tension was balancing high energy with high credibility.",
          },
          {
            type: "paragraph",
            text: "If the landing page felt too corporate, it would fail to capture attention from digital ad campaigns. If it felt too flashy, it would lose the professional credibility required for a financial audit firm. The design had to walk a razor-thin line: deliver an energetic, modern elevator pitch while ensuring the interface felt secure, stable, and completely trustworthy.",
          },
        ],
      },
      {
        num: "03",
        title: "The Journey: Designing for Conversion",
        body: [
          {
            type: "paragraph",
            text: "To maximize Lead Generation, I focused heavily on visual hierarchy and psychological trust triggers. Every design decision was mapped against user drop-off risks.",
          },
          {
            type: "decision",
            label: "Strategic Decision 1 — Direct Elevator Pitch Integration",
            text: "Users arriving from digital ads decide whether to stay or leave within the first 3 seconds. To counter high bounce rates, I structured the above-the-fold interface around a high-impact header and paired it with energetic video advertising assets. The copy and visuals delivered an instant, clear elevator pitch stating exactly who Alya Auditors is, why they are trusted, and what action the user needs to take next.",
          },
          {
            type: "decision",
            label: "Strategic Decision 2 — Frictionless Form Architecture",
            text: "Every form field added to a landing page drastically reduces conversion rates. I audited the client's information requirements and stripped out unnecessary inputs. The final interface featured a streamlined, highly visible lead capture form placed strategically within the user's scanning path, reducing the cognitive effort required to submit an inquiry.",
          },
          {
            type: "decision",
            label: "Strategic Decision 3 — High-Contrast Value Cues",
            text: "Using a deliberate, high-contrast visual hierarchy, I guided the user's eye sequentially through corporate trust elements: client testimonials, professional accreditations, and distinct value propositions. The main call-to-action (CTA) buttons utilized a prominent color strategy, ensuring they remained impossible to miss on both desktop and mobile viewports.",
          },
        ],
      },
      {
        num: "04",
        title: "The Resolution & Outputs",
        body: [
          {
            type: "paragraph",
            text: "The resulting assets delivered a clean, unified, and highly focused acquisition funnel for the client:",
          },
          {
            type: "list",
            items: [
              "Conversion-Engineered Landing Pages: Deployed interfaces built specifically to optimize lead capture and maximize traffic retention.",
              "Integrated Ad Assets: Produced custom logos and designed targeted social media marketing assets to maintain visual continuity from the ad click straight to the landing page.",
              "Production-Ready Handoff: Provided clean layout structures that seamlessly transitioned from design files to live deployment.",
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
    slug: "ensurio-first",
    title: "Ensurio First",
    subtitle:
      "Designing an End-to-End B2B Lead Generation Funnel & Interactive Diagnostic Tool",
    sections: [
      {
        num: "01",
        title: "The Situation",
        body: [
          {
            type: "paragraph",
            text: "Ensurio First is a management consultancy specializing in corporate risk management and insurance optimization. In the B2B consultancy space, traditional lead generation methods — like dry contact forms or vague service pages — fail because cold traffic has no immediate reason to engage or share sensitive business data.",
          },
          {
            type: "paragraph",
            text: "To bridge this gap, I designed and structured The Growth Funnel System for Turquoic: a comprehensive, connected digital ecosystem designed to turn cold traffic into highly qualified leads. The system spans five distinct, interconnected deliverables: targeted social content, an optimized landing page, an interactive diagnostic tool, value-driven blog content, and an automated email nurture sequence.",
          },
        ],
      },
      {
        num: "02",
        title: "The Tension",
        body: [
          {
            type: "paragraph",
            text: "Corporate decision-makers, such as CFOs in the GCC region, are protective of their time and data. They will not fill out a generic 'Get a Quote' form just to be hit with a cold sales pitch. The tension lay in creating an experience that gives value before it asks for information.",
          },
          {
            type: "paragraph",
            text: "The design had to solve three systemic friction points all at once:",
          },
          {
            type: "list",
            items: [
              "No Clear Entry Point: Giving visitors a clear, immediate action rather than a passive scrolling experience.",
              "No Reason to Stay: Building an interactive asset that provides genuine diagnostic insights before pushing for a sales call.",
              "No Follow-Up Structure: Capturing, qualifying, and nurturing the lead immediately while user intent is at its peak.",
            ],
          },
        ],
      },
      {
        num: "03",
        title: "The Journey: Architecting the 5-Stage Funnel",
        body: [
          {
            type: "paragraph",
            text: "To convert analytical B2B decision-makers, the interface design and user experience were meticulously mapped across five core touchpoints:",
          },
          {
            type: "decision",
            label: "Phase 1 — Traffic & Pattern Interrupts (Social Assets)",
            text: "The funnel begins on LinkedIn, targeting corporate decision-makers. I structured three distinct content formats to drive traffic: a problem-first Paid Ad utilizing a stark, high-contrast teal background to highlight uncomfortable industry statistics; a story-led, trust-building Owner Post for personal networks; and a credential-led Company Post to reinforce brand authority.",
          },
          {
            type: "decision",
            label: "Phase 2 — Above-the-Fold Authority (The Landing Page)",
            text: "The primary layout rule for the landing page was strict distraction-free conversion: its single job is to get the user to start the diagnostic tool. The architecture features a bold, specific hero promise, a 3-second credibility check via a prominent trust-stats bar, an immediate interactive tool embed above the fold, and a structured framework section to educate the user.",
          },
          {
            type: "decision",
            label: "Phase 3 — High-Intent Engagement (The 3-Step Interactive Tool)",
            text: "Rather than facing an intimidating compliance sheet, the visitor engages with a frictionless, 3-step interactive setup. Steps 1 and 2 seamlessly gather company size and active coverage data. Step 3 addresses claims history. No jargon, no friction — just progressive disclosure that builds context.",
          },
          {
            type: "decision",
            label: "Phase 4 — Psychological Lead Capture (The Scored Output)",
            text: "The lead capture form is strategically hard-gated at the moment of peak intent — right after the tool calculates their results but before displaying the full report. The result screen displays an urgent, emotional scored output (e.g., 44/100 — Moderate Risk) alongside specific risk flags. This emotional trigger drives the user to input their email to unlock the solution: a free continuity playbook.",
          },
          {
            type: "decision",
            label: "Phase 5 — Automated Conversion (The Email Nurture)",
            text: "To prevent leads from going cold, I mapped out a two-part automated email architecture. Email 1 delivers the personalized PDF report instantly, highlighting their single highest-risk flag (e.g., Governance Score: 0). Email 2 follows up three days later with a powerful client story mirroring that exact risk profile, concluding with a single, direct call-to-action to book a consultation.",
          },
        ],
      },
      {
        num: "04",
        title: "The Resolution & Impact",
        body: [
          {
            type: "paragraph",
            text: "The final delivery package established a robust, unified lead generation engine that seamlessly blends product strategy with interface design:",
          },
          {
            type: "list",
            items: [
              "A Connected 5-Deliverable Architecture: Fully designed and mapped social assets, landing pages, interactive tool interfaces, multi-category blogs, and automated inbox layouts.",
              "High-Intent Lead Acquisition: An optimized framework engineered specifically to capture qualified corporate contacts at the absolute peak of user engagement.",
              "Proven Live System: Built, tested, and actively operational on a live management consultancy business, proving the efficacy of the system layout.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "greek-street-lab",
    title: "Greek Street Lab",
    subtitle:
      "Sensory-Driven Culinary UX: Engineering a Clean, High-Conversion Landing Architecture for Modern Street Culture",
    sections: [
      {
        num: "01",
        title: "The Situation",
        body: [
          {
            type: "paragraph",
            text: "Greek Street Lab is a high-energy, modern culinary brand delivering authentic Mediterranean street food to the Dubai delivery market — signature pitas, artisanal gyros, traditional bougatsa pastries, and both sweet and savory crepes. The brand carries a strong, distinct identity: part street culture, part culinary craft. But their digital presence wasn't capturing any of it. What existed was a generic, text-heavy menu that communicated none of the brand's energy and gave hungry mobile users very little reason to stay.",
          },
          {
            type: "paragraph",
            text: "My role was to design and engineer a premium landing architecture that could act as both a brand statement and a high-conversion ordering funnel. The deliverable wasn't just a menu — it was a digital storefront built to make users crave the food before they had even read a single item description.",
          },
        ],
      },
      {
        num: "02",
        title: "The Tension",
        body: [
          {
            type: "paragraph",
            text: "The Dubai delivery market is brutally competitive and completely mobile-driven. A user who arrives hungry has zero tolerance for friction. If the menu doesn't immediately communicate appetite, credibility, and ease of ordering — in that exact sequence — they are gone within seconds. The product had to earn attention before it could ask for a transaction.",
          },
          {
            type: "paragraph",
            text: "The deeper challenge was that most food-tech interfaces fail at exactly the same three structural points, and Greek Street Lab's existing interface hit all three:",
          },
          {
            type: "list",
            items: [
              "Text-Heavy Cognitive Load: Menus built around long ingredient descriptions and item lists force hungry users to read before they can feel. It completely short-circuits the visual appetite trigger that drives food decisions.",
              "Chaotic Layout Crowding: Heavy background textures, competing visual elements, and dense category structures cause the food photography — the single most powerful conversion asset in food-tech — to get lost in the noise.",
              "Friction-Heavy Conversion Paths: Every unnecessary tap, redirect, or UI ambiguity between a user and the 'Order Now' button is a leak in the funnel. On mobile, with a hungry user, that friction compounds fast.",
            ],
          },
        ],
      },
      {
        num: "03",
        title: "The Journey: Engineering the Digital Appetite Framework",
        body: [
          {
            type: "paragraph",
            text: "To solve these three failure points without losing the brand's street-culture edge, I developed what I call the Digital Appetite Framework — a set of layered design and engineering decisions that collectively create an interface where the food does the selling.",
          },
          {
            type: "decision",
            label: "Decision 1 — Code-First Design Methodology",
            text: "Rather than spending weeks in static mockup tools and losing fidelity in handoff, I translated the culinary concept directly into functional frontend components from day one. This let me verify spacing, image scaling, and interaction behavior across real mobile viewports in real time — not simulated desktop previews. Layout decisions that would have taken days to approve in a traditional design cycle were resolved in hours.",
          },
          {
            type: "decision",
            label: "Decision 2 — Minimalist Visual Sanctuary",
            text: "The background canvas was stripped completely clean — no textures, no gradients, no decorative line work. This was a deliberate, disciplined choice. In food-tech, the interface itself should be invisible. A crisp white or light slate canvas functions as a neutral stage that forces the eye directly onto the dish photography, creating the visual equivalent of a spotlight on the food. The restraint is the design.",
          },
          {
            type: "decision",
            label: "Decision 3 — Bold Urban Typography Hierarchy",
            text: "To mirror the Lab concept's street-culture identity, I implemented a sharp, heavyweight typographic system. Category headers and item names carry strong visual weight — projecting a premium, contemporary edge that communicates the brand's personality without relying on illustration or decorative assets. Descriptions and pricing are rendered at a deliberately lighter weight to keep the hierarchy clean and allow the user's eye to rest between heavy anchors.",
          },
          {
            type: "decision",
            label: "Decision 4 — High-Intent Conversion Placement",
            text: "The 'Order Now' interaction point was treated as a primary interface element, not a secondary button. I positioned high-contrast call-to-action targets above the fold, directly adjacent to hero menu items, and as persistent sticky elements during scroll. The goal was zero ambiguity: at any point in the user's browsing session, the path to ordering had to be visible and one tap away. This single structural decision has a measurable, direct impact on cart abandonment rates.",
          },
          {
            type: "decision",
            label: "Decision 5 — Imagery Performance Engineering",
            text: "Rich, high-fidelity food photography is the primary conversion driver in culinary interfaces — but it is also the most common source of performance failure. I structured a delivery pipeline using compression, lazy-loading, and modern image formats to ensure that dish visuals loaded at full fidelity without degrading scroll performance or increasing time-to-interactive on mobile networks. Fast and beautiful are not a tradeoff when the pipeline is engineered correctly.",
          },
        ],
      },
      {
        num: "04",
        title: "The Resolution & Outputs",
        body: [
          {
            type: "paragraph",
            text: "The final architecture delivered a digital storefront that functions simultaneously as a brand statement and a conversion engine — a clean, fast, visually dominant experience purpose-built for the Dubai mobile delivery market:",
          },
          {
            type: "list",
            items: [
              "Appetite-First Visual Menu Matrix: A responsive grid layout displaying all menu categories — Savory Crepes, Greek Bowls, Signature Pitas, and more — with high-fidelity image wrappers, clean pricing, and disciplined whitespace that gives every dish room to breathe.",
              "Persistent Mobile Action Target: A sticky, high-contrast ordering CTA engineered for one-tap access at every scroll depth, reducing the average number of interactions required to initiate an order.",
              "Optimized Imagery Pipeline: A fully structured media delivery system ensuring dish photography loads fast and renders at full fidelity across all mobile network conditions.",
              "Premium Brand Position: A live digital storefront that elevates an authentic street-food concept into a premium culinary destination — bold enough to hold attention, clean enough to convert.",
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
