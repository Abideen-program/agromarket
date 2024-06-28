import { iconImages } from "@/utils/images";
import { Inter, DM_Sans } from "next/font/google";
import Image from "next/image";
import SolutionItem from "./SolutionItem";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

const Solutions = () => {
  return (
    <div className="mb-5 bg-[#faf9f9] flex flex-col py-3">
      <div className="mx-7 flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center md:w-[640px] h-[108px] gap-4 mx-auto">
          <h2
            className={`${Sans.className} text-2xl xl:text-3xl font-bold text-[#006D33] overflow-hidden`}
          >
            Our Solutions
          </h2>

          <p
            className={`${inter.className} text-[#141F39] text-sm xl:text-base text-center xl:w-[70%]`}
          >
            Unlocking Agricultural Potential Through Comprehensive Solutions
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 2xl:grid-cols-3 mx-auto xl:w-[800px] 2xl:w-[1000px]">
          <SolutionItem
            icon={iconImages.Solution1}
            title={"Digital Infrastructure"}
            description={
              "Ajeoba connects sellers and buyers in agriculture, using technology for efficient transactions, enhancing supply chains operations."
            }
          />

          <SolutionItem
            icon={iconImages.Solution2}
            title={"Input Supply"}
            description={
              "Ajeoba links farmers to quality inputs for improved crop health: organic fertilizers, seeds, pesticides, herbicides, and equipments."
            }
          />

          <SolutionItem
            icon={iconImages.Solution3}
            title={"Financial Services"}
            description={
              "Ajeoba bridges financing gaps for Nigerian farmers, helping farmers gain access to small loans to boost agricultural process."
            }
          />

          <SolutionItem
            icon={iconImages.Solution4}
            title={"Market Arbitrage"}
            description={
              "Creating a B2B2C marketplace for farmers, seamlessly linking them with off-takers and facilitating the sale of high-quality produce."
            }
          />

          <SolutionItem
            icon={iconImages.Solution5}
            title={"Proprietary Investment"}
            description={
              "Ajeoba is working to build a diversified investment portfolio within the agricultural sector, creating high-yield investment opportunities for investors."
            }
          />

          <SolutionItem
            icon={iconImages.Solution6}
            title={"Intrinsic Database"}
            description={
              "Ajeoba addresses data scarcity in agriculture by creating a repository for predictive analysis, aiding farmers and others to make informed decisions."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
