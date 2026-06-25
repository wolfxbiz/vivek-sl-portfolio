'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const hasDarkHero = pathname.startsWith('/case-study/paperwurk');

  useEffect(() => {
    setPastHero(false);
    const check = () => {
      if (hasDarkHero) setPastHero(window.scrollY > 300);
      if (window.scrollY > 50) setOpen(false);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [pathname, hasDarkHero]);

  const showTransparent = hasDarkHero && !pastHero;
  const dark = isHome || showTransparent;

  const navBg = isHome
    ? 'bg-black border-white/10'
    : showTransparent
    ? 'bg-transparent border-transparent'
    : 'bg-white border-neutral-100';

  const textColor = dark ? 'text-white/80 hover:text-white' : 'text-neutral-600 hover:text-black';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b transition-all duration-500 ${navBg}`}>
        <Link
          href="/"
          className={`text-base md:text-sm tracking-widest font-bold transition-colors duration-500 ${dark ? 'text-white' : 'text-black'}`}
        >
          VIVEK S L
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="https://www.linkedin.com/in/viveksl/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm tracking-wider transition-colors duration-500 ${textColor}`}
          >
            LinkedIn
          </a>
          <a
            href="mailto:vivekshajilekha@gmail.com"
            className={`text-sm tracking-wider transition-colors duration-500 ${textColor}`}
          >
            Email
          </a>
          <a
            href="/Vivek_SL_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm tracking-wider px-4 py-1.5 border transition-all duration-500 ${
              dark
                ? 'text-white/80 hover:text-white border-white/50 hover:border-white'
                : 'text-neutral-600 hover:text-black border-neutral-300 hover:border-black'
            }`}
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-5 h-4 flex flex-col justify-between"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-full transition-all duration-300 origin-top-left ${
            dark ? 'bg-white' : 'bg-black'
          } ${open ? 'rotate-45 translate-x-px' : ''}`} />
          <span className={`block h-px w-full transition-all duration-300 ${
            dark ? 'bg-white' : 'bg-black'
          } ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-px w-full transition-all duration-300 origin-bottom-left ${
            dark ? 'bg-white' : 'bg-black'
          } ${open ? '-rotate-45 translate-x-px' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 bg-black flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col gap-10">
          <a
            href="https://www.linkedin.com/in/viveksl/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-white text-5xl tracking-tight hover:text-white/40 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:vivekshajilekha@gmail.com"
            onClick={() => setOpen(false)}
            className="text-white text-5xl tracking-tight hover:text-white/40 transition-colors duration-300"
          >
            Email
          </a>
          <a
            href="/Vivek_SL_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-white text-5xl tracking-tight hover:text-white/40 transition-colors duration-300"
          >
            Resume
          </a>
        </div>
        <p className="absolute bottom-10 left-8 text-white/60 text-sm tracking-widest uppercase">
          VIVEK S L
        </p>
      </div>
    </>
  );
}
