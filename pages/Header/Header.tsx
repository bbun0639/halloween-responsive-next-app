import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { HiViewGrid } from "react-icons/hi";
import Image from "next/image";
import SpiderNav from "./assets/nav-img.png";
import LogoNav from "./assets/logo.png";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header
        className="grid items-center bg-white max-w-7xl mx-auto px-4 sm:px-6"
        id="header"
      >
        <div className="flex justify-between items-center md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 md:flex-1">
            <a
              href="#"
              className="text-base font-medium text-white flex items-center gap-x-2"
            >
              <Image src={LogoNav} width={20} height={21} />
              <span>Halloween</span>
            </a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className=" text-white hover:text-gray-200 focus:outline-none"
              aria-expanded="false"
              onClick={() => setNavOpen(!navOpen)}
            >
              <HiViewGrid className="w-[20px] h-[20px]" />
            </button>
          </div>
          <nav className="hidden md:flex gap-12">
            <a
              href="#"
              className="text-base font-medium text-white hover:text-gray-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-gray-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-gray-200"
            >
              Candy
            </a>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-gray-200"
            >
              New
            </a>
          </nav>
        </div>
        <div
          className={
            "fixed left-0 py-14 bg-black w-full transition-all ease duration-300 delay-150 rounded-b-3xl" +
            (navOpen ? " top-[0]" : " top-[-150%]")
          }
          id="navbar-menu"
        >
          <HiX
            className="w-[24px] h-[24px] absolute top-3 right-3 cursor-pointer"
            onClick={() => setNavOpen(!navOpen)}
          />
          <div className="absolute top-0">
            <Image src={SpiderNav} width={100} height={120} />
          </div>
          <ul className="flex flex-col items-center gap-y-6">
            <li className="nav-item">
              <a className="text-md uppercase font-black" href="#home">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="text-md uppercase font-black" href="#about">
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="text-md uppercase font-black" href="#candy">
                <span>Candy</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="text-md uppercase font-black" href="#new">
                <span>New</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
