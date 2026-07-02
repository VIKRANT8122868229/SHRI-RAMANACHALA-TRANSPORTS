import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import WhyChooseUs from "@/components/whychooseus";
import Stats from "@/components/stats";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsappbutton";

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
      <Footer />
      <whatsappbutton />
    </main>
  );
}