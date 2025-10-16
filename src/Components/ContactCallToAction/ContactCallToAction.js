import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./ContactCallToAction.scss";
import { useTranslation } from "react-i18next";

const ContactCallToAction = () => {
  const { t, i18next } = useTranslation();
  return (
    <div className="row cta">
      <div className="column column-cta">{t("contactCTA.contactMe")}</div>
      <div className="column">
        <Button
          id="button-cta"
          component={Link}
          to="/contact"
          variant="contained"
        >
          {t("contactCTA.email")}
        </Button>
      </div>
    </div>
  );
};

export default ContactCallToAction;
