import bread1 from "../../Images/bread1.png";
import fruits2 from "../../Images/fruits2.png";
import personal from "../../Images/personal.png";
import icecream from "../../Images/ice-cream.png";
import spices from "../../Images/spices.png";
import meat from "../../Images/meat.png";
import juice from "../../Images/juice.png";
import filter from "../../Images/filter.png";

import "./CategorySidebar.css";

import { Form } from "react-bootstrap";
const CategorySidebar = () => {
  const data = [
    {
      id: 1,
      categoryimage: bread1,
      categoryname: "Bread & Bakery",
    },

    {
      id: 2,
      categoryimage: fruits2,
      categoryname: "Fruits",
    },

    {
      id: 3,
      categoryimage: personal,
      categoryname: "Personal Care",
    },

    {
      id: 4,
      categoryimage: icecream,
      categoryname: "Frozen Foods",
    },
    {
      id: 5,
      categoryimage: spices,
      categoryname: "Herb & Spices",
    },

    {
      id: 6,
      categoryimage: meat,
      categoryname: "Meat alternatives",
    },

    {
      id: 7,
      categoryimage: juice,
      categoryname: "Cans & Jars",
    },

    {
      id: 8,
      categoryimage: filter,
      categoryname: "Household & Cleaning",
    },
  ];
  return (
    <div className="categorysidebar">
      {data.map((item) => {
        return (
          <div className="category">
            <img src={item.categoryimage} alt="categoryimage" />
            <h3>{item.categoryname}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySidebar;
