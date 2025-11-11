"use client";
import { ProductInterface } from "../../../../lib/ProductInterface";
import React, { useState } from "react";
import CanCard from "./CanCard";

interface Props {
  products: ProductInterface[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  isAutoPlaying: boolean;
  setIsAutoPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CanSwiper({
  products,
  activeIndex,
  isAutoPlaying,
  setIsAutoPlaying,
  setActiveIndex,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent<HTMLDivElement>).clientX;
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent<HTMLDivElement>).clientX;
    setCurrentX(clientX);
    const diff = clientX - startX;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);
    const diff = currentX - startX;
    const threshold = 50; // Minimum drag distance to trigger change

    if (diff > threshold) {
      // Dragged right, go to previous
      setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    } else if (diff < -threshold) {
      // Dragged left, go to next
      setActiveIndex((prev) => (prev + 1) % products.length);
    }

    setDragOffset(0);
    setStartX(0);
    setCurrentX(0);
  };
  return (
    <div
      className="relative h-full flex  justify-center mt-12 cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {products.map((product, index) => {
        return (
        
            <CanCard
            key={product.id}
              isDragging={isDragging}
              dragOffset={dragOffset}
              products={products}
              product={product}
              index={index}
              activeIndex={activeIndex}
            />
        
        );
      })}
    </div>
  );
}
