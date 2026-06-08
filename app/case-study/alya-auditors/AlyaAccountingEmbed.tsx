// Full accounting.alyaauditors.com page recreation — used inside the sticky scroll browser

import { ArrowUpRight } from "lucide-react";

const AlyaAccountingEmbed = () => (
  <div className="alya-embed" style={{ fontFamily: "'PP Neue Montreal','Manrope','Inter',sans-serif", background: "#fff" }}>

    {/* ── Hero ── */}
    <section className="relative bg-white flex flex-col" style={{ minHeight: 520 }}>
      {/* Text content */}
      <div className="relative z-20 flex flex-1 items-center" style={{ minHeight: 520 }}>
        <div style={{ width: "52%", padding: "48px 0 48px 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ height: 1, width: 32, background: "#7FFA7B" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#021F4B" }}>UAE Compliance Experts</span>
          </div>
          <h1 style={{ fontSize: 72, fontWeight: 900, color: "#021F4B", letterSpacing: "-0.04em", lineHeight: 0.95, marginBottom: 28 }}>
            Avoid Penalties.<br />
            <span style={{ color: "rgba(2,31,75,0.18)" }}>Gain Clarity.</span>
          </h1>
          <p style={{ fontSize: 14, color: "#5A7090", lineHeight: 1.65, maxWidth: 340, marginBottom: 32 }}>
            Expert auditing, VAT compliance, and accounting for UAE businesses that can't afford mistakes.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
            <a
              href="https://accounting.alyaauditors.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#7FFA7B", color: "#021F4B", fontSize: 13, fontWeight: 700, padding: "12px 24px", borderRadius: 9999, textDecoration: "none" }}
            >
              Get Started
              <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(2,31,75,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ArrowUpRight style={{ width: 12, height: 12 }} />
              </span>
            </a>
            <a href="https://accounting.alyaauditors.com" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #C8DAF2", color: "rgba(2,31,75,0.6)", fontSize: 13, fontWeight: 500, padding: "12px 24px", borderRadius: 9999, textDecoration: "none" }}>
              Explore Services
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 13 }}>
            {[{ val: "17+", label: "Years" }, { val: "3,000+", label: "Clients" }, { val: "30+", label: "Experts" }].map(({ val, label }, i) => (
              <span key={val} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {i > 0 && <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C8DAF2", display: "inline-block" }} />}
                <span style={{ fontWeight: 700, color: "#021F4B" }}>{val}</span>
                <span style={{ color: "#5A7090" }}>{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop mascot — right side */}
      <div style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "100%", pointerEvents: "none" }} aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/alya-hero-mascot.jpeg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 10%", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, white 0%, rgba(255,255,255,0.7) 18%, rgba(255,255,255,0.1) 42%, transparent 62%), linear-gradient(to top, white 0%, transparent 10%)" }} />
      </div>
    </section>

    {/* ── Client logos strip ── */}
    <div style={{ borderTop: "1px solid #C8DAF2", borderBottom: "1px solid #C8DAF2", padding: "18px 48px", display: "flex", alignItems: "center", gap: 40, background: "#F4F8FD", overflowX: "hidden" }}>
      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5A7090", whiteSpace: "nowrap", flexShrink: 0 }}>Trusted by</span>
      {["DMCC", "DED", "DIFC", "Amazon.ae", "Shopify", "Noon", "Stripe"].map((logo) => (
        <span key={logo} style={{ fontSize: 12, fontWeight: 700, color: "rgba(2,31,75,0.35)", whiteSpace: "nowrap", letterSpacing: "0.04em" }}>{logo}</span>
      ))}
    </div>

    {/* ── Stats section ── */}
    <div style={{ background: "#021F4B", padding: "52px 48px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
      {[
        { val: "17+", label: "Years of Experience" },
        { val: "3,000+", label: "Businesses Served" },
        { val: "99.99%", label: "Accuracy Rate" },
        { val: "Free", label: "Audit Readiness Check" },
      ].map(({ val, label }, i) => (
        <div key={val} style={{ padding: "0 28px", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
          <p style={{ fontSize: 40, fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>{val}</p>
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</p>
        </div>
      ))}
    </div>

    {/* ── Services ── */}
    <div style={{ padding: "60px 48px", background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div style={{ width: 24, height: 1.5, background: "#7FFA7B" }} />
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5A7090" }}>Our Services</span>
      </div>
      <h2 style={{ fontSize: 36, fontWeight: 800, color: "#021F4B", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 40 }}>
        Everything your business needs<br />to stay compliant.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "#C8DAF2" }}>
        {[
          { icon: "✓", title: "Statutory Audit", desc: "IFRS-compliant audit reports accepted by all UAE free zones and mainland authorities." },
          { icon: "✓", title: "VAT Filing & Advisory", desc: "Accurate, on-time VAT returns. We handle FTA correspondence and penalty disputes." },
          { icon: "✓", title: "Corporate Tax", desc: "CT registration, annual filing, and transfer pricing guidance for UAE businesses." },
          { icon: "✓", title: "Accounting", desc: "Monthly bookkeeping, MIS reporting, and payroll — all handled under one roof." },
          { icon: "✓", title: "Business Setup", desc: "Company formation across mainland, DMCC, DIFC, and all major free zones." },
          { icon: "✓", title: "CFO Advisory", desc: "Board-level financial strategy and investor reporting for growth-stage companies." },
        ].map(({ icon, title, desc }) => (
          <div key={title} style={{ background: "#fff", padding: "28px 24px" }}>
            <div style={{ width: 28, height: 28, background: "rgba(127,250,123,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <span style={{ color: "#021F4B", fontSize: 14, fontWeight: 700 }}>{icon}</span>
            </div>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#021F4B", marginBottom: 8 }}>{title}</p>
            <p style={{ fontSize: 12, color: "#5A7090", lineHeight: 1.6 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ── Audit Checker teaser ── */}
    <div style={{ background: "#F4F8FD", padding: "60px 48px", borderTop: "1px solid #C8DAF2" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div style={{ width: 24, height: 1.5, background: "#7FFA7B" }} />
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5A7090" }}>Free Tool</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#021F4B", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 16 }}>
            Is your business audit-ready?<br />
            <span style={{ color: "#7FFA7B" }}>Find out in 2 minutes.</span>
          </h2>
          <p style={{ fontSize: 14, color: "#5A7090", lineHeight: 1.7, marginBottom: 28 }}>
            Answer 8 questions about your current compliance posture. Get an instant 0–100 readiness score, gap cards for every failed area, and a personalised action plan — free, no sign-up required.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#7FFA7B", padding: "12px 22px", cursor: "default" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#021F4B" }}>Check Audit Readiness →</span>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #C8DAF2", padding: "28px" }}>
          <div style={{ height: 4, background: "#EDF3FB", marginBottom: 24 }}>
            <div style={{ width: "37.5%", height: "100%", background: "#7FFA7B" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#5A7090", textTransform: "uppercase", letterSpacing: "0.1em" }}>Question 3 of 8</span>
            <div style={{ display: "flex", gap: 3 }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} style={{ width: i === 2 ? 12 : 5, height: 5, background: i < 2 ? "#7FFA7B" : i === 2 ? "#021F4B" : "#C8DAF2", borderRadius: 2 }} />
              ))}
            </div>
          </div>
          <p style={{ fontSize: 15, fontWeight: 700, color: "#021F4B", marginBottom: 20 }}>How is your bookkeeping currently handled?</p>
          {["Accounting software", "In-house accountant", "Spreadsheets only", "Not maintained"].map((opt, i) => (
            <div key={opt} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", border: `1.5px solid ${i === 0 ? "#021F4B" : "#C8DAF2"}`, background: i === 0 ? "#F0F5FF" : "#fff", marginBottom: 6 }}>
              <div style={{ width: 14, height: 14, borderRadius: "50%", border: `2px solid ${i === 0 ? "#021F4B" : "#C8DAF2"}`, background: i === 0 ? "#021F4B" : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {i === 0 && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#7FFA7B" }} />}
              </div>
              <span style={{ fontSize: 12, fontWeight: i === 0 ? 600 : 400, color: "#021F4B" }}>{opt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── Why ALYA ── */}
    <div style={{ background: "#fff", padding: "60px 48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div style={{ width: 24, height: 1.5, background: "#7FFA7B" }} />
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5A7090" }}>Why ALYA</span>
      </div>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: "#021F4B", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 36 }}>UAE's First AI-Powered Audit Firm</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {[
          { label: "Six Sigma Accuracy", detail: "Every engagement governed by Six Sigma methodology. 99.99% accuracy guarantee, every time." },
          { label: "AI-Enhanced Workflows", detail: "Proprietary AI tools accelerate audit timelines and surface compliance risks faster than manual review." },
          { label: "WhatsApp-First Service", detail: "Direct communication with your dedicated team. No ticket queues, no shared inboxes." },
        ].map(({ label, detail }) => (
          <div key={label} style={{ borderTop: "2px solid #7FFA7B", paddingTop: 20 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#021F4B", marginBottom: 8 }}>{label}</p>
            <p style={{ fontSize: 12, color: "#5A7090", lineHeight: 1.6 }}>{detail}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ── CTA footer ── */}
    <div style={{ background: "#021F4B", padding: "52px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <p style={{ fontSize: 24, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 6 }}>Ready to close your compliance gaps?</p>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Get a personalised audit readiness report — free, instant, no sign-up required.</p>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#7FFA7B", padding: "14px 24px", cursor: "default", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#021F4B" }}>⊙ Check Audit Readiness →</span>
      </div>
    </div>

  </div>
);

export default AlyaAccountingEmbed;
