import { ProductInterface } from "@/lib/ProductInterface";
import Image from "next/image";
import React from "react";

interface Props {
  product: ProductInterface;
  products: ProductInterface[];
  index: number;
  activeIndex: number;
  isDragging?: boolean;
  dragOffset?: number;
}

export default function CanCard({
  product,
  products,
  index,
  activeIndex,
  isDragging,
  dragOffset,
}: Props) {
  const getPosition = (index: number) => {
    const diff = index - activeIndex;
    const length = products.length;
    const normalizedDiff = (diff + length) % length;

    if (normalizedDiff > length / 2) {
      return normalizedDiff - length;
    }
    return normalizedDiff;
  };

  const getTransform = (position: number) => {
    const dragTranslate = isDragging ? dragOffset! * 0.5 : 0;

    const transforms: Record<
      string,
      { x: number; scale: number; z: number; opacity: number }
    > = {
      "0": { x: 0 + dragTranslate, scale: 1.1, z: 50, opacity: 1 },
      "1": { x: 192 + dragTranslate, scale: 0.9, z: 30, opacity: 0.8 },
      "2": { x: 384 + dragTranslate, scale: 0.75, z: 20, opacity: 0.5 },
      "-1": { x: -192 + dragTranslate, scale: 0.9, z: 30, opacity: 0.8 },
      "-2": { x: -384 + dragTranslate, scale: 0.75, z: 20, opacity: 0.5 },
    };

    return (
      transforms[position.toString()] || {
        x: position > 0 ? 500 + dragTranslate : -500 + dragTranslate,
        scale: 0.5,
        z: 10,
        opacity: 0,
      }
    );
  };

  const position = getPosition(index);
  const isActive = position === 0;
  const transform = getTransform(position);

  return (
    <div
      key={product.id}
      className="absolute transition-all duration-700 ease-in-out"
      style={{
        transform: `translateX(${transform.x}px) scale(${transform.scale})`,
        zIndex: transform.z,
        opacity: transform.opacity,
      }}
    >
      {/* Product Label */}
      {isActive && product.label && (
        <div
            className={`absolute top-[-30px] right-[40px] md:top-2 md:right-[-10px] md:-translate-x-1/2 ${product.labelColor} text-white px-6 py-4 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg z-10`}
        >
          {product.label}
        </div>
      )}

      {/* Paint Can */}
      <div className="relative min-w-64 min-h-80">
        <div className="mt-[-95px] ">
          <Image
          draggable={false}
            src={product.img ? product.img : ""}
            alt={product.name}
            width={1200}
            height={1200}
            className="flex justify-center w-[650px]  "
          />
        </div>
        {/* Shine effect */}
      </div>



      {/* Handle */}
    
    </div>
  );
}
