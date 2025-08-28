import React from "react";
import { motion } from "framer-motion";
import ImageTrail from "../animations/ImageTrail";
import bgimg from "../assets/images/DSC00207.jpg";

export default function DevFestHighlights() {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-none xl:rounded-2xl mt-8">
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
          "https://picsum.photos/id/287/300/300",
          "https://picsum.photos/id/1001/300/300",
          "https://picsum.photos/id/1025/300/300",
          "https://picsum.photos/id/1026/300/300",
          "https://picsum.photos/id/1027/300/300",
          "https://picsum.photos/id/1028/300/300",
          "https://picsum.photos/id/1029/300/300",
          "https://picsum.photos/id/1030/300/300",
        ]}
        variant={1}
      />
    </div>
  );
}
