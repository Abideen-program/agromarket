"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { iconImages } from "@/utils/images";
import { delay } from "framer-motion";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const Partners = () => {
  const [width, setWidth] = useState<number | null>(null);
  const [slides, setSlides] = useState<number>(8);

  useEffect(() => {
    const width = window.innerWidth;
    setWidth(width);
  }, [width]);

  useEffect(() => {
    if (width! <= 425) {
      setSlides(2);
    } else if (width! > 425 && width! <= 768) {
      setSlides(6);
    } else {
      setSlides(8);
    }
  }, [width]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: slides,
    speed: 500,
  };

  return (
    <div className="h-[130px] overflow-y-hidden my-5 px-7 2xl:px-28 border border-red-600">
      <Slider {...settings}>
        <div className="w-full h-[137px] flex items-center justify-center">
          <div className="flex items-center justify-center m-auto w-full h-full">
            <Image src={iconImages.Icon1} alt="partner" className="" />
          </div>
        </div>

        <div className="w-full h-[137px] flex items-center justify-center">
          <div className="flex items-center justify-center m-auto w-full h-full">
            <Image src={iconImages.Icon2} alt="partner" className="" />
          </div>
        </div>

        <div className="w-full h-[137px] flex items-center justify-center">
          <div className="flex items-center justify-center m-auto w-full h-full">
            <Image src={iconImages.Icon3} alt="partner" className="" />
          </div>
        </div>

        <div className="w-full h-[137px] flex items-center justify-center">
          <div className="flex items-center justify-center m-auto w-full h-full">
            <Image src={iconImages.Icon4} alt="partner" className="" />
          </div>
        </div>

        <div className="w-full h-[137px] flex items-center justify-center">
          <div className="flex items-center justify-center m-auto w-full h-full">
            <Image src={iconImages.Icon5} alt="partner" className="" />
          </div>
        </div>

        <div className="w-full h-[137px] flex items-center justify-center">
          <div className="flex items-center justify-center m-auto w-full h-full">
            <Image src={iconImages.Icon6} alt="partner" className="" />
          </div>
        </div>

        <div className="w-full h-[137px] flex items-center justify-center">
          <div className="flex items-center justify-center m-auto w-full h-full">
            <Image src={iconImages.Icon7} alt="partner" className="" />
          </div>
        </div>

        <div className="w-full h-[137px] flex items-center justify-center">
          <div className="flex items-center justify-center m-auto w-full h-full">
            <Image src={iconImages.Icon8} alt="partner" className="" />
          </div>
        </div>
      </Slider>
    </div>

    // <div className="border border-red-400 my-10 px-7 lg:px-20">
    //   <Swiper
    //     autoplay
    //     slidesPerView={slides}
    //     spaceBetween={10}
    //     centeredSlides={false}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Pagination]}
    //     className={`h-[137px] w-full flex items-center`}
    //   >
    //     <SwiperSlide className="border border-black flex items-center justify-center">
    //       <div className="border border-red-400 w-full h-full flex items-center justify-center">
    //         <Image src={iconImages.Icon1} alt="partner" className="" />
    //       </div>
    //     </SwiperSlide>

    //     <SwiperSlide className="border border-black flex items-center justify-center w-[50px]">
    //       <div className="border border-red-400 w-full h-full flex items-center justify-center">
    //         <Image src={iconImages.Icon2} alt="partner" className="" />
    //       </div>
    //     </SwiperSlide>

    //     <SwiperSlide className="border border-black flex items-center justify-center w-[50px]">
    //       <div className="border border-red-400 w-full h-full flex items-center justify-center">
    //         <Image src={iconImages.Icon3} alt="partner" className="" />
    //       </div>
    //     </SwiperSlide>

    //     <SwiperSlide className="border border-black flex items-center justify-center w-[50px]">
    //       <div className="border border-red-400 w-full h-full flex items-center justify-center">
    //         <Image src={iconImages.Icon4} alt="partner" className="" />
    //       </div>
    //     </SwiperSlide>

    //     <SwiperSlide className="border border-black flex items-center justify-center w-[50px]">
    //       <div className="border border-red-400 w-full h-full flex items-center justify-center">
    //         <Image src={iconImages.Icon5} alt="partner" className="" />
    //       </div>
    //     </SwiperSlide>

    //     <SwiperSlide className="border border-black flex items-center justify-center w-[50px]">
    //       <div className="border border-red-400 w-full h-full flex items-center justify-center">
    //         <Image src={iconImages.Icon6} alt="partner" className="" />
    //       </div>
    //     </SwiperSlide>

    //     <SwiperSlide className="border border-black flex items-center justify-center w-[50px]">
    //       <div className="border border-red-400 w-full h-full flex items-center justify-center">
    //         <Image src={iconImages.Icon7} alt="partner" className="" />
    //       </div>
    //     </SwiperSlide>

    //     <SwiperSlide className="border border-black flex items-center justify-center w-[50px]">
    //       <div className="border border-red-400 w-full h-full flex items-center justify-center">
    //         <Image src={iconImages.Icon8} alt="partner" className="" />
    //       </div>
    //     </SwiperSlide>
    //   </Swiper>
    // </div>
  );
};

export default Partners;
