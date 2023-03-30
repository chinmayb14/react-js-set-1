const DisplayList = ({ products, header }) => {
  return (
    <div>
      <h3>{header}</h3>
      <ul>
        {products.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default DisplayList;
