import React from "react";
import FreeCodeCampCertificate from "../../../utils/img/FreeCodeCampCertificate.png";
import TreeHouseCert from "../../../utils/img/teamtreehouse.png";
import UniversityCert from "../../../utils/img/andina.png";
import UdemyCert from "../../../utils/img/udemy.png";
import TOEFL from "../../../utils/img/toefl.png";
import AcupariCert from "../../../utils/img/acupari.png";
import { useTranslation } from "react-i18next";
import EducationPage from "./EducationPage";
import EducationSection from "./EducationPage";

const EducationTranslator = () => {
  const { t } = useTranslation();
  const educationData = [
    {
      avatar: "F",
      title: t("educationPage.frontendTitle"),
      subheader: t("educationPage.frontendSubheader"),
      image: FreeCodeCampCertificate,
      institution: t("educationPage.frontendInstitution"),
      description: t("educationPage.frontendDesc"),
      expandedTitle: t("educationPage.frontendExpandedTitle"),
      expandedDescription: t("educationPage.frontendExpandedDesc"),
      topics: t("educationPage.frontendExpandedTopics", {
        returnObjects: true,
      }),
      dateCompleted: t("educationPage.frontendExpandedDateCompleted"),
      link: "https://www.freecodecamp.org/certification/manuepeva/legacy-front-end",
      linkText: t("educationPage.frontendLinkText"),
    },
    {
      avatar: "F",
      title: t("educationPage.treehouseTitle"),
      subheader: t("educationPage.treehouseSubheader"),
      image: TreeHouseCert,
      institution: t("educationPage.treehouseInstitution"),
      description: t("educationPage.treehouseDesc"),
      expandedTitle: t("educationPage.treehouseExpandedTitle"),
      expandedDescription: t("educationPage.treehouseExpandedDesc"),
      topics: t("educationPage.treehouseExpandedTopics", {
        returnObjects: true,
      }),
      dateCompleted: t("educationPage.treehouseExpandedDateCompleted"),
      link: "https://teamtreehouse.com/",
      linkText: t("educationPage.treehouseLinkText"),
    },
    {
      avatar: "F",
      title: t("educationPage.udemyTitle"),
      subheader: t("educationPage.udemySubheader"),
      image: UdemyCert,
      institution: t("educationPage.udemyInstitution"),
      description: t("educationPage.udemyDesc"),
      expandedTitle: t("educationPage.udemyExpandedTitle"),
      expandedDescription: t("educationPage.udemyExpandedDesc"),
      topics: t("educationPage.udemyExpandedTopics", {
        returnObjects: true,
      }),
      dateCompleted: t("educationPage.udemyExpandedDateCompleted"),
      link: "https://www.udemy.com/",
      linkText: t("educationPage.udemyLinkText"),
    },
    {
      avatar: "B",
      title: t("educationPage.businessTitle"),
      subheader: t("educationPage.businessSubheader"),
      image: UniversityCert,
      institution: t("educationPage.businessInstitution"),
      description: t("educationPage.businessDesc"),
      expandedTitle: t("educationPage.businessExpandedTitle"),
      expandedDescription: t("educationPage.businessExpandedDesc"),
      topics: t("educationPage.businessExpandedTopics", {
        returnObjects: true,
      }),
      dateCompleted: t("educationPage.businessExpandedDateCompleted"),
      link: "http://repositorio.uandina.edu.pe/browse?type=author&value=P%C3%A9rez+Vallenas%2C+Manuel",
      linkText: t("educationPage.businessLinkText"),
    },
    {
      avatar: "T",
      title: t("educationPage.toeflTitle"),
      subheader: t("educationPage.toeflSubheader"),
      image: TOEFL,
      institution: t("educationPage.toeflInstitution"),
      description: t("educationPage.toeflDesc"),
      expandedTitle: t("educationPage.toeflExpandedTitle"),
      expandedDescription: t("educationPage.toeflExpandedDesc"),
      topics: t("educationPage.toeflExpandedTopics", {
        returnObjects: true,
      }),
      dateCompleted: t("educationPage.toeflExpandedDateCompleted"),
      link: "https://www.ets.org/",
      linkText: t("educationPage.toeflLinkText"),
    },
    {
      avatar: "G",
      title: t("educationPage.germanTitle"),
      subheader: t("educationPage.germanSubheader"),
      image: AcupariCert,
      institution: t("educationPage.germanInstitution"),
      description: t("educationPage.germanDesc"),
      expandedTitle: t("educationPage.germanExpandedTitle"),
      expandedDescription: t("educationPage.germanExpandedDesc"),
      topics: t("educationPage.germanExpandedTopics", {
        returnObjects: true,
      }),
      dateCompleted: t("educationPage.germanExpandedDateCompleted"),
      link: "https://www.acupari.pe/",
      linkText: t("educationPage.germanLinkText"),
    },
  ];

  return <EducationPage educationData={educationData} />;
};

export default EducationTranslator;
