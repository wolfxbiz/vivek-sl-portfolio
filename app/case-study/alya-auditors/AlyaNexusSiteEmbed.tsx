// Static recreation of alyaauditors.com — pixel-matched to the live site

const WhatsAppCircle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const AlyaNexusSiteEmbed = () => (
  <div className="alya-embed" style={{ fontFamily: "'Inter','PP Neue Montreal',sans-serif", background: "#fff", minWidth: 900 }}>

    {/* ── Announcement bar ── */}
    <div style={{ background: "#021F4B", padding: "8px 0", display: "flex", alignItems: "center", justifyContent: "center", gap: 40 }}>
      {[
        { icon: "⚡", text: "UAE's First AI-Powered Audit Firm" },
        { icon: "🏆", text: "30+ Years of Industry Experience" },
        { icon: "📊", text: "Six Sigma-Driven Processes" },
        { icon: "👥", text: "3,000+ Businesses Served" },
      ].map(({ icon, text }) => (
        <div key={text} style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
          <span style={{ fontSize: 11 }}>{icon}</span>
          <span style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.78)", whiteSpace: "nowrap", letterSpacing: "0.01em" }}>{text}</span>
        </div>
      ))}
    </div>

    {/* ── Navbar ── */}
    <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, gap: 24 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/alya-logo-full.png" alt="ALYA Nexus Auditing" style={{ height: 38, width: "auto", display: "block", flexShrink: 0 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 28, flex: 1, justifyContent: "center" }}>
        {["Services", "Why ALYA", "Industries", "FAQ"].map((label) => (
          <span key={label} style={{ fontSize: 13, fontWeight: 500, color: "#374151", cursor: "default", whiteSpace: "nowrap" }}>{label}</span>
        ))}
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#7FFA7B", padding: "10px 18px", borderRadius: 9999, cursor: "default", flexShrink: 0 }}>
        <WhatsAppCircle />
        <span style={{ fontSize: 12, fontWeight: 700, color: "#021F4B", whiteSpace: "nowrap" }}>Get Free Consultation</span>
      </div>
    </div>

    {/* ── Hero ── */}
    <div style={{ background: "#fff", padding: "52px 32px 44px", display: "grid", gridTemplateColumns: "1fr 220px", gap: 48, alignItems: "start" }}>
      {/* Left */}
      <div>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
          <div style={{ width: 28, height: 1.5, background: "#7FFA7B", flexShrink: 0 }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5A7090" }}>UAE's Trusted Accounting & Auditing Partner</span>
        </div>

        {/* Heading */}
        <div style={{ fontSize: 56, fontWeight: 900, color: "#021F4B", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 22 }}>
          Accurate.{" "}
          <span style={{ color: "#7FFA7B" }}>Compliant.</span>
          <br />Growth-Focused.
        </div>

        {/* Body */}
        <p style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.7, marginBottom: 28, maxWidth: 560 }}>
          Recognized as the UAE's first AI-powered audit firm, ALYA Auditors helps businesses stay compliant, improve financial transparency, and make confident decisions — with 30+ years of expertise and Six Sigma-driven processes delivering 99.99% accuracy.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#7FFA7B", padding: "13px 22px", cursor: "default" }}>
            <WhatsAppCircle />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#021F4B" }}>Request a Free Consultation</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid #D1D5DB", padding: "12.5px 22px", cursor: "default" }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#021F4B" }}>Check Audit Readiness →</span>
          </div>
        </div>

        {/* Service chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Audit & Assurance", "VAT & Tax", "Accounting", "Business Setup", "CFO Advisory"].map((chip) => (
            <div key={chip} style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid #D1D5DB", padding: "5px 12px", borderRadius: 4, cursor: "default" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7FFA7B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="8 12 11 15 16 9" />
              </svg>
              <span style={{ fontSize: 12, fontWeight: 500, color: "#021F4B" }}>{chip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Client rating */}
      <div style={{ border: "1px solid #e5e7eb", padding: "28px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 12 }}>Client Rating</p>
        <p style={{ fontSize: 80, fontWeight: 900, color: "#021F4B", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: 10 }}>4.9</p>
        <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ fontSize: 20, color: "#FBBF24" }}>★</span>
          ))}
        </div>
        {/* Google wordmark */}
        <p style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 5 }}>
          <span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span><span style={{ color: "#FBBC05" }}>o</span><span style={{ color: "#4285F4" }}>g</span><span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span>
        </p>
        <p style={{ fontSize: 11, color: "#9CA3AF" }}>150+ verified reviews</p>
      </div>
    </div>

    {/* ── Businesswoman photo ── */}
    <div style={{ height: 340, position: "relative", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/alya-businesswoman.jpg"
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", display: "block" }}
      />
    </div>

    {/* ── Stats bar ── */}
    <div style={{ background: "#021F4B", padding: "40px 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
      {[
        { val: "30+", label: "Years of Experience" },
        { val: "3,000+", label: "Businesses Served" },
        { val: "99.99%", label: "Accuracy Rate" },
        { val: "150+", label: "Google Reviews" },
      ].map(({ val, label }, i) => (
        <div key={val} style={{ padding: "0 24px", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
          <p style={{ fontSize: 34, fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 5 }}>{val}</p>
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</p>
        </div>
      ))}
    </div>

    {/* ── Services grid ── */}
    <div style={{ background: "#fff", padding: "56px 32px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div style={{ width: 24, height: 1.5, background: "#7FFA7B" }} />
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5A7090" }}>Our Services</span>
      </div>
      <p style={{ fontSize: 32, fontWeight: 800, color: "#021F4B", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 36 }}>End-to-End Financial Compliance</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "#e5e7eb" }}>
        {[
          { title: "Audit & Assurance", desc: "IFRS-compliant statutory, internal, and external audit services accepted by all UAE authorities." },
          { title: "VAT & Tax Advisory", desc: "Accurate VAT registration, return filing, and full FTA compliance and penalty resolution support." },
          { title: "Corporate Tax", desc: "CT registration, annual filing, and transfer pricing documentation for all UAE business structures." },
          { title: "Accounting", desc: "Monthly outsourced bookkeeping with MIS reporting and a 99.99% accuracy guarantee." },
          { title: "Business Setup", desc: "End-to-end company formation across mainland, DMCC, DIFC, and all major free zones." },
          { title: "CFO Advisory", desc: "Strategic financial leadership and board-level reporting for growth-stage businesses." },
        ].map(({ title, desc }) => (
          <div key={title} style={{ background: "#fff", padding: "26px 22px" }}>
            <div style={{ width: 28, height: 28, background: "rgba(127,250,123,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#021F4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#021F4B", marginBottom: 7 }}>{title}</p>
            <p style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.6 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ── Why ALYA ── */}
    <div style={{ background: "#F9FAFB", borderTop: "1px solid #e5e7eb", padding: "56px 32px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div style={{ width: 24, height: 1.5, background: "#7FFA7B" }} />
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5A7090" }}>Why ALYA</span>
      </div>
      <p style={{ fontSize: 32, fontWeight: 800, color: "#021F4B", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 36 }}>Built for UAE Compliance, Not Generic Accounting</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {[
          { label: "AI-Powered Audit Firm", detail: "The UAE's first firm to embed AI into audit workflows — faster timelines and more accurate results." },
          { label: "Six Sigma Accuracy", detail: "Every engagement governed by Six Sigma methodology, delivering 99.99% accuracy consistently." },
          { label: "Dedicated Client Teams", detail: "Each client gets a named relationship manager and dedicated team — not a shared inbox." },
        ].map(({ label, detail }) => (
          <div key={label} style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "22px" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#021F4B", marginBottom: 8 }}>{label}</p>
            <p style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.6 }}>{detail}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ── CTA footer ── */}
    <div style={{ background: "#021F4B", padding: "52px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
      <div>
        <p style={{ fontSize: 24, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 6 }}>Ready to close your compliance gaps?</p>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>Free audit readiness report — instant, no sign-up required.</p>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#7FFA7B", padding: "14px 24px", cursor: "default", flexShrink: 0, borderRadius: 4 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#021F4B", whiteSpace: "nowrap" }}>⊙ Check Audit Readiness →</span>
      </div>
    </div>

    {/* ── Floating sticky pill (bottom-right) ── */}
    <div style={{ position: "sticky", bottom: 16, display: "flex", justifyContent: "flex-end", padding: "0 20px", pointerEvents: "none" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#7FFA7B", padding: "10px 18px", borderRadius: 9999, pointerEvents: "none" }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#021F4B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="8 12 11 15 16 9" />
        </svg>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#021F4B", whiteSpace: "nowrap" }}>Check your audit readiness →</span>
      </div>
    </div>

  </div>
);

export default AlyaNexusSiteEmbed;
