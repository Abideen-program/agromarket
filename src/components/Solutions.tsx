import { Inter, DM_Sans } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

const Solutions = () => {
  return (
    <div className="px-7 border border-red-600 my-5">
      <div className="border border-blue-900 flex flex-col items-center justify-center w-[380px] h-[108px] gap-4">
        <h2
          className={`${Sans.className} text-4xl font-bold text-[#006D33] overflow-hidden`}
        >
          Our Solutions
        </h2>

        <p className={`${inter.className} text-[#141F39] text-base text-center`}>
          Unlocking Agricultural Potential Through Comprehensive Solutions
        </p>
      </div>
    </div>
  );
};

export default Solutions;
