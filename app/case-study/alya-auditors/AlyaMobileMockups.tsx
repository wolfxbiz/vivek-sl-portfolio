// Static phone mockups showing 3 screens from the ALYA accounting landing page

const PhoneFrame = ({
  label,
  tilt = 0,
  children,
}: {
  label: string;
  tilt?: number;
  children: React.ReactNode;
}) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, transform: `rotate(${tilt}deg)` }}>
    {/* Phone chassis */}
    <div style={{
      width: 248,
      background: "#1a1a1a",
      borderRadius: 44,
      padding: 9,
      boxShadow: "0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.06)",
    }}>
      {/* Side buttons (decorative) */}
      <div style={{
        background: "#fff",
        borderRadius: 36,
        overflow: "hidden",
        height: 500,
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Status bar */}
        <div style={{
          flexShrink: 0,
          height: 44,
          background: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 22px",
          position: "relative",
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#021F4B" }}>9:41</span>
          {/* Dynamic island */}
          <div style={{
            position: "absolute", top: 10, left: "50%",
            transform: "translateX(-50%)",
            width: 96, height: 26,
            background: "#1a1a1a", borderRadius: 13,
          }} />
          {/* Battery */}
          <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <div style={{ display: "flex", gap: 2 }}>
              {[1, 1, 0.5].map((h, i) => (
                <div key={i} style={{ width: 3, height: 10 * h, background: "#021F4B", borderRadius: 1.5, opacity: 0.7, alignSelf: "flex-end" }} />
              ))}
            </div>
            <div style={{ width: 14, height: 8, border: "1.5px solid rgba(2,31,75,0.5)", borderRadius: 2, position: "relative" }}>
              <div style={{ position: "absolute", inset: "1px 2px", background: "#021F4B", borderRadius: 1 }} />
              <div style={{ position: "absolute", right: -3, top: "20%", width: 2, height: "60%", background: "rgba(2,31,75,0.5)", borderRadius: 1 }} />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          {children}
        </div>

        {/* Home bar */}
        <div style={{ flexShrink: 0, height: 28, background: "#fff", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 96, height: 4, background: "#e5e7eb", borderRadius: 2 }} />
        </div>
      </div>
    </div>

    {/* Label */}
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#5A7090", textAlign: "center" }}>{label}</p>
  </div>
);

// ── Phone 1: Landing Page Hero ─────────────────────────────────────────────────

const LandingScreen = () => (
  <div style={{ height: "100%", background: "#fff", overflowY: "hidden" }}>
    {/* Navbar */}
    <div style={{ padding: "10px 16px", borderBottom: "1px solid #C8DAF2", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ fontSize: 13, fontWeight: 800, color: "#021F4B", letterSpacing: "-0.04em" }}>ALYA</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
        <div style={{ width: 18, height: 1.5, background: "#021F4B", borderRadius: 1 }} />
        <div style={{ width: 13, height: 1.5, background: "#021F4B", borderRadius: 1 }} />
        <div style={{ width: 18, height: 1.5, background: "#021F4B", borderRadius: 1 }} />
      </div>
    </div>

    {/* Hero image */}
    <div style={{ height: 168, position: "relative", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/alya-hero-mascot.jpeg"
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 5%", display: "block" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, white 0%, transparent 55%)" }} />
    </div>

    {/* Hero text */}
    <div style={{ padding: "4px 16px 14px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
        <div style={{ height: 1, width: 12, background: "#7FFA7B" }} />
        <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#5A7090" }}>UAE Compliance Experts</span>
      </div>
      <div style={{ fontSize: 26, fontWeight: 900, color: "#021F4B", letterSpacing: "-0.04em", lineHeight: 0.92, marginBottom: 8 }}>
        Avoid<br />Penalties.<br />
        <span style={{ color: "rgba(2,31,75,0.18)" }}>Gain Clarity.</span>
      </div>
      <p style={{ fontSize: 10, color: "#5A7090", lineHeight: 1.55, marginBottom: 12 }}>
        Expert auditing, VAT compliance, and accounting for UAE businesses.
      </p>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#7FFA7B", padding: "9px 16px", borderRadius: 9999, marginBottom: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: "#021F4B" }}>Get Started ↗</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {[{ val: "17+", label: "Years" }, { val: "3k+", label: "Clients" }, { val: "30+", label: "Experts" }].map(({ val, label }, i) => (
          <span key={val} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {i > 0 && <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#C8DAF2", display: "inline-block" }} />}
            <span style={{ fontSize: 10, fontWeight: 700, color: "#021F4B" }}>{val}</span>
            <span style={{ fontSize: 10, color: "#5A7090" }}>{label}</span>
          </span>
        ))}
      </div>
    </div>
  </div>
);

// ── Phone 2: Checker Question ──────────────────────────────────────────────────

const CheckerScreen = () => (
  <div style={{ height: "100%", background: "#fff", overflowY: "hidden" }}>
    {/* Progress */}
    <div style={{ height: 3, background: "#EDF3FB" }}>
      <div style={{ width: "37.5%", height: "100%", background: "#7FFA7B" }} />
    </div>

    <div style={{ padding: "14px 16px" }}>
      {/* Step indicator */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: "#5A7090", textTransform: "uppercase", letterSpacing: "0.1em" }}>Q3 of 8</span>
        <div style={{ display: "flex", gap: 3 }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{
              width: i === 2 ? 10 : 4, height: 4,
              background: i < 2 ? "#7FFA7B" : i === 2 ? "#021F4B" : "#C8DAF2",
              borderRadius: 2,
            }} />
          ))}
        </div>
      </div>

      <div style={{ fontSize: 14, fontWeight: 700, color: "#021F4B", letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: 4 }}>
        How is your bookkeeping currently handled?
      </div>
      <p style={{ fontSize: 10, color: "#5A7090", lineHeight: 1.5, marginBottom: 12 }}>
        Inadequate bookkeeping is the #1 reason audits fail in the UAE.
      </p>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
        {[
          { label: "Accounting software", detail: "Best practice", selected: true },
          { label: "In-house accountant", detail: "Acceptable", selected: false },
          { label: "Spreadsheets only", detail: "High risk", selected: false },
          { label: "Not maintained", detail: "Critical gap", selected: false },
        ].map((opt) => (
          <div key={opt.label} style={{
            display: "flex", alignItems: "flex-start", gap: 8, padding: "8px 10px",
            border: `1.5px solid ${opt.selected ? "#021F4B" : "#C8DAF2"}`,
            background: opt.selected ? "#F0F5FF" : "#fff",
          }}>
            <div style={{
              width: 14, height: 14, borderRadius: "50%",
              border: `1.5px solid ${opt.selected ? "#021F4B" : "#C8DAF2"}`,
              background: opt.selected ? "#021F4B" : "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, marginTop: 1,
            }}>
              {opt.selected && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#7FFA7B" }} />}
            </div>
            <div>
              <p style={{ fontSize: 10, fontWeight: 600, color: "#021F4B" }}>{opt.label}</p>
              <p style={{ fontSize: 9, color: "#5A7090" }}>{opt.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 10, fontWeight: 600, color: "#5A7090" }}>← Previous</span>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#7FFA7B", padding: "8px 14px" }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#021F4B" }}>Next →</span>
        </div>
      </div>
    </div>
  </div>
);

// ── Phone 3: Score Results ─────────────────────────────────────────────────────

const ResultsPhoneScreen = () => {
  const r = 40;
  const c = 2 * Math.PI * r;
  const off = c - 0.65 * c;

  return (
    <div style={{ height: "100%", background: "#F4F8FD", overflowY: "hidden" }}>
      <div style={{ padding: "14px 16px" }}>

        <p style={{ fontSize: 9, fontWeight: 700, color: "#5A7090", textTransform: "uppercase", letterSpacing: "0.12em", textAlign: "center", marginBottom: 12 }}>
          Your Audit Readiness Score
        </p>

        {/* Score card */}
        <div style={{ background: "#fff", border: "1px solid #C8DAF2", padding: "14px", marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
            <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <svg width={100} height={100} viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={r} fill="none" stroke="#EDF3FB" strokeWidth={6} />
                <circle cx={50} cy={50} r={r} fill="none" stroke="#d97706" strokeWidth={6}
                  strokeDasharray={c} strokeDashoffset={off}
                  strokeLinecap="round"
                  style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                />
              </svg>
              <div style={{ position: "absolute", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: "#021F4B", letterSpacing: "-0.04em", lineHeight: 1 }}>65</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: "#5A7090" }}>/100</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginBottom: 5 }}>
            <span style={{ display: "inline-block", padding: "2px 8px", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", background: "#fef3c7", color: "#d97706" }}>
              Moderate Readiness
            </span>
          </div>
          <p style={{ textAlign: "center", fontSize: 10, color: "#5A7090" }}>2 compliance gaps identified</p>
        </div>

        {/* Gaps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 7, padding: "8px 10px", border: "1px solid #fecaca", background: "#fff5f5" }}>
            <span style={{ fontSize: 13, color: "#dc2626", lineHeight: 1, flexShrink: 0, marginTop: 1 }}>✕</span>
            <div>
              <p style={{ fontSize: 10, fontWeight: 600, color: "#021F4B" }}>Critical — VAT Filing</p>
              <p style={{ fontSize: 9, color: "#5A7090" }}>Delayed returns trigger FTA penalties</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 7, padding: "8px 10px", border: "1px solid #fde68a", background: "#fffbeb" }}>
            <span style={{ fontSize: 13, color: "#d97706", lineHeight: 1, flexShrink: 0, marginTop: 1 }}>⚠</span>
            <div>
              <p style={{ fontSize: 10, fontWeight: 600, color: "#021F4B" }}>Warning — Corp Tax</p>
              <p style={{ fontSize: 9, color: "#5A7090" }}>Registration penalty risk growing</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "#021F4B", padding: "12px 14px" }}>
          <p style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Next Step</p>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Get a gap-closure plan</p>
          <div style={{ display: "inline-flex", alignItems: "center", background: "#7FFA7B", padding: "8px 14px" }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#021F4B" }}>Book Consultation →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main export ────────────────────────────────────────────────────────────────

const AlyaMobileMockups = () => (
  <div className="alya-embed">
    <div style={{ background: "#fff", padding: "4rem 2rem" }}>

      <p className="text-neutral-400 text-[11px] tracking-widest uppercase mb-14 text-center" style={{ fontWeight: 700 }}>
        Mobile Experience — Three Key Screens
      </p>

      {/* Phones container — horizontally scrollable on small screens */}
      <div style={{ overflowX: "auto", paddingBottom: "1rem" }}>
        <div style={{ display: "flex", gap: 48, justifyContent: "center", alignItems: "flex-start", minWidth: 860, paddingTop: 16, paddingBottom: 32 }}>

          <PhoneFrame label="Landing Page Hero" tilt={-3}>
            <LandingScreen />
          </PhoneFrame>

          <PhoneFrame label="Audit Checker Flow" tilt={0}>
            <CheckerScreen />
          </PhoneFrame>

          <PhoneFrame label="Score Results Screen" tilt={3}>
            <ResultsPhoneScreen />
          </PhoneFrame>

        </div>
      </div>
    </div>
  </div>
);

export default AlyaMobileMockups;
