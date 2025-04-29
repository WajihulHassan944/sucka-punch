import React from "react";
import Image from "next/image";
import bgImage from "./../../public/images/Frame 335(1).png"; 

const RuleBreakersVibeMakers = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12 max-w-7xl mx-auto">
      
      <div className="flex-1 text-left">
        <h2 className="text-primary text-3xl font-bold mb-3">
          For the Rule-Breakers and Vibe-Makers
        </h2>
        <p className="text-lg  mb-4">
          There&apos;s a type of individual who&apos;s going to enjoy{" "}
          <span className="font-bold"> SUCKA PUNCH</span>. They&apos;re not looking for the fanciest cocktail or the trendiest IPA. They just want something that fits their life. They&apos;re a little rebellious. Somewhat low-key. They like to laugh, move around, and keep things chill. They don&apos;t need to shout about what they&apos;re drinking. They&apos;d rather you didn&apos;t know.
        </p>
        <p>
          <span className="font-bold"> SUCKA PUNCH</span> is for them.
        </p>
      </div>

      <div className="flex-1">
        <Image
          src={bgImage}
          alt="Sucka Punch Background"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default RuleBreakersVibeMakers;
