import Link from "next/link";
import CartWidget from "../../common/CartWidget";

const MenuList = ({ isOpen, handleClick }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"} 
        transition-transform duration-300 ease-in-out pointer-events-auto`}
    >
      {/* Contenedor del menú */}
      <aside className="w-full h-full bg-white flex flex-col p-4 overflow-y-auto">
        <nav className="w-full">
          <ul className="flex flex-col space-y-4 w-full pl-6">
            <li>
              <Link
                href="/men"
                className="text-black font-bold hover:text-red-400"
              >
                Hombre
              </Link>
            </li>
            <li>
              <Link
                href="/products/mujer"
                className="text-black font-bold hover:text-red-400"
              >
                Mujer
              </Link>
            </li>
            <li>
              <Link
                href="/access"
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
            <li>
              <Link
                href="/posts"
                className="text-black font-bold hover:text-red-400"
              >
                Posts
              </Link>
            </li>
            <li className="mt-auto">
              {" "}
              {/* Empuja el carrito hacia abajo */}
              <Link
                href="/"
                className="flex-shrink-0 text-black font-bold hover:text-red-400"
              >
                <CartWidget />
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default MenuList;
