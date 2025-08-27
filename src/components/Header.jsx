import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Navigation links stored in a constant
const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/agenda", label: "Agenda" },
  { path: "/speakers", label: "Speakers" },
  { path: "/team", label: "Team" },
  { path: "/faq", label: "FAQ" }
];

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center mt-4 sticky top-5 z-50">
      <motion.nav 
        className="flex items-center justify-between w-[90%] max-w-6xl bg-white backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 group">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://gdg.community.dev/static/images/gdg.png"
              alt="DevFest Logo"
              className="w-8 h-8"
            />
            <motion.div 
              className="absolute -inset-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 -z-10"
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <div className="flex items-baseline space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              DevFest
            </span>
            <span className="px-2 py-1 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xs font-medium rounded-full">
              Durgapur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-blue-600 font-semibold" 
                      : "text-gray-600 hover:text-blue-700"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center space-y-1">
            <motion.span 
              className="h-0.5 w-full bg-gray-600 rounded"
              animate={{ 
                rotate: isMenuOpen ? 45 : 0, 
                y: isMenuOpen ? 6 : 0 
              }}
            />
            <motion.span 
              className="h-0.5 w-full bg-gray-600 rounded"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
            />
            <motion.span 
              className="h-0.5 w-full bg-gray-600 rounded"
              animate={{ 
                rotate: isMenuOpen ? -45 : 0, 
                y: isMenuOpen ? -6 : 0 
              }}
            />
          </div>
        </button>

        {/* Mobile Navigation */}
        <motion.div
          className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 overflow-hidden md:hidden"
          initial={false}
          animate={{ 
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <ul className="p-2">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? "bg-blue-50 text-blue-600 font-semibold" 
                        : "text-gray-600 hover:bg-gray-100 hover:text-blue-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.nav>
    </header>
  );
}