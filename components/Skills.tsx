const capabilities = [
  "Figma",
  "Interface Architecture",
  "Component Libraries",
  "Motion Graphics",
  "Video Editing",
  "Growth Marketing",
  "Claude Code Workflows",
];

export default function Skills() {
  return (
    <section className="px-8 py-24 border-t border-white/5">
      <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-16">
        Capabilities
      </p>
      <div className="flex flex-wrap gap-3">
        {capabilities.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2.5 border border-white/10 text-white/50 text-xs tracking-widest uppercase hover:border-white/30 hover:text-white/80 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
