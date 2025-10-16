import React from "react";
import { Link } from "react-router-dom";
import background from "../../../utils/img/footer-bg-image.png";
import "./PortfolioFooter.scss";
import { useTranslation } from "react-i18next";

const PortfolioFooter = () => {
  const { t, i18next } = useTranslation();
  return (
    <div
      className="footerImg"
      style={{ backgroundImage: `url(${background})` }}
    >
      <footer className="footer" role="contentinfo" aria-label="Main footer">
        <div className="footer-container">
          <div className="column about" aria-label="Personal information">
            <Link to="/" aria-label="Go to Manuel Pérez homepage">
              {t("footer.name")}
            </Link>
            <p>{t("footer.role")}</p>
            <p>{t("footer.zip")}</p>
            <p>{t("footer.location")}</p>
          </div>

          <div className="column navigation" aria-label="Site navigation">
            <Link to="/projects">{t("footer.projects")}</Link>
            <Link to="/education">{t("footer.education")}</Link>
            <Link to="/location">{t("footer.locationLink")}</Link>
            <Link to="/contact">{t("footer.contact")}</Link>
          </div>

          <div className="column social" aria-label="Social media links">
            <div className="social-item">
              <a
                href="https://github.com/manuepeva"
                aria-label="Manuel Pérez Github"
              >
                {t("footer.github")}
              </a>
              <span
                className="iconify"
                data-icon="logos:github-octocat"
                aria-hidden="true"
              ></span>
            </div>
            <div className="social-item">
              <a
                href="https://app.netlify.com/teams/manuepeva/overview"
                aria-label="Manuel Pérez Netlify"
              >
                {t("footer.netlify")}
              </a>
              <span
                className="iconify"
                data-icon="logos-netlify"
                aria-hidden="true"
              ></span>
            </div>
            <div className="social-item">
              <a
                href="https://dashboard.heroku.com/account"
                aria-label="Manuel Pérez Heroku"
              >
                {t("footer.heroku")}
              </a>
              <span
                className="iconify"
                data-icon="logos:heroku-icon"
                aria-hidden="true"
              ></span>
            </div>
            <div className="social-item">
              <a
                href="https://stackoverflow.com/users/6867029/manuel-p%c3%a9rez"
                aria-label="Manuel Pérez Stack Overflow"
              >
                {t("footer.stackoverflow")}
              </a>
              <span
                className="iconify"
                data-icon="logos:stackoverflow-icon"
                aria-hidden="true"
              ></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioFooter;
