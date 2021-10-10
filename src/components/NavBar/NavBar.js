import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <div>
          <a href="/about">
            <li>CONÓCENOS</li>
          </a>
        </div>
        <div>
          <a href="/education">
            <li>EDUCACION</li>
          </a>
        </div>

        <div>
          <a href="/wip">
            <li>LIGA MEXICANA DE DEBATE</li>
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
