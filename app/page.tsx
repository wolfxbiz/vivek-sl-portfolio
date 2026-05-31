import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Ecosystem from "@/components/Ecosystem";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectGrid />
      <Ecosystem />
      <Gallery />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}
