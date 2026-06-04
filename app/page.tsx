import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Process from "@/components/Process";
import Ecosystem from "@/components/Ecosystem";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const CARD_SHADOW = "0 -12px 40px rgba(0,0,0,0.25), 0 -2px 8px rgba(0,0,0,0.1)";

export default function Page() {
  return (
    <main>
      <Navbar />

      {/* Hero — sticky, sits behind the card */}
      <div className="sticky top-0" style={{ zIndex: 1 }}>
        <Hero />
      </div>

      {/* Content card — slides up over the hero */}
      <div
        className="relative bg-white rounded-t-3xl"
        style={{ zIndex: 10, boxShadow: CARD_SHADOW }}
      >
        <ProjectGrid />
        <Process />
        <Ecosystem />
        <Gallery />
        <Experience />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
