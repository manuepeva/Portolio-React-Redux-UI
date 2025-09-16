import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./ContactCallToAction.scss";

const ContactCallToAction = () => {
  return (
    <div className="row cta">
      <div className="column column-cta">Contact Me</div>
      <div className="column">
        <Button
          id="button-cta"
          component={Link}
          to="/contact"
          variant="contained"
        >
          Email
        </Button>
      </div>
    </div>
  );
};

export default ContactCallToAction;
