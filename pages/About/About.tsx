import Image from "next/image";
import React from "react";
import AboutImg from "./assets/about-img.png";

const About = () => {
  const aboutInfos = {
    title: "About Halloween\n Night",
    description:
      "Night of all the saints, or all the dead, is celebrated on October 31 and it is a very fun international celebration, this celebration comes from ancient origins, and is already celebrated by everyone.",
    linkUrl: "#",
    imageUrl: AboutImg,
  };
  return (
    <>
      <section className="section" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 whitespace-pre-line text-[20px] text-white font-bold text-center">
              {aboutInfos.title}
            </div>
            <p className="mb-8">{aboutInfos.description}</p>
            <a
              href="#"
              className="bg-[#F4511F] text-white py-[1rem] px-[1.75rem] rounded-[0.5rem] font-medium "
            >
              Know more
            </a>
          </div>
          <div className="w-[200px] h-[280px] mx-auto">
            <Image src={aboutInfos.imageUrl} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
