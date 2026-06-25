const projects = [
  { id: "251633181", title: "Project 01" },
  { id: "227337443", title: "Project 02" },
  { id: "251641991", title: "Yathra — Creative Direction & AI Visual Production" },
  { id: "251598949", title: "Project 04" },
];

export default function BehanceSection() {
  return (
    <section className="bg-black px-8 md:px-30 lg:px-60 pt-20 md:pt-28 pb-20 md:pb-28 border-t border-white/8">

      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-[#FF4D00] text-xs tracking-[0.4em] uppercase mb-3">Creative Work</p>
          <h2 className="text-white text-3xl md:text-4xl tracking-tight leading-snug">
            Behance
          </h2>
        </div>
        <a
          href="https://www.behance.net/viveksl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 text-xs tracking-widest uppercase hover:text-white transition-colors duration-300"
        >
          View All ↗
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.id} className="relative w-full" style={{ paddingBottom: "78.2%" }}>
            <iframe
              src={`https://www.behance.net/embed/project/${p.id}?ilo0=1`}
              title={p.title}
              allowFullScreen
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full rounded-xl border border-white/8"
              style={{ colorScheme: "normal" }}
            />
          </div>
        ))}
      </div>

    </section>
  );
}
