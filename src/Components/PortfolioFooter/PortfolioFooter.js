import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import background from "../../../utils/img/footer-bg-image.png";
import "./PortfolioFooter.scss";

const PortfolioFooter = () => {
  return (
    <div
      className="footerImg"
      style={{ backgroundImage: `url(${background})` }}
    >
      <footer className="footer" role="contentinfo" aria-label="Main footer">
        <div className="footer-container">
          <div className="column about" aria-label="Personal information">
            <Link to="/" aria-label="Go to Manuel Pérez homepage">Manuel Pérez</Link>
            <p>Front End Developer</p>
            <p>ZIP 08000</p>
            <p>Cusco Perú</p>
          </div>

          <div className="column navigation" aria-label="Site navigation">
            <Link to="/projects">Projects</Link>
            <Link to="/education">Education</Link>
            <Link to="/location">Location</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="column social" aria-label="Social media links">
            <div className="social-item">
              <a href="https://github.com/manuepeva"  aria-label="Manuel Pérez Github">Github
              </a>
              <span className="iconify" data-icon="logos:github-octocat" aria-hidden="true"></span>
            </div>
            <div className="social-item">
              <a href="https://app.netlify.com/teams/manuepeva/overview" aria-label="Manuel Pérez Netlify">Netlify
              </a>
              <span className="iconify" data-icon="logos-netlify" aria-hidden="true"></span>
            </div>
            <div className="social-item">
              <a href="https://dashboard.heroku.com/account"  aria-label="Manuel Pérez Heroku">Heroku
              </a>
              <span className="iconify" data-icon="logos:heroku-icon" aria-hidden="true"></span>
            </div>
            <div className="social-item">
              <a href="https://stackoverflow.com/users/6867029/manuel-p%c3%a9rez" aria-label="Manuel Pérez Stack Overflow">Stack Overflow
              </a>
              <span className="iconify" data-icon="logos:stackoverflow-icon" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default PortfolioFooter;
