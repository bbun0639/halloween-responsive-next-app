import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import Image from "next/image";
import SpiderNav from "./assets/nav-img.png";
import { HiViewGrid } from "react-icons/hi";

// type NavMobileProps = {
//   navOpen: boolean;
//   setNavOpen: (open: boolean) => void;
// };

const NavMobile = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="flex md:hidden">
        <button
          type="button"
          className=" text-white hover:text-gray-200 focus:outline-none"
          aria-expanded="false"
          onClick={() => setNavOpen(!navOpen)}
        >
          <HiViewGrid className="w-[20px] h-[20px]" />
        </button>
      </div>
      <div
        className={
          "z-10 fixed left-0 py-14 bg-black w-full transition-all ease duration-300 delay-150 rounded-b-3xl" +
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
    </>
  );
};

export default NavMobile;
