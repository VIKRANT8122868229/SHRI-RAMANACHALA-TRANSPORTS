import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import WhyChooseUs from "@/components/whychooseus";
import Stats from "@/components/stats";
import Contact from "@/components/contact";
import MapSection from "@/components/map";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsappbutton";
import ScrollToTop from "@/components/scrolltotop";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Contact />
      <MapSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}