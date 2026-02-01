"use client"; // Asegura que se ejecuta en el cliente

import React, { Suspense } from 'react';
// import { usePathname, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { products } from "../productsMock";
// import CatalogoList from "./CatalogoList";



const WomanPage = () => {
  
  // const pathname = usePathname();
  // console.log(`pathname ${pathname}`);

  // const searchParams = useSearchParams();
  // console.log(`searchParams ${searchParams}`);

  // const category = searchParams.get("category"); // Obtiene el parámetro de la URL

  // const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   const filteredProducts = products.filter(
  //     (producto) => producto.category === category
  //   );
  //   if (category) {
  //     // Simulación de filtrado de productos basado en la categoría
  //     setFilteredProducts(filteredProducts);
  //   }
  // }, [category]);

  // console.log(`filtered ${filteredProducts}`);

  return (
     <Suspense fallback={<div>Loading...</div>}>
            
    <div>
      <h1>Página de Mujeres</h1>
      {/* <p>Categoría seleccionada: {category || "Todas"}</p>
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
      <CatalogoList products={filteredProducts} /> */}
    </div>
         </Suspense>
  );
};

export default WomanPage;

// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { products } from "../productsMock";
// import CatalogoList from "../pages/[catalogo]/CatalogoList";

// const WomanPage = () => {
//   const router = useRouter();
//   const { category } = router.query;

//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     const filteredProducts = products.filter(
//       (producto) => producto.category === category
//     );
//     setFilteredProducts(filteredProducts);
//   }, [category]);

//   return (
//     <div>
//       <h1>Category Page</h1>
//       <p>Category: {category}</p>
//       <CatalogoList products={filteredProducts} />
//     </div>
//   );
// };

// export default WomanPage;
