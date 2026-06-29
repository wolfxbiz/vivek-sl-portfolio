'use client'

import { useEffect, useState } from 'react'

export default function ReadingModeToggle({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('post-reading-mode')
    if (saved === 'dark') setDark(true)
    setMounted(true)
  }, [])

  function toggle() {
    const next = !dark
    setDark(next)
    localStorage.setItem('post-reading-mode', next ? 'dark' : 'light')
  }

  return (
    <div
      className="transition-colors duration-300 rounded-2xl relative"
      style={{
        backgroundColor: dark ? '#0a0a0a' : '#ffffff',
        color: dark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.6)',
      }}
    >
      {/* Toggle */}
      {mounted && (
        <button
          onClick={toggle}
          aria-label="Toggle reading mode"
          title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            backgroundColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
            color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)',
          }}
        >
          {dark ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
      )}

      {children}
    </div>
  )
}
