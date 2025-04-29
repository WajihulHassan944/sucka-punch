import React from 'react';
import Image from 'next/image';
import BgImage from './../../../public/images/thanksgiving-pumpkin-autumn-fresh-juice-drink-cocktail-beverage.jpg';

const contentData = [
  {
    id: 1,
    text: `EERBS is an innovative brand that seamlessly blends tradition with a 
    contemporary spirit. Believing in the power of nature and local 
    wisdom, our products not only offer unique and delicious flavors but 
    also contribute to well-being.`,
  },
  {
    id: 2,
    text: `Believing in the power of nature and local wisdom, our products not 
    only offer unique and delicious flavors but also contribute to well-being. 
    EERBS, with its retro design and vibrant colors, reflects a 
    cheerful lifestyle, providing refreshment and comfort in every can.`,
  },
];

export default function Brand() {
  return (
    <div className="relative w-full overflow-hidden mb-7 md:mb-10 lg:mb-20">
      
      <div className="absolute inset-0 -z-10">
        <Image
          src={BgImage}
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-auto py-10 flex flex-col  bg-white/40 backdrop-blur-md">
        <div className="my-4 md:my-8 text-center border-b border-b-black">
          <div className="text-sm uppercase tracking-wider mb-2">ABOUT EERBS</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold uppercase leading-tight max-w-4xl mx-auto mb-6 px-10 md:px-0">
            HARMONIZING THE RICHNESS OF TRADITION WITH THE SPIRIT OF TODAY.
          </h2>
        </div>
        <div className="border-b border-b-black pb-4 md:pb-8">
          <div className="bg-black p-8">
            <div className="max-w-[940px] mx-auto flex flex-col md:flex-row gap-6">
              {contentData.map((item) => (
                <div key={item.id} className="w-full md:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black">
                      ✧
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-white">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
