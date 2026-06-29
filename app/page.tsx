import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import LiveWork from "@/components/LiveWork";
import Process from "@/components/Process";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import BehanceSection from "@/components/BehanceSection";
import Footer from "@/components/Footer";

const CARD_SHADOW = "0 -12px 40px rgba(0,0,0,0.25), 0 -2px 8px rgba(0,0,0,0.1)";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://viveksl.com/#person",
      name: "Vivek S L",
      jobTitle: "UI/UX Designer & Growth Strategist",
      url: "https://viveksl.com",
      email: "vivekshajilekha@gmail.com",
      telephone: "+918921284894",
      description:
        "UI/UX designer and growth strategist with 6+ years building conversion-focused products, brand systems, and SaaS platforms for UAE and GCC clients.",
      knowsAbout: [
        "UI/UX Design",
        "Conversion Rate Optimisation",
        "Brand Identity Design",
        "SaaS Product Design",
        "Landing Page Design",
        "Growth Strategy",
      ],
      sameAs: [
        "https://www.linkedin.com/in/viveksl/",
        "https://www.behance.net/viveksl",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://viveksl.com/#website",
      url: "https://viveksl.com",
      name: "Vivek S L — Portfolio",
      author: { "@id": "https://viveksl.com/#person" },
    },
  ],
};

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero — sticky on desktop only, scrolls normally on mobile */}
      <div className="md:sticky top-0" style={{ zIndex: 1 }}>
        <Hero />
      </div>

      {/* Content card — slides up over the hero */}
      <div
        className="relative bg-white rounded-t-3xl"
        style={{ zIndex: 10, boxShadow: CARD_SHADOW }}
      >
        <ProjectGrid />
        <Testimonials />
        <LiveWork />
        <Process />
        <AboutSection />
        <BehanceSection />
        <Footer />
      </div>
    </main>
  );
}
