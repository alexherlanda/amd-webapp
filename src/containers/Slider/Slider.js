import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
import pic1 from "./data/1L.png";
import pic2 from "./data/2L.png";
import pic3 from "./data/3L.png";

const Slider = () => {
  const responsive = {
    xs: {
      breakpoint: { min: 0, max: 1900 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite
      containerClass="slider-container"
      itemClass="item-container-slider"
      // autoPlay
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      <a href="https://debatemexico.org/convocatorias/ORG_CND2021.pdf">
        <img className="slide-image" alt="slide-1" src={pic1} />
      </a>
      <a href="https://debatemexico.org/membresias/liga.pdf">
        <img className="slide-image" alt="slide-1" src={pic2} />
      </a>
      <a href="https://www.ine.mx/mexico-debate-2021/">
        <img className="slide-image" alt="slide-1" src={pic3} />
      </a>
    </Carousel>
  );
};

export default Slider;
