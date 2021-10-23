import React from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import "./Section.css";

const Section = ({ children, type, bg, ...rest }) => {
  console.log("bg :>> ", bg);
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return isPortrait && type === "segment" ? (
    <section
      className={`section section__${type} section-mobile  ${bg}`}
      {...rest}
    >
      <div className="section__container">{children}</div>
    </section>
  ) : (
    <section className={`section section__${type} ${bg}`} {...rest}>
      <div className="section__container">{children}</div>
    </section>
  );
};

Section.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(["single", "segment", "resume"]),
};

Section.defaultProps = {
  description: "",
  title: "title",
  type: "single",
};

export default Section;
