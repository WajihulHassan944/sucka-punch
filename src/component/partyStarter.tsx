import React from "react";
import Image from "next/image";
import Juice from './../../public/images/Frame 336(1).png'

const PartyStarter = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 max-w-[1240px] mx-auto">
      <div className="w-full md:w-1/2">
        <Image
          src={Juice}
          alt="Sucka Punch Party Starter"
          className="w-full"
        />
      </div>

      <div className="w-full md:w-1/2 mt-5">
        <h2 className="text-3xl font-bold text-secondary mb-4">
          A New Kind of Party Starter
        </h2>
        <p className="text-lg leading-relaxed">
          Forget about the ice buckets. Forget the single cups. Imagine arriving with only a little bottle of SUCKA PUNCH and a water bottle. All of a sudden, you are in charge. You determine its strength. How much you desire. When you want extra, that&apos;s the enchantment. Reinvented, it&apos;s BYOB. Bring your container. Bring your vibe.
        </p>
      </div>
    </section>
  );
};

export default PartyStarter;
