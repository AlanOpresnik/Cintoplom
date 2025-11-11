"use client";
import { ProductInterface } from "@/lib/ProductInterface";
import { Star } from "lucide-react";
import React, { useState } from "react";

interface Props {
    product: ProductInterface;
}

export default function ProductInfo({product} : Props) {
  const [selectedColor, setSelectedColor] = useState("blanco");
  const [selectedSize, setSelectedSize] = useState("4L");
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: "blanco", hex: "#FFFFFF", border: true },
    { name: "marfil", hex: "#FFFDD0" },
    { name: "gris", hex: "#9CA3AF" },
    { name: "azul", hex: "#3B82F6" },
    { name: "verde", hex: "#10B981" },
    { name: "rojo", hex: "#EF4444" },
    { name: "negro", hex: "#1F2937" },
  ];

  const sizes = ["1L", "4L", "10L", "20L"];

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-red-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
            PROFESIONAL
          </span>
          <span className="bg-yellow-400 text-red-900 text-xs font-semibold px-3 py-1 rounded-full">
            NUEVO
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {product.name}
        </h1>

        <p className="text-green-600 font-semibold mt-2">¡Stock disponible!</p>
      </div>

      <div className="border-t border-b border-gray-200 py-6 space-y-5">
        <p className="text-gray-700 leading-relaxed">
          Pintura látex acrílica de alta calidad para interiores. Acabado mate
          sedoso, excelente cubrimiento y lavabilidad. Ideal para living,
          dormitorios y espacios que requieren un terminado profesional.
        </p>

        {/* Color Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Colores disponibles:{" "}
            <span className="text-red-800 capitalize">{selectedColor}</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-10 h-10 rounded-full transition-all ${
                  selectedColor === color.name
                    ? "ring-4 ring-red-800 scale-110"
                    : "ring-2 ring-gray-300 hover:scale-105"
                }`}
                style={{
                  backgroundColor: color.hex,
                  border: color.border ? "2px solid #e5e7eb" : "none",
                }}
                title={color.name}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-2">
            +50 colores disponibles en pinturerias
          </p>
        </div>

        {/* Size Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Tamaños disponibles: {selectedSize}
          </label>
          <div className="grid grid-cols-4 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                  selectedSize === size
                    ? "bg-red-900 text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-red-400"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
