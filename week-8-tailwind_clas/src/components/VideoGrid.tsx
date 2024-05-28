import { VideoCard } from "./VideoCard";
import { VIDEOS } from "@/videos"
export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map(video => 
        <div>
          <VideoCard
            title={video.title}
            image ={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>
        </div>
      )}
    </div>
  );
};
