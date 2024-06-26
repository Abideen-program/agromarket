import { iconImages } from "@/utils/images";
import { Inter, DM_Sans } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

const Solutions = () => {
  return (
    <div className="p-7 border border-red-600 my-5 bg-[#faf9f9] flex flex-col gap-4">
      <div className="border border-blue-900 flex flex-col items-center justify-center  h-[108px] gap-4">
        <h2
          className={`${Sans.className} text-4xl font-bold text-[#006D33] overflow-hidden`}
        >
          Our Solutions
        </h2>

        <p
          className={`${inter.className} text-[#141F39] text-base text-center`}
        >
          Unlocking Agricultural Potential Through Comprehensive Solutions
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="perspective-1200 overflow-hidden">
          <div className="bg-white h-[316px] py-[53px] px-[51px] rounded-lg flex flex-col items-center justify-center transition-all duration-300 ease-in gap-4 hover:transform hover:rotate-y-12 hover:shadow-md">
            <Image src={iconImages.Solution1} alt="solution" />

            <h3
              className={`${Sans.className} font-bold text-xl text-[#141F39]`}
            >
              Digital Infrastructure
            </h3>

            <p
              className={`${inter.className} text-sm text-[#4F4F4F] text-center`}
            >
              Ajeoba connects sellers and buyers in agriculture, using
              technology for efficient transactions, enhancing supply chains
              operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
