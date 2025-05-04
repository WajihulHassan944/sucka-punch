import React from "react";
import Image from "next/image";
import Product from "./../../public/images/product-image1.png";

export default function ProductDescription() {
  return (
    <div className="relative max-w-[1140px] mx-auto mb-36 p-10 rounded-xl items-center flex flex-col md:flex-row bg-[url('/images/background-2.png')] bg-cover">
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-primary mb-2">
          What Is SUCKA PUNCH, Exactly?
        </h2>
        <p className="text-stone-700 mb-6 max-w-3xl">
          A pocket-sized, subtle alcoholic water booster, SUCKA PUNCH is
          packaged in a squeeze bottle. It&apos;s low calorie count. It has taste.
          It&apos;s made for anyone wishing to combine convenience with some
          defiance. This is not only flavored water. It is drinkable. But you
          would not know it just by looking. That&apos;s the whole idea. Squeezing it
          into your water bottle starts the magic. Suddenly, it&apos;s hydration with
          a twist rather than just hydration. The greatest thing is? You don&apos;t
          require a cooler or a bartender. You&apos;re all set with only water, a
          squeeze or two.
        </p>
      </div>

      <div>
        <Image src={Product} alt="Organic product" className="absolute right-10 -bottom-32 object-contain h-96 w-56 rotate-6"/>
      </div>
    </div>
  );
}
