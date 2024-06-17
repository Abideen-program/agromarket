import Header from "@/components/Header";
import { iconImages } from "@/utils/images";
import { Inter, DM_Sans } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col border border-gray-950 min-h-[100vh]">
      {/* <Header /> */}

      <div className="border border-red-600 mx-7 pt-10 flex flex-col gap-3 mt-[100px]">
        <div className="sm:w-[381px] flex flex-col gap-3">
          <h2
            className={`font-bold text-[#141F39] text-[25px] xs:text-[30px] sm:text-[35px] leading-9 xs:leading-10 sm:leading-[45px] text-left tracking-tight ${Sans.className}`}
          >
            Agriculture Made Smarter With Digital Infrastructure.
          </h2>

          <p
            className={`text-[#4F4F4F] text-[13px] sm:text-[14.5px] sm:w-[98%] text-left leading-6 sm:leading-8 ${inter.className}`}
          >
            We aim to revolutionize how agricultural products are grown, traded,
            financed, and delivered in Africa through innovative technology.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-[#006D33] rounded-lg w-[100px] h-[40px] xs:w-[150px] xs:h-[45px] sm:w-[170px] sm:h-[60px] text-white font-semibold flex items-center justify-center text-[13px] sm:text-sm">
            Get Started
          </button>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <p className={`font-semibold text-[13px] sm:text-sm ${inter.className}`}>
              Explore Products
            </p>
            <Image src={iconImages.ArrowRight} alt="arrow" />
          </div>
        </div>

        <div className="mt-6 sm:mt-10">
          <Image src={iconImages.Hero} alt="hero" />
        </div>
      </div>
    </div>
  );
}
