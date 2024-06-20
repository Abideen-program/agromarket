import { iconImages } from "@/utils/images";
import { Inter, DM_Sans } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="min-h-[100vh] flex flex-col bg-[url('/back.png')] bg-fixed bg-no-repeat bg-center bg-cover z-0 mt-[0px] md:mt-[0px] lg:mt-[100px]">
      <div className=" mx-7 lg:mx-auto pt-5 md:pt-0 flex md:items-center md:flex-row flex-col gap-3 lg:w-[800px] 2xl:w-[1000px] 3xl:w-[1119px] md:h-[500px]">
        <div className="flex flex-col gap-3 md:gap-2 md:w-[584px] sm:w-[381px]">
          <h2
            className={`font-bold text-[#141F39] text-[25px] xs:text-[30px] sm:text-[35px] md:text-[30px] lg:text-[40px] 2xl:text-[50px] leading-9 xs:leading-10 sm:leading-[45px] lg:leading-[50px] 2xl:leading-[65px] text-left tracking-tight overflow-hidden ${Sans.className}`}
          >
            Agriculture Made Smarter With Digital Infrastructure.
          </h2>

          <p
            className={`text-[#4F4F4F] text-[13px] sm:text-[14.5px] lg:text-[18px] sm:w-[98%] text-left leading-6 sm:leading-7 ${inter.className}`}
          >
            We aim to revolutionize how agricultural products are grown, traded,
            financed, and delivered in A frica through innovative technology.
          </p>

          <div className="flex items-center sm:justify-start md:gap-8 sm:gap-5 gap-0 justify-between">
            <button className="bg-[#006D33] rounded-lg w-[100px] h-[40px] xs:w-[150px] xs:h-[45px] lg:w-[170px] lg:h-[55px] text-white font-semibold flex items-center justify-center text-[13px] lg:text-base sm:text-sm">
              Get Started
            </button>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <p
                className={`font-semibold text-[13px] lg:text-base sm:text-sm ${inter.className}`}
              >
                Explore Products
              </p>
              <Image src={iconImages.ArrowRight} alt="arrow" />
            </div>
          </div>
        </div>

        <div className="xl:-mt-14 mt-6 sm:mt-5 md:-mt-12">
          <Image src={iconImages.Hero} alt="hero" className="w-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
