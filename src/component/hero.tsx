"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout, loading } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setDropdownOpen(false);
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  // Get initials for avatar fallback
  const getInitials = () => {
    if (!user) return "?";
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    return user.email.substring(0, 2).toUpperCase();
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
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center py-4">
        <div className="flex items-center gap-8 bg-[#1a2e35]/20 backdrop-blur-[2px] rounded-full px-2 py-1">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center px-6 py-2 rounded-full bg-[#1a2e35] bg-opacity-90 shadow-sm"
          >
            <div className="flex items-center gap-2 cursor-pointer">
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
              <span className="text-white/90 text-sm font-medium">
                SUCKA PUNCH
              </span>
            </div>
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white/70 hover:text-white/90 text-sm font-medium px-4 cursor-pointer"
          >
            What is it?
          </button>
          <button
            onClick={() => scrollToSection("design")}
            className="text-white/70 hover:text-white/90 text-sm font-medium px-4 cursor-pointer"
          >
            Genius Design
          </button>
          <button
            onClick={() => scrollToSection("flavours")}
            className="text-white/70 hover:text-white/90 text-sm font-medium px-4 cursor-pointer"
          >
            Flavours Profile
          </button>
          <button
            onClick={() => scrollToSection("packaging")}
            className="text-white/70 hover:text-white/90 text-sm font-medium px-4 cursor-pointer"
          >
            Packaging
          </button>
          <button
            onClick={() => scrollToSection("product")}
            className="text-white/70 hover:text-white/90 text-sm font-medium px-4 cursor-pointer"
          >
            Buy Now
          </button>
          
          {/* Auth Buttons */}
          <div className="flex items-center gap-2 pl-2">
            {loading ? (
              <div className="w-8 h-8 rounded-full bg-white/10 animate-pulse flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white/80 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : user ? (
              <div ref={dropdownRef} className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-[#044588] flex items-center justify-center text-white text-sm cursor-pointer hover:bg-[#033366] transition-colors">
                    {getInitials()}
                  </div>
                </button>
                
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b">
                      <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
                    </div>
                    
                    {user.isAdmin && (
                      <Link 
                        href="/admin" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    
                    <Link 
                      href="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="text-white/70 hover:text-white/90 text-sm font-medium px-4 cursor-pointer">
                  Login
                </Link>
                <Link href="/signup" className="text-white bg-[#044588] hover:bg-[#033366] text-sm font-medium px-4 py-2 rounded-full cursor-pointer">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-[#1a2e35]/95 backdrop-blur-sm transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 pt-16">
          {[
            { id: "hero", label: "SUCKA PUNCH" },
            { id: "about", label: "What is it?" },
            { id: "design", label: "Genius Design" },
            { id: "flavours", label: "Flavours Profile" },
            { id: "packaging", label: "Packaging" },
            { id: "product", label: "Buy Now" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white text-lg font-medium px-6 py-3 hover:bg-white/10 rounded-full w-64 text-center"
            >
              {item.label}
            </button>
          ))}
          
          {/* Auth Buttons for Mobile */}
          {loading ? (
            <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse flex items-center justify-center mb-6">
              <div className="w-5 h-5 border-2 border-white/80 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : user ? (
            <>
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#044588] flex items-center justify-center text-white text-xl mb-2">
                  {getInitials()}
                </div>
                <p className="text-white text-sm">{user.email}</p>
              </div>
              
              {user.isAdmin && (
                <Link 
                  href="/admin" 
                  className="text-white text-lg font-medium px-6 py-3 hover:bg-white/10 rounded-full w-64 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Dashboard
                </Link>
              )}
              
              <Link 
                href="/profile" 
                className="text-white text-lg font-medium px-6 py-3 hover:bg-white/10 rounded-full w-64 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
              
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="text-white text-lg font-medium px-6 py-3 hover:bg-white/10 rounded-full w-64 text-center"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                href="/login" 
                className="text-white text-lg font-medium px-6 py-3 hover:bg-white/10 rounded-full w-64 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/signup" 
                className="text-white text-lg font-medium bg-[#044588] hover:bg-[#033366] px-6 py-3 rounded-full w-64 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#f0fdf4] via-[#e8faf1] to-[#dcfce7] overflow-hidden pt-20"
    >
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

      {/* First Floating Image */}
      <div className="absolute left-4 md:left-32 top-40 w-20 md:w-32 h-28 md:h-36 rotate-16 rounded-lg overflow-hidden z-20 md:animate-[float_3s_ease-in-out_infinite]">
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
            {"Let's be honest. We've"} all had those times when we wanted to
            keep things light, enjoyable, and perhaps just a little sly—a warm
            day. A group of friends hanging out. A gym bag packed with protein
            bars and water bottles. Enter SUCKA PUNCH, the daring tiny bottle
            altering our perspective on remaining hydrated and letting free.
            Because it
            {"isn't, it doesn't"} appear like your typical drink.
          </p>
          <button
            onClick={() => scrollToSection("product")}
            className="bg-[#044588] text-white font-medium py-3 md:py-4 rounded-full px-8 md:px-12 text-base md:text-xl font-xirod inline-block cursor-pointer"
          >
            Buy Now from Our Retail Partners
          </button>
        </div>
      </div>

      {/* Second Floating Image */}
      <div className="absolute right-4 md:right-32 bottom-32 w-20 md:w-32 h-28 md:h-36 -rotate-12 rounded-lg overflow-hidden z-20 md:animate-[float_3s_ease-in-out_infinite] md:[animation-delay:1.5s]">
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
