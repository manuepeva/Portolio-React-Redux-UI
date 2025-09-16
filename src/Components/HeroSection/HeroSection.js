import React from "react";
import "./HeroSectionStyles.scss";
import productivity from "../../../utils/img/productivity.png";
import AttentionG from "../../../utils/img/attentionGraber.png";
const HeroSection = () => {
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
        <h1>Frontend Developer</h1>
        <p className="subTitle">
          Hi, I´m Manuel. I develop & build with ReactJS
        </p>
      </div>
      <div className="AttentionG">
        <img src={AttentionG} alt="Attention Graver"></img>
      </div>
    </div>
  );
};

export default HeroSection;
