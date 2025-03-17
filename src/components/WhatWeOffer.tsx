
import React from "react";
import { Video, Music, MessageSquare, Layers } from "lucide-react";

const WhatWeOffer = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-diskyo-red">What We</span> Offer
        </h2>
        
        <div className="relative">
          {/* Central Icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 rounded-full bg-diskyo-violet/20 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-diskyo-violet/30 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-diskyo-violet flex items-center justify-center">
                </div>
              </div>
            </div>
            {/* Circles around central icon */}
            <div className="absolute inset-0 rounded-full border border-diskyo-red/30"></div>
            <div className="absolute inset-0 -m-4 rounded-full border border-diskyo-red/20"></div>
            <div className="absolute inset-0 -m-8 rounded-full border border-diskyo-red/10"></div>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
            {/* Top Service */}
            <div className="col-start-2 md:col-start-2">
              <ServiceCard 
                title="Framing & Sequencing" 
                icon={<Layers className="h-8 w-8 text-diskyo-red" />}
                position="top"
              />
            </div>
            
            {/* Left Service */}
            <div className="col-start-1 md:col-start-1 row-start-2">
              <ServiceCard 
                title="Sound Design" 
                icon={<Music className="h-8 w-8 text-diskyo-red" />}
                position="left"
              />
            </div>
            
            {/* Right Service - Adobe Premier Pro */}
            <div className="col-start-3 md:col-start-3 row-start-2">
              <ServiceCard 
                title="Adobe Premier Pro" 
                icon={<div className="text-diskyo-red text-2xl font-bold">Pr</div>}
                position="right"
              />
            </div>
            
            {/* Bottom Left - YouTube Growth */}
            <div className="col-start-1 md:col-start-1 row-start-3">
              <ServiceCard 
                title="YouTube Growth" 
                icon={<Video className="h-8 w-8 text-diskyo-red" />}
                position="bottomLeft"
              />
            </div>
            
            {/* Bottom Right - Adobe After Effects */}
            <div className="col-start-3 md:col-start-3 row-start-3">
              <ServiceCard 
                title="Adobe After Effects" 
                icon={<div className="text-diskyo-red text-2xl font-bold">Ae</div>}
                position="bottomRight"
              />
            </div>
            
            {/* Bottom Service */}
            <div className="col-start-2 md:col-start-2 row-start-4">
              <ServiceCard 
                title="Creative Storytelling" 
                icon={<MessageSquare className="h-8 w-8 text-diskyo-red" />}
                position="bottom"
              />
            </div>
          </div>
          
          {/* Connection Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" style={{ position: 'absolute', zIndex: -1 }}>
              <line x1="50%" y1="20%" x2="50%" y2="35%" stroke="#E30611" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="30%" y1="50%" x2="43%" y2="50%" stroke="#E30611" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="57%" y1="50%" x2="70%" y2="50%" stroke="#E30611" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="30%" y1="68%" x2="43%" y2="60%" stroke="#E30611" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="57%" y1="60%" x2="70%" y2="68%" stroke="#E30611" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="50%" y1="65%" x2="50%" y2="80%" stroke="#E30611" strokeWidth="1" strokeOpacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

// Service card component
const ServiceCard = ({ 
  title, 
  icon, 
  position 
}: { 
  title: string;
  icon: React.ReactNode;
  position: "top" | "left" | "right" | "bottom" | "bottomLeft" | "bottomRight";
}) => {
  return (
    <div className="bg-[#1A0A2E] p-4 rounded-lg border border-diskyo-violet/20 shadow-lg backdrop-blur-sm flex flex-col items-center text-center w-40 h-40 mx-auto">
      <div className="mb-3 flex items-center justify-center w-16 h-16">
        {icon}
      </div>
      <p className="text-diskyo-red text-sm">{title}</p>
    </div>
  );
};

export default WhatWeOffer;
