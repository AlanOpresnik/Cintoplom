import Image from 'next/image'
import React from 'react'
const links = [
  { name: "Inicio", href: "/" },
  { name: "Calculadora", href: "/calculator" },
  { name: "Pinturas", href: "/paints" },
  { name: "Aplicar un producto", href: "/applyProduct" },
  { name: "Informacion", href: "/information" },
  { name: "Contacto", href: "/contact" },
];
export default function NavbarDesktop() {
  return (
<div className="flex items-center justify-between px-6 py-2 border-b-primary border-b-4 w-full">
        <div>
          <Image
            src="/logo/logo-cintoplom.png"
            alt="Cintoplom Logo"
            width={280}
            height={400}
          />
        </div>
        <div className="flex gap-6">
          {links.map((link) => (
            <ul key={link.name}>
              <li>
                <a href={link.href}>{link.name}</a>
              </li>
            </ul>
          ))}
        </div>
      </div>
  )
}
