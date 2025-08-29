// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import ScrollVelocity from '../animations/ScrollVelocity';
import ImageTrail from '../animations/ImageTrail'
import StayConnected from "../components/StayConnected";
import DevFestHighlights from "../components/DevFestHighlights";
import Faq from "../components/Faq";
import icon1 from "../assets/icons/Asset 17-rxbb.png"

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <ScrollVelocity
        texts={['DevFest Durgapur 2025 /', 'Coming Soon /']}
        velocity={70}
        className="custom-scroll-text md:mt-1 text-zinc-800 italic text-5xl md:text-7xl h-20"
      />

      <DevFestHighlights />
      
      {/* <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
      {/* Centered text */}
      {/* <h2
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 'bold',
          zIndex: 10,
          margin: 0,
        }} className="text-zinc-800 text-5xl md:text-7xl flex text-center italic font-extrabold justify-center items-center"
      >
        DevFest Highlights
      </h2>

      {/* Image trail */}
      {/* <ImageTrail
        items={[
          'https://picsum.photos/id/287/300/300',
          'https://picsum.photos/id/1001/300/300',
          'https://picsum.photos/id/1025/300/300',
          'https://picsum.photos/id/1026/300/300',
          'https://picsum.photos/id/1027/300/300',
          'https://picsum.photos/id/1028/300/300',
          'https://picsum.photos/id/1029/300/300',
          'https://picsum.photos/id/1030/300/300',
        ]}
        variant={1}
      />
    </div> */} 

    <Faq />

    <StayConnected />
    </>
  );
}
