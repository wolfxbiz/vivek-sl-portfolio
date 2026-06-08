// Static 3-panel display of the Audit Readiness Checker — no interactivity

const AlyaCheckerStatic = () => {
  // Score circle for results panel: 65/100, amber (moderate)
  const radius = 50;
  const circ = 2 * Math.PI * radius;
  const offset = circ - 0.65 * circ;

  return (
    <div className="alya-embed">
      <div style={{ background: "#F4F8FD", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>

          {/* Section label */}
          <p className="text-[#5A7090] text-[11px] tracking-widest uppercase mb-6" style={{ fontWeight: 700 }}>
            Checker Flow — 3 Phases
          </p>

          {/* 3-panel grid */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 0, border: "1px solid #C8DAF2" }}>

            {/* ── Panel 1: Intro ── */}
            <div className="border-b border-[#C8DAF2] md:border-b-0 md:border-r" style={{ background: "#fff", padding: "2rem", display: "flex", flexDirection: "column" }}>
              <span className="text-[#5A7090] text-[9px] tracking-widest uppercase mb-5 block" style={{ fontWeight: 700 }}>
                01 — Intro Screen
              </span>

              <div style={{ width: 48, height: 48, background: "rgba(127,250,123,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <svg width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="#021F4B" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className="font-display text-[#021F4B] mb-2" style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.25 }}>
                Is your business ready for a UAE audit?
              </h3>
              <p className="text-[#5A7090] text-[13px] leading-relaxed mb-1">
                Find out in 2 minutes. Our free checker covers all 8 key audit readiness factors.
              </p>
              <p className="text-[12px] mb-5" style={{ color: "rgba(2,31,75,0.3)" }}>Free · Instant · No sign-up required</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
                {[
                  { label: "2 minutes", detail: "to complete" },
                  { label: "8 questions", detail: "all UAE compliance areas" },
                  { label: "Instant score", detail: "with personalised gap report" },
                ].map(({ label, detail }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, background: "#F4F8FD", border: "1px solid #C8DAF2", padding: "8px 12px" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#7FFA7B", flexShrink: 0 }} />
                    <span className="text-[#021F4B] text-[12px]" style={{ fontWeight: 700 }}>{label}</span>
                    <span className="text-[#5A7090] text-[11px]">{detail}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "auto" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#7FFA7B", padding: "10px 20px", cursor: "default" }}>
                  <span className="text-[#021F4B] text-[13px]" style={{ fontWeight: 700 }}>Start the Checker →</span>
                </div>
              </div>
            </div>

            {/* ── Panel 2: Question ── */}
            <div className="border-b border-[#C8DAF2] md:border-b-0 md:border-r" style={{ background: "#fff", display: "flex", flexDirection: "column" }}>
              {/* Progress bar */}
              <div style={{ height: 3, background: "#EDF3FB" }}>
                <div style={{ width: "37.5%", height: "100%", background: "#7FFA7B" }} />
              </div>

              <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <span className="text-[#5A7090] text-[9px] tracking-widest uppercase mb-5 block" style={{ fontWeight: 700 }}>
                  02 — Question Screen
                </span>

                {/* Step counter */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span className="text-[#5A7090] text-[11px] uppercase tracking-widest" style={{ fontWeight: 700 }}>Question 3 of 8</span>
                  <div style={{ display: "flex", gap: 3 }}>
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} style={{
                        width: i === 2 ? 12 : 5, height: 5,
                        background: i < 2 ? "#7FFA7B" : i === 2 ? "#021F4B" : "#C8DAF2",
                        borderRadius: 2,
                      }} />
                    ))}
                  </div>
                </div>

                <h3 className="font-display text-[#021F4B] mb-1" style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                  How is your bookkeeping currently handled?
                </h3>
                <p className="text-[#5A7090] text-[12px] leading-relaxed mb-4">
                  Inadequate bookkeeping is the #1 reason audits fail or are delayed in the UAE.
                </p>

                {/* Options */}
                <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 16, flex: 1 }}>
                  {[
                    { label: "Accounting software (Zoho, Tally, QuickBooks)", detail: "Best practice; audit-ready baseline", selected: true },
                    { label: "In-house accountant (manual or software-aided)", detail: "Acceptable depending on consistency", selected: false },
                    { label: "Spreadsheets only", detail: "High risk — no reliable audit trail", selected: false },
                    { label: "Not maintained consistently", detail: "Critical gap — triggers audit failure", selected: false },
                  ].map((opt) => (
                    <div key={opt.label} style={{
                      display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 12px",
                      border: `2px solid ${opt.selected ? "#021F4B" : "#C8DAF2"}`,
                      background: opt.selected ? "#F0F5FF" : "#fff",
                    }}>
                      <div style={{
                        width: 16, height: 16, borderRadius: "50%",
                        border: `2px solid ${opt.selected ? "#021F4B" : "#C8DAF2"}`,
                        background: opt.selected ? "#021F4B" : "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, marginTop: 2,
                      }}>
                        {opt.selected && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#7FFA7B" }} />}
                      </div>
                      <div>
                        <p className="text-[#021F4B] text-[12px]" style={{ fontWeight: 600 }}>{opt.label}</p>
                        <p className="text-[#5A7090] text-[11px] mt-0.5">{opt.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Nav */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="text-[#5A7090] text-[12px]" style={{ fontWeight: 600 }}>← Previous</span>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#7FFA7B", padding: "8px 16px", cursor: "default" }}>
                    <span className="text-[#021F4B] text-[12px]" style={{ fontWeight: 700 }}>Next question →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Panel 3: Results ── */}
            <div style={{ background: "#fff", display: "flex", flexDirection: "column", padding: "2rem" }}>
              <span className="text-[#5A7090] text-[9px] tracking-widest uppercase mb-5 block" style={{ fontWeight: 700 }}>
                03 — Results Screen
              </span>

              {/* Score circle */}
              <div style={{ textAlign: "center", marginBottom: 16 }}>
                <p className="text-[#5A7090] text-[10px] uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>Your Audit Readiness Score</p>
                <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width={128} height={128} viewBox="0 0 128 128">
                    <circle cx={64} cy={64} r={radius} fill="none" stroke="#EDF3FB" strokeWidth={8} />
                    <circle cx={64} cy={64} r={radius} fill="none" stroke="#d97706" strokeWidth={8}
                      strokeDasharray={circ}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                    />
                  </svg>
                  <div style={{ position: "absolute", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span className="font-display text-[#021F4B]" style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>65</span>
                    <span className="text-[#5A7090]" style={{ fontSize: 11, fontWeight: 600 }}>/100</span>
                  </div>
                </div>

                <div style={{ marginTop: 10, marginBottom: 6 }}>
                  <span style={{ display: "inline-block", padding: "3px 10px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", background: "#fef3c7", color: "#d97706" }}>
                    Moderate Readiness
                  </span>
                </div>
                <p className="text-[#5A7090] text-[12px]">2 compliance gaps identified</p>
              </div>

              {/* Gap cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 14, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 12px", border: "1px solid #fecaca", background: "#fff5f5" }}>
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                    <circle cx={12} cy={12} r={10} />
                    <line x1={15} y1={9} x2={9} y2={15} />
                    <line x1={9} y1={9} x2={15} y2={15} />
                  </svg>
                  <div>
                    <p className="text-[#021F4B] text-[12px]" style={{ fontWeight: 600 }}>Critical — VAT Registration & Filing</p>
                    <p className="text-[#5A7090] text-[11px] mt-0.5">Delayed returns trigger FTA penalties and complicate auditor sign-off.</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 12px", border: "1px solid #fde68a", background: "#fffbeb" }}>
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    <line x1={12} y1={9} x2={12} y2={13} />
                    <line x1={12} y1={17} x2={12.01} y2={17} />
                  </svg>
                  <div>
                    <p className="text-[#021F4B] text-[12px]" style={{ fontWeight: 600 }}>Warning — Corporate Tax (CT)</p>
                    <p className="text-[#5A7090] text-[11px] mt-0.5">UAE CT is now in effect. Unregistered businesses face back-tax assessments.</p>
                  </div>
                </div>
              </div>

              {/* CTA block */}
              <div style={{ background: "#021F4B", padding: "16px" }}>
                <p className="text-[9px] tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>Recommended Next Step</p>
                <p className="font-display text-white mb-2" style={{ fontSize: 15, fontWeight: 800 }}>Get a gap-closure plan</p>
                <p className="text-[12px] mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>You're partway there. Our team will prioritise what needs fixing.</p>
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#7FFA7B", padding: "8px 14px", cursor: "default" }}>
                    <span className="text-[#021F4B] text-[11px]" style={{ fontWeight: 700 }}>Book Consultation</span>
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid rgba(255,255,255,0.2)", padding: "8px 14px", cursor: "default" }}>
                    <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>Get Report</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AlyaCheckerStatic;
