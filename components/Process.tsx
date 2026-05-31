'use client';

import { useState } from 'react';

interface ProcessItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

const processData: ProcessItem[] = [
  {
    id: 'research',
    number: '01',
    title: 'User Research',
    description: 'Conducting stakeholder alignment, user discovery interviews, and competitive analysis to uncover the real friction points.'
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
    description: 'Lo-fi layout sketching and black-and-white structural drafting to define layout hierarchy and validate progressive disclosure strategies.'
  },
  {
    id: 'visual',
    number: '04',
    title: 'Visual Design',
    description: 'Crafting pixel-perfect interface screens, applying localized typography scales, establishing color hierarchy, and anchoring elements inside a reusable component library.'
  },
  {
    id: 'proto',
    number: '05',
    title: 'High-Fidelity Prototyping',
    description: 'Connecting final UI screens into high-fidelity clickable environments to conduct moderated usability testing and clear up interactive edge cases.'
  },
  {
    id: 'handoff',
    number: '06',
    title: 'Development Handover',
    description: 'Transitioning production-ready Figma specifications, design tokens, and annotated assets to the engineering environment with zero structural ambiguity.'
  },
  {
    id: 'qa',
    number: '07',
    title: 'QA & Validation',
    description: 'Reviewing live frontend deployments, tracking interactive performance markers using tools like Microsoft Clarity, and iterating based on real user conversion data.'
  }
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-8 md:px-16 lg:px-24 py-24 border-t border-neutral-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
          <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase">Process</p>
          <h2 className="text-neutral-900 text-4xl tracking-tight leading-tight">
            How I Work
          </h2>
          <div className="w-full aspect-4/3 bg-neutral-100 flex items-center justify-center">
            <span className="text-neutral-300 text-xs tracking-widest uppercase">
              Process Visual
            </span>
          </div>
        </div>

        <div className="lg:col-span-8 border-t border-neutral-100">
          {processData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={item.id} className="border-b border-neutral-100">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-neutral-300 text-sm tracking-widest w-8 shrink-0">
                      {item.number}
                    </span>
                    <span className="text-neutral-600 text-xl md:text-2xl group-hover:text-black transition-colors duration-300">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-neutral-300 group-hover:text-black transition-colors duration-300 pr-1 text-2xl leading-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-neutral-400 text-base leading-relaxed pl-0 md:pl-16 max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
