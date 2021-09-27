import React from "react";
import "./Section.css";

const Section = ({ children, description, title }) => {
  return (
    <section className="section">
      <h2 className="section__title"> {title.toUpperCase()} </h2>
      <p className="section__description"> {description} </p>
      {children}
    </section>
  );
};

export default Section;
