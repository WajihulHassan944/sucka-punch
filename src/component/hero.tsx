'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e35]/20 to-transparent"></div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden absolute right-4 top-4 z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center py-4">
        <div className="flex items-center gap-8 bg-[#1a2e35]/20 backdrop-blur-[2px] rounded-full px-2 py-1">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center px-6 py-2 rounded-full bg-[#1a2e35] bg-opacity-90 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-white/80"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-white/90 text-sm font-medium">SUCKA PUNCH</span>
            </div>
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white/90 text-sm font-medium px-4"
          >
            What is it?
          </button>
          <button
            onClick={() => scrollToSection('design')}
            className="text-white/70 hover:text-white/90 text-sm font-medium px-4"
          >
            Genius Design
          </button>
          <button
            onClick={() => scrollToSection('flavours')}
            className="text-white/70 hover:text-white/90 text-sm font-medium px-4"
          >
            Flavours Profile
          </button>
          <button
            onClick={() => scrollToSection('packaging')}
            className="text-white/70 hover:text-white/90 text-sm font-medium px-4"
          >
            Packaging
          </button>
          <button
            onClick={() => scrollToSection('buy')}
            className="text-white/70 hover:text-white/90 text-sm font-medium px-4"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-[#1a2e35]/95 backdrop-blur-sm transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-6 pt-16">
          {[
            { id: 'hero', label: 'SUCKA PUNCH' },
            { id: 'about', label: 'What is it?' },
            { id: 'design', label: 'Genius Design' },
            { id: 'flavours', label: 'Flavours Profile' },
            { id: 'packaging', label: 'Packaging' },
            { id: 'buy', label: 'Buy Now' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white text-lg font-medium px-6 py-3 hover:bg-white/10 rounded-full w-64 text-center"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-gradient-to-b from-[#f0fdf4] via-[#e8faf1] to-[#dcfce7] overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-heo.png"
          alt="Background"
          fill
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <Navbar />

      {/* Floating Images - Responsive */}
      <div className="absolute left-4 md:left-32 top-40 w-20 md:w-32 h-28 md:h-36 rotate-16 rounded-lg overflow-hidden z-20 animate-[float_6s_ease-in-out_infinite]">
        <Image
          src="/images/bg-trans-product.png"
          alt="Profile"
          width={136}
          height={136}
          className="object-cover"
        />
      </div>

      {/* Main Content - Responsive */}
      <div className="max-w-7xl mx-auto px-4 pt-4 sm:pt-10 pb-32 relative z-10">
        <div className="flex justify-center">
          <Image
            src="/images/sucka-logo.png"
            alt="SUCKA PUNCH Logo"
            width={150}
            height={40}
            className="object-contain w-24 md:w-auto"
          />
        </div>
     
        <div className="text-center max-w-5xl mx-auto px-4 md:px-0">
          <h1 className="font-xirod text-white text-4xl md:text-6xl lg:text-8xl mb-8">
            <span className="text-white text-lg md:text-xl lg:text-4xl -mb-6 md:-mb-20 max-w-2xl mx-auto block">
              Hydration with a Twist
            </span>
            <br />
            SUCKA PUNCH
          </h1>

          <p className="text-white text-base md:text-xl mb-8 md:mb-12 max-w-4xl mx-auto">
            {"Let's be honest. We've"} all had those times when we wanted to keep
            things light, enjoyable, and perhaps just a little sly—a warm day. A
            group of friends hanging out. A gym bag packed with protein bars and
            water bottles. Enter SUCKA PUNCH, the daring tiny bottle altering
            our perspective on remaining hydrated and letting free. Because it
            {"isn't, it doesn't"} appear like your typical drink.
          </p>
          <Link
            href="/blog"
            className="bg-[#044588] text-white font-medium py-3 md:py-4 rounded-full px-8 md:px-12 text-base md:text-xl font-xirod inline-block"
          >
            Buy Now from Our Retail Partners
          </Link>
        </div>
      </div>

      {/* Second Floating Image - Responsive */}
      <div className="absolute right-4 md:right-32 bottom-32 w-20 md:w-32 h-28 md:h-36 -rotate-12 rounded-lg overflow-hidden z-20 animate-[float_6s_ease-in-out_infinite] [animation-delay:1s]">
        <Image
          src="/images/bg-trans-product.png"
          alt="Profile"
          width={136}
          height={136}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
