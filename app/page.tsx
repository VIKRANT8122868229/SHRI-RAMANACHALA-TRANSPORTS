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
import Gallery from "@/components/gallery";
import FadeIn from "@/components/fadein";
export default function Home() {
  return (
    <main>
      <Navbar />

<FadeIn>
  <Hero />
</FadeIn>

<FadeIn>
  <About />
</FadeIn>

<FadeIn>
  <Services />
</FadeIn>

<FadeIn>
  <WhyChooseUs />
</FadeIn>

<FadeIn>
  <Stats />
</FadeIn>

<FadeIn>
  <Gallery />
</FadeIn>

<FadeIn>
  <MapSection />
</FadeIn>

<FadeIn>
  <Contact />
</FadeIn>

<Footer />
<WhatsAppButton />
<ScrollToTop />
    </main>
  );
}