import Image from "next/image";
import React from "react";
import DiscountImg from "./assets/discount-img.png";

const Discount = () => {
  return (
    <>
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-y-8 rounded-[1rem] pt-[2.5rem] pb-[1.5rem] md:pt-[3rem] md:pb-[3rem] md:rounded-[3rem] bg-gradient-to-r from-[#4e7240] to-[#727140] max-w-4xl mx-auto">
          <div className="md:pr-[6rem] flex flex-col items-center text-center md:my-auto">
            <div className="mb-8 whitespace-pre-line text-[20px] text-white font-medium text-center">
              {`50% Discount\n  On New Products`}
            </div>
            <a
              href="#"
              className="bg-[#F4511F] text-white py-[1rem] px-[1.75rem] rounded-[0.5rem] font-medium "
            >
              Go to new
            </a>
          </div>
          <div className="w-[200px] h-[145px] mx-auto md:-order-1 md:w-[350px] md:h-[250px]">
            <Image src={DiscountImg} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Discount;
