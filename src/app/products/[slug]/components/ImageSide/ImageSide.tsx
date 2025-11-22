import Image from "next/image";
import { ProductInterface } from "../../../../../lib/ProductInterface";
import React from "react";

interface Props {
    product: ProductInterface;
}

export default function ImageSide({product}: Props) {

 
  return (
    <div className="space-y-4">
      <div className={`relative  ${product.color} rounded-2xl shadow-xl overflow-hidden aspect-square`}>
        <Image
          src={product.img || ''}
          alt="Producto"
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
        
      </div>

      
    </div>
  );
}
