
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatWeOffer from "@/components/WhatWeOffer";
import GridBackground from "@/components/GridBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-diskyo-black">
      <GridBackground />
      <Header />
      <main>
        <Hero />
        <WhatWeOffer />
        <Features />
        <Portfolio />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
