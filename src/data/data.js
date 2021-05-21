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
} from "react-icons/si";
import { CgPiano } from "react-icons/cg";
import { GiCookingPot, GiChickenOven } from "react-icons/gi";
import { BsFillGearFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

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
  {
    icon: FaGlobeAsia,
    label: "Portfolio",
    value: "ibrahimyaacob.xyz",
    link: "https://ibrahimyaacob.xyz/",
  },
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
  university: "University Technologi Malaysia",
  cgpa: "3.64",
  period: "Sept 2011 - Apr 2015",
  location: "Johor, MY",
};

export const languages = [
  {
    name: "Python",
    years: "4",
    icon: IoLogoPython,
    iconSize: "18px",
  },
  {
    name: "JavaScript",
    years: "3",
    icon: IoLogoJavascript,
    iconSize: "22px",
  },
  {
    name: "SQL",
    years: "3",
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
    name: "Django",
    years: "3 Years",
    icon: SiDjango,
    iconSize: "18px",
  },
  {
    name: "ReactJS",
    years: "3 Years",
    icon: IoLogoReact,
    iconSize: "18px",
  },
  {
    name: "NextJS",
    years: "3 Years",
    icon: SiNextDotJs,
    iconSize: "18px",
  },
  {
    name: "NodeJS",
    years: "3 Years",
    icon: IoLogoNodejs,
    iconSize: "18px",
  },
  {
    name: "PostgreSQL",
    years: "3 Years",
    icon: SiPostgresql,
    iconSize: "18px",
  },
  {
    name: "ElectronJS",
    years: "3 Years",
    icon: IoLogoElectron,
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
  {
    name: "CSS",
    years: "3 Years",
    icon: IoLogoCss3,
    iconSize: "18px",
  },
  {
    name: "Ubuntu",
    years: "3 Years",
    icon: SiUbuntu,
    iconSize: "18px",
  },
  {
    name: "Redis",
    years: "3 Years",
    icon: SiRedis,
    iconSize: "18px",
  },
  {
    name: "Websocket",
    years: "1 Years",
    icon: SiSocketDotIo,
    iconSize: "18px",
  },
  {
    name: "OAuth2",
    years: "1 Years",
    icon: SiAuth0,
    iconSize: "18px",
  },
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
];

export const engineering = [
  {
    name: "3D Modelling",
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
    name: "Agile Methodology",
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
    name: "Mentoring",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
];

export const interest = [
  {
    name:"Coding",
    icon: IoCode,
    iconSize:"18px"
  },
  {
    name: "Music",
    icon: CgPiano,
    iconSize: "18px",
  },
  {
    name:"Startup Ideas",
    icon: HiOutlineLightBulb,
    iconSize:"22px"
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
    role: "Business Analyst / Developer",
    description:
      "Working in a small team that supports Test Department in developing integrated systems solution to improve the current process and output.",
    experiences: [
      {
        title:
          "Test Data Collecting Framework (JIRA's TestRail-like Application)",
        points: [
          "Design and Develop an integrated framework to render test-data-collection template from Python Scripts using React-Electron Boilerplate, Node & MongoDB",
          "The framework handles API integration to the Test Request, Asset Management system and MongoDB's Test Data Storage. Also, Using Node's Python-Shell module to run Python Scripts for template initialization and calculation requests",
          "Previously, most of the test data are collected with Excel Templates that suffers from discrepancy and would have poor maintainability and scalability",
          "The solution implemented to the Operation increases the efficiency by 40% by eliminating the time spent on the data lookup and the needs for file management",
        ],
      },
      {
        title: "Test Request Tool & Master Data Development",
        points: [
          "Design and Develop a simple tool for laboratory test requests using Django, Rest Framework and PostgreSQL with Vanilla JS",
          "A simple tool to create and workflow a test request by associating 'Test Methods', Samples, Laboratories and operator",
          "The data in Postgres also served as Master Data for other application usage, such as Tableau Reporting and Test Data Collector Tools",
        ],
      },
      {
        title: "Universal Test Data Schema & Excel Test Data Ingestor",
        points: [
          "An extensive data engineering effort to create the schema of the universal test data structure to fit multiple types of Laboratory & Product Test Methods",
          "Built a Python App to write and ingest test data from multiple Excel Test Report Templates to JSON file (later to be ingested by other tool)",
          "Used XLWings and OpenPyXL to interact with Excel and Python Eel & JavaScript for the UI",
        ],
      },
      {
        title: "Excel VBA Works",
        points: [
          "Acoustic Sound Power Level Calculator & Report Generator",
          "Lab Scheduling and Activity Listing",
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
        title: "Cooling Performance Calculator & Report Generator",
        points: [
          "Using Excel VBA, develop a Thermodynamics calculation algorithm to the cooling performance of condensing unit and generates an A4 report post verification",
        ],
      },
    ],
  },
  {
    company: "Vitrox Technology",
    period: "Feb 2017 - Jan 2018",
    role: "Hardware Design Engineer",
    description:
      "Design the machine vision hardwares for semiconductor inspection unit with SolidWorks",
    experiences: [
      {
        title: "",
        points: [],
      },
    ],
  },
];

export const projects = [
  {
    title: "makcikbawang.my",
    points: [
      "Biography + Social Media App for Malaysians that allows people to vote & discuss the actions or events revolving a figure",
      "Developed using NextJS + Django Rest Framework, deployed on Digital Ocean",
      '"Makcik Bawang" is a Malaysian term combining Keyboard Warrior + "Karen"'
    ],
  },
  {
    title:"Resume Builder",
    points:[
      "This resume is generated from a resume builder using ReactJS",
      "Fetches data from the JSON file in GitHub"
    ]
  },
  {
    title:"Side Work",
    points:[
      "Portfolio Landing Page",
      "Simple E-Commerce"
    ]
  }
];
