import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = ({ toggle, onLinkClick }) => {
  return (
    <div className="container-nav">
      <nav className="nav">
        <ul className={toggle ? "header-links-mob" : "header-links"} id="nav">
          <li>
            <Link className="link-h" onClick={onLinkClick} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link-h" onClick={onLinkClick} to="/education">
              Education
            </Link>
          </li>
          <li>
            <Link className="link-h" onClick={onLinkClick} to="/location">
              Location
            </Link>
          </li>
          <li>
            <Link className="link-h" onClick={onLinkClick} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
