
import React, { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
}

const videoItems: VideoItem[] = [
  {
    id: "video1",
    title: "WWE COPY?",
    thumbnail: "/lovable-uploads/45b5b683-1c0e-4a1d-8a27-23abecbacade.png",
    videoId: "dQw4w9WgXcQ" // Example YouTube ID - replace with actual videos
  },
  {
    id: "video2",
    title: "India Is a Lie",
    thumbnail: "/lovable-uploads/45b5b683-1c0e-4a1d-8a27-23abecbacade.png",
    videoId: "dQw4w9WgXcQ" // Example YouTube ID - replace with actual videos
  },
  {
    id: "video3",
    title: "AI COMPANY BEATS ZUCK",
    thumbnail: "/lovable-uploads/45b5b683-1c0e-4a1d-8a27-23abecbacade.png",
    videoId: "dQw4w9WgXcQ" // Example YouTube ID - replace with actual videos
  },
  {
    id: "video4",
    title: "The Future of Social Media",
    thumbnail: "/lovable-uploads/45b5b683-1c0e-4a1d-8a27-23abecbacade.png",
    videoId: "dQw4w9WgXcQ" // Example YouTube ID - replace with actual videos
  },
  {
    id: "video5",
    title: "Creator Economy Explained",
    thumbnail: "/lovable-uploads/45b5b683-1c0e-4a1d-8a27-23abecbacade.png",
    videoId: "dQw4w9WgXcQ" // Example YouTube ID - replace with actual videos
  }
];

const Portfolio = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<any>(null);

  // Set up autoplay with interval
  useEffect(() => {
    if (!api) return;

    // Default autoplay interval (faster)
    const defaultInterval = 3000;
    // Slower interval when hovering
    const hoverInterval = 6000;

    // Set up autoplay timer
    const autoplayInterval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, isHovering ? hoverInterval : defaultInterval);

    // Clean up the interval on unmount
    return () => clearInterval(autoplayInterval);
  }, [api, isHovering]);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-diskyo-violet/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-diskyo-red/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container-custom text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold gradient-text tracking-tight">
          OUR CREATIVE PORTFOLIO
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mt-6">
          Explore the variety and creativity in our work. We craft unique video content that 
          resonates with your audience and aligns perfectly with your brand identity.
        </p>
      </div>

      <div className="container-custom px-2 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: false,
          }}
          className="w-full"
          ref={carouselRef}
          setApi={setApi}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <CarouselContent>
            {videoItems.map((video) => (
              <CarouselItem 
                key={video.id} 
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2 transition-all duration-500"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer relative overflow-hidden rounded-xl border border-gray-800">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-diskyo-red/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play fill="white" size={28} className="ml-1" />
                          </div>
                        </div>
                      </AspectRatio>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                        <h3 className="text-lg font-bold text-white">{video.title}</h3>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl bg-diskyo-black border-gray-800">
                    <div className="aspect-video w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-md"
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 space-x-2">
            <CarouselPrevious className="position-static" />
            <CarouselNext className="position-static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
