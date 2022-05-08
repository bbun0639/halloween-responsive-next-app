import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiCartAlt } from "react-icons/bi";
import { newArrivals } from "./NewArrivals";

const NewProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // swipeToSlide: true,
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

  return (
    <>
      <section className="section !mx-0" id="new">
        <div className="mb-8 whitespace-pre-line text-[20px] lg:text-[36px] text-white font-bold text-center">
          New Arrivals
        </div>
        <Slider className="sm:max-w-2xl lg:max-w-4xl mx-auto" {...settings}>
          {newArrivals.map((item, index) => (
            <div
              className="group overflow-hidden relative !flex flex-col !w-[95%] mx-auto items-center justify-center rounded-[1rem] pt-[2.5rem] pb-[1.5rem] bg-gradient-to-r from-[#4e7240] to-[#727140]"
              key={index}
            >
              <button className="transition-all !duration-200 !ease-out absolute bottom-0 -right-[50px] group-hover:right-0 items-center flex justify-center bg-[#F4511F] w-[36px] h-[36px] rounded-[.25rem]">
                <BiCartAlt className="text-[20px]" />
              </button>
              <div className="absolute top-[8%] left-[8%] w-[42px] h-[28px] bg-[#F4511F] text-white text-[13px] flex justify-center items-center rounded">
                New
              </div>

              <div className="w-[120px] h-[120px] mb-2">
                <Image
                  alt={item.title}
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
          ))}
        </Slider>
      </section>
    </>
  );
};

export default NewProduct;
