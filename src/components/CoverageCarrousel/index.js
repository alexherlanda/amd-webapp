import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CoverageCarrousel.css";
import Subtitle from "../Subtitle";

const CoverageCarrousel = ({ collectionTitle = "title", coursesData }) => {
  return (
    <section className="mediaCoverage">
      <div className="coverageItem">
        <div className="coverageItemImg"></div>
        <div className="quote">
          <span className="quote__text">
            {
              "Gestor Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..."
            }
          </span>
          <span> Ver mas >>></span>
        </div>
      </div>
    </section>
  );
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default CoverageCarrousel;
