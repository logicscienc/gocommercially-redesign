import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/WhyChooseUs/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <>
         <main>
  <Navbar />
  <Hero />
  <Services />
 <HowItWorks/>
 <Showcase/>
 <Testimonials/>
 <FAQ/>
  <Contact />
  <Footer/>
</main>
   </>
  );
}
