import Image from "next/image";
import React from "react";
import DiscountImg from "./assets/discount-img.png";

const Discount = () => {
  return (
    <>
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 rounded-[1rem] pt-[2.5rem] pb-[1.5rem] bg-gradient-to-r from-[#4e7240] to-[#727140]">
          <div className="flex flex-col items-center text-center">
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
          <div className="w-[200px] h-[145px] mx-auto -order-1">
            <Image src={DiscountImg} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Discount;
