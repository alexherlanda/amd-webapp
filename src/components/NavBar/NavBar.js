import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import routes from "../../routes/routes";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        {routes.map(({ to, label, id }) => (
          <div key={id}>
            <Link to={to}>
              <li>{label}</li>
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
