import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [count, setCount] = useState(0);
  const [showContent, setShowContent] = useState(false);
  
  // Total duration in milliseconds (3000ms = 3 seconds)
  const totalDuration = 2000;
  // Updates per second (higher = smoother counter)
  const updatesPerSecond = 30;
  // Calculate interval between updates
  const updateInterval = 1000 / updatesPerSecond;
  // Calculate increment per update to reach 100 in 3 seconds
  const incrementPerUpdate = 100 / (totalDuration / updateInterval);

  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => {
        // Ensure we don't exceed 100
        const newCount = Math.min(count + incrementPerUpdate, 100);
        setCount(newCount);
        
        // If we've reached exactly 100, trigger the completion
        if (newCount === 100) {
          setTimeout(() => {
            setShowContent(true);
            if (onLoadingComplete) onLoadingComplete();
          }, 300);
        }
      }, updateInterval);
      
      return () => clearTimeout(timer);
    }
  }, [count, onLoadingComplete, incrementPerUpdate]);

  // Calculate the background color based on count
  const backgroundColor = `rgb(${255 - Math.floor(count * 2.55)}, ${255 - Math.floor(count * 2.55)}, ${255 - Math.floor(count * 2.55)})`;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500"
      style={{ 
        backgroundColor,
        opacity: showContent ? 0 : 1,
        pointerEvents: showContent ? 'none' : 'auto'
      }}
    >
      <div className="text-center">
        <div className="text-8xl font-cinzel transition-colors duration-300" 
          style={{ color: count > 50 ? 'white' : 'black' }}>
          {Math.floor(count)}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;