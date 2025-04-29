'use client'
import { useState } from "react";
import Image from "next/image";

import Image2 from "./../../public/images/about-3.png";
import Image3 from "./../../public/images/about-8.png";
import Image4 from "./../../public/images/about-5.png";
import Image6 from "./../../public/images/about-7.png";
import Image5 from "./../../public/images/about-1.png";
import TakeItModal from "./takeItModal";
import { StaticImageData } from "next/image";

// Define types for the content
interface ModalContent {
  src: StaticImageData;
  alt?: string;
  caption: string;
  description: string | string[];
}

export default function WhereToTakeIt() {
  const firstImage: ModalContent = {
    src: Image5,
    caption: "Everyday Settings, Uncommon Freedom",
    description:
      "This is when it becomes fascinating. SUCKA PUNCH goes where other beverages cannot. Whether you&apos;re out discovering the world or relaxing at home, it tags along discreetly. It&apos;s perfect for those boring times but might use a little flair. From road trips to movie evenings to spontaneous hangs with pals, SUCKA PUNCH adds flexibility to the mundane. You don&apos;t need a bar setup, a chiller, or authorization. Simply squeeze, sip, and ride the wave.",
  };

  const imageArray: ModalContent[] = [
    {
      src: Image4,
      alt: "",
      caption: "Fitness Spaces Without the Fuss",
      description:
        "Working out at the gym? Of course. You may not drink it during your spin class, but that post-lift cooldown when everyone is settling down and reviewing the week has some merit. Sucka Punch fits in a gym bag, doesn&apos;t draw attention, and gives your post-session refreshment a little twist. It&apos;s a method to relax without disrupting your schedule or pace.",
    },
    {
      src: Image2,
      alt: "",
      caption: "Beaches, Pools, and Summer Days",
      description:
        "Glass is usually a no-go at the beach or poolside. Cans are large, and classic cocktails dissolve. SUCKA PUNCH is not affected by that. Add it to your water bottle; in seconds, you&apos;re sipping beneath the sun. There are no leaks. There is no garbage. It is simply a movable party in your luggage that goes well with sand and sunlight.",
    },
    {
      src: Image3,
      alt: "",
      caption: "Clubs and Concerts, Simplified",
      description:
        "Drinks are too expensive and queues are lengthy at the club. But what if you came in with your remedy in your back pocket? Mix SUCKA PUNCH with water first, or include it after you&apos;re inside. Either way, you miss the mayhem yet feel the excitement. When you&apos;re traveling from set to set and don&apos;t want to lug a lot of material, it&apos;s also great for festivals.",
    },
    {
      src: Image6,
      alt: "",
      caption: "Chill Vibes at Home or With Family",
      description: [
        "Brunch or barbecues make it simple to create your beverage without offending others. Put your bottle&apos;s taste or even the table&apos;s sparkling water.",
        "It&apos;s meant for those who travel, those who don&apos;t always wish to follow ancient norms, and those who wish to influence the atmosphere."
      ]
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="max-w-[1240px] mx-auto mb-20">
      <div>
        {/* Left column single image with pink overlay */}
        <div className="grid grid-cols-12 gap-4 mb-4 items-center">
          <div className="col-span-9 items-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-6 text-[#044588]">
              Where You Can Take It
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              This is when it becomes fascinating. SUCKA PUNCH goes where other
              beverages cannot. Let&apos;s run through several daily locations where
              this little renegade sparkles:
            </p>
          </div>
          <div className="col-span-3 relative rounded-lg overflow-hidden group">
            <Image
              src={firstImage.src}
              alt={firstImage.alt || ""}
              className="w-[260] h-[260px] object-cover transition-all duration-300 transform group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-white text-[#044588] p-3 rounded-xs">
              <div className="text-left text-sm font-semibold">
                {firstImage.caption}
              </div>
            </div>

           
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {imageArray.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden group"
            >
              <Image
                src={item.src}
                alt={item.alt || ""}
                className="w-[260] h-[260px] object-cover transition-all duration-300 transform group-hover:scale-105"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white text-[#044588] rounded-xs p-3">
                <div className="text-left text-sm font-semibold">
                  {item.caption}
                </div>
              </div>

            
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && modalContent && (
        <TakeItModal modalContent={modalContent} closeModal={closeModal} />
      )}
    </div>
  );
}