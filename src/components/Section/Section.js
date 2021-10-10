import React from "react";
import PropTypes from "prop-types";

import "./Section.css";

const Section = ({ children, type, rest }) => {
  return (
    <section className={`section section__${type}`} {...rest}>
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
