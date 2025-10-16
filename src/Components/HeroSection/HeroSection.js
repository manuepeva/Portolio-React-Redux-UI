import React from "react";
import "./HeroSectionStyles.scss";
import productivity from "../../../utils/img/productivity.png";
import AttentionG from "../../../utils/img/attentionGraber.png";
import { useTranslation } from "react-i18next";
const HeroSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="banner">
      <div className="divImg">
        <img
          className="imgBanner"
          src={productivity}
          alt="Productivity in software development"
        ></img>
      </div>
      <div className="bannerT">
        <h1>{t("hero.title")}</h1>
        <p className="subTitle">{t("hero.subtitle")}</p>
      </div>
      <div className="AttentionG">
        <img src={AttentionG} alt="Attention Graver"></img>
      </div>
    </div>
  );
};

export default HeroSection;
