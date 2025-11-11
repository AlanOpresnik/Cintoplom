import Image from "next/image";
import React from "react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";



export default function Navbar() {
  return (
    <nav className="">
        <div className="md:hidden">
            <NavbarMobile/>
        </div>
        <div className="hidden md:block">
          <NavbarDesktop/>
        </div>
    </nav>
  );
}
