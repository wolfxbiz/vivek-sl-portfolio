const testimonials = [
  {
    quote:
      "His responsiveness, attention to detail, willingness to accommodate feedback and ability to implement changes efficiently while maintaining project quality and timelines.",
    name: "Krishna Kumar Manmathan",
    role: "Operations Partner",
    company: "ARCO ANGOLA",
  },
  {
    quote:
      "His responsiveness, attentiveness, and ability to quickly turn things around have been truly impressive. We sincerely appreciate the effort that has gone into getting our website up.",
    name: "Sukhdev Singh",
    role: "Director",
    company: "4BC Global",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-black border-t border-white/10 px-8 md:px-30 lg:px-60 py-16 md:py-20">

      <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#404040_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />

      <div className="relative z-10">
        <p className="text-[#FF4D00] text-[10px] tracking-[0.4em] uppercase mb-10">Client Words</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-black p-8 md:p-10 flex flex-col gap-6">
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-white text-sm font-medium">{t.name}</p>
                <p className="text-white/40 text-xs mt-0.5">{t.role} · {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
