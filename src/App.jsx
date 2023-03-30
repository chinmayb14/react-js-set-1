import "./App.css";
import EmployeeCards from "./EmployeeCard";
import GiveButton from "./CreateButton";
import StationeryList from "./StationeryItems";
import ShowImage from "./DisplayImage";
import DisplayList from "./ProductsList";
import ProductFilter from "./FilterList";
import GradeIt from "./StudentGrade";
import {
  EmployeesList,
  Total,
  OrangeEmployeesList,
  BorderEmployeesList,
} from "./ListEmployess";
function App() {
  const items = ["pen", "pencil", "ruler", "eraser"];
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>ReactJS Practice Question Set 1</h1>
      <ol>
        <li style={{ marginTop: "1rem" }}>
          <EmployeeCards
            person={{
              name: "Chinmay",
              designation: "SDE",
              workExperience: "10yrs",
            }}
          />
        </li>

        <li style={{ marginTop: "1rem" }}>
          <GiveButton
            backgroundColor={"lightgreen"}
            color={"darkgreen"}
            borderRadius={"5px"}
            padding={"10px"}
            text={"Start"}
          />
        </li>

        <li style={{ marginTop: "1rem" }}>
          <StationeryList list={items} />
        </li>
        <li>
          <div style={{ marginTop: "1rem" }}>
            <ShowImage
              imageLink={
                "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg"
              }
              caption={"Spring Flowers"}
            />
          </div>
        </li>
        <li style={{ marginTop: "1rem" }}>
          <DisplayList
            products={[
              { name: "Perk", quantity: 10, sales: 7 },
              { name: "Pepsi", quantity: 10, sales: 20 },
              { name: "Coke", quantity: 18, sales: 50 },
              { name: "Maggi", quantity: 41, sales: 22 },
              { name: "5Star", quantity: 7, sales: 9 },
            ]}
            header={"Products List"}
          />
        </li>
        <li style={{ marginTop: "1rem" }}>
          <ProductFilter
            products={[
              { name: "Perk", quantity: 10, sales: 7 },
              { name: "Pepsi", quantity: 10, sales: 20 },
              { name: "Coke", quantity: 18, sales: 50 },
              { name: "Maggi", quantity: 41, sales: 22 },
              { name: "5Star", quantity: 7, sales: 9 },
            ]}
            header={"Filtered List"}
          />
        </li>
        <li style={{ marginTop: "1rem" }}>
          <GradeIt
            student={{
              name: "John Doe",
              english: 90,
              maths: 80,
              computers: 70,
            }}
            header={"Student Details"}
          />
        </li>
        <li style={{ marginTop: "1rem" }}>
          <EmployeesList />
        </li>

        <li style={{ marginTop: "1rem" }}>
          <Total />
        </li>
        <li style={{ marginTop: "1rem" }}>
          <OrangeEmployeesList />
        </li>
        <li style={{ marginTop: "1rem" }}>
          <BorderEmployeesList />
        </li>
      </ol>
    </div>
  );
}

export default App;
