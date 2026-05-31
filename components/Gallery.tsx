const items = [
  { title: "Talk of the Town", meta: "Website UI & Branding" },
  { title: "Ensurio First", meta: "Risk Management Landing UI" },
  { title: "greekstreetlab", meta: "Web Design Execution" },
  { title: "IMEX Tires", meta: "Interface Layouts" },
  { title: "Visual Assets", meta: "Corporate Logo System & Media Graphics" },
];

export default function Gallery() {
  return (
    <section className="px-8 py-24 border-t border-white/5">
      <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-16">
        Other Work
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-black p-6 flex flex-col gap-4 hover:bg-white/[0.02] transition-colors duration-500"
          >
            <div className="w-full aspect-video bg-white/[0.03] border border-white/5 rounded-sm" />
            <div>
              <p className="text-white text-sm tracking-wide">{item.title}</p>
              <p className="text-white/30 text-xs tracking-wider mt-1">{item.meta}</p>
            </div>
          </div>
        ))}
        {/* Fill last cell to keep grid balanced on lg */}
        <div className="bg-black hidden lg:flex items-center justify-center p-6 border-0">
          <span className="text-white/10 text-xs tracking-widest uppercase">
            More Coming
          </span>
        </div>
      </div>
    </section>
  );
}
