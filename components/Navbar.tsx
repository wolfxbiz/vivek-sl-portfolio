'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b transition-all duration-500 ${
      scrolled
        ? 'bg-white border-neutral-100'
        : 'bg-black border-white/10'
    }`}>
      <span className={`text-sm tracking-widest transition-colors duration-500 ${scrolled ? 'text-black' : 'text-white'}`}>
        vivek s l
      </span>
      <div className="flex items-center gap-8">
        <Link
          href="/work"
          className={`text-sm tracking-wider transition-colors duration-500 ${scrolled ? 'text-neutral-400 hover:text-black' : 'text-white/50 hover:text-white'}`}
        >
          Work
        </Link>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm tracking-wider transition-colors duration-500 ${scrolled ? 'text-neutral-400 hover:text-black' : 'text-white/50 hover:text-white'}`}
        >
          LinkedIn
        </a>
        <a
          href="mailto:vivekshajilekha@gmail.com"
          className={`text-sm tracking-wider transition-colors duration-500 ${scrolled ? 'text-neutral-400 hover:text-black' : 'text-white/50 hover:text-white'}`}
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
    </nav>
  );
}
