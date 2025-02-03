"use client";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 bg-opacity-90 h-40 p-6 flex flex-col justify-center items-center text-center">
      {/* Redes Sociales */}
      <div className="flex justify-center items-center space-x-6 mb-4">
        <Link
          href="https://www.facebook.com/"
          className="text-black text-3xl hover:text-blue-600"
        >
          <FaFacebookF />
          {/* <i className="fa-brands fa-facebook">Icono fa</i> */}
        </Link>
        <Link
          href="https://www.instagram.com/"
          className="text-black text-3xl hover:text-pink-500"
        >
          {/* <i className="fa-brands fa-instagram">icono ins</i> */}
          <FaInstagram />
        </Link>
        <Link
          href="https://web.whatsapp.com/"
          className="text-black text-3xl hover:text-green-500"
        >
          {/* <i className="fa-brands fa-whatsapp">icono wa</i> */}
          <FaWhatsapp />
        </Link>
      </div>

      {/* Derechos Reservados */}
      <p className="text-lg text-gray-700 mb-4">
        © {new Date().getFullYear()} Genaro - Todos los derechos reservados.
      </p>

      {/* Subir al Top */}
      <Link
        href="#"
        className="bg-black text-white h-10 w-10 rounded-full fixed bottom-10 right-10 flex items-center justify-center text-xl shadow-lg hover:bg-gray-800"
      >
        <i className="fa-solid fa-up-long">Subir</i>
      </Link>
    </footer>
  );
};

export default Footer;
