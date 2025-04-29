import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div>
        <div className="text-black text-center py-20 max-w-[1140px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#044588]">About SUCKA PUNCH</h2>
          <p>
            {" It's"} not a large bottle. {"It's"} not a dubious flask. {"It's"}{" "}
            something witty and fresh. Though small enough to fit in your palm,
            it packs a punch far more prominent than its size. Imagine going to
            a rooftop party, a beach bonfire, or a hike and having complete say
            over what, when, and how much you want to drink. SUCKA PUNCH excels
            there. It honors your tempo and decisions. Whether {"you're"}{" "}
            strolling through a throng at a music festival or relaxing under the
            sun, this tiny booster plays along.{" It's"} minimal maintenance,
            slight pressure, and just enough edge to keep things interesting. It
            gives you freedom—the type that goes well with water and a lot of
            character.
            <br /> <br />
            The first of its kind alcoholic water booster is SUCKA PUNCH. {"It's"}
            not a canister. Not a bottle. A few squeezes of your water produce a
            pleasantly smooth kick with few calories and no pressure. It works
            whether {"you're"} hanging or hydrating. By turning it into something
            you customize, {"it's"} reinventing casual drinking. {"Let's"} explore how
            this little but strong bottle changes the narrative on social
            drinking and hydration habits.
          </p>
        </div>
      </div>
      <div className="text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="bg-[#044588] h-full flex flex-col justify-center text-center py-10 md:py-0 order-2 md:order-1">
            <h2 className="px-10 md:px-20 text-3xl md:text-4xl font-bold mb-4">
              What Is SUCKA PUNCH, Exactly?
            </h2>
            <p className="px-10 md:px-20 text-lg leading-relaxed mb-4">
              A pocket-sized, subtle alcoholic water booster, SUCKA PUNCH is
              packaged in a squeeze bottle.{" It's"} low calorie count. It has
              taste.
              {" It's"} made for anyone wishing to combine convenience with some
              defiance. This is not only flavored water. It is drinkable. But
              you would not know it just by looking. {"That's"} the whole idea.
              Squeezing it into your water bottle starts the magic. Suddenly,{" "}
              {"it's "}hydration with a twist rather than just hydration. The
              greatest thing is? You
              {"don't"} require a cooler or a bartender.{" You're"} all set with
              only water, a squeeze or two.
            </p>
          </div>

          <div className="h-[500px] relative order-1 md:order-2">
            <Image
              src="/images/about-1.png"
              alt="About SUCKA PUNCH"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="h-[500px] relative">
            <Image
              src="/images/about-3.png"
              alt="Why SUCKA PUNCH Matters"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#044588] h-full flex flex-col justify-center text-center py-10 md:py-0">
            <h2 className="px-10 text-4xl font-bold mb-4">Why It Matters</h2>
            <p className="px-10 text-lg leading-relaxed mb-4">
              {" Let's"} be honest. Our drinking habits have evolved. More
              individuals prefer lighter choices, reduced sugar, and more power
              over what and how much they eat. According to a 2023 Nielsen
              survey, 40% of millennials and Gen Z drinkers said {"they're"}{" "}
              seeking better-for-you alcoholic beverages. Of course, they want
              something enjoyable but also adaptable. SUCKA PUNCH goes directly
              into that area.{" It's"} for the audience who wants a softer buzz
              without hauling around large beverages. {"It's"} about a
              lifestyle, not about getting intoxicated, one that combines a bit
              of mystery with personal control, mobility, and hydration.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
