"use client";
import React from "react";
import { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(1);

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Counter</h1>
        <h2 className="text-2xl mb-4 text-gray-800">
          `------------------------- {contador}`
        </h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => setContador(contador + 1)}
        >
          Increase
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => setContador(1)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
