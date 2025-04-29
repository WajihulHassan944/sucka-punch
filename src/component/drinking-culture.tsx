'use client'
import { useState } from "react";
import Image from "next/image";
import Water from './../../public/images/The-Importance-of-Hydration-for-Oral-Health.jpg'

export default function DrinkingCultureDesign() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="max-w-[1240px] mx-auto mb-28">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <Image
              src={Water} 
              alt="Drinking culture shift"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div 
          className="relative overflow-hidden rounded-xl shadow-2xl bg-secondary opacity-90 w-full md:w-1/2 mt-20"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="relative z-10 p-8 md:p-10">
            {/* Header section */}
            <div className="mb-6 border-b border-white/20 pb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
                Why It Matters:
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-white">
                The Shift in Drinking Culture
              </h2>
            </div>

            {/* Main content */}
            <div className="space-y-6">
              <p className="text-white text-lg leading-relaxed">
                Let&apos;s be honest. Our drinking habits have evolved. More individuals prefer lighter choices, reduced sugar, and more power over what and how much they eat. According to a 2023 Nielsen survey, <span className="font-semibold text-white">40% of millennials and Gen Z drinkers</span> said they&apos;re seeking &quot;better-for-you&quot; alcoholic beverages. Of course, they want something enjoyable but also adaptable.
              </p>

              <div
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 transform transition-transform duration-300"
                style={{
                  transform: hovered ? 'translateY(-4px)' : 'translateY(0)'
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="h-1 w-12 bg-white mr-3"></div>
                  <h3 className="text-xl font-bold text-white">SUCKA PUNCH</h3>
                </div>
                <p className="text-white">
                  SUCKA PUNCH goes directly into that area. It&apos;s for the audience who wants a softer buzz without hauling around large beverages. It&apos;s about a lifestyle, not about getting intoxicated, one that combines a bit of mystery with personal control, mobility, and hydration.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-[#0891B2] to-[#34D399] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        </div>
      </div>
    </div>
  );
}
