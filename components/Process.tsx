'use client';

const items = [
  "PRODUCT DESIGN",
  "BRAND IDENTITY",
  "WEB DESIGN",
  "CRO LANDING PAGES",
  "FIGMA TO CODE",
  "UI/UX DESIGN",
  "DESIGN SYSTEMS",
  "CONVERSION DESIGN",
];

const separator = <span className="mx-6 md:mx-10 opacity-60">✦</span>;

export default function Process() {
  const track = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-[#FF4D00] overflow-hidden py-3 md:py-4">
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
            className="inline-flex items-center text-white font-black uppercase tracking-tight text-lg md:text-xl leading-none"
          >
            {item}
            {separator}
          </span>
        ))}
      </div>
    </section>
  );
}
