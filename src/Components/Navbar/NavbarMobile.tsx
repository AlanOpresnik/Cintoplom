"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Pinturas", href: "/allProducts" },
  { name: "Aplicar un producto", href: "/applyProduct" },
  { name: "Informacion", href: "/information" },
  { name: "Contacto", href: "/contact" },
];

export default function NavbarMobile() {
  return (
    <Sheet>
      <div className="flex  justify-between px-6 p-4 border-b-4 border-b-primary items-center">
        <Image
          fetchPriority="high"
          src="/logo/logo-cintoplom.png"
          alt="Cintoplom Logo"
          width={200}
          height={50}
        />
        <SheetTrigger asChild>
          <button aria-label="Menu" className="p-2 border rounded-md">
            <Menu size={24} />
          </button>
        </SheetTrigger>
      </div>
      <SheetContent side="left" className="py-6 px-4">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/logo/logo-cintoplom.png"
              alt="Cintoplom Logo"
              width={190}
              height={50}
            />
          </SheetTitle>
        </SheetHeader>
        <ul className="mt-8 px-2 space-y-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} aria-label={link.name} className="text-lg font-medium">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
