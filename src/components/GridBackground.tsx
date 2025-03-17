
import React from "react";

const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `linear-gradient(to right, #8B5CF6 1px, transparent 1px), 
                           linear-gradient(to bottom, #8B5CF6 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center',
          opacity: 0.1
        }}
      />
    </div>
  );
};

export default GridBackground;
