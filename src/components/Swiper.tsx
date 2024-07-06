"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Swiper = () => {
  const [isVisibile, setIsVisible] = useState(true);

  return (
    <div className="mt-20 flex flex-col gap-4 items-center justify-center">
      <button
        className="bg-blue-700 text-white text-3xl rounded-lg py-2 px-4"
        onClick={() => setIsVisible(!isVisibile)}
      >
        Show / Hide
      </button>
      <AnimatePresence>
        {isVisibile && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0 }}
            animate={{ rotate: "360deg", scale: 1 }}
            transition={{ duration: 1, ease: "backInOut" }}
            exit={{ rotate: "0deg", scale: 0 }}
            className="w-[150px] h-[150px] bg-black flex items-center justify-center"
          >
            <p className="text-white font-bold">TEXT</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Swiper;
