import Image from "next/image";
import { Inter, DM_Sans, Poppins } from "next/font/google";
import { iconImages } from "@/utils/images";
import UpdateItem from "./UpdateItem";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });
const Updates = () => {
  return (
    <div className="px-7 xl:px-0 flex flex-col gap-8 my-10 xl:w-[800px] 2xl:w-[1000px] mx-auto">
      <div className="flex flex-col gap-3 items-center md:w-[500px] md:mx-auto">
        <h2
          className={`${Sans.className} font-bold text-2xl leading-[44px] text-[#006D33]`}
        >
          Our Latest Updates
        </h2>
        <p className={`${inter.className} text-[#141F39] text-center`}>
          Stay connected with Ajeoba's mission and vision for agricultural
          advancement.
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        <UpdateItem
          image={iconImages.Update1}
          name={"John Doe"}
          date={"Oct 14th, 2023"}
          title={"Agriculture made smarter with Ajeoba"}
          snippet={
            "Lorem ipsum dolor sit amet consectetur. Odio at in a duis feugiat in auctor ultricies. Id erat vive..."
          }
        />

        <UpdateItem
          image={iconImages.Update2}
          name={"Jane Doe"}
          date={"Nov 17th, 2023"}
          title={"Agriculture made smarter with Ajeoba"}
          snippet={
            "Lorem ipsum dolor sit amet consectetur. Odio at in a duis feugiat in auctor ultricies. Id erat vive..."
          }
        />

        <UpdateItem
          image={iconImages.Update3}
          name={"Mary Doe"}
          date={"Jan 20th, 2024"}
          title={"Agriculture made smarter with Ajeoba"}
          snippet={
            "Lorem ipsum dolor sit amet consectetur. Odio at in a duis feugiat in auctor ultricies. Id erat vive..."
          }
        />
      </div>

      <div className="flex items-center justify-center">
        <button className="bg-[#006D33] text-white w-[200px] h-[60px] rounded-[10px] flex items-center justify-center gap-3 mx-auto">
          <p>View More</p>
          <Image alt="arrow" src={iconImages.White} className=""/>
        </button>
      </div>
    </div>
  );
};

export default Updates;
