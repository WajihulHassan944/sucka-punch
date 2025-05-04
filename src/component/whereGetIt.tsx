import React from "react";
import Image from "next/image";
import Drink from "./../../public/images/616fb880096fd175c0690a17_flavor-infused+water+drink.jpeg";

const WhereGetIt = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid grid-cols-2 items-center mb-20">
      <div className="w-full mr-5">
        <h2 className="text-3xl font-bold text-secondary mb-4">
          Where to Get It
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Currently, SUCKA PUNCH can be found online and at certain retail
          partners. Watch their drops. Seasonal promotions, new partnerships,
          and new tastes occur frequently.
        </p>
        <p className="text-lg leading-relaxed">
        Once individuals taste it, they usually return.
        </p>
      </div>
      <div>
        <Image src={Drink} alt=""  />
      </div>
    </div>
  );
};

export default WhereGetIt;
