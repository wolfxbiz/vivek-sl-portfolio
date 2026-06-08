'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  CheckCircle2, AlertTriangle, XCircle, ChevronRight, ChevronLeft,
  X, Download, ArrowRight, Shield, Clock, AlertCircle,
} from 'lucide-react';

const WA_CONSULT =
  'https://wa.me/971543100334?text=Hi%2C%20I%20completed%20the%20UAE%20Audit%20Readiness%20Checker%20and%20would%20like%20a%20free%20consultation.';

// Inline WhatsApp SVG (avoids cross-project import)
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

interface QuestionOption {
  label: string;
  score: number;
  detail: string;
}

interface Question {
  id: number;
  question: string;
  context: string;
  gapMessage?: string;
  options: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'What is your business entity type?',
    context: 'Different entity types carry different statutory audit obligations under UAE law.',
    options: [
      { label: 'LLC / Mainland company',           score: 2, detail: 'High complexity entity — audit likely required' },
      { label: 'Free zone company',                score: 2, detail: 'Mandatory annual audit in most free zones'      },
      { label: 'Sole establishment / Freelancer',  score: 1, detail: 'VAT and Corporate Tax still apply'             },
      { label: 'Branch of foreign company',        score: 2, detail: 'Statutory audit + parent reporting required'   },
    ],
  },
  {
    id: 2,
    question: 'What is your annual revenue (AED)?',
    context: 'Revenue determines VAT registration, Corporate Tax liability, and mandatory audit thresholds.',
    options: [
      { label: 'Below 375,000',           score: 0, detail: 'Below VAT threshold; lower regulatory burden'       },
      { label: '375,000 – 2,000,000',     score: 1, detail: 'VAT registered; basic CT applicable'               },
      { label: '2,000,000 – 50,000,000',  score: 2, detail: 'Full VAT + CT obligations; audit strongly advisable' },
      { label: 'Above 50,000,000',        score: 2, detail: 'Mandatory audit threshold; immediate urgency'       },
    ],
  },
  {
    id: 3,
    question: 'How is your bookkeeping currently handled?',
    context: 'Inadequate bookkeeping is the #1 reason audits fail or are delayed in the UAE.',
    gapMessage: 'Inconsistent records are the #1 audit failure point. Consider cloud-based accounting software.',
    options: [
      { label: 'Accounting software (Zoho, Tally, QuickBooks) — updated regularly', score: 3, detail: 'Best practice; audit-ready baseline' },
      { label: 'In-house accountant (manual or software-aided)',                     score: 2, detail: 'Acceptable depending on consistency'  },
      { label: 'Spreadsheets only',                                                  score: 1, detail: 'High risk — no reliable audit trail'  },
      { label: 'Not maintained consistently',                                        score: 0, detail: 'Critical gap — triggers audit failure' },
    ],
  },
  {
    id: 4,
    question: 'Have your financial statements been prepared?',
    context: 'Auditors require finalised P&L, balance sheet, and cash flow statements.',
    gapMessage: 'Auditors require finalised P&L, balance sheet, and cash flow statements.',
    options: [
      { label: 'Yes — finalised and filed',   score: 3, detail: 'Fully ready'                     },
      { label: 'Prepared but not yet filed',  score: 2, detail: 'Nearly ready'                    },
      { label: 'In progress',                 score: 1, detail: 'Partial; timeline risk'          },
      { label: 'Not started',                 score: 0, detail: 'Critical gap — immediate action'  },
    ],
  },
  {
    id: 5,
    question: 'What is your VAT registration and filing status?',
    context: 'VAT compliance is reviewed in most financial audits. Missed filings attract FTA penalties.',
    gapMessage: 'Delayed or missing VAT returns trigger FTA penalties and complicate auditor sign-off.',
    options: [
      { label: 'Registered — returns filed on time',         score: 3, detail: 'Fully compliant'          },
      { label: 'Registered — but filings are delayed',       score: 1, detail: 'Risk flagged'             },
      { label: 'Not registered (but revenue qualifies)',      score: 0, detail: 'Critical non-compliance'  },
      { label: 'Not applicable (below threshold / exempt)',   score: 2, detail: 'No gap for this question' },
    ],
  },
  {
    id: 6,
    question: 'How are your supporting documents maintained?',
    context: 'Auditors require invoices, contracts, bank statements, and purchase records.',
    gapMessage: 'Missing invoices, contracts, or bank statements will delay any audit significantly.',
    options: [
      { label: 'Digitally stored and well-organised',   score: 3, detail: 'Audit-ready'                 },
      { label: 'Physical files, reasonably organised',  score: 2, detail: 'Acceptable with minor risk'  },
      { label: 'Mixed — some missing or scattered',     score: 1, detail: 'Moderate gap'                },
      { label: 'Poorly maintained / not tracked',       score: 0, detail: 'Critical gap'                },
    ],
  },
  {
    id: 7,
    question: 'Has your business been previously audited?',
    context: 'First-time audits require significantly more preparation and take longer to complete.',
    gapMessage: 'First-time audits take longer. Early preparation reduces time and cost significantly.',
    options: [
      { label: 'Yes — within the last 12 months', score: 3, detail: 'Established audit readiness'          },
      { label: 'Yes — 1–3 years ago',             score: 2, detail: 'Some preparation needed'             },
      { label: 'More than 3 years ago',           score: 1, detail: 'Significant re-establishment needed' },
      { label: 'Never',                           score: 0, detail: 'First-time audit; max prep required'  },
    ],
  },
  {
    id: 8,
    question: 'What is your UAE Corporate Tax (CT) registration status?',
    context: 'UAE Corporate Tax is in effect for financial years starting on or after 1 June 2023.',
    gapMessage: 'UAE CT is now in effect. Unregistered businesses face penalties and back-tax assessments.',
    options: [
      { label: 'Registered — strategy documented',  score: 3, detail: 'Fully compliant'                   },
      { label: 'Registered — no formal strategy',   score: 2, detail: 'Partially compliant; strategy gap' },
      { label: 'Aware but not yet registered',       score: 1, detail: 'Penalty risk growing'              },
      { label: 'Not addressed yet',                 score: 0, detail: 'Critical — immediate action needed' },
    ],
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────

type Phase = 'intro' | 'questions' | 'results';
type PopupState = 'hidden' | 'open' | 'minimized';
type PopupVariant = 'idle' | 'results';
type Answers = Record<number, number>;

interface BandInfo {
  band: string;
  color: string;
  bgColor: string;
  ctaHeadline: string;
  ctaSub: string;
}

interface Gap {
  area: string;
  message: string;
  severity: 'red' | 'amber';
}

interface LeadForm {
  name: string;
  email: string;
  phone: string;
}

// ─── Score Helpers ─────────────────────────────────────────────────────────────

function getRawScore(answers: Answers): number {
  return Object.entries(answers).reduce((sum, [qi, optIdx]) => {
    return sum + (QUESTIONS[parseInt(qi)]?.options[optIdx]?.score ?? 0);
  }, 0);
}

function getDisplayScore(answers: Answers): number {
  return Math.round((getRawScore(answers) / 20) * 100);
}

function getBand(score: number): BandInfo {
  if (score >= 80) return {
    band: 'High Readiness',
    color: '#16a34a',
    bgColor: '#dcfce7',
    ctaHeadline: 'Lock in your audit appointment',
    ctaSub: 'Strong records detected. Book now to file before your free zone or regulatory deadline.',
  };
  if (score >= 55) return {
    band: 'Moderate Readiness',
    color: '#d97706',
    bgColor: '#fef3c7',
    ctaHeadline: 'Get a gap-closure plan',
    ctaSub: "You're partway there. Our team will prioritise what needs fixing before your audit window.",
  };
  if (score >= 30) return {
    band: 'Low Readiness',
    color: '#dc2626',
    bgColor: '#fee2e2',
    ctaHeadline: 'Act before penalties apply',
    ctaSub: 'Critical gaps detected. Book a call today — our team can fast-track your compliance.',
  };
  return {
    band: 'Not Ready',
    color: '#7f1d1d',
    bgColor: '#fee2e2',
    ctaHeadline: 'Act before penalties apply',
    ctaSub: 'Serious compliance failures detected. Emergency remediation and audit advisory required.',
  };
}

const GAP_QUESTION_INDICES = [2, 3, 4, 5, 6, 7];

function detectGaps(answers: Answers): Gap[] {
  const gaps: Gap[] = [];
  GAP_QUESTION_INDICES.forEach(qi => {
    const optIdx = answers[qi];
    if (optIdx === undefined) return;
    const q = QUESTIONS[qi];
    const score = q.options[optIdx].score;
    if (score >= 2) return;
    gaps.push({
      area: qi === 2 ? 'Bookkeeping'
          : qi === 3 ? 'Financial Statements'
          : qi === 4 ? 'VAT Registration & Filing'
          : qi === 5 ? 'Supporting Documents'
          : qi === 6 ? 'Prior Audit History'
          : 'Corporate Tax (CT)',
      message: q.gapMessage ?? '',
      severity: score === 0 ? 'red' : 'amber',
    });
  });
  return gaps;
}

// ─── Score Circle ──────────────────────────────────────────────────────────────

const ScoreCircle: React.FC<{ score: number; band: BandInfo }> = ({ score, band }) => {
  const [displayed, setDisplayed] = useState(0);
  const radius = 70;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (displayed / 100) * circ;
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let current = 0;
    const tick = () => {
      current = Math.min(current + 2, score);
      setDisplayed(current);
      if (current < score) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [score]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={176} height={176} viewBox="0 0 176 176" aria-hidden="true">
        <circle cx={88} cy={88} r={radius} fill="none" stroke="#EDF3FB" strokeWidth={10} />
        <circle
          cx={88} cy={88} r={radius} fill="none"
          stroke={band.color} strokeWidth={10}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-[#021F4B] leading-none"
          style={{ fontSize: 42, letterSpacing: '-0.04em', fontWeight: 800 }}>{displayed}</span>
        <span className="text-[#5A7090] text-[12px]" style={{ fontWeight: 600 }}>/100</span>
      </div>
    </div>
  );
};

// ─── Lead Popup ────────────────────────────────────────────────────────────────

const LeadPopup: React.FC<{
  variant: PopupVariant;
  onClose: () => void;
  onSubmit: (form: LeadForm) => void;
}> = ({ variant, onClose, onSubmit }) => {
  const [form, setForm] = useState<LeadForm>({ name: '', email: '', phone: '' });
  const set = (f: keyof LeadForm) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(p => ({ ...p, [f]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  const isResults = variant === 'results';
  const headline = isResults
    ? 'Get your full personalised report'
    : 'Is your business ready for a UAE audit?';
  const sub = isResults
    ? 'Enter your details to download a full breakdown of your compliance gaps and recommended actions.'
    : 'Quick check — takes 2 minutes. Get your instant Audit Readiness Score with a personalised gap report.';

  const inputCls =
    'w-full border border-[#C8DAF2] text-[#021F4B] placeholder-[#021F4B]/30 text-[14px] px-4 py-3 focus:outline-none focus:border-[#021F4B]/50 transition-colors bg-white';

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(2,31,75,0.6)', backdropFilter: 'blur(6px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full max-w-md shadow-2xl relative popup-in">
        <button
          onClick={onClose} aria-label="Close popup"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#021F4B]/30 hover:text-[#021F4B] transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="h-1 bg-[#7FFA7B]" />
        <div className="p-7 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-[#7FFA7B]" />
            <span className="text-[10px] tracking-widest uppercase text-[#021F4B]/50" style={{ fontWeight: 700 }}>
              {isResults ? 'Your report is ready' : 'Free tool'}
            </span>
          </div>
          <h3 className="font-display text-[#021F4B] text-[20px] md:text-[22px] mb-2 tracking-tight leading-snug"
            style={{ fontWeight: 800 }}>
            {headline}
          </h3>
          <p className="text-[#5A7090] text-[13px] mb-6 leading-relaxed">{sub}</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input required className={inputCls} placeholder="Your full name" value={form.name} onChange={set('name')} />
            <input required type="email" className={inputCls} placeholder="Business email address" value={form.email} onChange={set('email')} />
            <input required type="tel" className={inputCls} placeholder="Phone number (+971...)" value={form.phone} onChange={set('phone')} />
            <button
              type="submit"
              className="btn-lift w-full py-3.5 text-[#021F4B] text-[14px] flex items-center justify-center gap-2"
              style={{ background: '#7FFA7B', fontWeight: 700 }}
            >
              {isResults
                ? <><Download className="w-4 h-4" /> Download My Report</>
                : <><ArrowRight className="w-4 h-4" /> Start the Free Checker</>}
            </button>
          </form>
          <p className="text-[#021F4B]/25 text-[11px] text-center mt-4">
            No spam · Your details are only used to send your report
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── Minimized Pill ────────────────────────────────────────────────────────────

const MiniPill: React.FC<{ score?: number; onClick: () => void }> = ({ score, onClick }) => (
  <div className="fixed bottom-20 md:bottom-6 right-4 z-[190] slide-in-right">
    <button
      onClick={onClick}
      className="btn-lift flex items-center gap-2.5 px-4 py-3 shadow-xl text-[#021F4B] text-[13px]"
      style={{ background: '#7FFA7B', fontWeight: 700 }}
    >
      <Shield className="w-4 h-4 flex-shrink-0" />
      {score !== undefined
        ? <span>Score: <strong>{score}/100</strong> — Book consultation</span>
        : <span>Check your audit readiness</span>}
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  </div>
);

// ─── Intro Screen ──────────────────────────────────────────────────────────────

const IntroScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  <div className="p-8 md:p-12 text-center">
    <div className="w-16 h-16 bg-[#7FFA7B]/10 flex items-center justify-center mx-auto mb-6">
      <Shield className="w-8 h-8 text-[#021F4B]" />
    </div>
    <h3
      className="font-display text-[#021F4B] mb-3 tracking-tight leading-tight"
      style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800 }}
    >
      Is your business ready for a UAE audit?
    </h3>
    <p className="text-[#5A7090] text-[15px] mb-2 max-w-lg mx-auto leading-relaxed">
      Find out in 2 minutes. Our free checker covers all 8 key audit readiness factors —
      from bookkeeping to Corporate Tax registration.
    </p>
    <p className="text-[#021F4B]/35 text-[13px] mb-8">Free · Instant · No sign-up required</p>
    <div className="grid sm:grid-cols-3 gap-3 mb-8 text-left max-w-xl mx-auto">
      {[
        { Icon: Clock,        label: '2 minutes',    detail: 'to complete'                       },
        { Icon: Shield,       label: '8 questions',  detail: 'covering all UAE compliance areas' },
        { Icon: CheckCircle2, label: 'Instant score',detail: 'with personalised gap report'      },
      ].map(({ Icon, label, detail }) => (
        <div key={label} className="flex items-start gap-3 bg-[#F4F8FD] p-4 border border-[#C8DAF2]">
          <Icon className="w-4 h-4 text-[#7FFA7B] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-[#021F4B] text-[13px]" style={{ fontWeight: 700 }}>{label}</p>
            <p className="text-[#5A7090] text-[11px] mt-0.5">{detail}</p>
          </div>
        </div>
      ))}
    </div>
    <button
      onClick={onStart}
      className="btn-lift inline-flex items-center gap-2 px-8 py-4 text-[#021F4B] text-[15px]"
      style={{ background: '#7FFA7B', fontWeight: 700 }}
    >
      Start the Checker <ArrowRight className="w-4 h-4" />
    </button>
  </div>
);

// ─── Question Screen ───────────────────────────────────────────────────────────

const QuestionScreen: React.FC<{
  question: Question;
  questionIndex: number;
  total: number;
  selectedOption: number | null;
  onSelect: (i: number) => void;
  onNext: () => void;
  onBack: () => void;
}> = ({ question, questionIndex, total, selectedOption, onSelect, onNext, onBack }) => {
  const progress = (questionIndex / total) * 100;
  return (
    <div>
      <div className="h-1 bg-[#EDF3FB]">
        <div className="h-full bg-[#7FFA7B] transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>
      <div className="p-7 md:p-10" key={questionIndex}>
        <div className="flex items-center justify-between mb-5">
          <span className="text-[11px] text-[#5A7090] uppercase tracking-widest" style={{ fontWeight: 700 }}>
            Question {questionIndex + 1} of {total}
          </span>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <div key={i} className="transition-all duration-300" style={{
                width: i === questionIndex ? 16 : 6,
                height: 6,
                background: i < questionIndex ? '#7FFA7B' : i === questionIndex ? '#021F4B' : '#C8DAF2',
                borderRadius: 3,
              }} />
            ))}
          </div>
        </div>
        <div className="question-enter">
          <h3
            className="font-display text-[#021F4B] mb-2 tracking-tight leading-snug"
            style={{ fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 700 }}
          >
            {question.question}
          </h3>
          <p className="text-[#5A7090] text-[13px] mb-7 leading-relaxed">{question.context}</p>
          <div className="space-y-3 mb-8">
            {question.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => onSelect(i)}
                className="w-full text-left flex items-start gap-4 p-4 border-2 transition-all duration-150 hover:border-[#021F4B]/30"
                style={{
                  borderColor: selectedOption === i ? '#021F4B' : '#C8DAF2',
                  background: selectedOption === i ? '#F0F5FF' : 'white',
                }}
              >
                <div
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors"
                  style={{
                    borderColor: selectedOption === i ? '#021F4B' : '#C8DAF2',
                    background: selectedOption === i ? '#021F4B' : 'white',
                  }}
                >
                  {selectedOption === i && <div className="w-2 h-2 rounded-full bg-[#7FFA7B]" />}
                </div>
                <div>
                  <p className="text-[#021F4B] text-[14px] leading-snug" style={{ fontWeight: 600 }}>{opt.label}</p>
                  <p className="text-[#5A7090] text-[12px] mt-0.5">{opt.detail}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-[#5A7090] text-[13px] hover:text-[#021F4B] transition-colors"
            style={{ fontWeight: 600 }}
          >
            <ChevronLeft className="w-4 h-4" />
            {questionIndex === 0 ? 'Back to intro' : 'Previous'}
          </button>
          <button
            onClick={onNext}
            disabled={selectedOption === null}
            className="btn-lift flex items-center gap-2 px-6 py-3 text-[13px] text-[#021F4B] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-opacity"
            style={{ background: '#7FFA7B', fontWeight: 700 }}
          >
            {questionIndex < total - 1 ? 'Next question' : 'See my results'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Results Screen ────────────────────────────────────────────────────────────

const ResultsScreen: React.FC<{
  score: number;
  band: BandInfo;
  gaps: Gap[];
  onDownload: () => void;
  leadCaptured: boolean;
  onRetake: () => void;
}> = ({ score, band, gaps, onDownload, leadCaptured, onRetake }) => (
  <div className="p-7 md:p-10 question-enter">
    <div className="text-center mb-10">
      <p className="text-[11px] tracking-widest uppercase text-[#5A7090] mb-5" style={{ fontWeight: 700 }}>
        Your Audit Readiness Score
      </p>
      <div className="flex justify-center mb-5">
        <ScoreCircle score={score} band={band} />
      </div>
      <span
        className="inline-block px-4 py-1.5 text-[12px] uppercase tracking-wider mb-3"
        style={{ background: band.bgColor, color: band.color, fontWeight: 700 }}
      >
        {band.band}
      </span>
      <p className="text-[#5A7090] text-[14px] max-w-sm mx-auto leading-relaxed">
        {gaps.length === 0
          ? 'Excellent compliance posture. Book your audit to meet your deadline.'
          : `${gaps.length} compliance gap${gaps.length > 1 ? 's' : ''} identified across your profile.`}
      </p>
    </div>

    {gaps.length > 0 && (
      <div className="mb-10">
        <h4 className="font-display text-[#021F4B] text-[15px] mb-4 tracking-tight" style={{ fontWeight: 700 }}>
          Compliance Gaps Detected
        </h4>
        <div className="space-y-3">
          {gaps.map((gap, i) => (
            <div key={i} className="flex items-start gap-4 p-4 border" style={{
              borderColor: gap.severity === 'red' ? '#fecaca' : '#fde68a',
              background:  gap.severity === 'red' ? '#fff5f5'  : '#fffbeb',
            }}>
              {gap.severity === 'red'
                ? <XCircle       className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                : <AlertTriangle className="w-5 h-5 text-[#d97706] flex-shrink-0 mt-0.5" />}
              <div>
                <p className="text-[#021F4B] text-[13px] mb-0.5" style={{ fontWeight: 600 }}>
                  {gap.severity === 'red' ? 'Critical' : 'Warning'} — {gap.area}
                </p>
                <p className="text-[#5A7090] text-[12px] leading-relaxed">{gap.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    <div className="p-6 md:p-8 mb-6" style={{ background: '#021F4B' }}>
      <p className="text-white/40 text-[10px] tracking-widest uppercase mb-3" style={{ fontWeight: 700 }}>
        Recommended Next Step
      </p>
      <h3 className="font-display text-white mb-2 tracking-tight leading-snug"
        style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 800 }}>
        {band.ctaHeadline}
      </h3>
      <p className="text-white/55 text-[14px] mb-6 leading-relaxed">{band.ctaSub}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={WA_CONSULT} target="_blank" rel="noopener noreferrer"
          className="btn-lift inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[#021F4B] text-[14px]"
          style={{ background: '#7FFA7B', fontWeight: 700 }}
        >
          <WhatsAppIcon className="w-4 h-4" /> Book free consultation →
        </a>
        <button
          onClick={onDownload}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white/70 text-[14px] border border-white/15 hover:border-white/40 transition-colors"
          style={{ fontWeight: 600 }}
        >
          <Download className="w-4 h-4" />
          {leadCaptured ? 'Download report' : 'Get full report'}
        </button>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <button onClick={onRetake} className="text-[#5A7090] text-[13px] hover:text-[#021F4B] transition-colors">
        ↺ Retake checker
      </button>
      <p className="text-[#021F4B]/25 text-[12px]">Powered by ALYA Auditors</p>
    </div>
  </div>
);

// ─── Report HTML Generator ─────────────────────────────────────────────────────

function generateReportHTML(score: number, band: BandInfo, gaps: Gap[]): string {
  const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const gapsHtml = gaps.length > 0
    ? gaps.map(g => `
      <div style="border:1px solid ${g.severity === 'red' ? '#fecaca' : '#fde68a'};
                  background:${g.severity === 'red' ? '#fff5f5' : '#fffbeb'};
                  padding:14px 16px;margin-bottom:10px;">
        <strong style="color:${g.severity === 'red' ? '#dc2626' : '#d97706'};font-size:13px;">
          ${g.severity === 'red' ? '● Critical' : '▲ Warning'} — ${g.area}
        </strong>
        <p style="margin:6px 0 0;color:#5A7090;font-size:13px;">${g.message}</p>
      </div>`).join('')
    : '<p style="color:#16a34a;font-weight:600;padding:12px 0;">✓ No critical compliance gaps detected.</p>';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>UAE Audit Readiness Report — ALYA Auditors</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #021F4B; background: #fff; }
  .header { background: #021F4B; color: white; padding: 32px 40px; }
  .header h1 { font-size: 24px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 6px; }
  .header p { color: rgba(255,255,255,0.4); font-size: 13px; }
  .body { padding: 32px 40px; }
  .score-box { display: flex; align-items: center; gap: 24px; background: #F4F8FD; border: 1px solid #C8DAF2; padding: 24px; margin-bottom: 28px; }
  .score-num { font-size: 72px; font-weight: 800; line-height: 1; letter-spacing: -0.05em; color: ${band.color}; }
  .band-badge { display: inline-block; background: ${band.bgColor}; color: ${band.color}; padding: 4px 12px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }
  h2 { font-size: 17px; font-weight: 700; margin: 24px 0 12px; }
  .cta { background: #021F4B; color: white; padding: 24px; margin-top: 28px; }
  .cta h3 { font-size: 20px; font-weight: 800; margin-bottom: 8px; }
  .cta p { color: rgba(255,255,255,0.55); font-size: 14px; margin-bottom: 16px; }
  .cta a { display: inline-block; background: #7FFA7B; color: #021F4B; padding: 12px 24px; font-weight: 700; font-size: 14px; text-decoration: none; }
  .footer { padding: 20px 40px; border-top: 1px solid #EDF3FB; color: #C8DAF2; font-size: 12px; margin-top: 32px; }
</style>
</head>
<body>
<div class="header">
  <div style="color:#7FFA7B;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px;">UAE Audit Readiness Checker</div>
  <h1>Your Personalised Audit Readiness Report</h1>
  <p>Prepared by ALYA Auditors · alyaauditors.com · ${date}</p>
</div>
<div class="body">
  <div class="score-box">
    <div class="score-num">${score}</div>
    <div>
      <div class="band-badge">${band.band}</div>
      <p style="font-size:14px;color:#5A7090;margin-top:4px;">Your overall audit readiness score out of 100</p>
    </div>
  </div>
  <h2>Compliance Gaps${gaps.length > 0 ? ` (${gaps.length} identified)` : ''}</h2>
  ${gapsHtml}
  <div class="cta">
    <h3>${band.ctaHeadline}</h3>
    <p>${band.ctaSub}</p>
    <a href="${WA_CONSULT}">Book Free Consultation →</a>
  </div>
</div>
<div class="footer">
  ALYA Nexus Auditing LLC · +971 54 310 0334 · audit@alyaauditors.com · alyaauditors.com
</div>
</body>
</html>`;
}

// ─── Main Component ────────────────────────────────────────────────────────────

const AlyaCheckerEmbed: React.FC = () => {
  const [phase, setPhase]                     = useState<Phase>('intro');
  const [currentQ, setCurrentQ]               = useState(0);
  const [answers, setAnswers]                 = useState<Answers>({});
  const [selectedOption, setSelectedOption]   = useState<number | null>(null);
  const [popupState, setPopupState]           = useState<PopupState>('hidden');
  const [popupVariant, setPopupVariant]       = useState<PopupVariant>('idle');
  const [leadCaptured, setLeadCaptured]       = useState(false);
  const [pendingDownload, setPendingDownload] = useState(false);

  const hasShownIdlePopup = useRef(false);
  const score = getDisplayScore(answers);
  const band  = getBand(score);
  const gaps  = detectGaps(answers);

  // 30-second idle popup (only on intro, only once)
  useEffect(() => {
    if (phase !== 'intro' || hasShownIdlePopup.current) return;
    const t = setTimeout(() => {
      if (phase === 'intro') {
        hasShownIdlePopup.current = true;
        setPopupVariant('idle');
        setPopupState('open');
      }
    }, 30000);
    return () => clearTimeout(t);
  }, [phase]);

  // Exit-intent (desktop)
  useEffect(() => {
    if (leadCaptured || hasShownIdlePopup.current) return;
    const handle = (e: MouseEvent) => {
      if (e.clientY < 8) {
        hasShownIdlePopup.current = true;
        setPopupVariant(phase === 'results' ? 'results' : 'idle');
        setPopupState('open');
      }
    };
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, [leadCaptured, phase]);

  const handleStart = useCallback(() => {
    setPhase('questions');
    setCurrentQ(0);
    setAnswers({});
    setSelectedOption(null);
  }, []);

  const handleSelect = useCallback((optionIndex: number) => {
    setSelectedOption(optionIndex);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedOption === null) return;
    setAnswers(prev => ({ ...prev, [currentQ]: selectedOption }));
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(q => q + 1);
      setSelectedOption(null);
    } else {
      setPhase('results');
    }
  }, [selectedOption, currentQ]);

  const handleBack = useCallback(() => {
    if (currentQ > 0) {
      const prevQ = currentQ - 1;
      setCurrentQ(prevQ);
      setSelectedOption(answers[prevQ] ?? null);
    } else {
      setPhase('intro');
      setSelectedOption(null);
    }
  }, [currentQ, answers]);

  const doDownload = useCallback(() => {
    const html = generateReportHTML(score, band, gaps);
    const blob = new Blob([html], { type: 'text/html' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = 'ALYA-Audit-Readiness-Report.html';
    a.click();
    URL.revokeObjectURL(url);
  }, [score, band, gaps]);

  const handleDownload = useCallback(() => {
    if (!leadCaptured) {
      setPendingDownload(true);
      setPopupVariant('results');
      setPopupState('open');
    } else {
      doDownload();
    }
  }, [leadCaptured, doDownload]);

  const handleLeadSubmit = useCallback((form: LeadForm) => {
    setLeadCaptured(true);
    setPopupState('hidden');
    if (pendingDownload) {
      setPendingDownload(false);
      doDownload();
    }
    if (phase === 'intro') {
      handleStart();
    }
  }, [pendingDownload, doDownload, phase, handleStart]);

  const handlePopupClose = useCallback(() => {
    setPopupState('minimized');
  }, []);

  const handlePillClick = useCallback(() => {
    setPopupVariant(phase === 'results' ? 'results' : 'idle');
    setPopupState('open');
  }, [phase]);

  const handleRetake = useCallback(() => {
    setPhase('intro');
    setAnswers({});
    setSelectedOption(null);
    setCurrentQ(0);
  }, []);

  return (
    <div className="alya-embed">
      <section style={{ background: '#F4F8FD', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: 896, margin: '0 auto', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>

          {/* Section header */}
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div className="flex items-center justify-center gap-3" style={{ marginBottom: '1rem' }}>
              <div className="h-px w-8 bg-[#7FFA7B]" />
              <span className="eyebrow">Free Tool</span>
              <div className="h-px w-8 bg-[#7FFA7B]" />
            </div>
            <h2
              className="font-display text-[#021F4B]"
              style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', letterSpacing: '-0.03em', fontWeight: 800, marginBottom: '0.75rem' }}
            >
              UAE Audit Readiness Checker
            </h2>
            <p className="text-[#5A7090] text-[16px] max-w-2xl mx-auto leading-relaxed">
              Answer 8 quick questions and get your instant Audit Readiness Score — with a personalised
              compliance gap report. Free, instant, no sign-up.
            </p>
          </div>

          {/* Checker card */}
          <div className="bg-white border border-[#C8DAF2] overflow-hidden shadow-sm">
            {phase === 'intro' && <IntroScreen onStart={handleStart} />}
            {phase === 'questions' && (
              <QuestionScreen
                question={QUESTIONS[currentQ]}
                questionIndex={currentQ}
                total={QUESTIONS.length}
                selectedOption={selectedOption}
                onSelect={handleSelect}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {phase === 'results' && (
              <ResultsScreen
                score={score}
                band={band}
                gaps={gaps}
                onDownload={handleDownload}
                leadCaptured={leadCaptured}
                onRetake={handleRetake}
              />
            )}
          </div>
        </div>

        {/* Lead popup */}
        {popupState === 'open' && (
          <LeadPopup
            variant={popupVariant}
            onClose={handlePopupClose}
            onSubmit={handleLeadSubmit}
          />
        )}

        {/* Minimized pill */}
        {popupState === 'minimized' && (
          <MiniPill
            score={phase === 'results' ? score : undefined}
            onClick={handlePillClick}
          />
        )}
      </section>
    </div>
  );
};

export default AlyaCheckerEmbed;
