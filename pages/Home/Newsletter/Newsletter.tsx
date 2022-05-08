import React from "react";

const Newsletter = () => {
  const aboutInfos = {
    title: "About Halloween\n Night",
    description: "Promotion new products and sales. Directly to your inbox",
    linkUrl: "#",
  };
  return (
    <>
      <section className="section" id="about">
        <div className="grid md:grid-cols-[.5fr] lg:grid-cols-[.4fr] xl:grid-cols-[.3fr] gap-y-8 justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 whitespace-pre-line text-[20px] lg:text-[36px] text-white font-bold text-center">
              {`Our Newsletter`}
            </div>
            <p className="mb-8">{aboutInfos.description}</p>
            <form className="w-full p-4 flex gap-2 rounded-[.75rem] bg-gradient-to-r from-[#4e7240] to-[#727140]">
              <input
                placeholder="Enter your email"
                className="w-full border-0 outline-0 bg-transparent pl-2 text-[14px] text-white"
              />
              <button
                type="button"
                className="bg-[#F4511F] text-[15px] text-white font-meduim py-[1rem] px-[1.75rem] rounded-[0.5rem] font-medium "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
