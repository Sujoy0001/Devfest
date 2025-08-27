// src/layouts/Layout01.jsx
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OpeningAnimation from "../components/OpeningAnimation";

export default function Layout01() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000); // 5s delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <OpeningAnimation onFinish={() => setIsLoading(false)} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-1 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
