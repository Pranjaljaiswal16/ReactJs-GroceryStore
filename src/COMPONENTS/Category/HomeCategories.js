import React from "react";
import bread1 from "../../Images/bread1.png";
import fruits2 from "../../Images/fruits2.png";
import spices from "../../Images/spices.png";
import personal from "../../Images/personal.png";

import "./HomeCategories.css";

const HomeCategories = () => {
  return (
    <div className="homecategories">
      <div className="container">
        <img src={bread1} alt="bread1" />
        <div className="content">
          <h1>Bread at your doorstep</h1>
          <p>Shop Bread now</p>
        </div>
      </div>
      <div className="container">
        <img src={fruits2} alt="fruits2" />
        <div className="content">
          <h1>Fruits at your doorstep</h1>
          <p>Shop Fruits now</p>
        </div>
      </div>
      <div className="container">
        <img src={spices} alt="spices" />
        <div className="content">
          <h1>Spices at your doorstep</h1>
          <p>Shop Spices now</p>
        </div>
      </div>
      <div className="container">
        <img src={personal} alt="personal" />
        <div className="content">
          <h1>Care at your doorstep</h1>
          <p>Shop Care now</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
