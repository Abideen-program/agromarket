"use client";

import Image from "next/image";
import { Inter, DM_Sans } from "next/font/google";
import { iconImages } from "@/utils/images";
import ClientItem from "./ClientItem";

// import Slider from "@ant-design/react-slick";

// import "slick-carousel/slick/slick.css";

// import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

const Client = () => {
  // const settings = {
  //   className: "flex gap-4",
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <div className="p-7 flex flex-col">
      <div className="flex flex-col md:items-center gap-7 xl:h-[400px] xl:w-[800px] 2xl:w-[1000px] mx-auto overflow-y-hidden">
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

        <div>
          <div className="w-full border border-red-900 h-[400px] overflow-x-hidden">
            <Swiper
              navigation={true}
              spaceBetween={10}
              modules={[Navigation]}
              className="border border-red-600 w-full"
            >
              <SwiperSlide className="p-10 border border-blue-500">
                Slide 1
              </SwiperSlide>
              <SwiperSlide className="p-10 border border-blue-500">
                Slide 2
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* <Swiper
          navigation={true}
          spaceBetween={10}
          modules={[Navigation]}
          className="border border-red-600 w-[300px]"
        >
          <SwiperSlide className="p-10 m-5 border border-blue-500">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="p-10 border border-blue-500">
            Slide 2
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper> */}

        {/* <div className="w-[350px] border border-red-400">
          <Slider {...settings}>
            <div className="">
              <ClientItem />
            </div>

            <div className="">
              <ClientItem />
            </div>
          </Slider>
        </div> */}
      </div>
    </div>
  );
};

export default Client;
