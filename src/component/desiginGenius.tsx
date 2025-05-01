'use client';

import Image from 'next/image';
import Image1 from './../../public/images/about-4.png'

export default function DesignGenius() {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className="relative w-full bg-cover bg-center py-20 mb-20" style={{ backgroundImage: "url('/images/about-2.png')" }}>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-center gap-12 rounded-2xl p-10 relative z-10">
        
        <div className="w-full md:w-1/2">
          <Image 
            src={Image1}
            alt="SUCKA PUNCH bottle" 
            width={500} 
            height={500} 
            className="rounded-xl object-contain mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-[#65a0da]">
            The Genius Is in the Design
          </h2>

          <p className="text-lg leading-relaxed">
            Consider the dimensions of a hand sanitizer container or a lip balm. That is what <span className="font-bold">SUCKA PUNCH</span> resembles. It&apos;s subtle enough to throw in your clutch, gym bag, or pocket without attracting notice. 
          </p>

          <p className="text-lg leading-relaxed">
            No one is monitoring what you are squirting into your water bottle. It merely looks like a flavor booster—because technically, it is. But with a slight kick. Its packaging is fun without shouting <span className="italic">&quot;I contain alcohol!&quot;</span>
          </p>

          <p className="text-lg leading-relaxed">
            Its flip-top lid and no-spill squeeze tip? That&apos;s intentional. The entire experience is about enjoyment sans the hassle.
          </p>
          <button
            onClick={() => scrollToSection("product")}
            className="bg-[#044588] text-white font-medium py-3 md:py-4 rounded-full px-8 md:px-12 text-base md:text-xl font-xirod inline-block cursor-pointer"
          >
            Buy Now from Our Retail Partners
          </button>
        </div>
      </div>
    </section>
  );
}
