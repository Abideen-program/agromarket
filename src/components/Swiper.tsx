'use client'

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
  const [swiperTexts] = useState([
    "Invest in the future with stocks! Cultivate success by putting your money into high-quality opportunities. Unleash your potential with confidence.",
    "Dive into the world of stocks for a prosperous future. Our dedicated team ensures the organization and safety of your investments, fostering growth together.",
    "Enhance your investment portfolio with the finest in cutting-edge industries. Explore the world of sustainable and forward-thinking ventures.",
    "Discover the power of strategic investing. Join us in shaping a successful tomorrow by exploring innovative and sustainable ventures for your investment portfolio.",
  ]);

  return (
    <Swiper
      className="swiper-container w-full mt-20"
      spaceBetween={10}
      centeredSlides={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    >
      {swiperTexts.map((text, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="w-full h-[210px] md:h-[350px] overflow-hidden">
            <Image
              src={iconImages.Explore}
              layout="fill"
              objectFit="cover"
              priority={true}
              quality={100}
              className=""
              alt="image"
            />
            <div className="absolute inset-0 bg-black/70 opacity-40 z-10"></div>
            <div className="z-50 absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
              <h1 className="font-extrabold text-base md:text-2xl lg:text-3xl leading-snug mb-2 sm:mb-4 mt-2">
                {text}
              </h1>
              {index === 2 && (
                <Link
                  href="#"
                  className="no-underline text-xs sm:text-lg md:text-xl px-4 sm:px-8 py-2 sm:py-4 bg-blue-500 text-white rounded-full hover:bg-blue-700"
                >
                  Invest Now!
                </Link>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperJs;
