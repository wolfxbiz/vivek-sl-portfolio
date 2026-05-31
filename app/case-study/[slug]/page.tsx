import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Vivek S L`,
    description: cs.subtitle,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <main className="bg-white min-h-screen">
      {/* Back nav */}
      <div className="px-8 md:px-16 lg:px-24 py-8 border-b border-neutral-100">
        <Link
          href="/"
          className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase"
        >
          ← vivek s l
        </Link>
      </div>

      {/* Header */}
      <header className="bg-neutral-900 px-8 md:px-16 lg:px-24 pt-20 pb-16">
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">
          Case Study
        </p>
        <h1 className="text-white text-4xl md:text-6xl leading-tight tracking-tight mb-6 max-w-4xl">
          {cs.title}
        </h1>
        <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
          {cs.subtitle}
        </p>
      </header>

      {/* Mockup placeholder */}
      <div className="px-8 md:px-16 lg:px-24 py-16 border-b border-neutral-100">
        <div className="w-full aspect-16/7 bg-neutral-100 flex items-center justify-center">
          <span className="text-neutral-300 text-xs tracking-widest uppercase">
            Project Mockup
          </span>
        </div>
      </div>

      {/* Sections */}
      <div className="px-8 md:px-16 lg:px-24 py-4">
        {cs.sections.map((section) => (
          <section
            key={section.num}
            className="py-16 border-b border-neutral-100 last:border-0"
          >
            <div className="flex items-start gap-8 mb-8">
              <span className="text-neutral-300 text-xs tracking-widest w-8 shrink-0 pt-1">
                {section.num}
              </span>
              <h2 className="text-neutral-900 text-2xl tracking-tight">
                {section.title}
              </h2>
            </div>

            <div className="ml-16 flex flex-col gap-6 max-w-2xl">
              {section.body.map((block, i) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={i} className="text-neutral-500 text-base leading-[1.9]">
                      {block.text}
                    </p>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul key={i} className="flex flex-col gap-4">
                      {block.items.map((item, j) => {
                        const colonIdx = item.indexOf(":");
                        const hasLabel = colonIdx > 0 && colonIdx < 60;
                        return (
                          <li key={j} className="flex gap-4">
                            <span className="mt-2.5 shrink-0 w-1 h-1 rounded-full bg-neutral-300 block" />
                            <span className="text-neutral-500 text-base leading-[1.9]">
                              {hasLabel ? (
                                <>
                                  <span className="text-neutral-800">
                                    {item.slice(0, colonIdx + 1)}
                                  </span>
                                  {item.slice(colonIdx + 1)}
                                </>
                              ) : (
                                item
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  );
                }

                if (block.type === "decision") {
                  return (
                    <div key={i} className="border-l-2 border-neutral-200 pl-6 py-2">
                      <p className="text-neutral-400 text-xs tracking-wider uppercase mb-3">
                        {block.label}
                      </p>
                      <p className="text-neutral-500 text-base leading-[1.9]">
                        {block.text}
                      </p>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Footer nav */}
      <div className="px-8 md:px-16 lg:px-24 py-16 border-t border-neutral-100 flex items-center justify-between">
        <Link
          href="/"
          className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase"
        >
          ← Back to Portfolio
        </Link>
        <a
          href="mailto:vivekshajilekha@gmail.com"
          className="text-neutral-400 text-xs tracking-widest hover:text-black transition-colors duration-300 uppercase"
        >
          Start a Project
        </a>
      </div>
    </main>
  );
}
