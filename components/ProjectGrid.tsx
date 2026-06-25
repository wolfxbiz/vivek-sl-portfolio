import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "01",
    slug: "paperwurk",
    title: "Paperwurk",
    image: "/images/cover-paperwurk.png",
    hover: "/images/hover-paperwurk.png",
  },
  {
    id: "02",
    slug: "alya-auditors",
    title: "Alya Auditors",
    image: "/images/cover-alya.png",
    hover: "/images/hover-alya.png",
  },
  {
    id: "03",
    slug: "4bc-global",
    title: "4BC Global",
    image: "/images/cover-4bc.png",
    hover: "/images/hover-4bc.png",
  },
  {
    id: "04",
    slug: "insure-first",
    title: "Insure First",
    image: "/images/cover-insure.png",
    hover: "/images/hover-insure.png",
  },
];

export default function ProjectGrid() {
  return (
    <section className="bg-white border-t border-neutral-100">

      {/* Header */}
      <div className="px-8 md:px-30 lg:px-60 pt-16 pb-10">
        <h2 className="text-neutral-900 text-4xl md:text-5xl tracking-tight">
          Case Studies
        </h2>
      </div>

      {/* Card grid */}
      <div className="px-8 md:px-30 lg:px-60 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/case-study/${p.slug}`}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Base image */}
              <Image
                src={p.image}
                alt={p.title}
                width={687}
                height={1372}
                quality={75}
                sizes="(max-width: 768px) 45vw, 25vw"
                className="w-full h-auto"
              />
              {/* Hover image — fades in on top */}
              <Image
                src={p.hover}
                alt=""
                fill
                quality={75}
                sizes="(max-width: 768px) 45vw, 25vw"
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
