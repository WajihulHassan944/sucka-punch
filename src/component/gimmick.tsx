"use client";
import React from "react";
import Image from "next/image";
import Juice from "./../../public/images/rockkas-13.png";

const Gimmick = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 max-w-[1240px] mx-auto py-10 px-4">
      <div className="w-full md:w-1/2 mt-5">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Not Just a Gimmick
        </h2>
        <p className="text-lg leading-relaxed">
          Sure, it&apos;s fun. It&apos;s smart. But it functions as well. Real science
          supports the formulation. Clean ingredients. Proper dilution ratios. A
          well-balanced alcohol level that won&apos;t send you reeling. You can
          combine it with still water, sparkling water, or a sports drink. It
          holds its taste and mixes nicely. That by itself distinguishes it from
          most current &quot;fun&quot; beverages.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="float-animation">
          <Image
            src={Juice}
            alt="Sucka Punch Party Starter"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>

      {/* Add custom CSS here */}
      <style jsx>{`
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
};

export default Gimmick;
