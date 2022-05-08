import Image from "next/image";
import React from "react";
import Trick1 from "./assets/trick-treat1-img.png";
import Trick2 from "./assets/trick-treat2-img.png";
import Trick3 from "./assets/trick-treat3-img.png";
import Trick4 from "./assets/trick-treat4-img.png";
import Trick5 from "./assets/trick-treat5-img.png";
import Trick6 from "./assets/trick-treat6-img.png";

const TrickOrTreat = () => {
  const favoriteInfos = [
    {
      imageSrc: Trick1,
      title: "Toffee",
      category: "Candy",
      price: 11.99,
    },
    {
      imageSrc: Trick2,
      title: "Bone",
      category: "Accessory",
      price: 8.99,
    },
    {
      imageSrc: Trick3,
      title: "Scarecrow",
      category: "Accessory",
      price: 15.99,
    },
    {
      imageSrc: Trick4,
      title: "Candy Cane",
      category: "Candy",
      price: 7.99,
    },
    {
      imageSrc: Trick5,
      title: "Pumpkin",
      category: "Candy",
      price: 19.99,
    },
    {
      imageSrc: Trick6,
      title: "Ghost",
      category: "Accessory",
      price: 17.99,
    },
  ];
  return (
    <>
      <section className="section" id="candy">
        <div className="mb-8 whitespace-pre-line text-[20px] text-white font-bold text-center">{`Trick Or Treat`}</div>
        <div className="px-4 grid grid-cols-2 md:grid-cols-[200px_200px_200px] gap-6 md:gap-14 mx-auto justify-center">
          {favoriteInfos.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center rounded-[1rem] py-6 bg-gradient-to-r from-[#4e7240] to-[#727140]"
            >
              <div className="w-[90px] h-[90px] mb-2">
                <Image
                  alt={item.title}
                  src={item.imageSrc}
                  className="transition duration-150 ease-out group-hover:-translate-y-2"
                />
              </div>
              <h3 className="text-[15px] lg:text-[20px] font-medium text-white">
                {item.title}
              </h3>
              <span className="text-[13px] font-medium">{item.category}</span>
              <span className="text-[15px] font-medium text-white">
                &#36;{item.price}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TrickOrTreat;
