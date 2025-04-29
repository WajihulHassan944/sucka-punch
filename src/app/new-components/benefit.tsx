import { Brain, Moon, Smile, Zap } from "lucide-react";
import Juice from './../../../public/images/gravity-juice.png'
import Image from "next/image";

export default function KavaBenefitsSection() {
  const benefitsList = [
    {
      icon: <Zap size={28} className="text-green-500" />,
      title: "STRESS RELIEF",
      description:
        "Donec malesuada posuere libero, eget tempor justo dapibus eu. Orci varius natoque.",
    },
    {
      icon: <Moon size={28} className="text-green-500" />,
      title: "IMPROVED SLEEP",
      description:
        "Donec malesuada posuere libero, eget tempor justo dapibus eu. Orci varius natoque.",
    },
    {
      icon: <Smile size={28} className="text-green-500" />,
      title: "ENHANCED MOOD",
      description:
        "Donec malesuada posuere libero, eget tempor justo dapibus eu. Orci varius natoque.",
    },
    {
      icon: (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-5 h-5 border-2 border-green-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
      ),
      title: "MUSCLE RELAXATION",
      description:
        "Donec malesuada posuere libero, eget tempor justo dapibus eu. Orci varius natoque.",
    },
    {
      icon: <Brain size={28} className="text-green-500" />,
      title: "MENTAL CLARITY",
      description:
        "Donec malesuada posuere libero, eget tempor justo dapibus eu. Orci varius natoque.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-teal-50 to-teal-100 py-10 md:py-16 px-8 relative overflow-hidden mb-7 md:mb-10 lg:mb-20">
      {/* Header section */}
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-8 md:mb-12 relative z-10">
          <h2 className="text-xl md:text-4xl font-bold text-teal-900 mb-2 md:mb-4">
            BENEFITS OF KAVA
          </h2>
          <p className="max-w-2xl mx-auto text-teal-800 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et dui faucibus, posuere turpis vitae, euismod sapien. Praesent ut
            dui. sollicitudin massa dapibus dapibus vitae vel nisl. Ut quis
            dolor sit amet risus scelerisque.
          </p>
        </div>

        <div className="flex flex-col ">
          <div className="max-w-sm mx-auto z-10 relative space-y-8 bg-white/40 backdrop-blur-md p-4 rounded-4xl">
            {benefitsList.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 mr-4 rounded-full border border-green-500 flex items-center justify-center bg-white">
                  {benefit.icon}
                </div>
                <div>
                  <h3
                    className={`font-semibold text-base md:text-lg mb-1 ${
                      index === 0 ? "text-green-500" : "text-teal-900"
                    }`}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-teal-700 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Image
            src={Juice}
            alt="Kava bottles"
            className="object-contain font transform -rotate-90 absolute right-0 md:right-72 top-[32%]"
          />
        </div>
      </div>
    </div>
  );
}
