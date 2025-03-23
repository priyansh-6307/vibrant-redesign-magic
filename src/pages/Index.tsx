import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatWeOffer from "@/components/WhatWeOffer";
import GridBackground from "@/components/GridBackground";
import CursorFollower from "@/components/CursorFollower";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Prevent scrolling during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      
      <div className="min-h-screen bg-diskyo-black overflow-hidden" 
        style={{ 
          opacity: isLoading ? 0 : 1,
          transform: isLoading ? 'translateY(40px)' : 'translateY(0)',
          transition: 'opacity 0.8s ease-in-out, transform 1s ease-in-out',
          visibility: isLoading ? 'hidden' : 'visible'
        }}>
    
        <GridBackground />
        <Header />
        <main>
          <Hero />
          <WhatWeOffer />
          {/* <Features /> */}
          <Portfolio />
          <Contact />
          {/* <FAQ /> */}
        </main>
        <Footer />
        
      </div>
    </>
  );
};

export default Index;