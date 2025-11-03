import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import ProjectSection from '@/components/sections/ProjectSection';
import VillasSection from '@/components/sections/VillasSection';
import EcologySection from '@/components/sections/EcologySection';
import LocationSection from '@/components/sections/LocationSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProjectSection />
      <VillasSection />
      <EcologySection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
