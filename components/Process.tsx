'use client';

const items = [
  "DISCOVER",
  "WIREFRAME",
  "VISUAL DESIGN",
  "BRAND IDENTITY",
  "ILLUSTRATE",
  "BUILD",
  "SHIP",
];

const separator = <span className="mx-6 md:mx-10 opacity-60">✦</span>;

export default function Process() {
  const track = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-[#FF4D00] overflow-hidden py-6 md:py-8">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }
        .marquee-track {
          display: flex;
          white-space: nowrap;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <div className="marquee-track">
        {track.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-white font-black uppercase tracking-tight text-5xl md:text-7xl lg:text-8xl leading-none"
          >
            {item}
            {separator}
          </span>
        ))}
      </div>
    </section>
  );
}
