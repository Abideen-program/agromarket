import Benefits from "@/components/Benefits/Benefits";
import Client from "@/components/Client/Client";
import Download from "@/components/Download/Download";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Solutions from "@/components/Solutions/Solutions";
import SwiperJs from "@/components/Swiper";
import Updates from "@/components/Updates/Updates";
import { iconImages } from "@/utils/images";
import { Inter, DM_Sans } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Solutions />
      <Explore />
      <Client />
      <Benefits />
      <Updates />
      <Download />
    </>
  );
}
