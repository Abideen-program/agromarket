"use client";

import Image from "next/image";
import { Inter, DM_Sans } from "next/font/google";
import { iconImages } from "@/utils/images";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ClientItem from "./ClientItem";
import SwiperButton from "./SwiperButton";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

const Client = () => {
  return (
    <div className="p-7 flex flex-col gap-7 mt-10">
      <div className="flex flex-col md:items-center gap-7 xl:w-[800px] 2xl:w-[1000px] mx-auto">
        <div className="flex flex-col gap-4 md:w-[600px]">
          <h2
            className={`${Sans.className} font-bold text-xl xs:text-2xl xl:text-3xl 2xl:text-4xl xl:leading-[44px] 2xl:leading-[48px] text-[#130F26]`}
          >
            What say happy clients
          </h2>
          <p
            className={`${inter.className} text-[13px] xs:text-sm leading-6 text-[#4F4F4F] xl:w-[90%]`}
          >
            At our marketplace, we're not just selling farm products and inputs;
            we're 2B/B2C digital storefront for quality agricultural produce and
            inputs.
          </p>
        </div>
      </div>

      <Swiper
        className="swiper-container w-full md:w-[85%] md:mx-auto"
        spaceBetween={10}
        centeredSlides={true}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true,
        // }}
      >
        <SwiperSlide>
          <ClientItem
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec."
            }
            name={"Timothy Simmons"}
            title={"TenedInc, CEO"}
            icon={iconImages.Timo}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ClientItem
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec."
            }
            name={"Mayowa S. Wilson"}
            title={"Zibarr.ltd, CEO"}
            icon={iconImages.Mayo}
          />
        </SwiperSlide>

        <SwiperButton />
      </Swiper>
    </div>
  );
};

export default Client;
