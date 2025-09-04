"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "./theme-switcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10 dark:shadow-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              {/* Logo SVG Edutools */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 200 200"
              >
                <circle cx="100" cy="100" r="90" fill="#C27AFF" />
                <path
                  d="M60 60 L60 140 Q80 130 100 140 Q120 130 140 140 L140 60 Q120 70 100 60 Q80 70 60 60 Z"
                  fill="#ffffff"
                  stroke="#6B21A8"
                  strokeWidth="3"
                />
                <circle
                  cx="100"
                  cy="70"
                  r="15"
                  fill="#C27AFF"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
                <path
                  d="M100 50 v-10 M100 90 v10 M80 70 h-10 M120 70 h10 M85 55 l-7 -7 M115 85 l7 7 M85 85 l-7 7 M115 55 l7 -7"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
              </svg>

              {/* Glow effect */}
              <div className="absolute inset-0 h-10 w-10 text-purple-600 dark:text-purple-400 blur-sm opacity-50"></div>
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Edutools
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("fonctionnalites")}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection("apropos")}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Contact
            </button>
            <ThemeSwitcher />
            <button
              onClick={() => scrollToSection("contact")}
              className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105"
            >
              <span className="relative z-10">Demander une démo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-50"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg shadow-purple-500/10 dark:shadow-purple-500/20 border border-white/20 dark:border-gray-700/30">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("fonctionnalites")}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-left"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => scrollToSection("apropos")}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-left"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors text-center shadow-lg shadow-purple-500/30"
              >
                Demander une démo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
