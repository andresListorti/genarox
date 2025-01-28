"use client";

import CartWidget from "../../common/CardWidget";
import Logo from "../../common/Logo";
import Link from "next/link";
import "./navbar.css";

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
                href="/category/hombre"
                className="text-black font-bold hover:text-red-400"
              >
                Hombre
              </Link>
            </li>
            <li>
              <Link
                href="/category/mujer"
                className="text-black font-bold hover:text-red-400"
              >
                Mujer
              </Link>
            </li>
            <li>
              <a
                href="./pages/acceso.html"
                className="text-black font-bold hover:text-red-400"
              >
                Acceso
              </a>
            </li>
            <li>
              <a
                href="./pages/contacto.html"
                className="text-black font-bold hover:text-red-400"
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* cart + widget A la derecha */}
          <Link
            href="/cart"
            className="flex-shrink-0 text-black font-bold hover:text-red-400"
          >
            <CartWidget />
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
