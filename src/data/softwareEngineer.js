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
  SiNextdotjs,
  SiRedis,
  SiSocketdotio,
  SiDjango,
  SiMicrosoftexcel,
  SiTypescript,
  SiAuth0,
  SiRedux,
  SiAtlassian,
  SiPrisma,
  SiMicrosoftazure,
} from "react-icons/si";
import { CgPiano } from "react-icons/cg";
import { GiCookingPot, GiChickenOven } from "react-icons/gi";
import { BsFillGearFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

export const heading = {
  name: "Ibrahim Yaacob",
  title: "Full-Stack Developer",
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
  university: "University Technology Malaysia",
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
    name: "TypeScript",
    years: "2",
    icon: SiTypescript,
    iconSize: "18px",
  },
];

export const technologies = [
  {
    name: "ReactJS",
    years: "3 Years",
    icon: IoLogoReact,
    iconSize: "18px",
  },
  {
    name: "Redux (RTK)",
    years: "2 Years",
    icon: SiRedux,
    iconSize: "18px",
  },
  {
    name: "NextJS",
    years: "3 Years",
    icon: SiNextdotjs,
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
    name: "PrismaJS",
    years: "3 Years",
    icon: SiPrisma,
    iconSize: "18px",
  },

  {
    name: "Django",
    years: "3 Years",
    icon: SiDjango,
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
    name: "MS Azure",
    years: "3 Years",
    icon: SiMicrosoftazure,
    iconSize: "18px",
  },
  // {
  //   name: "Redis",
  //   years: "3 Years",
  //   icon: SiRedis,
  //   iconSize: "18px",
  // },
  {
    name: "Websocket",
    years: "1 Years",
    icon: SiSocketdotio,
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
    role: "Solution Developer",
    description:
      "Working in a team that supports Test Department in developing integrated systems solution to improve the efficiency, quality & security of data handling & practices.",
    experiences: [
      {
        title:
          "Test Data Collecting Framework (JIRA's TestRail-like Application)",
        points: [
          "Leading, designing and develop an integrated framework to render test-data-collection template from Python Scripts using React, Node, Electron, Redux & MongoDB",
          "The framework handles API integration to the Test Request, Asset Management system and MongoDB's Test Data Storage. Also, Using Node's Python-Shell module to run Python Scripts for template initialization and calculation requests",
        ],
      },
      {
        title: "Asset Management System",
        points: [
          "Asset management system, replicating from Asset Panda, using NextJS, Postgres and Prisma ORM, replicating on-shelf tool, Asset Panda",
          "Heavily customize the frontend side for user convenience to update a batch of data, integrated login with Azure Active Directory and build a rest API for other system to interact with",
        ],
      },
      {
        title: "Test Request Tool & Master Data Development",
        points: [
          "Design and Develop a simple tool for laboratory test requests using Django, Rest Framework and PostgreSQL with Vanilla JS",
          "A simple tool to create and workflow a test request by associating 'Test Methods', Samples, Laboratories and operator",
        ],
      },
    ],
  },
  {
    company: "Part-Time Freelancing",
    period: "2020 - Present",
    role: "Fullstack Developer (FE Focus)",
    description:
      "To build the confidence in web/software, development, I had to take up the freelancing job to gain more experience on how real-life development project works",
    experiences: [
      {
        title: "InsightTribe",
        points: [
          "Work on building WXllspace website, a US-based, platform start-up, that connects building (wall) owner to wall artist. The app uses MERN Stack equipped with Google Map, Mapbox, MailerSend API and AWS S3",
        ],
      },
      {
        title: "QuestDrive",
        points: [
          "Work on admin page system for online game application that initially uses React with TypeScript, Redux Toolkit and MUI",
        ],
      },
    ],
  },
  {
    company: "Mechanical Engineering",
    period: "May 2015 - Jan 2018",
    role: "Product Test Engineer",
    description: "The years before I get into the tech world",
    experiences: [
      {
        title: "Daikin Refrigeration, May 2015 - Jan 2018",
        points: [
          "Responsible of overseing the R&D Test Activity, Verifying Results & Reporting for Refrigeration Products. Began coding professionally with Excel VBA",
        ],
      },
      {
        title: "Vitrox Technology, May 2015 - Sept 2016",
        points: [
          "Design the machine vision hardwares for semiconductor inspection unit with SolidWorks",
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: "Yayasan Peneraju Digital Computing Course 2022",
    points: [
      "Four Months course of Digital Leadership and Microsoft Azure Certificates for Administrator, Security Engineer and Solution Architects",
    ],
  },
  {
    title: "Hackathons",
    points: [
      "RHB Virtual Datathon 2022",
      "MyHackathon 2021 - Digitizing Government Service",
    ],
  },
  {
    title: "Side Projects",
    points: [
      "My Repo is Better than yours, a repo scoring and comparison site: \nhttps://myrepoisbetterthanyours.netlify.app",
      "Personal NextJS Boilerplate: \nhttps://miy-next-boilerplate.vercel.app",
    ],
  },
];
