import React from "react";
import "../styles/Resume.css";
import {
  IoLocationOutline,
  IoMail,
  IoTrophyOutline,
  IoCalendarOutline,
  IoStarOutline,
} from "react-icons/io5";
import {
  heading,
  contactsData,
  education,
  technologies,
  engineering,
  languages,
  managerial,
  links,
  interest,
  workExperiences,
  projects,
  // } from "../data/softwareEngineer.js";
} from "../data/softwareEngineer.js";

const Resume = () => {
  return (
    <div className="grey-background">
      <div className="resume">
        <div className="side-pane">
          <div className="section-group">
            <div>
              <h1>{heading.name}</h1>
              <h2 className="header">{heading.title}</h2>
              <div className="contacts">
                {contactsData.map((item, index) => (
                  <>
                    <item.icon className="accent" />
                    <a href={item.link}>{item.value}</a>
                  </>
                ))}
              </div>
            </div>

            <div>
              <h2 className="header">EDUCATION</h2>
              <div className="education-content">
                <p className="accent">{education.course}</p>
                <p>{education.university}</p>
                <p className="icon-parag">
                  <IoCalendarOutline className="accent" /> {education.period}
                </p>
                <p className="icon-parag">
                  <IoLocationOutline className="accent" /> {education.location}
                </p>
                <p className="icon-parag">
                  <IoTrophyOutline className="accent" /> CGPA: {education.cgpa}
                </p>
              </div>
            </div>
            <div>
              <h2 className="header">SKILLS</h2>
              <p className="subheader">Languages [Years]</p>
              <div className="two-column">
                {languages.map((item) => (
                  <p className="icon-parag">
                    <item.icon className="accent" size={item.iconSize} />
                    <span className="split-column">
                      <span>{`${item.name} [${item.years}]`}</span>
                    </span>
                  </p>
                ))}
              </div>

              <p className="subheader">Technologies</p>
              <div className="two-column">
                {technologies.map((item) => (
                  <p className="icon-parag">
                    <item.icon className="accent" size={item.iconSize} />
                    <span className="split-column">
                      <span>{item.name}</span>
                    </span>
                  </p>
                ))}
              </div>
              <p className="subheader">Engineering</p>
              <div
                className="education-content"
                style={{ marginBottom: "12px" }}
              >
                {engineering.map((item) => (
                  <p className="icon-parag">
                    <item.icon className="accent" size={item.iconSize} />
                    <span className="split-column">
                      <span>{item.name}</span>
                    </span>
                  </p>
                ))}
              </div>
              <p className="subheader">Others</p>
              <div
                style={{ marginBottom: "12px" }}
                className="education-content"
              >
                {managerial.map((item) => (
                  <p className="icon-parag">
                    <item.icon className="accent" size={item.iconSize} />
                    <span className="split-column">
                      <span>{item.name}</span>
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="section-group">
              <div>
                <h2 className="header">INTEREST</h2>
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                >
                  {interest.map((item) => (
                    <p className="icon-parag">
                      <item.icon className="accent" size={item.iconSize} />
                      <span
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          paddingRight: "30px",
                        }}
                      >
                        <span>{item.name}</span>
                      </span>
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="header">LINKS</h2>
                <div className="contacts">
                  {links.map((item, index) => (
                    <>
                      <item.icon className="accent" />
                      <a href={item.link}>{item.value}</a>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-pane">
          <div>
            <h1>WORK EXPERIENCES</h1>
            <div className="section-group-2">
              {workExperiences.map((job) => (
                <div>
                  <h2 className="header uppercase">{job.company}</h2>
                  <p className="subheader">
                    <span>{job.role}</span> {" · "}
                    <span>{job.period}</span>
                    <p>
                      <i>{job.description}</i>
                    </p>
                  </p>
                  <div
                    style={{
                      rowGap: "10px",
                    }}
                    className="section-group-2"
                  >
                    {job.experiences.map((experience) => (
                      <div>
                        <p className="header">{experience.title}</p>
                        <ul className="border-left">
                          {experience.points.map((point) => (
                            <li> {point} </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 style={{ marginBottom: "10px" }}>OTHER EXPERIENCES</h1>
            <div
              style={{
                rowGap: "10px",
              }}
              className="section-group-2"
            >
              {projects.map((project) => (
                <div>
                  <p className="header">{project.title}</p>
                  <ul className="border-left">
                    {project.points.map((point) => (
                      <li> {point} </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
