"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { iconImages } from "@/utils/images";

function SwiperJs() {
  return (
    <Swiper
      className="swiper-container w-4/5 mx-auto"
      spaceBetween={10}
      centeredSlides={true}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    >
      <SwiperSlide>
        <div className="w-full h-[210px] md:h-[350px] bg-gray-100 border-2 border-blue-700 overflow-hidden"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[210px] md:h-[350px] bg-gray-100 border-2 border-red-700 overflow-hidden"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[210px] md:h-[350px] bg-gray-100 border-2 border-green-700 overflow-hidden"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[210px] md:h-[350px] bg-gray-100 border-2 border-black overflow-hidden"></div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperJs;
