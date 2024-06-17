"use client";

import { useState, useEffect } from "react";
import { iconImages } from "@/utils/images";
import Image from "next/image";

const Header = () => {
  const [showBackground, setShowBackground] = useState(false);

  const TOP_OFFSET = 60;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`overflow-hidden fixed left-0 right-0 ${
        showBackground ? "bg-zinc-200 bg-opacity-90 top-0 transition-all duration-150 ease-in" : "top-7"
      }`}
    >
      <div
        className={`mx-7 h-[50px] flex items-center justify-between overflow-hidden`}
      >
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
    </div>
  );
};

export default Header;
