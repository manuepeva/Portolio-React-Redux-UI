import React from "react";
import ContactCallToAction from "../ContactCallToAction/ContactCallToAction";
import HeroSection from "../HeroSection/HeroSection";
import SpaceInvadersGame from "../SpaceInvadersGame/SpaceInvadersGame";
import PortfolioRepoLink from "../PortfolioRepoLink/PortfolioRepoLink";
import ProyectsTranslator from "../ProyectsSection/ProyectsTranslator";

const Login = () => {
  return (
    <div className="login-container">
      <div className="landingP">
        <HeroSection />
      </div>
      <div className="space-invaders-section">
        <SpaceInvadersGame />
      </div>
      <ProyectsTranslator />
      <PortfolioRepoLink />
      <ContactCallToAction />
    </div>
  );
};

export default Login;
