import { ArrowUpRight } from "lucide-react";

const AlyaHeroEmbed = () => {
  return (
    <div className="alya-embed">
      <section className="relative bg-white overflow-hidden flex flex-col" style={{ minHeight: 520 }}>

        {/* Mobile: mascot stacked above text */}
        <div
          className="lg:hidden relative w-full overflow-hidden flex-shrink-0"
          style={{ maxHeight: "40vh", minHeight: "220px" }}
          aria-hidden
        >
          <img
            src="/images/alya-hero-mascot.jpeg"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 8%", maxHeight: "40vh", minHeight: "220px" }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(to top, white 0%, transparent 100%)" }}
          />
        </div>

        {/* Text content */}
        <div className="relative z-20 flex flex-1 items-center">
          <div className="w-full lg:w-[52%] px-6 md:px-12 lg:px-16 pt-4 pb-24 lg:pb-12">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-[#7FFA7B]" />
              <span className="eyebrow">UAE Compliance Experts</span>
            </div>

            {/* Heading */}
            <h1
              className="heading-hover font-display text-[#021F4B] leading-[0.95] mb-8"
              style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 900, letterSpacing: "-0.04em" }}
            >
              Avoid Penalties.
              <br />
              <span className="ghost-text">Gain Clarity.</span>
            </h1>

            {/* Description */}
            <p className="text-[#5A7090] text-[15px] leading-relaxed max-w-sm mb-10">
              Expert auditing, VAT compliance, and accounting for UAE
              businesses that can't afford mistakes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-12">
              <a
                href="https://accounting.alyaauditors.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#7FFA7B] text-[#021F4B] text-sm px-8 py-3.5 hover:bg-[#A3FBA0] transition-colors btn-lift group"
                style={{ fontWeight: 700 }}
              >
                Get Started
                <span className="w-6 h-6 rounded-full bg-[#021F4B]/10 flex items-center justify-center group-hover:bg-[#021F4B]/15 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
              <a
                href="https://accounting.alyaauditors.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#C8DAF2] text-[#021F4B]/60 text-sm px-8 py-3.5 hover:text-[#021F4B] hover:border-[#021F4B]/30 transition-colors"
                style={{ fontWeight: 500 }}
              >
                Explore Services
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-6 text-[13px]">
              {[
                { val: "17+", label: "Years" },
                { val: "3,000+", label: "Clients" },
                { val: "30+", label: "Experts" },
              ].map(({ val, label }, i) => (
                <span key={val} className="flex items-center gap-2">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-[#C8DAF2]" />}
                  <span className="text-[#021F4B]" style={{ fontWeight: 700 }}>{val}</span>
                  <span className="text-[#5A7090]">{label}</span>
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Desktop: full-height mascot — right side */}
        <div
          className="hidden lg:block absolute right-0 top-0 w-[50%] h-full pointer-events-none"
          aria-hidden
        >
          <img
            src="/images/alya-hero-mascot.jpeg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, white 0%, rgba(255,255,255,0.75) 20%, rgba(255,255,255,0.15) 45%, transparent 65%), linear-gradient(to top, white 0%, transparent 12%)",
            }}
          />
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-2">
          <span className="eyebrow text-[9px] text-[#5A7090]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#5A7090] to-transparent" />
        </div>
      </section>
    </div>
  );
};

export default AlyaHeroEmbed;
