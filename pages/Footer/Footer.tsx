import Image from "next/image";
import React from "react";
import LogoNav from "./assets/logo.png";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

const Footer = () => {
  const footerSocial = [
    {
      icon: GrFacebookOption,
    },
    {
      icon: GrTwitter,
    },
    {
      icon: GrInstagram,
    },
  ];
  return (
    <>
      <section className="section">
        <div>
          <div className="text-[15px] flex gap-2 mb-4">
            <div className="w-[20px] h-[20px]">
              <Image src={LogoNav} />
            </div>
            <div className="font-bold text-white">Halloween</div>
          </div>
          <div className="text-[15px] whitespace-pre-line mb-10">
            {`Enjoy the scariest night\n of your life.`}
          </div>
          <div className="flex gap-4">
            {footerSocial.map((item, index) => (
              <div
                key={index}
                className="p-1 rounded-[.25rem] bg-gradient-to-r from-[#4e7240] to-[#727140]"
              >
                <item.icon />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
