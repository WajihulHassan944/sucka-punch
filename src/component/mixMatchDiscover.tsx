import React from "react";
import Image from "next/image";
import comboImage from "./../../public/images/heroShape1_1.png"; 

const MixMatchDiscover = () => {
  return (
    <div className="max-w-[1040px] relative bg-green-500/20 backdrop-blur-md rounded-2xl px-8 pt-10 pb-20 overflow-hidden mx-auto mb-20">
      {/* Text Section */}
      <div className="max-w-3xl mx-auto z-10 relative">
        <h2 className="text-3xl font-bold text-[#044588] mb-4 text-center">
          Mix, Match, and Discover
        </h2>
        <p className="text-stone-700 text-base text-center">
          This is when it becomes inventive. Flavors can be combined. You can
          combine them with fresh fruit or top off sparkling water. You are free
          to use several techniques or experiences. Personalisation lets you
          play with taste in a manner other beverages don&apos;t let you. That&apos;s a
          major component of the SUCKA PUNCH.
        </p>
      </div>

      <div className="absolute top-5 right-0 hidden md:block">
        <Image
          src={comboImage}
          alt="Mix Match"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default MixMatchDiscover;
