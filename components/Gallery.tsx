import Image from "next/image";
import Link from "next/link";

const items = [
  { title: "Talk of the Town", meta: "Website UI & Branding", image: "/images/talk-of-the-town.webp", href: "/case-study/talk-of-the-town" },
  { title: "Ensurio First", meta: "Risk Management Landing UI", image: "/images/ensurio-first.webp", href: "/case-study/ensurio-first" },
  { title: "Greek Street Lab", meta: "Web Design Execution", image: "/images/greekstreetlab.webp", href: "/case-study/greek-street-lab" },
  { title: "IMEX Tires", meta: "Interface Layouts", image: "/images/imex-tires.webp", href: "/case-study/imex-tires" },
  { title: "Turquoic", meta: "Website Design & Development", image: "/images/turquoic.webp", href: "/case-study/turquoic" },
];

export default function Gallery() {
  return (
    <section className="bg-white px-8 md:px-20 lg:px-32 py-24 border-t border-neutral-100">
      <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-16">
        Other Work
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => {
          const content = (
            <div className="flex flex-col gap-4 group relative">
              <div className="w-full aspect-video relative overflow-hidden bg-neutral-100">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-100 group-hover:bg-neutral-200 transition-colors duration-500" />
                )}
              </div>
              <div>
                <p className="text-neutral-900 text-base tracking-wide">{item.title}</p>
                <p className="text-neutral-400 text-sm tracking-wider mt-1">{item.meta}</p>
                {item.href && (
                  <p className="text-neutral-400 text-xs tracking-wider mt-2 group-hover:text-black transition-colors duration-300">
                    View Case Study →
                  </p>
                )}
              </div>
            </div>
          );

          return item.href ? (
            <Link key={item.title} href={item.href}>{content}</Link>
          ) : (
            <div key={item.title}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}
