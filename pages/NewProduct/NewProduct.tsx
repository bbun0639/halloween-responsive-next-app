import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewProduct1 from "./assets/new1-img.png";
import NewProduct2 from "./assets/new2-img.png";
import NewProduct3 from "./assets/new3-img.png";
import NewProduct4 from "./assets/new4-img.png";
import NewProduct5 from "./assets/new5-img.png";
import NewProduct6 from "./assets/new6-img.png";

const NewProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          className: "center",
          centerMode: true,
        },
      },
    ],
  };

  const favoriteInfos = [
    {
      imageSrc: NewProduct1,
      title: "Haunted House",
      category: "Accessory",
      oldPrice: 29.99,
      newPrice: 14.99,
    },
    {
      imageSrc: NewProduct2,
      title: "Halloween Candle",
      category: "Accessory",
      oldPrice: 21.99,
      newPrice: 11.99,
    },
    {
      imageSrc: NewProduct3,
      title: "Witch Hat",
      category: "Accessory",
      oldPrice: 9.99,
      newPrice: 4.99,
    },
    {
      imageSrc: NewProduct4,
      title: "Rip",
      category: "Accessory",
      oldPrice: 44.99,
      newPrice: 24.99,
    },
    {
      imageSrc: NewProduct5,
      title: "Terrifying Crystal Ball",
      category: "Accessory",
      oldPrice: 12.99,
      newPrice: 5.99,
    },
    {
      imageSrc: NewProduct6,
      title: "Witch Broom",
      category: "Accessory",
      oldPrice: 14.99,
      newPrice: 7.99,
    },
  ];

  return (
    <>
      <section className="section" id="new">
        <div className="mb-8 whitespace-pre-line text-[20px] text-white font-bold text-center">
          New Arrivals
        </div>
        <Slider {...settings}>
          {favoriteInfos.map((item, index) => (
            <div
              className="px-2 relative grid grid-cols-2 md:grid-cols-[242px_242px_242px] gap-6 md:gap-14 mx-auto justify-center"
              key={index}
            >
              <div className="group flex flex-col items-center text-center rounded-[1rem] pt-[2.5rem] pb-[1.5rem] bg-gradient-to-r from-[#4e7240] to-[#727140]">
                <div className="absolute top-[8%] left-[8%] w-[42px] h-[28px] bg-[#F4511F] text-white text-[13px] flex justify-center items-center rounded">
                  New
                </div>

                <div className="w-[120px] h-[120px] mb-2">
                  <Image
                    src={item.imageSrc}
                    className="transition duration-150 ease-out group-hover:-translate-y-2"
                  />
                </div>
                <h3 className="text-[15px] font-medium text-white">
                  {item.title}
                </h3>
                <span className="text-[13px] font-medium pb-2">
                  {item.category}
                </span>
                <div className="flex gap-x-2 items-center">
                  <span className="text-[15px] font-medium text-white">
                    &#36;{item.oldPrice}
                  </span>
                  <span className="text-[12px] font-medium text-[#F4511F] line-through">
                    &#36;{item.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default NewProduct;
