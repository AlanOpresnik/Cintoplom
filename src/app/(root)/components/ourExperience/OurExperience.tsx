"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CanSwiper from "./CanSwiper";
import { products } from "../../../../lib/product-data-mock";

export default function OurExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <div className="relative  w-full h-screen md:h-[105vh] overflow-hidden bg-gradient-to-b from-red-950 via-red-900 to-red-600">
      {/* Grid background effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 0, 0, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 0, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center bottom",
        }}
      />

      {/* Horizontal lines effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent"
            style={{ top: `${i * 5}%` }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-24 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
          Experiencia en pinturas <br /> desde{" "}
          <span className="text-yellow-400">1962</span>
        </h1>

        <p className="text-white mt-4 text-md mb-16 md:text-xl max-w-2xl mx-auto">
          Somos una marca lider de pintura fabricando nacional e
          internacionalemente hace mas de{" "}
          <span className="text-yellow-400"> 50 años</span>
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full h-[400px] md:h-[700px] ">
        <CanSwiper
          products={products}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isAutoPlaying={isAutoPlaying}
          setIsAutoPlaying={setIsAutoPlaying}
        />
           {/* CTA Button */}
      <div className=" flex justify-center w-full absolute bottom-0 mb-12  z-10">
        <button aria-label="ver todos los productos" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105">
          Ver todos los productos
        </button>
      </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute hidden md:flex bottom-32 left-1/2 -translate-x-1/2  gap-4 z-50">
        <button
        aria-label="Mover anterior"
          onClick={handlePrev}
          className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
        aria-label="mover siguiente"
          onClick={handleNext}
          className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

   

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {products.map((_, index) => (
          <button
          aria-label="indicadores"
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setActiveIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex ? "bg-yellow-400 w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
