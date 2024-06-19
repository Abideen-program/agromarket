"use client";

import { useState, useEffect } from "react";
import { iconImages } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const sans = DM_Sans({ subsets: ["latin"] });

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
    <>
      <div
        className={`lg:hidden overflow-hidden fixed left-0 right-0 border border-red-400 ${
          showBackground
            ? "bg-zinc-200 bg-opacity-90 top-0 transition-all duration-150 ease-in"
            : "top-6"
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

      {/* DESKTOP NAVIGATION BAR */}

      <div
        className={`hidden lg:flex overflow-hidden fixed left-0 right-0 border border-red-400 ${
          showBackground
            ? "bg-zinc-200 bg-opacity-90 top-0 transition-all duration-150 ease-in"
            : "top-3"
        } ${sans.className}`}
      >
        <div
          className={`mx-auto h-[50px] lg:w-[800px] 2xl:w-[1000px] 3xl:w-[1119px] flex items-center justify-between overflow-hidden`}
        >
          <Link href="/">
            <Image
              src={iconImages.Logo}
              width={100}
              alt="Logo"
              className="h-[50px]"
            />
          </Link>

          <div className="border border-gray-950">
            <ul className="flex items-center gap-5">
              <li className="text-[#000000]">
                <Link href="/about">About Us</Link>
              </li>
              <li className="text-[#000000]">
                <Link href="/about">Marketplace</Link>
              </li>
              <li className="text-[#000000]">
                <Link href="/about">Updates</Link>
              </li>
              <li className="text-[#000000]">
                <Link href="/about">Community</Link>
              </li>
              <li className="text-[#000000]">
                <Link href="/about">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-[#000000] cursor-pointer">Login</p>
            <button className="bg-[#006D33] rounded-lg w-[120px] h-[45px] text-[#FBFDFD] font-medium flex items-center justify-center">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
