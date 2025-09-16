import FreeCodeCampCertificate from "../../../utils/img/FreeCodeCampCertificate.png";
import treeHouseCert from "../../../utils/img/teamtreehouse.png";
import universityCert from "../../../utils/img/andina.png";
import udemyCert from "../../../utils/img/udemy.png";
import TOEFL from "../../../utils/img/toefl.png";
import acupariCert from "../../../utils/img/acupari.png";

export const educationData = [
  {
    avatar: "F",
    title: "Frontend Developer",
    subheader: "August 23, 2017",
    image: FreeCodeCampCertificate,
    institution: "Free Code Camp University",
    description:
      "Frontend Developer Certification - 400 hours. JavaScript - Algorithms - Libraries - CSS - HTML API - Github",
    expandedTitle: "Online Frontend Developer Certification",
    expandedDescription:
      "This is a nonprofit organization (United States Federal ID: 820779546), that offers free online development courses.",
    topics: [
      "Responsive Web Design",
      "JavaScript Algorithms & Data Structures",
      "Front End Libraries",
      "API´s and microservices",
    ],
    dateCompleted: "August 23, 2017",
    link: "https://www.freecodecamp.org/certification/manuepeva/legacy-front-end",
    linkText: "Certificate",
  },
  {
    avatar: "F",
    title: "Frontend Course",
    subheader: "December 25, 2018",
    image: treeHouseCert,
    institution: "TeamTreeHouse",
    description:
      "Online Frontend Developer course. HTML - JavaScript - CSS - Unity - Java - SQL - API - PhP",
    expandedTitle: "Front End Development Course",
    expandedDescription: "Team Tree House is an organization that offers paid developer courses.",
    topics: [
      "Responsive Web Design",
      "JavaScript Algorithms & Data Structures",
      "Front End Libraries",
      "API´s and microservices",
      "Unity",
      "SQL",
    ],
    dateCompleted: "December 25, 2018",
    link: "https://teamtreehouse.com/",
    linkText: "Website",
  },
  {
    avatar: "F",
    title: "Frontend Course",
    subheader: "November 24, 2020",
    image: udemyCert,
    institution: "Udemy",
    description:
      "Online Frontend React course. Hooks, ES6, Firebase, NextJS, API, GatsbyJS, GraphQl, localStorage, Heroku, Netlify, Git, Visual Studio Code",
    expandedTitle: "Front End React Development Course",
    expandedDescription: "Udemy.com offers paid developer courses.",
    topics: [
      "ReactJS - React Hooks",
      "API management and configuration inside React",
      "React frameworks such as GatsbyJS and NextJS",
      "Deployment to Netlify (frontend) and Heroku (backend)",
      "Configuration and usage of browser Devtools.",
      "Redux - Redux-Hooks - Store",
    ],
    dateCompleted: "November 24, 2020",
    link: "https://www.udemy.com/",
    linkText: "Website",
  },
  {
    avatar: "B",
    title: "Business Administration",
    subheader: "June 30, 2012",
    image: universityCert,
    institution: "Universidad Andina del Cusco",
    description:
      "Business Management University Degree, four years long and graduated with Thesis. Member of diverse study groups.",
    expandedTitle: "Business Administration Degree",
    expandedDescription: "Universidad Andina del Cusco is one of the biggest universities in Cusco.",
    topics: [
      "Business Management",
      "Organization",
      "Planification",
      "Human Resourses",
      "Operations",
      "Finances",
    ],
    dateCompleted: "June 30, 2012",
    link: "http://repositorio.uandina.edu.pe/browse?type=author&value=P%C3%A9rez+Vallenas%2C+Manuel",
    linkText: "University Repository",
  },
  {
    avatar: "T",
    title: "TOEFL",
    subheader: "October 12, 2019",
    image: TOEFL,
    institution: "Test of English as a Foreign Language",
    description:
      "International English Exam, taken on October 12, 2019. Score 87 C-1",
    expandedTitle: "TOEFL",
    expandedDescription:
      "The American Peruvian Cultural Institut (ICPNA-CUSCO) is authorized to take English international exams in Cusco.",
    topics: ["English"],
    dateCompleted: "October 12, 2019",
    link: "https://www.ets.org/",
    linkText: "Website",
  },
  {
    avatar: "G",
    title: "German Language",
    subheader: "Ongoing",
    image: acupariCert,
    institution: "ACUPARI - German Peruvian Institut",
    description: "Ongoing German language studies, currently on level A2.2",
    expandedTitle: "German Language",
    expandedDescription: "ACUPARI is renewed place to learn German online",
    topics: ["German"],
    dateCompleted: "Ongoing studies",
    link: "https://www.acupari.pe/",
    linkText: "Website",
  },
];