const StationeryList = ({ header, list }) => (
  <div>
    <h1>{header}</h1>
    <ul>
      {list.map((element) => (
        <li>{element}</li>
      ))}
    </ul>
  </div>
);

export default StationeryList;
