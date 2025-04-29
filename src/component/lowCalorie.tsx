import React from "react";
import Image from "next/image";
import bgImage from "./../../public/images/about-2.png";

const LowCalorie = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center mb-10">
      <Image
        src={bgImage}
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative bg-neutral-800/90 text-center text-white rounded-lg p-10 max-w-2xl z-10">
        <h2 className="text-secondary text-3xl font-bold mb-4">
          Low Calorie, Low Key, High Flavor
        </h2>
        <p className="text-lg font-normal mb-4">
          Sucka Punch stays clean in a society fixated on macros and components.
          Every serving is low in calories. Many individuals find that to be important.
          You are not consuming empty carbohydrates. You are not piling sugar grams.
          You&apos;re sipping smart. It fits with almost every diet or lifestyle choice.
          Keto-friendly? Yep. Low-carb? For sure. Just trying not to feel like a balloon
          after happy hour? Join the group.
        </p>
      </div>
    </div>
  );
};

export default LowCalorie;
