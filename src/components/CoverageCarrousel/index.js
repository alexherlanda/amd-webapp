import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CoverageCarrousel.css";
import Subtitle from "../Subtitle";
import Item from "./Item";

const CoverageCarrousel = ({ collectionTitle = "title", coursesData }) => {
  return (
    <div className="coverageCarrouselRoot">
      <Subtitle title="Coberturas" className="coverageCarrousel__title" />
      <Carousel
        itemClass="coverageCarrousel__item"
        showDots={false}
        responsive={responsive}
        infinite
        draggable
        className="coverageCarrousel"
        customLeftArrow={<div />}
      >
        <Item
          imgSrc={
            "https://idic.mx/wp-content/uploads/2021/05/excelsior-logo.jpg"
          }
        />
      </Carousel>
    </div>
  );
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default CoverageCarrousel;
