"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();
  return (
    <>
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
        </div>
        <Button
          variant="contained"
          className="top-10"
          onClick={() => router.back()}
        >
          Volver
        </Button>
      </main>
    </>
  );
};

export default ContactPage;
