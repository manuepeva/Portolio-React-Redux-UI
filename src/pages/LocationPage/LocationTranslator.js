import React from "react";
import imageCusco from "../../../utils/img/cusco.png";
import imagePeru from "../../../utils/img/peru.png";
import imageLima from "../../../utils/img/Lima-Peru.jpg";
import imageGermany from "../../../utils/img/germany.jpg";
import LocationPage from "./LocationPage";
import { useTranslation } from "react-i18next";

const LocationTranslator = () => {
  const { t } = useTranslation();
  const locations = [
    {
      avatar: "C",
      title: t("locationPage.cuscoTitle"),
      image: imageCusco,
      description: t("locationPage.cuscoDesc"),
    },
    {
      avatar: "L",
      title: t("locationPage.limaTitle"),
      image: imageLima,
      description: t("locationPage.limaDesc"),
    },
    {
      avatar: "P",
      title: t("locationPage.peruTitle"),
      image: imagePeru,
      description: t("locationPage.peruDesc"),
    },
    {
      avatar: "B",
      title: t("locationPage.germanyTitle"),
      image: imageGermany,
      description: t("locationPage.germanyDesc"),
    },
  ];
  return <LocationPage locations={locations} />;
};
export default LocationTranslator;
