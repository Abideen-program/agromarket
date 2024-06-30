import { iconImages } from "@/utils/images";
import { DM_Sans, Inter } from "next/font/google";
import Image from "next/image";

const sans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Download = () => {
  return (
    <div className="px-7 xl:px-0 xl:w-[800px] 2xl:w-[1000px] xl:mx-auto mt-10 md:my-20">
      <div className="bg-[#F0F5EC] rounded-3xl px-5 pt-5 md:pb-5 flex flex-col md:flex-row md:items-center gap-10 relative">
        <div className="flex flex-col gap-6 md:w-[390px] xl:w-[450px] 2xl:w-[500px]">
          <div className="flex flex-col gap-4">
            <h2
              className={`${sans.className} font-bold text-[20px] xl:w-[80%]`}
            >
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

        <div className="md:absolute md:bottom-0 right-5 xl:right-10 2xl:right-40">
          <Image alt="phones" src={iconImages.Phone} className="w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Download;
