"use client";

import Link from "next/link";
import { Button } from "../ui/button";

const footerData = {
  brand: {
    name: "Cintoplom",
    slogan: "Coloreando la vida desde 1962",
    contactLink: "/contacto",
  },
  productos: [
    { name: "Membrana en pasta", link: "/productos/membrana-en-pasta" },
    { name: "Pintura exterior", link: "/productos/pintura-exterior" },
    { name: "Pintura Interior", link: "/productos/pintura-interior" },
    { name: "Latex Interior", link: "/productos/latex-interior" },
    { name: "Latex Exterior", link: "/productos/latex-exterior" },
    { name: "Ver todos los productos", link: "/productos" },
  ],
  navegacion: [
    { name: "Inicio", link: "/" },
    { name: "Calculadora", link: "/calculadora" },
    { name: "Pinturas", link: "/pinturas" },
    { name: "Aplicar un producto", link: "/aplicar" },
    { name: "Informacion", link: "/informacion" },
    { name: "Contacto", link: "/contacto" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#730000] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Columna 1 */}
        <div className="col-span-2">
          <h2 className="text-6xl font-semibold">{footerData.brand.name}</h2>
          <p className="mt-1 text-2xl">{footerData.brand.slogan}</p>
          <Link href={footerData.brand.contactLink}>
            <Button className="mt-4 bg-gray-100 w-1/2 rounded-full border-none text-black hover:bg-gray-200 border border-blue-500">
              Contactar
            </Button>
          </Link>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="font-semibold text-center mb-2 text-xl">Productos</h3>
          <ul className="space-y-1 text-sm">
            {footerData.productos.map((item, i) => (
              <li className="text-center" key={i}>
                <Link href={item.link} className="hover:underline text-lg">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="font-semibold mb-2 text-xl text-center">Navegacion</h3>
          <ul className="space-y-1 text-sm">
            {footerData.navegacion.map((item, i) => (
              <li className="text-center" key={i}>
                <Link href={item.link} className="hover:underline text-lg
                ">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
