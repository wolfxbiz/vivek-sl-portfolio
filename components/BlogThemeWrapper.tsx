'use client'

import { useEffect, useState } from 'react'

export default function BlogThemeWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('blog-theme') as 'dark' | 'light' | null
    if (saved) setTheme(saved)
    setMounted(true)
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('blog-theme', next)
  }

  const dark = theme === 'dark'

  return (
    <div
      className={`${dark ? 'bg-black' : 'bg-white'} min-h-screen transition-colors duration-300`}
      style={{
        '--blog-text': dark ? '#ffffff' : '#0a0a0a',
        '--blog-text-muted': dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
        '--blog-text-faint': dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.25)',
        '--blog-border': dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
        '--blog-card-bg': dark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
        '--blog-card-hover': dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
        '--blog-divider': dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        '--blog-grid-gap': dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
      } as React.CSSProperties}
    >
      {dark && (
        <>
          <div className="fixed inset-0 [background-size:20px_20px] [background-image:radial-gradient(#404040_1px,transparent_1px)] pointer-events-none" style={{ zIndex: 0 }} />
          <div className="fixed inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] pointer-events-none" style={{ zIndex: 0 }} />
        </>
      )}

      {mounted && (
        <button
          onClick={toggle}
          aria-label="Toggle reading theme"
          className={`fixed top-6 right-6 z-50 px-3 py-1.5 rounded-full border text-[9px] tracking-[0.3em] uppercase transition-all duration-200 backdrop-blur-sm ${
            dark
              ? 'border-white/15 text-white/40 hover:border-white/40 hover:text-white/70 bg-black/50'
              : 'border-black/15 text-black/40 hover:border-black/40 hover:text-black/70 bg-white/50'
          }`}
        >
          {dark ? '☀ Light' : '◑ Dark'}
        </button>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  )
}
