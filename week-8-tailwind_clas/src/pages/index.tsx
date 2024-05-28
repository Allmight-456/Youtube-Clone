import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div >
    <VideoCard title = {"I was reincarnated as the 7th prince | Bandai Namco | Anime"}
    image={"photo.png"}
    thumbImage ={"muse.png"}
    author= {"Muse Asia"}
    views ={"200K"}
    timestamp={"1 day Ago"}
    > </VideoCard>
    </div>
    
  )
}
