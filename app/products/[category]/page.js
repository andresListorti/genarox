const Products = ({ params }) => {
  console.log(params);

  return <div>Estas viendo {params.category}</div>;
};

export default Products;
