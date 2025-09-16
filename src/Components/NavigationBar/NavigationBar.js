import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = ({ toggle }) => {
  return (
    <div className="container-nav">
      <nav className="nav">
        <ul className={toggle ? "header-links-mob" : "header-links"} id="nav">
          <li>
            <Link className="link-h" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link-h" to="/education">
              Education
            </Link>
          </li>
          <li>
            <Link className="link-h" to="/location">
              Location
            </Link>
          </li>
          <li>
            <Link className="link-h" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
