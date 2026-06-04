'use client';

import dynamic from 'next/dynamic';

const Prism = dynamic(() => import('./Prism'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-8 md:px-30 lg:px-60 pb-24 pt-32 bg-black overflow-hidden">

      {/* Prism — left side, desktop only */}
      <div className="hidden md:flex absolute inset-0 justify-start pointer-events-none">
        <div className="w-1/2 h-full opacity-90">
          <Prism
            animationType="hover"
            timeScale={0.4}
            height={3.5}
            baseWidth={5.5}
            scale={3.2}
            glow={1}
            bloom={1.2}
            noise={0.3}
            colorFrequency={1}
            hoverStrength={1.5}
            inertia={0.04}
            transparent={true}
            suspendWhenOffscreen={true}
          />
        </div>
      </div>

      {/* Gradient fade — protects text on the right */}
      <div className="hidden md:block absolute inset-0 bg-linear-to-l from-black via-black/90 to-transparent pointer-events-none z-1" />

      {/* Content — starts exactly at the right half */}
      <div className="relative z-10 flex w-full">
        {/* Spacer — matches prism width */}
        <div className="hidden md:block w-1/2 shrink-0" />
        {/* Text — right half */}
        <div className="w-full md:w-1/2 md:pl-12">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-8">
            VIVEK S L — Product-Minded Designer
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight mb-6">
            Designing products that ship. Thinking in systems, funnels, and business outcomes.
          </h1>
          <p className="text-white/40 text-sm leading-relaxed">
            UI/UX Designer with an MBA in Marketing & Finance — bridging the gap between
            interface execution and product strategy. I scope requirements, align stakeholders,
            map user flows, and ship conversion-driven digital products. Transitioning toward
            Product Management.
          </p>
        </div>
      </div>
    </section>
  );
}
