import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function OpeningAnimation({ onFinish }) {
  const texts = ["DevFest", "Durgapur", "2025"];
  const [step, setStep] = useState(0);
  const [particles, setParticles] = useState([]);

  // Create particle effect
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 2 + 1,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [step]);

  useEffect(() => {
    if (step < texts.length - 1) {
      const timer = setTimeout(() => setStep(step + 1), 1500);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        onFinish();
      }, 1500);
      return () => clearTimeout(finishTimer);
    }
  }, [step, texts.length, onFinish]);

  return (
    <div className="fixed italic inset-0 bg-gradient-to-br from-white via-gray-100 to-white flex items-center justify-center z-50 overflow-hidden">
      {/* Animated glowing particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(255,200,50,0.8)]"
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: 0.7,
          }}
          animate={{
            y: [`${particle.y}vh`, `${particle.y - 20}vh`, `${particle.y}vh`],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Strong glowing center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="w-72 h-72 rounded-full bg-yellow-400 opacity-20 blur-3xl shadow-[0_0_80px_40px_rgba(255,200,50,0.4)]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ y: "100%", opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ 
            y: "-100%", 
            opacity: 0,
            scale: 1.2,
            transition: { duration: 0.5 }
          }}
          transition={{ 
            type: "spring", 
            damping: 12, 
            stiffness: 100,
            duration: 0.6 
          }}
          className="relative z-10 text-center"
        >
          <motion.h1
            className="text-black text-6xl md:text-8xl font-bold tracking-tighter"
            initial={{ textShadow: "0 0 0px rgba(0,0,0,0)" }}
            animate={{ 
              textShadow: [
                "0 0 6px rgba(0,0,0,0.3)",
                "0 0 12px rgba(0,0,0,0.6)",
                "0 0 6px rgba(0,0,0,0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {texts[step]}
          </motion.h1>
          
          {/* COMING SOON */}
          {step === texts.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-yellow-600 text-md mt-4 tracking-widest italic font-semibold drop-shadow-[0_0_10px_rgba(255,200,50,0.8)]"
            >
              COMING SOON
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Progress indicator with glow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-52 h-1 bg-gray-300 rounded-full overflow-hidden shadow-inner">
        <motion.div 
          className="h-full bg-yellow-500 shadow-[0_0_12px_rgba(255,200,50,0.9)]"
          initial={{ width: "0%" }}
          animate={{ width: `${(step + 1) * (100 / texts.length)}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
}
