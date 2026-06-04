'use client';

import { useState } from 'react';

const processData = [
  {
    id: 'research',
    number: '01',
    title: 'User Research',
    description: 'Conducting stakeholder alignment, user discovery interviews, and competitive analysis to uncover the real friction points behind surface-level problems.'
  },
  {
    id: 'flows',
    number: '02',
    title: 'User Flows',
    description: 'Mapping logical step-by-step user pathways and system touchpoints to eliminate navigation bottlenecks before touching a UI canvas.'
  },
  {
    id: 'wireframes',
    number: '03',
    title: 'Wireframes',
    description: 'Lo-fi structural drafting to define layout hierarchy and validate progressive disclosure strategies — no visual noise, just logic.'
  },
  {
    id: 'visual',
    number: '04',
    title: 'Visual Design',
    description: 'Pixel-perfect interface screens with localized typography scales, color hierarchy, and a reusable component library built for scale.'
  },
  {
    id: 'proto',
    number: '05',
    title: 'High-Fidelity Prototyping',
    description: 'Connecting final screens into clickable environments for moderated usability testing and edge case resolution.'
  },
  {
    id: 'handoff',
    number: '06',
    title: 'Development Handover',
    description: 'Production-ready Figma specs, design tokens, and annotated assets delivered to engineering with zero structural ambiguity.'
  },
  {
    id: 'qa',
    number: '07',
    title: 'QA & Validation',
    description: 'Reviewing live deployments, tracking performance with tools like Microsoft Clarity, and iterating based on real user conversion data.'
  }
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-8 md:px-30 lg:px-60 py-24 border-t border-neutral-100">

      {/* Section header */}
      <div className="mb-16 flex flex-col gap-3">
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase">Process</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight leading-tight">
            How I Work
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xs md:text-right">
            A disciplined end-to-end design process — from raw discovery to live deployment.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Accordion — left */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          {processData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={item.id}
                className={`border-b border-neutral-100 transition-colors duration-300 ${isOpen ? 'border-l-2 border-l-neutral-900 pl-5' : 'pl-0'}`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-xs tracking-widest w-6 shrink-0 transition-colors duration-300 ${isOpen ? 'text-neutral-900' : 'text-neutral-300'}`}>
                      {item.number}
                    </span>
                    <span className={`text-lg md:text-xl tracking-tight transition-colors duration-300 ${isOpen ? 'text-neutral-900' : 'text-neutral-500 group-hover:text-neutral-900'}`}>
                      {item.title}
                    </span>
                  </div>
                  <span className={`text-lg leading-none transition-all duration-300 shrink-0 ${isOpen ? 'text-neutral-900 rotate-45' : 'text-neutral-300 group-hover:text-neutral-900'}`}>
                    +
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-32 pb-5' : 'max-h-0'}`}>
                  <p className="text-neutral-500 text-sm leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video — right, sticky, height matches accordion */}
        <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-28">
          <div className="w-full overflow-hidden" style={{ height: '560px' }}>
            <video
              src="/videos/process.webm"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
