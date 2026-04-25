
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import ScrollReveal from "@/components/ui/ScrollReveal";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Home/Stats";
import About from "@/components/Home/About";
import Programs from "@/components/Home/Programs";
import Pricing from "@/components/Home/Pricing";
import Trainers from "@/components/Home/Trainers";
import CtaBand from "@/components/Home/CtaBand";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <Pricing />
        <Trainers />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}