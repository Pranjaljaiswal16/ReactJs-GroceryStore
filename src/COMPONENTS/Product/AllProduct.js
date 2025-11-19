import React from "react";
import ProductCard from "./ProductCard";
import veg1 from "../../Images/veg1.png";
import veg2 from "../../Images/veg2.png";
import veg3 from "../../Images/veg3.png";
import veg4 from "../../Images/veg4.png";
import veg5 from "../../Images/veg5.png";
import veg6 from "../../Images/veg6.png";
import veg7 from "../../Images/veg7.png";
import veg8 from "../../Images/veg8.png";

import img1 from "../../Images/img1.png";
import img2 from "../../Images/img2.png";
import img3 from "../../Images/img3.png";
import img4 from "../../Images/img4.png";
import img5 from "../../Images/img5.png";


import "./AllProduct.css";

const AllProduct = () => {
  
  const product = [
    {
      id: 1,
      productimage: veg1,
      productname: "Product 1",
      productprice: 200,
      counttype: "1 each",
      discountprecent: 12,
    },

    {
      id: 2,
      productimage: veg2,
      productname: "Product 2",
      productprice: 300,
      counttype: "1 per kg",
      discountprecent: 19,
    },

    {
      id: 3,
      productimage: veg3,
      productname: "Product 3",
      productprice: 300,
      counttype: "1 each",
      discountprecent: 12,
    },

    {
      id: 4,
      productimage: veg4,
      productname: "Product 4",
      productprice: 400,
      counttype: "1 each",
      discountprecent: 12,
    },

    {
      id: 5,
      productimage: veg5,
      productname: "Product 5",
      productprice: 200,
      counttype: "1 each",
      discountprecent: 12,
    },

    {
      id: 6,
      productimage: veg6,
      productname: "Product 6",
      productprice: 300,
      counttype: "1 per kg",
      discountprecent: 19,
    },

    {
      id: 7,
      productimage: veg7,
      productname: "Product 7",
      productprice: 300,
      counttype: "1 each",
      discountprecent: 19,
    },

    {
      id: 8,
      productimage: veg8,
      productname: "Product 8",
      productprice: 400,
      counttype: "1 each",
      discountprecent: 12,
    },

  ];
  return (
    <div className="allproducts">
      <h1>All Products</h1>
      <div className="products">
        {
           product.map((item) => {
          return (
              
              <ProductCard data={item} key={item.id} />
          )
           
          })
        
        }
      </div>
    </div>
  );
};

export default AllProduct;
