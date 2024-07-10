"use client";

import Image from "next/image";
import { Inter, DM_Sans } from "next/font/google";
import { iconImages } from "@/utils/images";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

const Explore = () => {
  return (
    <div className="p-7 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:gap-7 xl:h-[400px] xl:w-[800px] 2xl:w-[1000px] mx-auto overflow-y-hidden">
        <motion.div
          initial={{ scale: 0, rotate: "0deg", y: 0 }}
          whileInView={{
            scale: 1,
            rotate: "360deg",
            y: [0, 150, -150, -150, 0],
          }}
          transition={{
            duration: 0.5,
            ease: "backInOut",
            times: [0, 0.25, 0.5, 0.85, 1],
          }}
          className="order-1 md:order-2 scrollbar-none"
        >
          <Image src={iconImages.Explore} alt="hero" className="md:w-[450px]" />
        </motion.div>
        <div className="flex flex-col gap-4 order-2 md:order-1 md:w-[600px]">
          <motion.h2
            initial={{ scale: 0, rotate: "0deg" }}
            whileInView={{ scale: 1, rotate: "360deg" }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            className={`${Sans.className} font-bold text-xl xs:text-2xl xl:text-3xl 2xl:text-4xl xl:leading-[44px] 2xl:leading-[48px] text-[#130F26]`}
          >
            Explore High Quality Farm Products And Inputs
          </motion.h2>
          <motion.p
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`${inter.className} text-[13px] xs:text-sm leading-6 text-[#4F4F4F] xl:w-[90%]`}
          >
            At our marketplace, we're not just selling farm products and inputs;
            we're offering you a pathway to seamless transactions within the
            value chain. We connect buyers and sellers to a robust and
            interactive B2B/B2C digital storefront for quality agricultural
            produce and inputs.
          </motion.p>
          <motion.button
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileTap={{ scale: 0.95, rotate: "-2.5deg" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-[#006D33] rounded-lg w-[150px] h-[45px] lg:w-[200px] lg:h-[60px] text-white font-semibold flex items-center justify-center gap-3 text-[13px] lg:text-base sm:text-sm"
          >
            <p>Explore Products</p>
            <Image alt="arrow" src={iconImages.White} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
