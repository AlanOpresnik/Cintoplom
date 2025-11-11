'use client';
import { ProductInterface } from "@/lib/ProductInterface";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface Props {
    product: ProductInterface;
}

export default function ImageSide({product}: Props) {
    const [selectedImage, setSelectedImage] = useState(0);

 
  return (
    <div className="space-y-4">
      <div className={`relative  ${product.color} rounded-2xl shadow-xl overflow-hidden aspect-square`}>
        <img
          src={product.img || ''}
          alt="Producto"
          className="w-full h-full object-cover"
        />
        
      </div>

      {/* Thumbnails */}
      
    </div>
  );
}
