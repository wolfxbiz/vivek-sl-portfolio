import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "01",
    slug: "paperwurk",
    category: "UX Design",
    title: "Paperwurk: Designing a mobile-aware, bilingual UX ecosystem for a complex three-sided platform",
    image: "/images/paperwurk-thumb.webp",
  },
  {
    id: "02",
    slug: "alya-auditors",
    category: "CRO / Lead Generation",
    title: "Alya Auditors: High-conversion lead generation and CRO funnel for a B2B audit firm",
    image: "/images/alya-auditors-thumb.webp",
  },
  {
    id: "03",
    slug: "4bc-global",
    category: "Brand / Web Design",
    title: "4BC Global: Corporate redesign and brand architecture for a market research firm",
    image: "/images/4bc-global-thumb.webp",
  },
];

export default function ProjectGrid() {
  return (
    <section className="bg-white px-8 md:px-20 lg:px-32 py-24 border-t border-neutral-100">

      <h2 className="text-neutral-900 text-4xl tracking-tight mb-16">
        Case Studies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {projects.map((p, i) => (
          <article key={p.id} className="flex flex-col group relative">
            <Link href={`/case-study/${p.slug}`} className="absolute inset-0 z-10" aria-label={p.title} />

            <div className="w-full aspect-4/3 relative overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                priority={i === 0}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="flex flex-col gap-3 pt-6">
              <p className="text-neutral-400 text-sm">
                {p.category}
              </p>
              <h3 className="text-neutral-900 text-base md:text-lg leading-snug tracking-tight group-hover:text-neutral-500 transition-colors duration-300">
                {p.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
