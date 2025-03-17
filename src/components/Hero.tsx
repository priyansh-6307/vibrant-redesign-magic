
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const statItems = statsRef.current?.querySelectorAll('.stat-item');
    statItems?.forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      statItems?.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-diskyo-black">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-1/2 h-64 bg-diskyo-red/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-24 left-1/3 transform -translate-x-1/2 w-1/2 h-64 bg-diskyo-violet/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
      </div>
      
      <div className="container-custom flex flex-col items-center text-center relative z-10">
        <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-gray-800/70 text-sm font-medium backdrop-blur-sm border border-gray-700/50 animate-pulse-slow">
          <span className="text-diskyo-red">New!</span> Premium YouTube Content Creation Service
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl section-intro" style={{ animationDelay: "0.3s" }}>
          Create Professional <span className="gradient-text">YouTube Videos</span> Without Lifting a Finger
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl section-intro" style={{ animationDelay: "0.5s" }}>
          From scripting to publishing, we handle everything for your YouTube channel. Just approve, and we deliver quality videos that grow your audience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 section-intro" style={{ animationDelay: "0.7s" }}>
          <Button className="gradient-btn py-6 px-8 text-lg group">
            Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
          <Button variant="outline" className="border-gray-700 py-6 px-8 text-lg backdrop-blur-sm bg-gray-800/30 hover:bg-gray-800/50 group">
            <Play className="mr-2 group-hover:scale-110 transition-transform" size={18} /> How it Works
          </Button>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-800 section-intro" style={{ animationDelay: "0.9s" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
          <div className="aspect-video bg-gray-900/50 flex items-center justify-center group">
            <div className="w-full h-full bg-diskyo-black/30 backdrop-blur-sm flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-diskyo-red/90 flex items-center justify-center cursor-pointer hover:bg-diskyo-red transition-colors group-hover:scale-110 transform duration-300 animate-pulse-glow">
                <Play fill="white" size={36} className="ml-1" />
              </div>
            </div>
          </div>
        </div>
        
        <div ref={statsRef} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <div className="flex flex-col items-center stat-item opacity-0">
            <span className="text-3xl md:text-4xl font-bold gradient-text">37%</span>
            <p className="text-sm text-gray-400 mt-2">Viewer Retention</p>
          </div>
          <div className="flex flex-col items-center stat-item opacity-0">
            <span className="text-3xl md:text-4xl font-bold gradient-text">2-3</span>
            <p className="text-sm text-gray-400 mt-2">Days Turnaround</p>
          </div>
          <div className="flex flex-col items-center stat-item opacity-0">
            <span className="text-3xl md:text-4xl font-bold gradient-text">15k+</span>
            <p className="text-sm text-gray-400 mt-2">Videos Created</p>
          </div>
          <div className="flex flex-col items-center stat-item opacity-0">
            <span className="text-3xl md:text-4xl font-bold gradient-text">98%</span>
            <p className="text-sm text-gray-400 mt-2">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
