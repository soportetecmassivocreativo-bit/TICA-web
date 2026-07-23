import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Ports from "@/components/Ports";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Benefits />
        <Process />
        <Ports />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
