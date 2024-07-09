"use client";

import { useState, useEffect } from "react";
import { iconImages } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { navLinks } from "@/utils/data";
import { usePathname } from "next/navigation";

const sans = DM_Sans({ subsets: ["latin"] });

const Header = () => {
  const pathname = usePathname();
  const [showBackground, setShowBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  console.log(pathname);

  return (
    <>
      <div className={`px-7 lg:hidden z-[1000]`}>
        <nav
          className={`flex lg:hidden items-center justify-between py-2 w-full ${
            showBackground ? "bg-zinc-200 bg-opacity-90" : ""
          } top-0`}
        >
          <Link href={"/"}>
            <Image
              src={iconImages.Logo}
              width={100}
              alt="Logo"
              className="h-[50px]"
            />
          </Link>
          <div onClick={() => setMenuOpen(true)}>
            <Image
              src={iconImages.Hambuger}
              width={24}
              height={18}
              alt="Logo"
              className="cursor-pointer"
            />
          </div>

          <ul
            className={`w-[60%] h-[100vh] absolute top-0 border bg-zinc-200 bg-opacity-100 flex flex-col gap-5 py-12 px-[32px] z-[1000] transition-all duration-500 ease-in ${
              !menuOpen ? "right-[100%]" : "right-[0%]"
            }`}
          >
            <div
              className="absolute right-6 top-3 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src={iconImages.Close}
                width={24}
                height={18}
                alt="Logo"
                className="cursor-pointer"
              />
            </div>

            {navLinks.map((navLink) => (
              <li
                key={navLink.id}
                className={`text-[#000000] flex-col leading-[24px] hover:text-[#006D33] ${
                  pathname === navLink.path ? "text-[#006D33]" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <Link href={navLink.path}>{navLink.title}</Link>
              </li>
            ))}

            <div className="btns flex flex-col justify-center gap-5">
              <a href="/" className="text-[#213344] text-[16px]">
                Log In
              </a>
              <a
                href="/"
                className="text-[#FBFDFD] bg-[#006D33] px-3 py-2 w-fit text-[14px] rounded-md font-medium"
              >
                Sign Up
              </a>
            </div>
          </ul>
        </nav>
      </div>

      {/* DESKTOP NAVIGATION BAR */}

      <div
        className={`hidden lg:flex overflow-hidden fixed left-0 right-0 z-[1000] py-2 ${
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

          <div className="">
            <ul className="flex items-center gap-5">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  className={`text-[#000000] flex-col leading-[24px] hover:text-[#006D33] cursor-pointer ${
                    pathname === navLink.path ? "text-[#006D33]" : ""
                  }`}
                >
                  <Link href={navLink.path}>{navLink.title}</Link>
                </li>
              ))}
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
