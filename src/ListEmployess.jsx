const employees = [
  {
    name: "Jack Smith",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 24000,
  },
  {
    name: "Mary Robbins",
    level: 3,
    dept: "Fin",
    designation: "Manager",
    salary: 28000,
  },
  {
    name: "Steve Williams",
    level: 4,
    dept: "Ops",
    designation: "President",
    salary: 35000,
  },
  {
    name: "Bob Andrews",
    level: 1,
    dept: "Fin",
    designation: "Trainee",
    salary: 16500,
  },
  {
    name: "Dave Martin",
    level: 2,
    dept: "Fin",
    designation: "Manager",
    salary: 21700,
  },
  {
    name: "Julia Clarke",
    level: 3,
    dept: "Ops",
    designation: "Manager",
    salary: 26900,
  },
  {
    name: "Kathy Jones",
    level: 4,
    dept: "Tech",
    designation: "President",
    salary: 42500,
  },
  {
    name: "Tom Bresnan",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 22200,
  },
];
let total = 0;
export const EmployeesList = () => {
  return (
    <div>
      <ul>
        {employees.map(({ name, level, dept, designation, salary }) => {
          total += salary;
          return (
            <div>
              <li>
                name:{name} ,level:{level} ,dept:{dept} ,designation:
                {designation} ,salary:{salary}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export const Total = () => {
  return <p>Total Salary Expense: : {total}</p>;
};

export const OrangeEmployeesList = () => {
  return (
    <div>
      <ul>
        {employees.map(({ name, level, dept, designation, salary }) => {
          return (
            <div style={{ backgroundColor: level === 2 ? "orange" : "white" }}>
              <li>
                name:{name} ,level:{level} ,dept:{dept} ,designation:
                {designation} ,salary:{salary}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export const BorderEmployeesList = () => {
  return (
    <div>
      <ul>
        {employees.map(({ name, level, dept, designation, salary }) => {
          return (
            <div
              style={{
                border:
                  designation === `President`
                    ? "1px solid black"
                    : "1px solid white",
              }}
            >
              <li>
                name:{name} ,level:{level} ,dept:{dept} ,designation:
                {designation} ,salary:{salary}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
