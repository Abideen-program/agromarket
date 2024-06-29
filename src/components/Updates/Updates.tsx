import Image from "next/image";
import { Inter, DM_Sans, Poppins } from "next/font/google";
import { iconImages } from "@/utils/images";
import UpdateItem from "./UpdateItem";

const inter = Inter({ subsets: ["latin"] });
const Sans = DM_Sans({ subsets: ["latin"] });
const Updates = () => {
  return (
    <div className="px-7 border border-red-600 flex flex-col gap-4 my-10">
      <div className="flex flex-col gap-3 items-center">
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

      <div className="flex flex-col gap-5">
        <UpdateItem
          image={iconImages.Update1}
          name={"John Doe"}
          date={"Oct 10th, 2023"}
          title={"Agriculture made smarter with Ajeoba"}
          snippet={
            "Lorem ipsum dolor sit amet consectetur. Odio at in a duis feugiat in auctor ultricies. Id erat vive..."
          }
        />

        <UpdateItem
          image={iconImages.Update2}
          name={"John Doe"}
          date={"Oct 10th, 2023"}
          title={"Agriculture made smarter with Ajeoba"}
          snippet={
            "Lorem ipsum dolor sit amet consectetur. Odio at in a duis feugiat in auctor ultricies. Id erat vive..."
          }
        />

        <UpdateItem
          image={iconImages.Update3}
          name={"John Doe"}
          date={"Oct 10th, 2023"}
          title={"Agriculture made smarter with Ajeoba"}
          snippet={
            "Lorem ipsum dolor sit amet consectetur. Odio at in a duis feugiat in auctor ultricies. Id erat vive..."
          }
        />
      </div>
    </div>
  );
};

export default Updates;
