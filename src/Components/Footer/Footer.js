import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import background from "../../img/footer-bg-image.png";

const Footer = () => {
  return (
    <div
      className="footerImg"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="row">
        <div className="column">
          <a href="/">Manuel Pérez</a>
          <p>Front End Developer</p>
          <p>ZIP 08000</p>
          <p>Cusco Perú</p>
        </div>
        <div className="column">
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education</Link>
          <Link to="/location">Location</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="column">
          <a href="https://github.com/manuepeva"><span className="iconify" data-icon="logos:github-octocat" data-inline="false"></span>&nbsp;Github</a>
          <a href="https://app.netlify.com/teams/manuepeva/overview"><span className="iconify" data-icon="logos-netlify" data-inline="false"></span>&nbsp;Netlify</a>
          <a href="https://dashboard.heroku.com/account"><span className="iconify" data-icon="logos:heroku-icon" data-inline="false"></span>&nbsp;Heroku</a>
          <a href="https://stackoverflow.com/users/6867029/manuel-p%c3%a9rez"><span className="iconify" data-icon="logos:stackoverflow-icon" data-inline="false"></span>&nbsp;Stack Over Flow</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
