import React from "react";
import ProjectsCmp from "../Projects/ProjectsCmp";
import CallToAction from "../Cta/CallToAction";
import Banner from "../Banner/Banner";
import ReduxCom from "../BattleComp/ReduxCom";
import GitRepo from "../GitRepo/GitRepo";

const Login = () => {
  return (
    <div className="login-container">
      <div className="landingP">
        <Banner />
      </div>
      <div className="redux-section">
        <ReduxCom />
      </div>
      <ProjectsCmp />
      <GitRepo />
      <CallToAction />
    </div>
  );
};

export default Login;
