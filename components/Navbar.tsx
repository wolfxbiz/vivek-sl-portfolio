'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
      if (window.scrollY > 50) setOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = scrolled ? 'text-neutral-400 hover:text-black' : 'text-white/50 hover:text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b transition-all duration-500 ${
        scrolled ? 'bg-white border-neutral-100' : 'bg-black border-white/10'
      }`}>
        <Link
          href="/"
          className={`text-sm tracking-widest font-bold transition-colors duration-500 ${scrolled ? 'text-black' : 'text-white'}`}
        >
          VIVEK S L
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/work" className={`text-sm tracking-wider transition-colors duration-500 ${textColor}`}>
            Work
          </Link>
          <a
            href="https://linkedin.com"
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
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm tracking-wider px-4 py-1.5 border transition-all duration-500 ${
              scrolled
                ? 'text-neutral-400 hover:text-black border-neutral-200 hover:border-black'
                : 'text-white/50 hover:text-white border-white/20 hover:border-white'
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
            scrolled ? 'bg-black' : 'bg-white'
          } ${open ? 'rotate-45 translate-x-px' : ''}`} />
          <span className={`block h-px w-full transition-all duration-300 ${
            scrolled ? 'bg-black' : 'bg-white'
          } ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-px w-full transition-all duration-300 origin-bottom-left ${
            scrolled ? 'bg-black' : 'bg-white'
          } ${open ? '-rotate-45 translate-x-px' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 bg-black flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col gap-10">
          <Link
            href="/work"
            onClick={() => setOpen(false)}
            className="text-white text-5xl tracking-tight hover:text-white/40 transition-colors duration-300"
          >
            Work
          </Link>
          <a
            href="https://linkedin.com"
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
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-white text-5xl tracking-tight hover:text-white/40 transition-colors duration-300"
          >
            Resume
          </a>
        </div>
        <p className="absolute bottom-10 left-8 text-white/20 text-xs tracking-widest uppercase">
          VIVEK S L
        </p>
      </div>
    </>
  );
}
