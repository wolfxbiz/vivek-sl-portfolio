"use client";

import { useRef, useEffect } from "react";
import AlyaNexusSiteEmbed from "./AlyaNexusSiteEmbed";

export default function AlyaBrowserParallax() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Site content is driven by the first SITE_SCROLL_PX of page scroll.
  // The remaining 100vh of wrapper height is reserved so the Mac UI frame
  // stays sticky while the next card slides up over it.
  const SITE_SCROLL_PX = 1800;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const onScroll = () => {
      const scrolled = Math.max(-wrapper.getBoundingClientRect().top, 0);
      const siteProgress = Math.min(scrolled / SITE_SCROLL_PX, 1);
      content.scrollTop = siteProgress * (content.scrollHeight - content.clientHeight);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Card 1 — slides up naturally over the sticky challenge section
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        zIndex: 10,
        height: "calc(200vh + 1800px)",
        borderRadius: "24px 24px 0 0",
        overflow: "clip",
      }}
    >
      {/* Sticky browser frame */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(12px, 3vw, 28px) clamp(16px, 4vw, 40px) 0",
        }}
      >
        {/* Bottom bar: prototype note + live link */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          padding: "10px 24px",
        }}>
          <span style={{ fontSize: 11, color: "#9CA3AF" }}>
            This is a prototype preview of the live site —
          </span>
          <a
            href="https://accounting.alyaauditors.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              fontSize: 11, fontWeight: 600, color: "#021F4B",
              textDecoration: "none",
            }}
          >
            accounting.alyaauditors.com
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        {/* Browser card */}
        <div style={{
          width: "100%",
          maxWidth: 1200,
          borderRadius: "10px 10px 0 0",
          overflow: "hidden",
          border: "1px solid #e5e7eb",
        }}>
          {/* Chrome bar — macOS light style */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 16px",
            background: "#f5f5f5",
            borderBottom: "1px solid #e5e7eb",
          }}>
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fc615d" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fdbc40" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#34c749" }} />
            </div>
            <div style={{
              flex: 1,
              height: 24,
              background: "#fff",
              borderRadius: 5,
              border: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
            }}>
              <span style={{ fontSize: 11, color: "#9CA3AF" }}>alyaauditors.com</span>
            </div>
          </div>

          {/* Site content — scroll driven by outer page scroll */}
          <div
            ref={contentRef}
            style={{
              height: "calc(100vh - 106px)",
              overflowY: "scroll",
              overflowX: "hidden",
              pointerEvents: "none",
              userSelect: "none",
              scrollbarWidth: "none",
            }}
          >
            <AlyaNexusSiteEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}
