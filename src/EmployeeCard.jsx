const EmployeeCards = ({ person: { name, designation, workExperience } }) => {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name :{name}</p>
      <p>
        <span style={{ color: "red" }}>Designation</span> :{designation}
      </p>
      <p>
        <span style={{ color: "blue" }}>Work Experience :</span>
        {workExperience}
      </p>
    </div>
  );
};

export default EmployeeCards;
