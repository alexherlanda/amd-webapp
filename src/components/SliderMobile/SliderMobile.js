import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SliderMobile.css";
import pic1 from "./data/1.png";
import pic2 from "./data/2.png";
import pic3 from "./data/3.png";

const SliderMobile = () => {
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
      // autoPlay

      draggable
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      <a href="https://debatemexico.org/convocatorias/ORG_CND2021.pdf">
        <img className="slide-mobile" alt="slide-1" src={pic1} />
      </a>
      <a href="https://debatemexico.org/membresias/liga.pdf">
        <img className="slide-mobile" alt="slide-1" src={pic2} />
      </a>
      <a href="https://www.ine.mx/mexico-debate-2021/">
        <img className="slide-mobile" alt="slide-1" src={pic3} />
      </a>
    </Carousel>
  );
};

export default SliderMobile;
