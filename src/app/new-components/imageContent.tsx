import React from "react";
import Image from "next/image";
import Image1 from "./../../../public/images/market.png";

const ImageContentSection = () => {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-5 md:gap-8 max-w-[1240px] rounded-2xl bg-gray-100 md:mx-auto ">
      <div className="flex flex-col gap-2 md:gap-4 max-w-md mx-auto text-center p-4 md:p-0">
        <h2 className="text-2xl md:text-3xl font-bold text-[#044588]">Where to Get It</h2>

        <p className="text-sm md:text-base text-black">
        Currently, SUCKA PUNCH can be found online and at certain retail partners. Watch their drops. Seasonal promotions, new partnerships, and new tastes occur frequently. Once individuals taste it, they usually return.
        </p>
        <button
            onClick={() => scrollToSection("product")}
            className="bg-[#044588] text-white font-medium py-3 md:py-4 rounded-full px-8 md:px-12 text-base md:text-xl font-xirod inline-block cursor-pointer"
          >
            Buy Now from Our Retail Partners
          </button>
      </div>

      <div className="w-full md:w-1/2">
        <Image
          src={Image1}
          alt="Main Visual"
          className="w-full max-h-[600px] object-cover  md:rounded-r-2xl"
        />
      </div>
    </section>
  );
};

export default ImageContentSection;
