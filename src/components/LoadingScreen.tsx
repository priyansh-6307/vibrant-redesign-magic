
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    // Animate progress over 5 seconds
    const duration = 5000; // 5 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;
    
    let currentProgress = 0;
    
    const timer = setInterval(() => {
      currentProgress += increment;
      setProgress(Math.min(currentProgress, 100));
      
      // Update fill width based on progress
      setFillWidth(Math.min(currentProgress, 100));
      
      // Complete loading when reaching 100%
      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 500); // Small delay before transition
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-diskyo-black">
      <div className="text-center relative">
        {/* Text with stroke */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-transparent relative">
          {/* Text with stroke effect */}
          <span className="absolute inset-0 text-foreground" style={{
            WebkitTextStroke: '1px white'
          }}>DISK C</span>
          
          {/* Liquid fill effect */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillWidth}%` }}>
            <span className="gradient-text" style={{
              WebkitTextStroke: '1px white'
            }}>DISK C</span>
          </div>
          
          {/* Invisible text to maintain layout */}
          <span className="invisible">DISK C</span>
        </h1>
        
        <div className="w-64 mx-auto mt-8">
          <Progress value={progress} className="h-2" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
