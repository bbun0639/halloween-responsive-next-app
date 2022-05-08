import Image from "next/image";
import React from "react";
import LogoNav from "./assets/logo.png";
import GhostFooterRight from "./assets/footer1-img.png";
import GhostFooterLeft from "./assets/footer2-img.png";
import { footerInfos } from "./FooterInfos";
import SocailIcon from "./SocialIcon";

const Footer = () => {
  return (
    <>
      <section className="section !mx-0">
        <div className="relative overflow-hidden px-5 ">
          <div className="grid gap-y-8 md:grid-cols-4 md:gap-x-4 md:justify-items-center max-w-4xl mx-auto">
            <div>
              <div className="text-[15px] flex gap-2 mb-4">
                <div className="w-[20px] h-[20px]">
                  <Image src={LogoNav} alt="logo-footer" />
                </div>
                <div className="font-bold text-white">Halloween</div>
              </div>
              <div className="text-[15px] whitespace-pre-line mb-10">
                {`Enjoy the scariest night\n of your life.`}
              </div>

              <SocailIcon />
            </div>
            {footerInfos.map((item, index) => (
              <div key={index}>
                <div className="text-[16px] text-white font-bold mb-4">
                  {item.header}
                </div>
                <ul className="grid gap-y-[.35rem] text-[13px]">
                  {item.infos.map((list, index) => (
                    <li key={index}>
                      <a href={list.url}>{list.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <span className="flex justify-center text-[12px] mt-[4.5rem]">
            © Bedimcode. All rigths reserved
          </span>
          <div className="absolute bottom-[4rem] md:-bottom-[.5rem] right-[3rem] md:left-[15%] lg:-left-[4rem] w-[150px] h-[200px] lg:w-[180px] lg:h-[240px]">
            <Image
              src={GhostFooterLeft}
              alt="ghost-footer-left"
              className="transition duration-150 ease-out hover:-translate-y-2"
            />
          </div>
          <div className="absolute top-0 -right-[2rem] w-[100px] h-[200px] lg:w-[120px] lg:h-[230px]">
            <Image
              src={GhostFooterRight}
              alt="ghost-footer-left"
              className="transition duration-150 ease-out hover:-translate-y-2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
