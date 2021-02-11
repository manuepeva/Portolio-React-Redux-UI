import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="row cta">
      <div className="column column-cta">Contact Me</div>
      <div className="column">
        <Link id="button-cta" to="/contact">
          Email
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
