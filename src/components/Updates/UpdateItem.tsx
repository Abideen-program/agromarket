import Image from "next/image";
import { Inter, DM_Sans } from "next/font/google";
import { iconImages } from "@/utils/images";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });

const UpdateItem = ({ image, name, date, title, snippet }: UpdateItem) => {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <Image alt="update one" src={image} />

      <div
        className={`${Sans.className} text-[#686868] flex items-center gap-3 px-2`}
      >
        <p className="">{name}</p>
        <Image alt="dot" src={iconImages.Dot} />
        <p className="">{date}</p>
      </div>

      <div className="px-2 flex flex-col gap-2">
        <h2
          className={`${Sans.className} text-[#003C1C] font-bold text-[18px] xs:text-[20px] xs:w-[95%]`}
        >
          {title}
        </h2>
        <p className={`${inter.className} text-[#686868] text-[15px]`}>
          {snippet}
        </p>
        <div className="flex items-center gap-2 cursor-pointer">
          <p className={`${Sans.className} text-[#006D33] font-semibold`}>
            Read More
          </p>
          <Image src={iconImages.Green} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
