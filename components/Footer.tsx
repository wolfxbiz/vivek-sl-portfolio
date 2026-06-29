import { HoverBorderGradient } from './ui/hover-border-gradient';
import GlobeSection from './GlobeSection';

export default function Footer() {
  return (
    <footer className="relative bg-black">

      {/* Dot background */}
      <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#404040_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />

      {/* ── Get In Touch ── */}
      <div className="relative z-10 px-8 md:px-30 lg:px-60 pt-20 md:pt-28">

        <p className="text-white/25 text-[10px] tracking-[0.5em] uppercase mb-10">Work With Me</p>

        {/* Two-column: text left, globe right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-0">

          {/* Left: headline + CTA */}
          <div>
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] mb-5">
              Got a product idea,<br />
              a brand to build,<br />
              or a site that<br />
              needs to <span className="text-[#FF4D00]">convert?</span>
            </h2>
            <p className="text-white/40 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
              I work with founders and teams across India, UAE, and beyond — turning ideas into digital experiences that actually perform.
            </p>

            <HoverBorderGradient
              as="a"
              href="https://wa.me/918921284894?text=Hi%20Vivek%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              variant="dark"
              className="text-white text-sm tracking-wide"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Let's Work Together
            </HoverBorderGradient>
          </div>

          {/* Right: Globe */}
          <GlobeSection />
        </div>

      </div>

      {/* ── Minimal contact strip ── */}
      <div className="relative z-10 px-8 md:px-30 lg:px-60 pt-10 pb-10 border-t border-white/[0.08]">

        {/* Icon pills — centred */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">

          <a href="mailto:vivekshajilekha@gmail.com"
             className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/[0.06] transition-all duration-200">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white/60 group-hover:text-white transition-colors duration-200">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
            </svg>
            <span className="text-white/70 text-[11px] tracking-wide group-hover:text-white transition-colors duration-200">vivekshajilekha@gmail.com</span>
          </a>

          <a href="tel:+918921284894"
             className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/[0.06] transition-all duration-200">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white/60 group-hover:text-white transition-colors duration-200">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/>
            </svg>
            <span className="text-white/70 text-[11px] tracking-wide group-hover:text-white transition-colors duration-200">+91 8921 284 894</span>
          </a>

          <a href="https://www.linkedin.com/in/viveksl/" target="_blank" rel="noopener noreferrer"
             className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/[0.06] transition-all duration-200">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-white/60 group-hover:text-white transition-colors duration-200">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-white/70 text-[11px] tracking-wide group-hover:text-white transition-colors duration-200">LinkedIn</span>
          </a>

          <a href="https://www.behance.net/viveksl" target="_blank" rel="noopener noreferrer"
             className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/[0.06] transition-all duration-200">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-white/60 group-hover:text-white transition-colors duration-200">
              <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029zm-5.026-4h4.3c-.269-1.901-1.539-2.165-2.13-2.165-.609 0-1.845.265-2.17 2.165zM6.737 7.658c2.478.133 4.938-.667 4.938-3.486C11.675 1.309 9.375 1 6.737 1H0v18h7.176c3.405 0 5.823-1.418 5.823-4.688 0-2.143-1.35-3.372-3.086-3.841l-.176-.035v-.035l.176-.046c1.214-.322 2.824-1.266 2.824-3.697zM3 4h3.5c1.5 0 2.5.75 2.5 2s-1 2-2.5 2H3V4zm0 12v-5h3.5c1.5 0 3 .75 3 2.5S8 16 6.5 16H3z"/>
            </svg>
            <span className="text-white/70 text-[11px] tracking-wide group-hover:text-white transition-colors duration-200">Behance</span>
          </a>

          <a href="/Vivek_SL_Resume.pdf" target="_blank" rel="noopener noreferrer"
             className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/[0.06] transition-all duration-200">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white/60 group-hover:text-white transition-colors duration-200">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            <span className="text-white/70 text-[11px] tracking-wide group-hover:text-white transition-colors duration-200">Resume</span>
          </a>

        </div>

        {/* Copyright — centred */}
        <p className="text-center text-white/25 text-[9px] tracking-[0.45em] uppercase">© {new Date().getFullYear()} Vivek S L</p>

      </div>

    </footer>
  );
}
