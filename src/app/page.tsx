import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <section className="common__container">
        <div className="pt-[227px] sm:pt-[60vh]">
          <section
            id="about"
            className="NAV_SECTION"
            style={{ height: '100vh', width: '100%' }}
          />
          <section
            id="videos"
            className="NAV_SECTION"
            style={{ height: '100vh', width: '100%' }}
          />
          <section
            id="events"
            className="NAV_SECTION"
            style={{ height: '100vh', width: '100%' }}
          />
        </div>
      </section>
      {/* <AboutSection /> */}
    </main>
  );
}
