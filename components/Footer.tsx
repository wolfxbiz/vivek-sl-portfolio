import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black">

      {/* ── Big CTA ── */}
      <div className="px-8 md:px-30 lg:px-60 pt-20 md:pt-28 pb-16">

        <p className="text-white/25 text-[10px] tracking-[0.5em] uppercase mb-10">Get In Touch</p>

        <h2 className="text-white font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase tracking-tight leading-[0.88] mb-16 md:mb-20">
          Open to<br />
          product roles,<br />
          design<br />
          leadership<br />
          <span className="text-[#FF4D00]">&</span> high&#8209;growth<br />
          teams.
        </h2>

        {/* ── Contact rows ── */}
        <div className="flex flex-col border-t border-white/8">
          <a
            href="mailto:vivekshajilekha@gmail.com"
            className="group flex items-center justify-between py-5 border-b border-white/8 hover:border-[#FF4D00]/30 transition-all duration-300"
          >
            <span className="text-white/35 text-[10px] tracking-[0.35em] uppercase group-hover:text-white/60 transition-colors duration-300">
              Email
            </span>
            <span className="text-white/75 text-sm md:text-base tracking-wide group-hover:text-[#FF4D00] transition-colors duration-300">
              vivekshajilekha@gmail.com ↗
            </span>
          </a>
          <a
            href="tel:+918921284894"
            className="group flex items-center justify-between py-5 border-b border-white/8 hover:border-[#FF4D00]/30 transition-all duration-300"
          >
            <span className="text-white/35 text-[10px] tracking-[0.35em] uppercase group-hover:text-white/60 transition-colors duration-300">
              Phone
            </span>
            <span className="text-white/75 text-sm md:text-base tracking-wide group-hover:text-[#FF4D00] transition-colors duration-300">
              +91 8921 284 894 ↗
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/viveksl/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-5 border-b border-white/8 hover:border-[#FF4D00]/30 transition-all duration-300"
          >
            <span className="text-white/35 text-[10px] tracking-[0.35em] uppercase group-hover:text-white/60 transition-colors duration-300">
              LinkedIn
            </span>
            <span className="text-white/75 text-sm md:text-base tracking-wide group-hover:text-[#FF4D00] transition-colors duration-300">
              linkedin.com/in/viveksl ↗
            </span>
          </a>
          <Link
            href="/resume"
            className="group flex items-center justify-between py-5 border-b border-white/8 hover:border-[#FF4D00]/30 transition-all duration-300"
          >
            <span className="text-white/35 text-[10px] tracking-[0.35em] uppercase group-hover:text-white/60 transition-colors duration-300">
              Resume
            </span>
            <span className="text-white/75 text-sm md:text-base tracking-wide group-hover:text-[#FF4D00] transition-colors duration-300">
              Download PDF ↗
            </span>
          </Link>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="px-8 md:px-30 lg:px-60 py-6 border-t border-white/8 flex items-center justify-between">
        <p className="text-white/20 text-[10px] tracking-[0.4em] uppercase">© {new Date().getFullYear()} Vivek S L</p>
        <p className="text-white/20 text-[10px] tracking-[0.4em] uppercase">viveksl.com</p>
      </div>

    </footer>
  );
}
