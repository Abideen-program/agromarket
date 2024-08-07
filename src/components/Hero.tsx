"use client";

import { iconImages } from "@/utils/images";
import { Inter, DM_Sans } from "next/font/google";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { time } from "console";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

const Hero = () => {
  return (
    <AnimatePresence mode="popLayout">
      <div className="h-full  flex flex-col bg-[url('/back.png')] bg-fixed bg-no-repeat bg-center bg-cover z-0 mt-[0px] md:mt-[0px] lg:mt-[100px]">
        <div className=" mx-7 lg:mx-auto pt-5 md:pt-0 flex md:items-center md:flex-row flex-col gap-3 lg:w-[800px] 2xl:w-[1000px] 3xl:w-[1119px] md:h-[500px]">
          <div className="flex flex-col gap-3 md:gap-[20px] md:w-[584px] sm:w-[381px]">
            <motion.h2
              initial={{ scale: 0, rotate: "0deg" }}
              animate={{ scale: 1, rotate: "360deg" }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className={`font-bold text-[#141F39] text-[24px] xs:text-[30px] sm:text-[35px] md:text-[30px] lg:text-[40px] 2xl:text-[50px] leading-9 xs:leading-10 sm:leading-[45px] lg:leading-[50px] 2xl:leading-[65px] text-left tracking-tight overflow-hidden ${Sans.className}`}
            >
              Agriculture Made Smarter With Digital Infrastructure.
            </motion.h2>

            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`text-[#4F4F4F] text-[13px] sm:text-[14.5px] lg:text-[18px] sm:w-[98%] text-left leading-6 sm:leading-7 ${inter.className}`}
            >
              We aim to revolutionize how agricultural products are grown,
              traded, financed, and delivered in A frica through innovative
              technology.
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center sm:justify-start md:gap-8 sm:gap-5 gap-0 justify-between"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: "2.5deg" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="bg-[#006D33] rounded-lg w-[100px] h-[40px] xs:w-[150px] xs:h-[45px] lg:w-[170px] lg:h-[55px] text-white font-semibold flex items-center justify-center text-[13px] lg:text-base sm:text-sm"
              >
                Get Started
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: "-2.5deg" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center gap-2 cursor-pointer"
              >
                <p
                  className={`font-semibold text-[13px] lg:text-base sm:text-sm ${inter.className}`}
                >
                  Explore Products
                </p>
                <Image src={iconImages.ArrowRight} alt="arrow" />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0, rotate: "0deg", y: 0 }}
            animate={{ scale: 1, rotate: "360deg", y: [0, 150, -150, -150, 0] }}
            transition={{
              duration: 0.5,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            className="xl:-mt-14 mt-6 sm:mt-5 md:-mt-12"
          >
            <Image src={iconImages.Hero} alt="hero" className="w-[600px]" />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Hero;
