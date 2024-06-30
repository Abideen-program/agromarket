import { iconImages } from "@/utils/images";
import { DM_Sans, Inter } from "next/font/google";
import Image from "next/image";

const sans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Download = () => {
  return (
    <div className="px-7">
      <div className="bg-[#F0F5EC] rounded-3xl px-5 pt-5 flex flex-col gap-10 xs:gap-20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className={`${sans.className} font-bold text-[20px]`}>
              Download & Install Ajeoba Now and Enjoy Quality Products & Inputs
            </h2>
            <p
              className={`${inter.className} text-[13px] text-[#141F39] font-medium`}
            >
              Register with Ajeoba now to access top-quality agricultural
              products and inputs conveniently. Gain seamless transaction
              tracking, stay updated on new offerings, and receive personalized
              recommendations tailored to your needs. Elevate your farming
              experience today!
            </p>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-[#006D33] rounded-lg px-4 py-2 xs:w-[140px] xs:h-[52px] flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  alt="playstore"
                  src={iconImages.Playstore}
                  className="w-5 xs:w-7"
                />
                <div className="flex flex-col gap-1">
                  <Image alt="playstore" src={iconImages.Get} />
                  <Image alt="playstore" src={iconImages.GooglePlay} />
                </div>
              </div>
            </div>

            <div className="bg-[#006D33] rounded-lg px-4 py-2 xs:w-[140px] xs:h-[52px] flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  alt="playstore"
                  src={iconImages.Apple}
                  className="w-5 xs:w-7"
                />
                <div className="flex flex-col gap-1">
                  <Image alt="App store" src={iconImages.Download} />
                  <Image alt="App store" src={iconImages.App} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Image alt="phones" src={iconImages.Phone}/>
        </div>
      </div>
    </div>
  );
};

export default Download;
