import React from "react";
import weatherAPI from "../../../utils/img/weatherAPI.png";
import cryptoAPI from "../../../utils/img/cryptoAPI.png";
import drinksAPI from "../../../utils/img/drinksAPI.png";
import carInsuranceAPI from "../../../utils/img/carInsuraceAPI.png";
import { useTranslation } from "react-i18next";
import ProjectsSection from "./ProyectsSection";

const ProyectsTranslator = () => {
  const { t } = useTranslation();
  const proyects = [
    {
      title: t("projectsSection.weatherApiTitle"),
      description: t("projectsSection.weatherApiDesc"),
      image: weatherAPI,
      link: "https://confident-swartz-a9b1cc.netlify.app/",
    },
    {
      title: t("projectsSection.cryptoApiTitle"),
      description: t("projectsSection.cryptoApiDesc"),
      image: cryptoAPI,
      link: "https://gracious-spence-3edb13.netlify.app/",
    },
    {
      title: t("projectsSection.drinksApiTitle"),
      description: t("projectsSection.drinksApiDesc"),
      image: drinksAPI,
      link: "https://sleepy-ptolemy-aef1d2.netlify.app/",
    },
    {
      title: t("projectsSection.carInsuranceApiTitle"),
      description: t("projectsSection.carInsuranceApiDesc"),
      image: carInsuranceAPI,
      link: "https://pensive-tesla-643283.netlify.app/",
    },
  ];

  return <ProjectsSection proyects={proyects} />;
};

export default ProyectsTranslator;
