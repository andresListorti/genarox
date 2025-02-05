import { products } from "../../productsMock";

const Products = ({ params }) => {
  const { category } = params;
  const filteredProducts = products.filter(
    (producto) => producto.category === category
  );
  return (
    <>
      {/* <div>Estas viendo {params.category}</div>; */}
      <h2>{category}</h2>
      {filteredProducts.map((producto) => (
        <div key={producto.id}>{producto.title}</div>
      ))}
    </>
  );
};

export default Products;

// const Products = ({ params }) => {
//   // console.log(params);

//   return <div>Estas viendo {params.category}</div>;
// };

// export default Products;
