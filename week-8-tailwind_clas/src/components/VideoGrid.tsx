import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "I was reincarnated as the 7th prince | Bandai Namco | Anime",
    image: "photo.png",
    thumbImage: "muse.png",
    author: "Muse Asia",
    views: "200K",
    timestamp: "1 day Ago",
  },
  {
    title: "I was reincarnated as the 7th prince | Bandai Namco | Anime",
    image: "photo.png",
    thumbImage: "muse.png",
    author: "Muse Asia",
    views: "200K",
    timestamp: "1 day Ago",
  },
  {
    title: "I was reincarnated as the 7th prince | Bandai Namco | Anime",
    image: "photo.png",
    thumbImage: "muse.png",
    author: "Muse Asia",
    views: "200K",
    timestamp: "1 day Ago",
  },
  {
    title: "I was reincarnated as the 7th prince | Bandai Namco | Anime",
    image: "photo.png",
    thumbImage: "muse.png",
    author: "Muse Asia",
    views: "200K",
    timestamp: "1 day Ago",
  },{
    title: "I was reincarnated as the 7th prince | Bandai Namco | Anime",
    image: "photo.png",
    thumbImage: "muse.png",
    author: "Muse Asia",
    views: "200K",
    timestamp: "1 day Ago",
  },
  {
    title: "I was reincarnated as the 7th prince | Bandai Namco | Anime",
    image: "photo.png",
    thumbImage: "muse.png",
    author: "Muse Asia",
    views: "200K",
    timestamp: "1 day Ago",
  },
  {
    title: "I was reincarnated as the 7th prince | Bandai Namco | Anime",
    image: "photo.png",
    thumbImage: "muse.png",
    author: "Muse Asia",
    views: "200K",
    timestamp: "1 day Ago",
  },
  {
    title: "I was reincarnated as the 7th prince | Bandai Namco | Anime",
    image: "photo.png",
    thumbImage: "muse.png",
    author: "Muse Asia",
    views: "200K",
    timestamp: "1 day Ago",
  },{
    title: "I was reincarnated as the 7th prince | Bandai Namco | Anime",
    image: "photo.png",
    thumbImage: "muse.png",
    author: "Muse Asia",
    views: "200K",
    timestamp: "1 day Ago",
  },
  {
    title: "I was reincarnated as the 7th prince | Bandai Namco | Anime",
    image: "photo.png",
    thumbImage: "muse.png",
    author: "Muse Asia",
    views: "200K",
    timestamp: "1 day Ago",
  },
  {
    title: "I was reincarnated as the 7th prince | Bandai Namco | Anime",
    image: "photo.png",
    thumbImage: "muse.png",
    author: "Muse Asia",
    views: "200K",
    timestamp: "1 day Ago",
  },
  {
    title: "I was reincarnated as the 7th prince | Bandai Namco | Anime",
    image: "photo.png",
    thumbImage: "muse.png",
    author: "Muse Asia",
    views: "200K",
    timestamp: "1 day Ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map(video => 
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
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
