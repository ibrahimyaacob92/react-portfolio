import { AiFillGithub, AiTwotonePhone, AiFillLinkedin } from "react-icons/ai";
import {
  IoLocationSharp,
  IoMail,
  IoLogoJavascript,
  IoLogoPython,
  IoLogoGithub,
  IoLogoCss3,
  IoTrophyOutline,
  IoLogoReact,
  IoLogoTableau,
  IoAccessibilitySharp,
  IoCode,
  IoLogoNodejs,
  IoLogoElectron,
  IoBarChart,
  IoVideocam,
} from "react-icons/io5";
import { FaGlobeAsia, FaHandHoldingHeart } from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiUbuntu,
  SiNginx,
  SiNextDotJs,
  SiRedis,
  SiSocketDotIo,
  SiDjango,
  SiMicrosoftexcel,
  SiTypescript,
  SiAuth0,
  SiRedux,
  SiAtlassian,
  SiVisualstudiocode,
} from "react-icons/si";
import { CgPiano } from "react-icons/cg";
import { GiCookingPot, GiChickenOven } from "react-icons/gi";
import { BsFillGearFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

export const heading = {
  name: "Ibrahim Yaacob",
  title: "Test Office Engineer",
};

export const contactsData = [
  {
    icon: IoMail,
    label: "Email",
    value: "ibrahimyaacob92@yahoo.com",
    link: "mailto:ibrahimyaacob92@yahoo.com",
  },
  {
    icon: AiTwotonePhone,
    label: "Phone",
    value: "(+60)148403895",
    link: "https://api.whatsapp.com/send?phone=60148403895",
  },
  {
    icon: IoLocationSharp,
    label: "Location",
    value: "Johor Bahru, MY",
    link: "https://www.google.com/maps/place/Johor+Bahru,+Johor/@1.5448504,103.5695405,11z/data=!3m1!4b1!4m5!3m4!1s0x31da12c6d36b3a27:0xd5f4b21db593d4f5!8m2!3d1.492659!4d103.7413591",
  },
];
export const links = [
  // {
  //   icon: FaGlobeAsia,
  //   label: "Portfolio",
  //   value: "ibrahimyaacob.xyz",
  //   link: "https://ibrahimyaacob.xyz/",
  // },
  {
    icon: AiFillGithub,
    label: "GitHub",
    value: "github.com/ibrahimyaacob92",
    link: "https://github.com/ibrahimyaacob92",
    // value: "https://bit.ly/2SSBeH7",
  },
  {
    icon: AiFillLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ibrahimyaacob",
    link: "https://www.linkedin.com/in/ibrahim-yaacob",
    // value: "https://bit.ly/3tYkJpQ",
  },
];

// high level only
export const education = {
  course: "BSc Mechanical Engineering",
  university: "University Technology Malaysia",
  cgpa: "3.64",
  period: "Sept 2011 - Apr 2015",
  location: "Johor, MY",
};

export const languages = [
  {
    name: "Python",
    years: "3",
    icon: IoLogoPython,
    iconSize: "18px",
  },
  {
    name: "JavaScript",
    years: "2",
    icon: IoLogoJavascript,
    iconSize: "22px",
  },
  {
    name: "SQL",
    years: "1",
    icon: SiPostgresql,
    iconSize: "18px",
  },
  {
    name: "TypeScript",
    years: "1",
    icon: SiTypescript,
    iconSize: "18px",
  },
];

export const technologies = [
  {
    name: "NodeJS",
    years: "3 Years",
    icon: IoLogoNodejs,
    iconSize: "18px",
  },
  {
    name: "ReactJS",
    years: "3 Years",
    icon: IoLogoReact,
    iconSize: "18px",
  },
  {
    name: "Django",
    years: "3 Years",
    icon: SiDjango,
    iconSize: "18px",
  },
  {
    name: "CSS",
    years: "3 Years",
    icon: IoLogoCss3,
    iconSize: "18px",
  },
  {
    name: "ElectronJS",
    years: "3 Years",
    icon: IoLogoElectron,
    iconSize: "18px",
  },
  {
    name: "Ubuntu",
    years: "3 Years",
    icon: SiUbuntu,
    iconSize: "18px",
  },
  {
    name: "PostgreSQL",
    years: "3 Years",
    icon: SiPostgresql,
    iconSize: "18px",
  },
  {
    name: "MongoDB",
    years: "3 Years",
    icon: SiMongodb,
    iconSize: "18px",
  },
  {
    name: "Git",
    years: "3 Years",
    icon: IoLogoGithub,
    iconSize: "18px",
  },
  // {
  //   name: "Redis",
  //   years: "3 Years",
  //   icon: SiRedis,
  //   iconSize: "18px",
  // },
  {
    name: "Tableau",
    years: "1 Years",
    icon: IoLogoTableau,
    iconSize: "18px",
  },
  {
    name: "Excel VBA",
    years: "3 Years",
    icon: SiMicrosoftexcel,
    iconSize: "18px",
  },
  {
    name: "Atlassian",
    years: "3 Years",
    icon: SiAtlassian,
    iconSize: "18px",
  },
  {
    name: "VSCode",
    icon: SiVisualstudiocode,
    iconSize: "19px",
  },
];

export const engineering = [
  {
    name: "Design & 3D Modelling",
    icon: BsFillGearFill,
    iconSize: "12px",
  },
  {
    name: "Fluid Dynamics",
    icon: BsFillGearFill,
    iconSize: "12px",
  },
  {
    name: "Thermodynamics",
    icon: BsFillGearFill,
    iconSize: "12px",
  },
  {
    name: "Acoustics Vibration",
    icon: BsFillGearFill,
    iconSize: "12px",
  },
  {
    name: "Statistical Data Analysis",
    icon: BsFillGearFill,
    iconSize: "12px",
  },
];

export const managerial = [
  {
    name: "Product Verification Testing",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
  {
    name: "Lean Six Sigma Problem Solving",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
  {
    name: "Software Development Lifecycle",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
  {
    name: "Project Management",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
  {
    name: "Agile Methodology",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
  {
    name: "Business Process Management",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
  {
    name: "Teamwork & Collaboration",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
  {
    name: "Mentoring",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
];

export const interest = [
  {
    name: "Coding",
    icon: IoCode,
    iconSize: "18px",
  },
  {
    name: "Music",
    icon: CgPiano,
    iconSize: "18px",
  },
  {
    name: "Startup Ideas",
    icon: HiOutlineLightBulb,
    iconSize: "22px",
  },
  {
    name: "Videography",
    icon: IoVideocam,
    iconSize: "18px",
  },
  {
    name: "Volunteering",
    icon: FaHandHoldingHeart,
    iconSize: "18px",
  },
  {
    name: "Cooking",
    icon: GiCookingPot,
    iconSize: "20px",
  },
];

export const workExperiences = [
  {
    company: "Dyson Development Center",
    period: "Feb 2018 - Present",
    role: "Test Office Engineer/Developer",
    description:
      "Working in a small team that supports Test Department in developing integrated systems solution to improve the current process and output.",
    experiences: [
      {
        title:
          "Test Data Collecting Framework (JIRA's TestRail-like Application)",
        points: [
          "Design and Develop an integrated framework to render test-data-collection template from Python Scripts using React-Electron Boilerplate.",
          "The framework handles API integration to the Test Request, Asset Management system and Test Data Storage (Tequra Analytics)",
          "Using Node's Python-Shell module to run Python Scripts for template initialization and calculation requests",
          "Previously, most of the test data are collected with Excel Templates that suffers from discrepancy and would have poor maintainability and scalability",
        ],
      },
      {
        title: "Test Request Tool & Master Data Development for Test Dept.",
        points: [
          "Design and Develop a tool for laboratory test requests using Django and PostgreSQL with Vanilla JS",
          "A test management tool to create and workflow a test request by associating Test Methods, test unit, laboratories and operator",
          "The data in Postgres also served as Master Data for other application usage, such as Tableau Reporting and Test Data Collector Tools",
        ],
      },
      {
        title: "Data Architechture, Engineering & Alignment Works",
        points: [
          "Design an improved structure for Test Method that has more clarity over existing structure. Work together with various lab representative to raise the awareness and to transform and migrate the newer Test Method structure",
          "Develop a schema of the universal test data structure to fit multiple types of Laboratory & Product Test Methods",
          "A companion Python Script/App using XLWings and Eel is written to write & ingest test data from multiple Excel Test Report Templates to JSON file (later to be ingested by other tool)",
        ],
      },
      {
        title: "Product Verification Testing",
        points: [
          "Managing product verification testing and operation for Acoustic Labs",
          "Developed Excel VBA Sound Power Level Calculator, Report Generator, Lab Scheduling and Activity Listing for the Operation",
          "Test Method Development for Sound Power Level Declaration for home appliances",
        ],
      },
    ],
  },
  {
    company: "Daikin Refrigeration",
    period: "Feb 2017 - Jan 2018",
    role: "Product Test Engineer",
    description:
      "Responsible of overseing the R&D Test Activity, Verifying Results & Reporting for Refrigeration Products",
    experiences: [
      {
        title: "Product Test Enginner",
        points: [
          "Manage the testing activity/operation of custom-build Air Handling Units (AHU) and Condensing Unit mock-ups.",
          "Testing Varies from Acoustic, Pressure, Electronic Safety, Cooling Capacity  ",
        ],
      },
    ],
  },
  {
    company: "Vitrox Technology",
    period: "May 2015 - Sept 2016",
    role: "Hardware Design Engineer",
    description:
      "Design the machine vision hardwares for semiconductor inspection unit with SolidWorks",
    experiences: [
      {
        title: "Hardware Design Engineer",
        points: [
          "Design modular industrial camera mount, lighting modules and frame for the inspection system",
          "Admin for ERP system, Epicor, to manage CAD drawing",
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: "Repo Comparison Site",
    points: [
      "Comparing Repository/Packages and score them based on metrics",
      "Developed for fun using React + TypeScript",
      "https://myrepoisbetterthanyours.netlify.app",
    ],
  },
  // {
  //   title: "Resume Builder",
  //   points: [
  //     "This resume is generated from a resume builder using ReactJS",
  //     "Fetches data from the JSON file in GitHub",
  //   ],
  // },
  // {
  //   title: "Side Work",
  //   points: ["Portfolio Landing Page", "Simple E-Commerce"],
  // },
];
