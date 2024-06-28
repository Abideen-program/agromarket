import React from "react";
import Image from "next/image";
import { Inter, DM_Sans } from "next/font/google";
import { iconImages } from "@/utils/images";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

const ClientItem = () => {
  const stars: any = [1, 2, 3, 4, 5].fill(iconImages.Star);
  return (
    <div className="perspective-1200  md:h-fit flex flex-col justify-center mt-3">
      <div className="flex flex-col gap-4 border rounded-3xl p-[25px] bg-[#F8FAF5] transition-all duration-300 ease-in hover:transform hover:-rotate-y-12 hover:shadow-md shadow-[0_10px_25px_-24px_rgb(0,0,0,0.3)]">
        <Image src={iconImages.Quote} alt="qoute" className="opacity-20" />
        <p
          className={`${inter.className} text-[13px] xs:text-sm xs:leading-[30px] leading-[25px] text-[#4F4F4F] xl:w-[90%]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper
          consequat in dolor mattis pellentesque suspendisse vulputate nec.
          Scelerisque elementum, consequat pharetra lectus eget vivamus ut.
          Magna aliquam tellus at volutpat cras aliquet facilisi quis
          adipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque
          blandit augue integer maecenas mattis amet, nec.
        </p>

        <div className="flex items-center gap-1">
          {stars.map((star: any, index: any) => (
            <Image key={index} src={star} alt="stars" className="" />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Image src={iconImages.Timo} alt="hero" className="w-12" />
          <div className="flex flex-col gap-1">
            <p className="text-[#006D33] text-sm font-semibold">
              Timothy Simmons
            </p>
            <p className="text-sm text-[#141F39]">TenedInc, CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientItem;
