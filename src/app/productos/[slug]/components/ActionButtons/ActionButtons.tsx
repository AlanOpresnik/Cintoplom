"use client";
import { Heart, Share2, ShoppingCart } from "lucide-react";
import React, { useState } from "react";

export default function ActionButtons() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="space-y-3">
      <button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-red-800 hover:to-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform cursor-pointer flex items-center justify-center gap-2">
        <ShoppingCart className="w-5 h-5" />
        Quiero recibir mas informacion
      </button>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
            isFavorite
              ? "bg-red-100 text-primary border-2 border-primary"
              : "bg-white text-gray-700 border-2 border-gray-300 hover:border-red-400"
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-900" : ""}`} />
          Favorito
        </button>
        <button className="bg-white text-gray-700 border-2 border-gray-300 hover:border-yellow-400 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
          <Share2 className="w-5 h-5" />
          Compartir
        </button>
      </div>
    </div>
  );
}
