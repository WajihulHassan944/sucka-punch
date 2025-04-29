import React from "react";
import Image from "next/image";
import Drink from "./../../public/images/HydrationDrink2.jpg";

const PeopleAreSaying = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid grid-cols-2 items-center">
      <div>
        <Image src={Drink} alt="" />
      </div>
      <div className="w-full ml-5">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Not Just a Gimmick
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Sure, it&apos;s fun. It&apos;s smart. But it functions as well. Real science
          supports the formulation. Clean ingredients. Proper dilution ratios. A
          well-balanced alcohol level that won&apos;t send you reeling. You can
          combine it with still water, sparkling water, or a sports drink. It
          holds its taste and mixes nicely. That by itself distinguishes it from
          most current &quot;fun&quot; beverages.
        </p>
        <p className="text-lg leading-relaxed">
          More people are becoming fans. And they are not hesitant to spread the
          affection.
        </p>
      </div>
    </div>
  );
};

export default PeopleAreSaying;
