import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  // eslint-disable-next-line
  Switch,
  // eslint-disable-next-line
  Route,
  Link,
} from "react-router-dom";
// eslint-disable-next-line
import Projects from "../ProyectsPage/Projects";
// eslint-disable-next-line
import Education from "../Education/Education";
// eslint-disable-next-line
import Ubication from "../Location/Ubication";
// eslint-disable-next-line
import Contact from "../Contact/Contact";
import React from "react";

const Navigation = ({ toggle }) => {
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

export default Navigation;
