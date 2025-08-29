import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import BlurText from "../animations/BlurText";
import { motion } from "framer-motion";
import bgimg from "../assets/images/gdgdurgapur.png";
import icon1 from "../assets/icons/Asset 17-rxbb.png"
import icon2 from "../assets/icons/Asset 10-rxbb.png"
import icon3 from "../assets/icons/Asset 2propHS.png"

export default function HeroSection() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="relative bg-white bg-opacity-50 py-6 md:py-8 lg:py-16">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid justify-between grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h1 className="flex items-center flex-wrap gap-2 text-5xl md:text-6xl lg:text-7xl font-extrabold italic tracking-wide text-black">
              <img src={icon3} alt="icon" className="h-8 md:h-14 w-auto mb-6" />
              DevFest <img src={icon2} alt="icon" className="h-10 md:h-14 w-auto" /><br />
              <span className="text-yellow-500">Durgapur <br /></span>
              2025 <img src={icon3} alt="icon" className="h-8 md:h-14 w-auto mb-6 rotate-180" />
            </h1>
            
            <p
              className="text-zinc-900 mt-2 md:mt-2 text-lg font-semibold sm:text-md italic max-w-3xl mx-auto text-left"
            >
              Ignite Your Development Journey by Google Developer Group. Join a global
              community of developers for a day of inspiration, learning, and
              connection. Dive deep into the latest technologies, experiment with new
              tools, and network with peers who share your interests.
            </p>

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
            <div className="flex gap-20 items-center">
            <button
              className="inline-flex items-center px-8 py-4 mt-10 font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300 ease-in-out"
              role="button"
            >
            Coming Soon
            </button>
            <img src={icon1} alt="icon" className="h-14 w-auto mt-6 rotate-12" /></div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-200 via-pink-200 to-purple-200 rounded-3xl blur-2xl opacity-50"></div>
            <img
              className="relative w-full max-w-lg drop-shadow-2xl"
              src={bgimg}
              alt="Hero illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
