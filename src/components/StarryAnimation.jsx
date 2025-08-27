// src/components/StarryAnimation.jsx
import { useEffect, useState } from "react";

export default function StarryAnimation({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 4000); // show animation for 4 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <h1 className="text-white text-4xl font-bold animate-pulse z-10">
        🚀 Welcome
      </h1>
    </div>
  );
}
