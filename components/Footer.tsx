export default function Footer() {
  return (
    <footer className="px-8 py-20 border-t border-white/5">
      <div className="max-w-3xl mb-16">
        <p className="text-white text-2xl md:text-3xl leading-snug tracking-tight">
          Bridging the gap between disciplined interface design, business
          metrics, and production code. Let&apos;s build something efficient.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex gap-8">
          <a
            href="mailto:cristusventures@gmail.com"
            className="text-white/40 text-xs tracking-wider hover:text-white transition-colors duration-300 uppercase"
          >
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-xs tracking-wider hover:text-white transition-colors duration-300 uppercase"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-white/20 text-xs tracking-wider">
          © {new Date().getFullYear()} VIVEK S L
        </p>
      </div>
    </footer>
  );
}
