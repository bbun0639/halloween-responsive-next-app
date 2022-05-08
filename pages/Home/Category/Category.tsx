import Image from "next/image";
import React from "react";
import Favorite1 from "./assets/category1-img.png";
import Favorite2 from "./assets/category2-img.png";
import Favorite3 from "./assets/category3-img.png";

const Category = () => {
  const favoriteInfos = [
    {
      imageSrc: Favorite1,
      title: "Ghosts",
      subTitle: "Choose the ghosts, the scariest there are.",
    },
    {
      imageSrc: Favorite2,
      title: "Pumpkins",
      subTitle: "You look at the scariest pumpkins there is.",
    },
    {
      imageSrc: Favorite3,
      title: "Witch Hat",
      subTitle: "Pick the most stylish witch hats out there.",
    },
  ];
  return (
    <>
      <section className="section">
        <div className="mb-8 whitespace-pre-line text-[20px] lg:text-[36px] text-white font-bold text-center">{`Favorite Scare \n Category`}</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 lg:gap-x-20 max-w-4xl mx-auto">
          {favoriteInfos.map((item, index) => (
            <div
              key={index}
              className=" group flex flex-col items-center text-center"
            >
              <div className="transition-all duration-500 ease w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] mb-3">
                <Image
                  alt={`${item.title} Category`}
                  src={item.imageSrc}
                  className="transition duration-150 ease-out group-hover:-translate-y-2"
                />
              </div>
              <h3 className="text[18px] font-bold text-white">{item.title}</h3>
              <p>{item.subTitle}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
