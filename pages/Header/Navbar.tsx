import React from "react";

const Navbar = () => {
  const menu = [
    {
      name: "Home",
      targetUrl: "#home",
    },
    {
      name: "About",
      targetUrl: "#about",
    },
    {
      name: "Candy",
      targetUrl: "#candy",
    },
    {
      name: "New",
      targetUrl: "#new",
    },
  ];
  return (
    <>
      <nav className="hidden md:flex">
        <ul className="gap-12 flex">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={item.targetUrl}
                className="text-base font-medium text-white hover:text-gray-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
