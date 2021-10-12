import React from "react";
import "./TeamMember.css";
import email from "assets/images/email.svg";
function TeamMember({ name, rol, src }) {
  return (
    <div className="col teammember__container ">
      <div className="teammember__image">
        <img src={src} alt={name} />
      </div>

      <h3 className="teammember__name">{name}</h3>
      <h4 className="teammember__rol">{rol}</h4>
      <span className="teammember__icon">
        <img width="48px" src={email} alt="email" />
      </span>
    </div>
  );
}

export default TeamMember;
