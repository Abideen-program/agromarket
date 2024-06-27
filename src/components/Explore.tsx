import Image from "next/image";
import { Inter, DM_Sans } from "next/font/google";
import { iconImages } from "@/utils/images";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

const Explore = () => {
  return (
    <div className="p-7 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:gap-7 xl:h-[400px] xl:w-[800px] 2xl:w-[1000px] mx-auto overflow-y-hidden">
        <div className="order-1 md:order-2">
          <Image src={iconImages.Explore} alt="hero" className="md:w-[450px]" />
        </div>
        <div className="flex flex-col gap-4 order-2 md:order-1 md:w-[600px]">
          <h2
            className={`${Sans.className} font-bold text-xl xs:text-2xl xl:text-3xl 2xl:text-4xl xl:leading-[44px] 2xl:leading-[48px] text-[#130F26]`}
          >
            Explore High Quality Farm Products And Inputs
          </h2>
          <p
            className={`${inter.className} text-[13px] xs:text-sm leading-6 text-[#4F4F4F] xl:w-[90%]`}
          >
            At our marketplace, we're not just selling farm products and inputs;
            we're offering you a pathway to seamless transactions within the
            value chain. We connect buyers and sellers to a robust and
            interactive B2B/B2C digital storefront for quality agricultural
            produce and inputs.
          </p>
          <button className="bg-[#006D33] rounded-lg w-[150px] h-[45px] lg:w-[200px] lg:h-[60px] text-white font-semibold flex items-center justify-center gap-3 text-[13px] lg:text-base sm:text-sm">
            <p>Explore Products</p>
            <Image alt="arrow" src={iconImages.White} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
