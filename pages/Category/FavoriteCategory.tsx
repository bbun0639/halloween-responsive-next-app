import Image from "next/image";
import React from "react";
import Favorite1 from "./assets/category1-img.png";
import Favorite2 from "./assets/category2-img.png";
import Favorite3 from "./assets/category3-img.png";

const FavoriteCategory = () => {
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
      <div className="pt-[4.5rem] pb-[2rem]">
        <div className="pt-10 whitespace-pre-line text-[20px] text-white font-bold text-center">{`Favorite Scare \n Category`}</div>
      </div>
      {favoriteInfos.map((item, index) => (
        <div key={index}>
          <Image src={item.imageSrc} />
          <div>{item.title}</div>
          <div>{item.subTitle}</div>
        </div>
      ))}
    </>
  );
};

export default FavoriteCategory;
