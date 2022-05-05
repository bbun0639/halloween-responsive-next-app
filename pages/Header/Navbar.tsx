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
      {menu.map((item) => (
        <nav className="hidden md:flex gap-12">
          <a
            href={item.targetUrl}
            className="text-base font-medium text-white hover:text-gray-200"
          >
            {item.name}
          </a>
        </nav>
      ))}
    </>
  );
};

export default Navbar;
