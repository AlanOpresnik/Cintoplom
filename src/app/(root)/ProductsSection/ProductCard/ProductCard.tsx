import { ProductInterface } from "@/lib/ProductInterface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    producto: ProductInterface;
}

export default function ProductCard({producto}: Props) {
    const NO_IMG_URL = 'https://res.cloudinary.com/dbgt948uj/image/upload/v1760984367/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953_egb12e.webp'
  return (
    <div
      key={producto.id}
      className="flex flex-col items-center text-center bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-red-700"
    >
      <div className="relative mb-4">
        <Image
          src={producto.img ? producto.img : NO_IMG_URL}
          alt={producto.name}
          width={700}
          height={700}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-lg font-semibold">{producto.name}</h3>
      <p className="text-sm text-gray-300 mb-4">{producto.label}</p>

      <Link
        href={`/productos/${producto.slug}`}
        className="bg-red-700 hover:bg-red-800 transition px-5 py-2 rounded-full text-sm font-medium"
      >
        Ver detalles del producto
      </Link>
    </div>
  );
}
