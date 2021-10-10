import CourseItem from "./CourseItem/CourseItem";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CoursesCarrousel.css";

const CourseCarrousel = ({ collectionTitle = "title", coursesData }) => {
  return (
    <section className="coursesCollection">
      <h2 className="coursesCarrousel__collectionTitle"> {collectionTitle} </h2>
      <Carousel
        showDots
        responsive={responsive}
        infinite
        draggable
        removeArrowOnDeviceType={["tablet", "mobile"]}
        focusOnSelect
        containerClass="coursesCarrousel"
        itemClass="coursesCarrousel__item"
      >
        {coursesData &&
          coursesData.map(({ id, title, subtitle, description, img }) => (
            <CourseItem
              key={id}
              title={title}
              subtitle={subtitle}
              img={img}
              description={description}
            />
          ))}
      </Carousel>
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

export default CourseCarrousel;
