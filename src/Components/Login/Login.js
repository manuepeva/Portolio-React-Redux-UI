import React from "react";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ContactCallToAction from "../ContactCallToAction/ContactCallToAction";
import HeroSection from "../HeroSection/HeroSection";
import SpaceInvadersGame from "../SpaceInvadersGame/SpaceInvadersGame";
import PortfolioRepoLink from "../PortfolioRepoLink/PortfolioRepoLink";

const Login = () => {
  return (
    <div className="login-container">
      <div className="landingP">
        <HeroSection />
      </div>
      <div className="space-invaders-section">
        <SpaceInvadersGame />
      </div>
      <ProjectsSection />
      <PortfolioRepoLink />
      <ContactCallToAction />
    </div>
  );
};

export default Login;
