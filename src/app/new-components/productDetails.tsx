import { Leaf } from "lucide-react";
import Drink from './../../../public/images/h3-cat-02-removebg-preview.png';
import Image from "next/image";

const features = [
  {
    id: 1,
    iconType: "leaf",
    bgColor: "border-2 border-dashed border-secondary",
    texts: ["PLANT-BASED", "TONICS"],
    textColor: "text-gray-700",
  },
  {
    id: 2,
    iconType: "circle",
    bgColor: "bg-blue-400",
    texts: ["RELIEVE STRESS +", "ENHANCE", "WELLBEING"],
    textColor: "text-white",
  },
  {
    id: 3,
    iconType: "leaf",
    bgColor: "border-2 border-dashed border-secondary",
    texts: ["FAST-ACTING", "SHOTS"],
    textColor: "text-gray-700",
  },
  {
    id: 4,
    iconType: "leaf",
    bgColor: "border-2 border-dashed border-secondary",
    texts: ["ALCOHOL OR", "CELEBRATION", "ALTERNATIVE"],
    textColor: "text-gray-700",
  },
];

export default function ProductDetails() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-y-5">
        
        {/* Left side */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center items-start md:items-end space-y-6 ">
          <div className="text-left lg:text-right">
            <h3 className="text-green-500 font-medium text-base md:text-lg lg:text-xl">DISCOVER OUR</h3>
            <h2 className="text-teal-900 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">CRAVE</h2>
            <h2 className="text-teal-900 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2">KAVA SHOT</h2>

            {/* Plant icon with line */}
            <div className="flex justify-start lg:justify-end my-4">
              <div className="relative h-12 w-6 lg:w-12">
                <Leaf className="text-green-500 w-6 h-6 absolute right-0" />
                <div className="w-px h-10 bg-gray-300 absolute right-3 top-6"></div>
              </div>
            </div>

            <h3 className="text-green-500 font-medium text-base md:text-lg lg:text-xl mt-6">ENHANCING ENERGY,</h3>
            <h3 className="text-green-500 font-medium text-base md:text-lg lg:text-xl">FOCUS, AND MOOD</h3>

            <p className="text-gray-600 mt-2 md:mt-4 max-w-full lg:max-w-xs ml-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et dui faucibus,
              posuere turpis vitae, euismod sapien. Praesent ut dui sollicitudin massa
              dapibus dapibus vitae vel nisl. Ut quis dolor sit amet risus scelerisque
              ullamcorper in vehicula massa.
            </p>
          </div>
        </div>

        {/* Center product image */}
        <div className="w-full lg:w-1/4  p-2 border-dashed border-secondary border rounded-2xl ">
          <div className="relative h-full flex justify-center items-center border rounded-2xl p-4 border-secondary">
            <Image src={Drink} alt="Drink" className="h-full object-cover" />
          </div>
        </div>

        {/* Right side features */}
        <div className="w-full lg:w-1/4 flex flex-col justify-center space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`${feature.bgColor} rounded-xl p-4 flex flex-col items-center`}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  {feature.iconType === "leaf" ? (
                    <div className="relative">
                      <Leaf className={`${feature.textColor} w-8 h-8`} />
                      <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-blue-200"></div>
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  {feature.texts.map((text, idx) => (
                    <p
                      key={idx}
                      className={`${feature.textColor} font-bold text-xs uppercase`}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full">
              KNOW ABOUT CRAVE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
