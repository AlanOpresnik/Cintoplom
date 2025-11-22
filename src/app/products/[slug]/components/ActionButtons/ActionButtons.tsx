import {  Share2, ShoppingCart } from "lucide-react";
import React from "react";

export default function ActionButtons() {
  return (
    <div className="space-y-3">
      <button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-red-800 hover:to-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform cursor-pointer flex items-center justify-center gap-2">
        <Share2 className="w-5 h-5" />
          Compartir
      </button>
      {/*<div className=" w-full gap-3">
        <button className="bg-white w-full text-gray-700 border-2 border-gray-300 hover:border-yellow-400 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
          <Share2 className="w-5 h-5" />
          Compartir
        </button>
      </div>*/}
    </div>
  );
}
