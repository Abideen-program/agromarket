"use client";

import Image from "next/image";
import { Inter, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

const SolutionItem = ({ icon, title, description }: SolutionItems) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "anticipate" }}
      className="perspective-1200 overflow-hidden rounded-xl"
    >
      <div className="border bg-white xs:h-[330px] py-5 xs:py-[50px] px-7 sm:px-[50px] rounded-xl flex flex-col items-center justify-center transition-all duration-300 ease-in gap-4 hover:transform hover:rotate-y-12 hover:shadow-md shadow-[0_50px_25px_-24px_rgb(0,0,0,0.3)]">
        <Image src={icon} alt="solution" />

        <div className="flex flex-col gap-3 items-center 2xl:h-[190px] py-2">
          <h3
            className={`${Sans.className} font-bold xs:text-xl text-[#141F39] overflow-hidden`}
          >
            {title}
          </h3>

          <p
            className={`${inter.className} text-[13px] text-[#4F4F4F] text-center`}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionItem;
