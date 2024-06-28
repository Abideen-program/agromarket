import Image from "next/image";
import { iconImages } from "@/utils/images";
import { useSwiper } from "swiper/react";

const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex md:hidden items-center gap-4 mt-4">
      <div
        className="w-12 h-12 rounded-full flex flex-col items-center justify-center bg-[#EBFBF1] cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        <Image src={iconImages.Prev} alt="arrow" />
      </div>

      <div
        className="w-12 h-12 rounded-full flex flex-col items-center justify-center bg-[#006D33] cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <Image src={iconImages.Next} alt="arrow" />
      </div>
    </div>
  );
};

export default SwiperButton;
