"use client";

import { products } from "@/lib/product-data-mock";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./ProductCard/ProductCard";

export default function ProductosDestacados() {
  return (
    <section
      className="relative bg-cover bg-center py-16 px-6 text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbgt948uj/image/upload/v1760983273/144b07_74345ae9832f4629becc326f5c030af9_mv2_d_5250_6000_s_4_2_v6pc3m.avif')",
      }}
    >
      {" "}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestros <span className="text-red-600">Productos</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </section>
  );
}
