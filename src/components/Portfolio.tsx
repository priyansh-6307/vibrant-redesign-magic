import React from "react";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
}

const videoItems: VideoItem[] = [
  {
    id: "video1",
    title: "The Growing Problem of Superstition",
    thumbnail: "https://img.youtube.com/vi/FZ8rsLf9ENs/0.jpg",
    videoId: "FZ8rsLf9ENs" // Example YouTube ID - replace with actual videos
  },
  {
    id: "video2",
    title: "Why People follow anything blindly?",
    thumbnail: "https://img.youtube.com/vi/KzfUDwgyBW0/0.jpg",
    videoId: "KzfUDwgyBW0" // Example YouTube ID - replace with actual videos
  },
  {
    id: "video3",
    title: "9/11 Explained",
    thumbnail: "https://img.youtube.com/vi/nxOiUkwe14w/0.jpg",
    videoId: "nxOiUkwe14w" // Example YouTube ID - replace with actual videos
  },
  {
    id: "video4",
    title: "American Civilwar",
    thumbnail: "https://img.youtube.com/vi/2Adu4aHFmJI/0.jpg",
    videoId: "2Adu4aHFmJI" // Example YouTube ID - replace with actual videos
  },
  {
    id: "video5",
    title: "Social Media Hell",
    thumbnail: "https://img.youtube.com/vi/SlBDnFoLtb4/0.jpg",
    videoId: "SlBDnFoLtb4" // Example YouTube ID - replace with actual videos
  }
];

// Double the video items to create a seamless loop
const allVideoItems = [...videoItems, ...videoItems];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-diskyo-violet/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-diskyo-red/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container-custom text-center mb-16">
        <h2 className="text-5xl font-Audiowide md:text-6xl font-bold gradient-text tracking-tight">
          OUR CREATIVE PORTFOLIO
        </h2>
        <p className="text-lg md:text-xl font-cinzel text-gray-400 max-w-3xl mx-auto mt-6">
          Explore the variety and creativity in our work. We craft unique video content that 
          resonates with your audience and aligns perfectly with your brand identity.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee">
          {allVideoItems.map((video, index) => (
            <div 
              key={`${video.id}-${index}`} 
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer relative overflow-hidden rounded-xl border border-gray-800 shadow-lg">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;