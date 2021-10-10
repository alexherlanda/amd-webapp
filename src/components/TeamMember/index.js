import React from "react";
import "./TeamMember.css";
function TeamMember({ name, rol, src }) {
  return (
    <div className="col teammember__container">
      <div className="teammember__image">
        <img src={src} alt={name} />
      </div>

      <h3 className="teammember__name">{name}</h3>
      <h4 className="teammember__rol">{rol}</h4>
      <span className="teammember__icon"></span>
    </div>
  );
}

export default TeamMember;
