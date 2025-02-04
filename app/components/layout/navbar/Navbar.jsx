"use client";

import CartWidget from "../../common/CartWidget";
import Logo from "../../common/Logo";
import Link from "next/link";
import "./navbar.css";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div>
      <header className="bg-gray-200/90 h-24 text-lg px-5 flex justify-around items-center">
        {/* Logo o nombre empresa */}
        <Link
          href="/"
          className="log flex-shrink-0 text-black font-bold hover:text-red-400 text-3xl"
        >
          <Logo />
        </Link>

        {/* Listado de categorias clickeables */}
        <nav className="flex items-center space-x-10">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-black font-bold hover:text-red-400"
              >
                Hombre
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-black font-bold hover:text-red-400"
              >
                Mujer
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-black font-bold hover:text-red-400"
              >
                Acceso
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-black font-bold hover:text-red-400"
              >
                Contacto
              </Link>
            </li>
            {/* cart + widget A la derecha */}
            <li>
              <Link
                href="/"
                className="flex-shrink-0 text-black font-bold hover:text-red-400"
              >
                <CartWidget />
              </Link>
            </li>
          </ul>
        </nav>
        <Menu />
      </header>
    </div>
  );
};

export default Navbar;
