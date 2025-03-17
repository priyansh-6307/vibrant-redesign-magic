
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import RotatingCards from "@/components/RotatingCards";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-diskyo-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <RotatingCards />
        <Portfolio />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
