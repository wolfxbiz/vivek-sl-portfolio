'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HoverBorderGradient } from './ui/hover-border-gradient';

export default function Navbar() {
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isBlogListing = pathname === '/blog';
  const isBlogPost = pathname.startsWith('/blog/');
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
  const dark = isHome || isBlogListing || showTransparent;

  const navBg = isHome || isBlogListing
    ? 'bg-black border-white/10'
    : isBlogPost
    ? 'bg-white border-neutral-100'
    : showTransparent
    ? 'bg-transparent border-transparent'
    : 'bg-white border-neutral-100';

  const textColor = dark ? 'text-white/80 hover:text-white' : 'text-neutral-600 hover:text-black';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-30 lg:px-60 py-5 border-b transition-all duration-500 ${navBg}`}>
        <Link
          href="/"
          className={`text-base md:text-sm tracking-widest font-black transition-colors duration-500 ${dark ? 'text-white' : 'text-black'}`}
        >
          VIVEK S L
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/viveksl/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm tracking-wider transition-colors duration-500 px-3 ${textColor}`}
          >
            LinkedIn
          </a>
          <a
            href="mailto:vivekshajilekha@gmail.com"
            className={`text-sm tracking-wider transition-colors duration-500 px-3 ${textColor}`}
          >
            Email
          </a>
          <HoverBorderGradient
            as="a"
            href="/Vivek_SL_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant={dark ? 'dark' : 'light'}
            className={`text-sm tracking-wide ${dark ? 'text-white' : 'text-black'}`}
          >
            Resume
          </HoverBorderGradient>
          <HoverBorderGradient
            as="a"
            href="https://wa.me/918921284894?text=Hi%20Vivek%2C%20I%27d%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            variant={dark ? 'light' : 'dark'}
            className={`text-sm tracking-wide ${dark ? 'text-black' : 'text-white'}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Let's Chat on WhatsApp
          </HoverBorderGradient>
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
          <a
            href="https://wa.me/918921284894?text=Hi%20Vivek%2C%20I%27d%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-white text-5xl tracking-tight hover:text-white/40 transition-colors duration-300"
          >
            Let's Chat on WhatsApp
          </a>
        </div>
        <p className="absolute bottom-10 left-8 text-white/60 text-sm tracking-widest uppercase">
          VIVEK S L
        </p>
      </div>
    </>
  );
}
