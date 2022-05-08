import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatarHome1 from "./assets/home1-img.png";
import avatarHome2 from "./assets/home2-img.png";
import avatarHome3 from "./assets/home3-img.png";

import { BsArrowRightShort } from "react-icons/bs";

const SliderMenu = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: () => {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-card",
  };

  const contentDetail = [
    {
      title: "UOOOO\nTRICK OR\nTREAT!!",
      subTitle: "#1 Top Scariest Ghost",
      smallTitle: "The Labu “Reiza”",
      smallSubTitle: "The Living Pumpkin",
      imageSrc: avatarHome1,
      description:
        'Hi, I\'m Reiza, people call me "El Labu". I am currently trying to learn something new, building my own bike with parts made only in Malaysia.',
    },
    {
      title: "BRING BACK\nMY COTTON\nCANDY",
      subTitle: "#2 top Best duo",
      smallTitle: "Adino & Grahami",
      smallSubTitle: "No words can describe them",
      imageSrc: avatarHome2,
      description:
        "Adino steals cotton candy from his brother and eats them all in one bite, a hungry beast. Grahami can no longer contain his anger towards Adino.",
    },
    {
      title: "RESPAWN\nTHE SPOOKY\nSKULL",
      subTitle: "#3 Top Scariest  Ghost",
      smallTitle: "Captain Sem",
      smallSubTitle: "Veteran Spooky Ghost",
      imageSrc: avatarHome3,
      description:
        "In search for cute little puppy, Captain Sem has come back from his tragic death. With his hogwarts certified power he promise to be a hero for all of ghostkind.",
    },
  ];

  return (
    <div className="pb-[1rem]">
      <Slider {...settings}>
        {contentDetail.map((card, index) => (
          <div
            className="!grid gap-4 md:gap-16 lg:gap-12 px-7 !mb-4 mt-16 md:grid-cols-2 md:pt-[4rem] md:pb-[1.5rem] max-w-4xl mx-auto"
            key={index}
          >
            <div className="grid relative pt-[2rem] lg:pt-0">
              <div className="absolute right-0 flex flex-col items-end lg:bottom-0 lg:right-[48%]">
                <div className="text-[14px] font-bold text-white">
                  {card.smallTitle}
                </div>
                <div className="text-[14px]"> {card.smallSubTitle}</div>
              </div>
              <div className="flex justify-center h-[250px] md:h-[300px] lg:h-[400px] lg:-translate-y-[3rem]">
                <Image
                  className="object-contain flex-1"
                  src={card.imageSrc}
                  alt={`${card.title}`}
                />
              </div>
              <div className="absolute top-[7rem] right-[2rem] lg:top-[85%] lg:right-[43%] w-[8px] h-[8px] bg-white rounded-full after:content-[''] after:absolute after:w-[1px] after:h-[48px] after:lg:h-[70px] after:bg-white after:top-[-3rem] after:lg:top-[0rem] after:right-[45%]"></div>
            </div>
            <div>
              <div className="text-[18px] font-bold pb-4 text-white">
                {card.subTitle}
              </div>
              <div className="text-[32px] lg:text-[60px] font-black pb-4 md:pb-6 text-white whitespace-pre-line leading-9 lg:leading-[109%]">
                {card.title}
              </div>
              <div className="text-[15px] pb-4 lg:pb-10 lg:pr-6">
                {card.description}
              </div>
              <div className="flex justify-between items-center text-[16px]">
                <a
                  href="#"
                  className="bg-[#F4511F] text-white py-[1rem] px-[1.75rem] rounded-[0.5rem] font-medium "
                >
                  Book now
                </a>
                <div className="text-white flex items-center gap-2">
                  <a href="#">Track Record</a>
                  <BsArrowRightShort className="text-[1.5rem]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderMenu;
