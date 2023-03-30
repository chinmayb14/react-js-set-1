const ProductFilter = ({ products, header }) => {
  return (
    <div>
      <h3>{header}</h3>
      <ul>
        {products
          .filter(({ quantity, sales }) => quantity < sales)
          .map(({ name, quantity, sales }) => {
            return (
              <li>
                Name:{name}, Quantity:{quantity}, Sales:{sales}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductFilter;
