import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Pause, Volume2, Maximize, VolumeX, Minimize } from "lucide-react";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start with muted state matching the player
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [formattedCurrentTime, setFormattedCurrentTime] = useState("00:00");
  const [formattedDuration, setFormattedDuration] = useState("00:00");
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  // YouTube Player API integration
  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: 'sxPoSMlE1tI', // The ID from your YouTube URL
        playerVars: {
          controls: 0,
          showinfo: 0,
          rel: 0,
          autoplay: 0,
          mute: 1, // Start muted by default
          loop: 1,
          playsinline: 1,
          modestbranding: 1,
          enablejsapi: 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    };

    // Clean up
    return () => {
      window.onYouTubeIframeAPIReady = null;
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const onPlayerReady = (event) => {
    // Player is ready, set duration
    if (playerRef.current) {
      const videoDuration = playerRef.current.getDuration();
      setDuration(videoDuration);
      setFormattedDuration(formatTime(videoDuration));
    }
  };

  const onPlayerStateChange = (event) => {
    // Update UI based on player state
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
      startTimeUpdate();
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      setIsPlaying(false);
      stopTimeUpdate();
    } else if (event.data === window.YT.PlayerState.ENDED) {
      setIsPlaying(false);
      stopTimeUpdate();
      // Optionally restart the video
      if (playerRef.current) {
        playerRef.current.seekTo(0);
      }
    }
  };

  // Timer for updating current time
  let timeUpdateInterval = null;
  
  const startTimeUpdate = () => {
    if (timeUpdateInterval) clearInterval(timeUpdateInterval);
    
    timeUpdateInterval = setInterval(() => {
      if (playerRef.current) {
        const current = playerRef.current.getCurrentTime();
        setCurrentTime(current);
        setFormattedCurrentTime(formatTime(current));
      }
    }, 1000);
  };
  
  const stopTimeUpdate = () => {
    if (timeUpdateInterval) {
      clearInterval(timeUpdateInterval);
      timeUpdateInterval = null;
    }
  };

  useEffect(() => {
    return () => {
      // Clean up interval on component unmount
      stopTimeUpdate();
    };
  }, []);

  const handlePlayVideo = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
        // If video is being played and currently muted, unmute it
        if (isMuted) {
          playerRef.current.unMute();
          setIsMuted(false);
        }
      }
    }
  };

  const handleToggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
          .then(() => setIsFullscreen(true))
          .catch(err => console.log("Error attempting to enable fullscreen:", err));
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
        setIsFullscreen(true);
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
          .then(() => setIsFullscreen(false))
          .catch(err => console.log("Error attempting to exit fullscreen:", err));
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        setIsFullscreen(false);
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (playerRef.current) {
      playerRef.current.seekTo(newTime);
    }
  };

  // Handle fullscreen change events from browser
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      <div className="container-custom flex flex-col items-center text-center relative z-10">
        
        <h1 className="font-Audiowide text-4xl md:text-5xl tracking-tight mb-6 max-w-4xl">
          Let's Build your next <br/>  <span className="text-diskyo-red">project </span> together...
        </h1>
        
        <p className="text-lg font-cinzel md:text-xl text-gray-400 mb-8 max-w-2xl">
          From scripting to publishing, we handle everything for you. Just approve, and we deliver quality videos that grow your audience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button 
            onClick={scrollToContact} 
            className="font-Audiowide py-6 px-8 text-lg group"
          >
            Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>
        
        {/* Futuristic TV Video Player */}
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto perspective-1000">
          {/* TV Frame with ambient light effect */}
          <div className="relative">
            {/* Ambient light glow effect */}
            <div className="absolute -inset-4 bg-diskyo-violet/20 blur-2xl rounded-3xl opacity-50 animate-pulse-slower"></div>
            
            {/* Ultra-thin bezel frame */}
            <div className="relative bg-gray-900 rounded-2xl p-3 shadow-xl border border-gray-700 overflow-hidden">
              {/* Floating UI elements */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-sm font-medium text-white opacity-80">
                <div className="w-2 h-2 rounded-full bg-diskyo-red animate-pulse"></div>
                <span>LIVE</span>
              </div>
              
              {/* High-tech holographic display */}
              <div className="aspect-video bg-black rounded-xl overflow-hidden relative">
                {/* Holographic screen effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-diskyo-violet/5 to-transparent opacity-60 pointer-events-none"></div>
                <div className="absolute inset-0 border border-diskyo-violet/30 rounded-xl"></div>
                
                {/* YouTube iframe replacing HTML5 video */}
                <div className="relative w-full h-full">
                  <div id="youtube-player" className="absolute inset-0 w-full h-full"></div>
                </div>
                
                {/* Play overlay that shows when video is paused/not started */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900/80 to-black/80">
                    {/* Futuristic interface elements */}
                    <div className="absolute inset-0">
                      {/* Tech grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between opacity-20">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="w-full h-px bg-diskyo-violet"></div>
                        ))}
                      </div>
                      <div className="absolute inset-0 flex flex-row justify-between opacity-20">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="w-px h-full bg-diskyo-violet"></div>
                        ))}
                      </div>
                      
                      {/* Tech circles */}
                      <div className="absolute top-8 right-8 w-32 h-32 border border-diskyo-violet/30 rounded-full opacity-20"></div>
                      <div className="absolute bottom-12 left-12 w-48 h-48 border border-diskyo-violet/20 rounded-full opacity-10"></div>
                      
                      {/* HUD elements */}
                      <div className="absolute top-6 right-6 flex items-center gap-2 text-diskyo-violet opacity-60 text-xs">
                        <div className="px-2 py-1 border border-diskyo-violet/30 rounded">4K</div>
                        <div className="px-2 py-1 border border-diskyo-violet/30 rounded">HDR</div>
                      </div>
                    </div>
                    
                    {/* Play button */}
                    <div 
                      className="relative w-24 h-24 flex items-center justify-center cursor-pointer group"
                      onClick={handlePlayVideo}
                    >
                      <div className="absolute inset-0 bg-diskyo-red/80 rounded-full backdrop-blur-sm group-hover:bg-diskyo-red transition-colors duration-300"></div>
                      <div className="absolute inset-0 border border-white/30 rounded-full"></div>
                      <div className="absolute inset-0 bg-diskyo-red/40 rounded-full blur-md animate-pulse-slow"></div>
                      <Play fill="white" size={36} className="relative z-10" />
                    </div>
                  </div>
                )}
                
                {/* Screen reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
              </div>
              
              {/* Futuristic Control Panel */}
              <div className="flex items-center justify-between mt-3 px-2">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-diskyo-red transition-colors cursor-pointer"
                    onClick={handlePlayVideo}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </div>
                  <div 
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-diskyo-red transition-colors cursor-pointer"
                    onClick={handleToggleMute}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </div>
                </div>
                
                {/* Progress Bar - Now interactive */}
                <div className="flex-1 mx-4 h-4 flex items-center">
                  <input 
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleProgressChange}
                    className="w-full h-1 appearance-none bg-gray-700 rounded-full overflow-hidden cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, var(--diskyo-red, #ff0000) 0%, var(--diskyo-red, #ff0000) ${(currentTime / (duration || 1)) * 100}%, #4b5563 ${(currentTime / (duration || 1)) * 100}%, #4b5563 100%)`
                    }}
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-xs text-gray-400">{formattedCurrentTime} / {formattedDuration}</div>
                  <div 
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-diskyo-red transition-colors cursor-pointer"
                    onClick={handleToggleFullscreen}
                  >
                    {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -right-5 -top-5 w-10 h-10 bg-gray-900 border border-diskyo-violet rounded-full flex items-center justify-center transform rotate-45 shadow-lg">
              <div className="w-1 h-5 bg-diskyo-red"></div>
              <div className="w-5 h-1 bg-diskyo-red"></div>
            </div>
            
            <div className="absolute -left-4 -bottom-4 w-8 h-8 bg-gray-900 border border-diskyo-violet/50 rounded-full flex items-center justify-center transform shadow-lg">
              <div className="w-3 h-3 bg-diskyo-red rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;