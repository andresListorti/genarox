import React from "react";
// import Footer from "./components/layouts/footer/Footer";

import styles from "../../../main.module.scss";

import MyBarChart from "../../common/BarChart";

const Landing = () => {
  return (
    <div className="font-sans">
      {/* Encabezado */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          {/* <div className={styles.logo}>
            <p className="text-3xl font-bold">LOGO</p>
          </div> */}

          {/* Botón de contacto */}
          <a
            href="#contacto"
            className="bg-white text-blue-600 py-2 px-4 rounded-md shadow-md hover:bg-gray-100"
          >
            Contáctanos
          </a>
        </div>

        {/* Contenido centralizado */}
        <div className="text-center mt-8 px-4">
          <h1 className="text-4xl font-bold mb-4">
            Impulsa tu negocio con nuestros servicios de marketing digital
          </h1>
          <p className="text-lg mb-6">
            Generamos estrategias personalizadas para llevar tu empresa al
            siguiente nivel.
          </p>
          <a
            href="#contacto"
            className="bg-white text-blue-600 py-2 px-4 rounded-md shadow-md hover:bg-gray-100"
          >
            Conoce más
          </a>
        </div>
      </header>

      {/* <header className="bg-blue-600 text-white text-center py-16">
        <p className="text-4xl font-bold mb-4">LOGO</p>
        <h1 className="text-4xl font-bold mb-4">
          Impulsa tu negocio con nuestros servicios de marketing digital
        </h1>
        <p className="text-lg mb-6">
          Generamos estrategias personalizadas para llevar tu empresa al
          siguiente nivel.
        </p>
        <a
          href="#contacto"
          className="bg-white text-blue-600 py-2 px-4 rounded-md shadow-md hover:bg-gray-100"
        >
          Contáctanos
        </a>
      </header> */}

      {/* Sección de Servicios */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-gray-700 text-3xl font-bold text-center mb-8">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <h3 className="text-gray-700 text-2xl font-semibold mb-4">
              Gestión de Redes Sociales
            </h3>
            <p className="text-gray-700 text-lg">
              Impulsa tu presencia online con estrategias efectivas y contenido
              de alto impacto.
            </p>
          </div>
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <h3 className="text-gray-700 text-2xl font-semibold mb-4">
              SEO y SEM
            </h3>
            <p className="text-gray-700 text-lg">
              Optimiza tu sitio web para atraer tráfico de calidad y convertir
              visitas en clientes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <h3 className="text-gray-700 text-2xl font-semibold mb-4">
              Email Marketing
            </h3>
            <p className="text-gray-700 text-lg">
              Conecta con tus clientes a través de campañas personalizadas que
              generan ventas.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Lo que dicen nuestros clientes
        </h2>
        <blockquote className="bg-blue-100 p-6 rounded-md shadow-md text-center">
          <p className="text-gray-700 italic mb-4">
            "Gracias a su estrategia, nuestras ventas aumentaron un 40% en tres
            meses. ¡Altamente recomendados!"
          </p>
          <cite className="font-semibold text-gray-700">
            - Juan Pérez, CEO de Empresa X
          </cite>
        </blockquote>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-16 px-4 bg-gray-100">
        <h2 className="text-gray-700 text-3xl font-bold text-center mb-8">
          Contáctanos
        </h2>
        <form className="text-gray-700 max-w-xl mx-auto bg-white p-6 rounded-md shadow-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="text-gray-700 block text-sm font-medium mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Footer */}
      {/* <MyBarChart /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
