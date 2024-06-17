import { iconImages } from "@/utils/images";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="m-7 border border-red-700 h-[50px] flex items-center justify-between overflow-hidden">
        <Image
          src={iconImages.Logo}
          width={100}
          alt="Logo"
          className="h-[50px]"
        />
        <Image
          src={iconImages.Hambuger}
          width={24}
          height={18}
          alt="Logo"
          className="cursor-pointer"
        />
      </div>
    </>
  );
};

export default Header;
