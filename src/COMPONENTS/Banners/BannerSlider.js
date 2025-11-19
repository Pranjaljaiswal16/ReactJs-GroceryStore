import React from "react";
import Slider from "react-slick";
import "./BannerSlider.css";
const BannerSlider = () => {
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1475275083424-b4ff81625b60?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fresh Vegetables & Fruits at Your doorstep",
      description: "We deliver fresh vegetables & Fruits at your doorstep",
      button: "https://www.google.com",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      title: "Fresh Vegetables & Fruits at Your doorstep",
      description:
        "Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, and I could't be more delighted",
      button: "https://www.google.com",
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      title: "Fresh Vegetables & Fruits at Your doorstep",
      description:
        "Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, and I could't be more delighted",
      button: "https://www.google.com",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="bannerslider">
        <Slider className="bannerslider" {...settings}>
          {data.map((item) => {
            return (
              <div className="imagecont" key={item.id}>
                <img src={item.image} alt="noing" />
                <div className="content">
                  <h1>{item.title}</h1>
                  <span>{item.description}</span>
                  <button>Shop More</button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
