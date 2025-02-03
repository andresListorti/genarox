import Link from "next/link";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";

export const metadata = {
  title: "Genaro | Zapatos e Indumentaria de Cuero para Hombre y mujer",
  description:
    "Descubre la mejor colección de zapatos e indumentaria de cuero para hombre y mujer de Genaro. Últimas tendencias en calzado de calidad, estilo y confort.",
  keywords:
    "Zapatos de cuero, Indumentaria de cuero , Calzado de calidad, Moda de cuero, Calzado para hombre, Calzado para mujer, ultimas tendencias en calzado, Colección de zapatos, Estilo y confort, Accesorios de moda",
  openGraph: {
    title: "Genaro | Zapatos e Indumentaria de Cuero para Hombre y mujer",
    description:
      "Descubre la mejor colección de zapatos e indumentaria de cuero para hombre y mujer de Genaro. Últimas tendencias en calzado de calidad, estilo y confort.",
    url: "",
    siteName: "Genaro | Zapatos e Indumentaria de Cuero para Hombre y mujer",
    images: [
      {
        url: "https://res.cloudinary.com/dgiqb0ipg/image/upload/v1726159834/shoes-877939_1920_ghyeho.jpg",
      },
    ],
  },
};

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main
        className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dgiqb0ipg/image/upload/v1726159833/shoes-4672332_1920_ruby8h.jpg')",
        }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Contacto
          </h2>

          <form action="/routes/contact" method="POST" className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows="4"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition"
            >
              Enviar
            </button>
          </form>

          {/* Redes Sociales */}
          <div className="flex justify-center space-x-4 mt-6 text-gray-700">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className="hover:text-blue-600"
            >
              <i className="fa-brands fa-facebook text-2xl"></i>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="hover:text-pink-500"
            >
              <i className="fa-brands fa-instagram text-2xl"></i>
            </Link>
            <Link
              href="https://web.whatsapp.com/"
              target="_blank"
              className="hover:text-green-500"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
