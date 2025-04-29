import React from "react";
import dynamic from 'next/dynamic';
import HeroSection from "../component/hero";

// Dynamic imports for all components
const About = dynamic(() => import("./new-components/about"));
const DesignGenius = dynamic(() => import("@/component/desiginGenius"));
const WhereToTakeIt = dynamic(() => import("@/component/whereToTakeIt"));
const HydrationTwist = dynamic(() => import("@/component/hydrationTwist"));
const MixMatchDiscover = dynamic(() => import("@/component/mixMatchDiscover"));
const LowCalorie = dynamic(() => import("@/component/lowCalorie"));
const SustainabilityPackaging = dynamic(() => import("@/component/sustaiabilityPackaging"));
const FinalThoughts = dynamic(() => import("@/component/finalThoughts"));
const DrinksAccordion = dynamic(() => import("./new-components/drinkAccordion"));
const ImageContentSection = dynamic(() => import("./new-components/imageContent"));
const WhatsNew = dynamic(() => import("./new-components/whatsNew"));

// Dynamic import for AgeVerification
const AgeVerification = dynamic(() => import("@/components/AgeVerification"));

const Page = () => {
  return (
    <div>
      <AgeVerification />
      <div id="hero">
        <HeroSection />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="design">
        <DesignGenius />
      </div>

      <div id="whereToTake">
        <WhereToTakeIt />
      </div>

      <div id="hydration">
        <HydrationTwist />
      </div>

      <div id="flavours">
        <DrinksAccordion />
      </div>

      <div id="mix">
        <MixMatchDiscover />
      </div>

      <div id="calories">
        <LowCalorie />
      </div>

      <div id="packaging">
        <SustainabilityPackaging />
      </div>

      <div id="whatsNew">
        <WhatsNew />
      </div>

      <div id="imageContent">
        <ImageContentSection />
      </div>

      <div id="buy">
        <FinalThoughts />
      </div>
    </div>
  );
};

export default Page;
