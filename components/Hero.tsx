'use client';

import { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const start = () => { video.currentTime = 0.4; };
    const loop = () => { video.currentTime = 0.4; video.play(); };

    video.addEventListener('loadedmetadata', start);
    video.addEventListener('ended', loop);
    return () => {
      video.removeEventListener('loadedmetadata', start);
      video.removeEventListener('ended', loop);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end px-8 md:px-30 lg:px-60 pb-16 md:pb-24 pt-28 md:pt-32 bg-black overflow-hidden">

      <div className="relative z-10 flex w-full">
        <div className="w-full md:max-w-2xl">

          <div className="w-full aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden mb-6 md:mb-8">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover object-center"
            >
              <source src="/videos/hero.webm" type="video/webm" />
            </video>
          </div>

          <p className="text-white/65 text-xs tracking-[0.3em] uppercase mb-8">
            VIVEK S L — Product-Minded Designer
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight mb-6">
            Designing products that ship. Thinking in systems, funnels, and business outcomes.
          </h1>
          <p className="text-white/75 text-base leading-relaxed">
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
