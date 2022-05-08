import React from "react";
import { menuList } from "./menuList";

const Navbar = () => {
  return (
    <>
      <nav className="hidden md:flex">
        <ul className="gap-12 flex">
          {menuList.map((item, index) => (
            <li key={index}>
              <a
                href={item.targetUrl}
                className="text-base font-medium text-white hover:text-gray-200"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a className="border-2 border-white p-[.75rem_1.5rem] rounded-full">
              Support
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
