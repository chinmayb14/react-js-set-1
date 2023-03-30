const GradeIt = ({ student: { name, english, maths, computers }, header }) => {
  const total = english + maths + computers;
  let grade = "";
  if (total >= 225) {
    grade = "A";
  } else if (total >= 180) {
    grade = "B";
  } else if (total >= 150) {
    grade = "C";
  } else {
    grade = "D";
  }
  return (
    <div>
      <h3>{header}</h3>
      <p>Name:{name}</p>
      <p>English:{english}</p>
      <p>Maths:{maths}</p>
      <p>Computers:{computers}</p>
      <p>Total:{total}</p>
      <p>Grade:{grade}</p>
    </div>
  );
};
export default GradeIt;
