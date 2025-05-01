import React from "react";
import Link from "next/link";
import Image from "next/image";

const FinalThoughts = () => {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div className="flex max-w-[1240px] mx-auto relative -mt-5">
        <div className="bg-gray-50 rounded-b-xl px-8 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#044588]">
            Final Thoughts
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-7">
            These days, we are all doing things a bit differently. Whether working from new places, 
            socializing intelligently, or taking care of our bodies while still having fun, the old models are receding.
            <br /><br />
            SUCKA PUNCH enters into that zone with confidence. It&apos;s fun without the hangover. Bold without being loud. Practical without being boring.
            <br /><br />
            If you&apos;re ready for hydration with a twist, consider a bottle of SUCKA PUNCH nearby. Your water just became a whole lot more fascinating.
          </p>
          <button
            onClick={() => scrollToSection("product")}
            className="bg-[#044588] text-white font-medium py-3 md:py-4 rounded-full px-8 md:px-12 text-base md:text-xl font-xirod inline-block cursor-pointer"
          >
            Buy Now from Our Retail Partners
          </button>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="bg-[#1a2e35] text-white py-4 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/sucka-logo.png"
              alt="SUCKA PUNCH Logo"
              width={80}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Copyright Text */}
          <div className="text-white/70 text-sm">
            © {new Date().getFullYear()} SUCKA PUNCH. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalThoughts;
