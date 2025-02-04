"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden border-none">
      <video
        src="https://res.cloudinary.com/dgiqb0ipg/video/upload/v1726159834/shoes_-_11284_720p_1_jnlch8.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      ></video>
      <article className="relative flex flex-wrap items-center justify-center w-[25%] m-24 p-8 text-xl bg-[rgba(192,155,155,0.5)] z-10">
        <h3 className="text-2xl font-bold">Nuevos Ingresos</h3>
        <p className="mt-2 font-semibold">
          Agrega el modelo T-650 a tu colección
        </p>
        <Link
          href="/products/category"
          className="mt-2 text-blanchedalmond hover:text-[#d5c2c2]"
        >
          Ver Producto
        </Link>
      </article>
    </section>
  );
};

export default Hero;
