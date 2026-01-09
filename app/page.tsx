import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import WorkGallery from "./components/WorkGallery";
import Testimonials from "./components/Testimonials";
import StartupFeature from "./components/StartupFeature";
import Awards from "./components/Awards";
import TeamCTA from "./components/TeamCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <WorkGallery />
      <StartupFeature />
      <ServicesSection /> {/* Keeping Services content relevant here too */}
      <Testimonials />
      <Awards />
      <TeamCTA />
      <AboutSection /> {/* Move About closer to footer or keep structure? Kestone flow is loose. Let's stick to user request order roughly */}
    </main>
  );
}
