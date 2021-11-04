import "./styles.css";
import Carousel from "react-multi-carousel";
import Subtitle from "../Subtitle";
import "react-multi-carousel/lib/styles.css";
import Organization from "./Item";

const ColaborationsCarrousel = () => {
  return (
    <div className="colaborationsCarrouselRoot">
      <Subtitle
        title="Colaboraciones"
        className={"colaborationsCarrousel__title"}
      />
      <Carousel
        showDots={false}
        responsive={responsive}
        infinite
        draggable
        removeArrowOnDeviceType={["tablet", "mobile"]}
        focusOnSelect
        containerClass="colaborationsCarrousel"
        itemClass="coursesCarrousel__item"
      >
        {data.map((organization) => (
          <Organization
            organizationImage={organization.organizationImage}
            organizationURL={organization.organizationURL}
            organizationName={organization.organizationName}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ColaborationsCarrousel;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 411 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 411, min: 0 },
    items: 1,
  },
};

const data = [
  {
    organizationName: "INE",
    organizationURL: "INE",
    organizationImage:
      "https://rnp.ine.mx/rnp/app/javax.faces.resource/images/logoINE.png?ln=ultima-layout",
  },
  {
    organizationName: "INE",
    organizationURL: "INE",
    organizationImage:
      "https://rnp.ine.mx/rnp/app/javax.faces.resource/images/logoINE.png?ln=ultima-layout",
  },
  {
    organizationName: "INE",
    organizationURL: "INE",
    organizationImage:
      "https://rnp.ine.mx/rnp/app/javax.faces.resource/images/logoINE.png?ln=ultima-layout",
  },
  {
    organizationName: "INE",
    organizationURL: "INE",
    organizationImage:
      "https://rnp.ine.mx/rnp/app/javax.faces.resource/images/logoINE.png?ln=ultima-layout",
  },
  {
    organizationName: "INE",
    organizationURL: "INE",
    organizationImage:
      "https://rnp.ine.mx/rnp/app/javax.faces.resource/images/logoINE.png?ln=ultima-layout",
  },
  {
    organizationName: "INE",
    organizationURL: "INE",
    organizationImage:
      "https://rnp.ine.mx/rnp/app/javax.faces.resource/images/logoINE.png?ln=ultima-layout",
  },
  {
    organizationName: "INE",
    organizationURL: "INE",
    organizationImage:
      "https://rnp.ine.mx/rnp/app/javax.faces.resource/images/logoINE.png?ln=ultima-layout",
  },
];
