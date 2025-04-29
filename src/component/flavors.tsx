import React from "react";
import Image from "next/image";
import Drink from "./../../public/images/svitlana-hclUIrSWwFE-unsplash.jpg";
import bgImage from "./../../public/images/bg-pattern-3.jpg";

const flavorData = [
  {
    title: "Bold, But Never Too Much",
    text: `Let&apos;s discuss flavor. No one wants to drink something that tastes like regret. Though not too strong, SUCKA PUNCH&apos;s tastes are strong. Every squeeze has character—just enough to awaken your water, not control it. These are not phony sugar tastes either. They&apos;re meant for adult taste senses looking for balance.`,
    align: "left",
    bg: "bg-gradient-to-br from-secondary to-primary",
  },
  {
    title: "Fresh and Fruity",
    text: `Consider fruit-forward combinations. A little sourness. A tidy conclusion. Not sticky. Not fake. Just enough kick to keep your taste senses interested. Every drop seems deliberate, from fruit combinations to tropical tangs. These are smarter, cleaner, and made for the present rather than your childhood fruit punches.`,
    align: "right",
    bg: "bg-gradient-to-br from-primary to-secondary",
  },
  {
    title: "Not Just One-Note",
    text: `Every taste&apos;s profundity guarantees its evolution with your sip. Go big with a few extra drops or add less for a delicate accent. Either way, you will receive something that seems layered and adult. Over time, that makes it more pleasurable. Not only the initial few swallows but the whole drink holds it up.`,
    align: "left",
    bg: "bg-gradient-to-br from-secondary to-primary",
  },
  {
    title: "Flavors That Grow With You",
    text: `The ever-changing taste selection adds to the enjoyment. A new favorite could drop at any time. Collaborations with artists, seasonal surprises, or limited editions guarantee that you will return to check what follows. Like following a favorite playlist; you love the hits but are constantly eager for the next song.`,
    align: "right",
    bg: "bg-gradient-to-br from-primary to-secondary",
  },
];

const Flavors = () => {
  return (
    <div className="max-w-[1240px] mx-auto mb-20 px-4">
      <div className="text-center max-w-3xl mb-10 mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-2">
          Flavor Profiles That Hit Right
        </h2>
        <p className="text-stone-700 mb-6 max-w-3xl">
          Let&apos;s discuss flavor. No one wants to drink something that tastes like
          regret. Though not too strong, SUCKA PUNCH tastes genuine and
          refreshing.
        </p>
      </div>

      <div className="grid grid-cols-2 items-center gap-10">
        {/* Image Section */}
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
          <Image
            src={bgImage}
            alt="Background"
            className="rounded-2xl rotate-12 w-full h-full"
          />
          <div className="absolute top-0 left-0 z-10 w-full h-full">
            <Image
              src={Drink}
              alt="Drink"
              className="rounded-2xl object-cover w-full h-full"
              fill
            />
          </div>
        </div>

        {/* Flavors Section */}
        <div className="space-y-3">
          {flavorData.map((flavor, index) => (
            <div
              key={index}
              className={`${flavor.bg} flex-col flex justify-end max-w-md p-3 rounded-md ${
                flavor.align === "right" ? "ml-auto" : "mr-auto"
              }`}
            >
              <h3 className="text-lg font-semibold text-white mb-1">
                {flavor.title}
              </h3>
              <p className="text-white text-sm">{flavor.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flavors;
