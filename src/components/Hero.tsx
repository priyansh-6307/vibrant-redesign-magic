
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      <div className="container-custom flex flex-col items-center text-center relative z-10">
        <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-gray-800/70 text-sm font-medium backdrop-blur-sm border border-gray-700/50">
          <span className="text-diskyo-red">New!</span> Premium YouTube Content Creation Service
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
          Create Professional <span className="text-diskyo-red">YouTube Videos</span> Without Lifting a Finger
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
          From scripting to publishing, we handle everything for your YouTube channel. Just approve, and we deliver quality videos that grow your audience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button className="gradient-btn py-6 px-8 text-lg group">
            Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
          <Button variant="outline" className="border-gray-700 py-6 px-8 text-lg backdrop-blur-sm bg-gray-800/30 hover:bg-gray-800/50 group">
            <Play className="mr-2 group-hover:scale-110 transition-transform" size={18} /> How it Works
          </Button>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
          <div className="aspect-video bg-gray-900/50 flex items-center justify-center group">
            <div className="w-full h-full bg-diskyo-black/30 backdrop-blur-sm flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-diskyo-red/90 flex items-center justify-center cursor-pointer hover:bg-diskyo-red transition-colors">
                <Play fill="white" size={36} className="ml-1" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-diskyo-red">37%</span>
            <p className="text-sm text-gray-400 mt-2">Viewer Retention</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-diskyo-red">2-3</span>
            <p className="text-sm text-gray-400 mt-2">Days Turnaround</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-diskyo-red">15k+</span>
            <p className="text-sm text-gray-400 mt-2">Videos Created</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-diskyo-red">98%</span>
            <p className="text-sm text-gray-400 mt-2">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
