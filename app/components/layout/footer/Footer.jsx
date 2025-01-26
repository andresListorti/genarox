"use client";
import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Redes sociales */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-200"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/tu-cuenta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/tu-cuenta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-200"
          >
            <FaFacebookF />
          </a>
          <a
            href="mailto:tu-email@example.com"
            className="text-xl hover:text-gray-200"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Texto del footer */}
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Tu Empresa. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
