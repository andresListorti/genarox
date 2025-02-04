"use client";

import { useState } from "react";
import Link from "next/link";

export default function AccessPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    // Aquí puedes agregar la lógica para autenticación
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dgiqb0ipg/image/upload/v1726159833/shoes-4672332_1920_ruby8h.jpg')",
      }}
    >
      <h2
        className="text-3xl font-bold mb-6 text-[#110282] bg-white rounded-lg p-10 m-10
"
      >
        Iniciar Sesión
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            id="rememberMe"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-sm text-gray-700">
            Recuérdame
          </label>
        </div>
        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Ingresar
          </button>
          <Link href="/registro" className="text-blue-500 text-sm text-center">
            Crear cuenta
          </Link>
        </div>
      </form>
    </div>
  );
}
