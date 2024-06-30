import { iconImages } from "@/utils/images";
import { DM_Sans, Inter } from "next/font/google";
import Image from "next/image";

const sans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="mt-20 px-7 xl:px-0 pt-20 pb-[50px] flex flex-col gap-10 bg-[#090909] text-[#FFFFFF]">
      <div className="flex flex-col md:flex-row xl:justify-between gap-10 xl:w-[800px] 2xl:w-[1000px] mx-auto">
        <div
          className={`${inter.className} flex flex-col gap-3 py-2 xl:py-0 md:w-[400px]`}
        >
          <Image alt="logo" src={iconImages.FooterLogo} />

          <p className="text-[13px] xl:text-[15px]">
            Ajeoba is an agriculture value-chain digital infrastructure provider
            focused on bridging various gaps identified in the agricultural
            value chain.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image alt="phone" src={iconImages.Telephone} />
              <p className="text-sm sm:text-[15px]">+234 9070534510</p>
            </div>
            <div className="flex items-center gap-3">
              <Image alt="email" src={iconImages.Mail} />
              <p className="text-sm sm:text-[15px]">admin@ajeoba.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Image alt="location" src={iconImages.Location} />
              <p className="text-sm sm:text-[15px]">
                13 Okotie Eboh Street, Ikoyi, Lagos State.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row xl:justify-between gap-10 xl:gap-14 md:mt-4">
          <div className="flex flex-col gap-3">
            <h3 className={`${sans.className} font-bold text xl:text-[17px]`}>
              Useful Links
            </h3>

            <p className={`${inter.className} text-sm sm:text-[15px]`}>
              Features
            </p>
            <p className={`${inter.className} text-sm sm:text-[15px]`}>About</p>
            <p className={`${inter.className} text-sm sm:text-[15px]`}>
              Service
            </p>
            <p className={`${inter.className} text-sm sm:text-[15px]`}>Team</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className={`${sans.className} font-bold text xl:text-[17px]`}>
              Help & Support
            </h3>

            <p className={`${inter.className} text-sm sm:text-[15px]`}>FAQ</p>
            <p className={`${inter.className} text-sm sm:text-[15px]`}>Blog</p>
            <p className={`${inter.className} text-sm sm:text-[15px]`}>
              Contact Us
            </p>
            <p className={`${inter.className} text-sm sm:text-[15px]`}>
              Support
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className={`${sans.className} font-bold text xl:text-[17px]`}>
              Resources
            </h3>

            <p className={`${inter.className} text-sm sm:text-[15px]`}>
              Guides and resources
            </p>
            <p className={`${inter.className} text-sm sm:text-[15px]`}>Team</p>
            <p className={`${inter.className} text-sm sm:text-[15px]`}>Tools</p>
            <p className={`${inter.className} text-sm sm:text-[15px]`}>
              Support
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 xl:w-[800px] 2xl:w-[1000px] xl:mx-auto">
        <p className="text-xs">
          &copy; Copyright &copy;2023 Ajeoba. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <Image alt="instagram" src={iconImages.Instagram} />
          <Image alt="twitter" src={iconImages.Twitter} />
          <Image alt="linkedin" src={iconImages.LinkedIn} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
