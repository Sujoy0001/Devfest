import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import BlurText from "../animations/BlurText";
// import CircularText from '../animations/CircularText';

export default function HeroSection() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="relative bg-white bg-opacity-50 py-6 md:py-8 lg:py-16">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <BlurText
              text="DevFest Durgapur 2025"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-black"
            />

            <BlurText
              text="Ignite Your Development Journey by Google Developer Group. Join a global community of developers for a day of inspiration, learning, and connection. Dive deep into the latest technologies, experiment with new tools, and network with peers who share your interests."
              delay={30}
              animateBy="words"
              direction="left"
              onAnimationComplete={handleAnimationComplete}
              className="text-zinc-900 mt-6 text-lg sm:text-md italic"
            />

            {/* Date + Location */}
            <div className="flex flex-wrap items-center gap-6 mt-6 text-lg sm:text-xl text-zinc-950">
              <div className="flex items-center gap-2 font-semibold">
                <FaCalendarAlt className="text-emerald-600 text-xl" />
                <span>2 November 2025</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <FaMapMarkerAlt className="text-red-600 text-xl" />
                <span>Durgapur, West Bengal</span>
              </div>
            </div>

            {/* Register Button */}
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 mt-10 font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300 ease-in-out"
              role="button"
            >
              Coming Soon
            </a>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-200 via-pink-200 to-purple-200 rounded-3xl blur-2xl opacity-50"></div>
            <img
              className="relative w-full max-w-lg drop-shadow-2xl"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
              alt="Hero illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
