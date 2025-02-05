const CatalogoList = ({ products = [] }) => {
  return (
    <div>
      <h2>Catalogo List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CatalogoList;
