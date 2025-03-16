
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [textFilled, setTextFilled] = useState(false);

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
      
      // Enable text gradient fill at 50%
      if (currentProgress >= 50 && !textFilled) {
        setTextFilled(true);
      }
      
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
      <div className="text-center">
        <h1 
          className={cn(
            "text-6xl md:text-8xl font-bold tracking-tight transition-all duration-1000",
            textFilled ? "gradient-text" : "text-foreground"
          )}
        >
          DISK C
        </h1>
        <div className="w-64 mx-auto mt-8">
          <Progress value={progress} className="h-2" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
