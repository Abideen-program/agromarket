import Image from "next/image";
import { Inter, DM_Sans, Poppins } from "next/font/google";
import { iconImages } from "@/utils/images";
import Benefit from "./Benefit";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const Benefits = () => {
  return (
    <div className="p-7 flex flex-col mt-10">
      <div className="flex flex-col md:flex-row md:items-center md:gap-7 xl:h-[400px] xl:w-[800px] 2xl:w-[1000px] mx-auto">
        <div className="flex flex-col gap-4 md:w-[600px]">
          <h2
            className={`${Sans.className} font-bold xs:leading-[38px] text-xl xs:text-2xl xl:text-3xl 2xl:text-4xl xl:leading-[44px] 2xl:leading-[48px] text-[#130F26] md:w-[503px]`}
          >
            Benefits from Ajeoba's Software?
          </h2>
          <p
            className={`${inter.className} text-[13px] xs:text-sm leading-6 text-[#4F4F4F] w-full md:w-[460px]`}
          >
            Our software facilitates connections between agricultural sellers
            and buyers, utilizing technology to streamline transactions and
            enhance supply chain efficiency.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4">
              <Benefit icon={iconImages.Farming} title="Farming Associations" />
              <Benefit icon={iconImages.Quality} title="Quality Assurance" />
              <Benefit
                icon={iconImages.Logistics}
                title="Logistics Companies"
              />
              <Benefit icon={iconImages.Input} title="Input Suppliers" />
            </div>
            <div className="flex flex-col gap-4">
              <Benefit icon={iconImages.Corporate} title="Corporate Buyers" />
              <Benefit
                icon={iconImages.Financial}
                title="Financial Companies"
              />
              <Benefit
                icon={iconImages.Extension}
                title="E-extension Officers"
              />

              <div className="flex items-center gap-2 mt-4 cursor-pointer">
                <p className="text-[#006D33] font-semibold text-sm">View Details</p>
                <Image src={iconImages.Green} alt="arrow" />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Image
            src={iconImages.Explore}
            alt="hero"
            className="w-[400px] md:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
