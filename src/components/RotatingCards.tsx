
import React, { useEffect, useRef } from "react";

const RotatingCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const cards = container.querySelectorAll('.rotating-card');
    
    // Initial positioning of cards
    positionCards(cards);
    
    // Handle autorotation
    let rotationAngle = 0;
    const rotationSpeed = 0.05;
    
    const animate = () => {
      rotationAngle += rotationSpeed;
      updateCardsPosition(cards, rotationAngle);
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    // Add interactive rotation on mousemove
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      // Calculate rotation speed based on mouse position
      const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
      const normalizedDistance = Math.min(distance / (rect.width / 2), 1);
      
      // Determine rotation direction based on mouse position
      const direction = mouseX > 0 ? 1 : -1;
      
      // Apply rotation speed
      rotationAngle += rotationSpeed * normalizedDistance * direction;
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Position cards in a circular pattern
  const positionCards = (cards: NodeListOf<Element>) => {
    const centerX = 0;
    const centerY = 0;
    const radius = 150;
    
    cards.forEach((card, i) => {
      const angle = (i * (2 * Math.PI / cards.length));
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      const z = 0;
      
      const htmlCard = card as HTMLElement;
      htmlCard.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${angle * (180 / Math.PI)}deg)`;
    });
  };
  
  // Update card positions based on rotation angle
  const updateCardsPosition = (cards: NodeListOf<Element>, rotationAngle: number) => {
    const centerX = 0;
    const centerY = 0;
    const radius = 150;
    
    cards.forEach((card, i) => {
      const angle = rotationAngle + (i * (2 * Math.PI / cards.length));
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      const z = 50 * Math.sin(angle);
      
      const htmlCard = card as HTMLElement;
      htmlCard.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${angle * (180 / Math.PI)}deg)`;
      
      // Adjust opacity based on z-index (cards in front are more visible)
      const opacity = 0.5 + 0.5 * Math.sin(angle);
      htmlCard.style.opacity = opacity.toString();
      
      // Set z-index to ensure cards in front are rendered on top
      htmlCard.style.zIndex = Math.round(100 * Math.sin(angle)).toString();
    });
  };
  
  return (
    <section id="rotating-cards" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-diskyo-violet/10 to-transparent opacity-20"></div>
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Video Creation <span className="gradient-text">Magic</span>
        </h2>
        
        <div className="relative h-[500px] perspective-1000 mx-auto" ref={containerRef}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text pointer-events-none">
              magic
            </div>
          </div>
          
          {/* Rotating cards */}
          <div className="rotating-card-container relative w-full h-full flex items-center justify-center">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="rotating-card absolute w-40 h-60 rounded-2xl bg-gradient-to-br transition-all duration-300 ease-out"
                style={{
                  background: `linear-gradient(to bottom right, rgba(139, 92, 246, ${0.5 + index * 0.05}), rgba(227, 6, 17, ${0.3 + index * 0.05}))`,
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="w-full h-full flex items-center justify-center rounded-2xl backdrop-blur-sm backdrop-filter bg-black/10">
                  {/* Card content can go here */}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-gray-400 mt-16 max-w-2xl mx-auto">
          Our team of experts combines creativity with technical precision to deliver 
          video content that captivates your audience and elevates your brand presence.
        </p>
      </div>
    </section>
  );
};

export default RotatingCards;
