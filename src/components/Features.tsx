
import React, { useEffect, useRef } from "react";
import { CheckCircle, Edit3, Video, Upload, PlayCircle, PieChart, Calendar, MessageSquare, Search } from "lucide-react";

const FeatureCard = ({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) => {
  return (
    <div className="staggered-item bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-diskyo-red/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-diskyo-red/5" style={{ animationDelay: `${0.1 * index}s` }}>
      <div className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-diskyo-red/10 text-diskyo-red animate-float" style={{ animationDelay: `${0.2 * index}s` }}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const ProcessStep = ({ number, title, description, delay }: { number: string, title: string, description: string, delay: number }) => {
  return (
    <div className="flex staggered-item" style={{ animationDelay: `${delay}s` }}>
      <div className="mr-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-diskyo-red to-diskyo-violet flex items-center justify-center text-white font-bold animate-pulse-glow">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-intro');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (processRef.current) observer.observe(processRef.current);
    
    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (processRef.current) observer.unobserve(processRef.current);
    };
  }, []);
  
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-diskyo-red/10 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-diskyo-violet/10 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container-custom">
        <div className="text-center mb-16 section-intro">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How <span className="gradient-text">DiskYo</span> Works
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We handle every step of the YouTube content creation process, so you can focus on what matters most - your business.
          </p>
        </div>
        
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <FeatureCard 
            icon={<Edit3 size={24} />} 
            title="Script Writing" 
            description="Our team writes engaging scripts optimized for audience retention and SEO."
            index={1}
          />
          <FeatureCard 
            icon={<Video size={24} />} 
            title="Professional Editing" 
            description="High-quality video editing with custom animations and branding."
            index={2}
          />
          <FeatureCard 
            icon={<Upload size={24} />} 
            title="Full Publishing" 
            description="We handle uploading, SEO optimization, and thumbnail creation."
            index={3}
          />
          <FeatureCard 
            icon={<PlayCircle size={24} />} 
            title="Engaging Content" 
            description="Content strategically designed to keep viewers watching longer."
            index={4}
          />
          <FeatureCard 
            icon={<PieChart size={24} />} 
            title="Analytics & Insights" 
            description="Detailed performance reports and actionable improvement suggestions."
            index={5}
          />
          <FeatureCard 
            icon={<Search size={24} />} 
            title="SEO Optimization" 
            description="Strategic keyword research and optimization for discoverability."
            index={6}
          />
        </div>
        
        <div ref={processRef} className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden group animate-shimmer">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Our Streamlined Process</h3>
              <div className="space-y-8">
                <ProcessStep 
                  number="1" 
                  title="Initial Consultation" 
                  description="We learn about your goals, audience, and brand voice to create a tailored strategy."
                  delay={0.1}
                />
                <ProcessStep 
                  number="2" 
                  title="Content Planning" 
                  description="Our team develops a content calendar and topic strategy aligned with your objectives."
                  delay={0.2}
                />
                <ProcessStep 
                  number="3" 
                  title="Script Creation" 
                  description="Professional writers craft engaging scripts that connect with your audience."
                  delay={0.3}
                />
                <ProcessStep 
                  number="4" 
                  title="Your Approval" 
                  description="Review and approve the scripts before we move to production."
                  delay={0.4}
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">From Production to Success</h3>
              <div className="space-y-8">
                <ProcessStep 
                  number="5" 
                  title="Video Production" 
                  description="Our team handles all aspects of video creation including editing and motion graphics."
                  delay={0.5}
                />
                <ProcessStep 
                  number="6" 
                  title="Quality Assurance" 
                  description="Rigorous quality checks ensure your content meets our high standards."
                  delay={0.6}
                />
                <ProcessStep 
                  number="7" 
                  title="Publishing & Promotion" 
                  description="We optimize and publish your video, handling all the technical details."
                  delay={0.7}
                />
                <ProcessStep 
                  number="8" 
                  title="Analysis & Optimization" 
                  description="Continuous performance tracking and strategy refinement for ongoing improvement."
                  delay={0.8}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
