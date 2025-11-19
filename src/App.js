import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePages/Home";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from "./Pages/HomePages/Product/ProductPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:prodid" element={<ProductPage />} />
      <Route
        path="*"
        element={
          <div>
            <h1>404 NOT FOUND</h1>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
