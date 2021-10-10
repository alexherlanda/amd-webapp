import React from "react";

function SectionResume({ title, children }) {
  return (
    <div className="section__line">
      <h2 className="section__title"> {title.toUpperCase()} </h2>
      {children}
    </div>
  );
}

export default SectionResume;
