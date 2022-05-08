import React, { useState } from "react";
import Image from "next/image";
import LogoNav from "./assets/logo.png";
import SliderMenu from "../Slider/SliderMenu";
import NavbarMobile from "./NavbarMobile";
import Navbar from "./Navbar";

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }

  return (
    <>
      <header
        className={`${
          colorChange ? "bg-gradient-to-r from-[#4e7240] to-[#727140]" : ""
        } z-50 grid items-center mx-auto px-5 sm:px-10 w-full fixed`}
        id="header"
      >
        <div className="flex justify-between items-center md:justify-start">
          <div className="flex justify-start lg:w-0 md:flex-1">
            <a
              href="#"
              className="text-base font-medium text-white flex items-center gap-x-2"
            >
              <Image src={LogoNav} width={20} height={21} alt="logo-navbar" />
              <span>Halloween</span>
            </a>
          </div>
          <NavbarMobile />
          <Navbar />
        </div>
      </header>
      <SliderMenu />
    </>
  );
};

export default Header;
