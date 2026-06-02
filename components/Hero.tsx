import dynamic from 'next/dynamic';

const Prism = dynamic(() => import('./Prism'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-8 md:px-30 lg:px-60 pb-24 pt-32 bg-black overflow-hidden">

      {/* Prism — right half background */}
      <div className="absolute inset-0 flex justify-end pointer-events-none">
        <div className="w-full md:w-3/4 lg:w-2/3 h-full opacity-80">
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
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-10">
          VIVEK S L — Product-Minded Designer
        </p>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8 max-w-4xl">
          Designing products that ship. Thinking in systems, funnels, and business outcomes.
        </h1>
        <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-2xl">
          UI/UX Designer with an MBA in Marketing & Finance — bridging the gap between
          interface execution and product strategy. I scope requirements, align stakeholders,
          map user flows, and ship conversion-driven digital products. Transitioning toward
          Product Management.
        </p>
      </div>
    </section>
  );
}
