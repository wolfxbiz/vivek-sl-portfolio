import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "01",
    slug: "paperwurk",
    category: "UX Design / Enterprise Platform",
    title: "Paperwurk",
    subtitle: "Bilingual three-sided platform UX",
    image: "/images/cs-1.jpg",
  },
  {
    id: "02",
    slug: "alya-auditors",
    category: "CRO / Lead Generation",
    title: "Alya Auditors",
    subtitle: "B2B audit firm lead funnel",
    image: "/images/cs-2.jpg",
  },
  {
    id: "03",
    slug: "4bc-global",
    category: "Brand / Web Design",
    title: "4BC Global",
    subtitle: "Corporate redesign & brand architecture",
    image: "/images/cs-3.jpg",
  },
  {
    id: "04",
    slug: "ensurio-first",
    category: "B2B Growth / Funnel Engineering",
    title: "Ensurio First",
    subtitle: "End-to-end B2B lead acquisition engine",
    image: "/images/cs-4.jpg",
  },
];

export default function ProjectGrid() {
  return (
    <section className="bg-white border-t border-neutral-100">

      {/* Header */}
      <div className="px-8 md:px-30 lg:px-60 pt-16 pb-10 flex items-end justify-between">
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight">
          Case Studies
        </h2>
        <Link
          href="/work"
          className="text-neutral-400 text-xs tracking-widest uppercase hover:text-black transition-colors duration-300 flex items-center gap-2 pb-1"
        >
          All Work →
        </Link>
      </div>

      {/* Full-width image strip */}
      <div className="flex w-full" style={{ height: "58vh" }}>
        {projects.map((p, i) => (
          <Link
            key={p.id}
            href={`/case-study/${p.slug}`}
            className="relative flex-1 overflow-hidden group"
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              priority={i === 0}
              sizes="(max-width: 768px) 50vw, 25vw"
              quality={100}
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle dark overlay on hover */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            {/* Vertical divider */}
            {i < projects.length - 1 && (
              <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20" />
            )}
          </Link>
        ))}
      </div>

      {/* Dark label bar */}
      <div className="flex w-full bg-blue-700">
        {projects.map((p, i) => (
          <Link
            key={p.id}
            href={`/case-study/${p.slug}`}
            className="flex-1 px-8 py-8 flex flex-col gap-2 group hover:bg-blue-600 transition-colors duration-300 border-r border-white/10 last:border-0"
          >
            <p className="text-white/40 text-xs tracking-widest uppercase">{p.category}</p>
            <p className="text-white text-lg tracking-tight leading-snug mt-1">{p.title}</p>
            <p className="text-white/40 text-sm leading-snug">{p.subtitle}</p>
            <p className="text-white/20 text-sm tracking-widest mt-3 group-hover:text-white/60 transition-colors duration-300">→</p>
          </Link>
        ))}
      </div>

    </section>
  );
}
