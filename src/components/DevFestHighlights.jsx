import React from "react";
import { motion } from "framer-motion";
import ImageTrail from "../animations/ImageTrail";
import bgimg from "../assets/images/DSC00207.jpg";
import img1 from "../assets/images/AK_08859.JPG";
import img3 from "../assets/images/AK_08863.JPG";
import img2 from "../assets/images/AK_08867.JPG";
import img4 from "../assets/images/AK_08868.JPG";
import img5 from "../assets/images/AK_08879.JPG";
import img6 from "../assets/images/AK_08880.JPG";
import img7 from "../assets/images/AK_08893.JPG";
import img8 from "../assets/images/AK_08894.JPG";

export default function DevFestHighlights() {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-none xl:rounded-2xl md:mt-8">
      {/* Background image with motion */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center xl:rounded-3xl opacity-80"
        style={{ backgroundImage: `url(${bgimg})` }}
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Centered text */}
      <h2
        style={{
          zIndex: 10,
          textShadow: `
            0 0 15px rgba(0,0,0,0.9),
            0 0 30px rgba(0,0,0,0.7)
          `,
        }}
        className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   text-yellow-500 text-5xl md:text-7xl italic font-extrabold 
                   text-center justify-center items-center w-full"
      >
        DevFest Highlights
      </h2>

      {/* Image trail */}
      <ImageTrail
        items={[
          img1, img2, img3, img4, img5, img6, img7, img8
        ]}
        variant={1}
      />
    </div>
  );
}
