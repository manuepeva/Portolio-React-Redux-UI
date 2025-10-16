import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavigationBar = ({ toggle, onLinkClick }) => {
  const { t } = useTranslation();
  return (
    <div className="container-nav">
      <nav className="nav">
        <ul className={toggle ? "header-links-mob" : "header-links"} id="nav">
          <li>
            <Link className="link-h" onClick={onLinkClick} to="/projects">
              {t("navigation.projects")}
            </Link>
          </li>
          <li>
            <Link className="link-h" onClick={onLinkClick} to="/education">
              {t("navigation.education")}
            </Link>
          </li>
          <li>
            <Link className="link-h" onClick={onLinkClick} to="/location">
              {t("navigation.location")}
            </Link>
          </li>
          <li>
            <Link className="link-h" onClick={onLinkClick} to="/contact">
              {t("navigation.contact")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavigationBar.propTypes = {
  toggle: PropTypes.bool.isRequired,
  onLinkClick: PropTypes.func,
};

export default NavigationBar;
