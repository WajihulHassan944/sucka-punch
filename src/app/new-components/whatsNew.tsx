import Image from "next/image";
import Drink from './../../../public/images/about-6.png';

const cards = [
  {
    title: "For the Rule-Breakers and Vibe-Makers",
    description: "There's a type of individual who's going to enjoy SUCKA PUNCH. They're not looking for the fanciest cocktail or the trendiest IPA. They just want something that fits their life. They're a little rebellious. Somewhat low-key. They like to laugh, move around, and keep things chill. They don't need to shout about what they're drinking. They'd rather you didn't know. SUCKA PUNCH is for them.",
    button: false,
    imageHeight: 200,
  },
  {
    title: "A New Kind of Party Starter",
    description: "Forget about the ice buckets. Forget the single cups. Imagine arriving with only a little bottle of SUCKA PUNCH and a water bottle. All of a sudden, you are in charge. You determine its strength. How much you desire. When you want extra, that's the enchantment. Reinvented, it's BYOB. Bring your container. Bring your vibe.",
    button: true,
    imageHeight: 300,
  },
  {
    title: "Not Just a Gimmick",
    description: "Sure, it's fun. It's smart. But it functions as well. Real science supports the formulation. Clean ingredients. Proper dilution ratios. A well-balanced alcohol level that won't send you reeling. You can combine it with still water, sparkling water, or a sports drink. It holds its taste and mixes nicely. That by itself distinguishes it from most current fun beverages.",
    button: false,
    imageHeight: 400,
  },
];

export default function WhatsNew() {
  return (
    <section className="bg-[#e9ecf7] py-10 md:py-16 px-4 mb-7 md:mb-10 lg:mb-20">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-left -mb-4 md:-mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight text-gray-900">
            Let’s Through <br /> What’s New
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-baseline mt-10">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col relative">
              <div className="rounded-xl overflow-hidden mb-4 md:mb-6 relative">
                <Image
                  src={Drink}
                  alt={card.title}
                  className="w-full"
                  style={{ height: `${card.imageHeight}px`, objectFit: 'cover' }}
                />
               
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-1 md:mb-4">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
