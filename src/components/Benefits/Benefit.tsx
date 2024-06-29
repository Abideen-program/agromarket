import Image from "next/image";
import { Poppins } from "next/font/google";
import { iconImages } from "@/utils/images";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const Benefit = ({icon, title}: Benefit) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-[40px] h-[40px] rounded-md flex items-center justify-center bg-[#F0F5EC]">
        <Image src={icon} alt="farming" className="w-5" />
      </div>

      <p
        className={`${poppins.className} font-semibold text-sm text-[#141F39]`}
      >
        {title}
      </p>
    </div>
  );
};

export default Benefit;
