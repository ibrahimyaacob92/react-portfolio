import React from "react";
import "../styles/Resume.css";
import { contactsData, education } from "../data/data.js";

const Resume = () => {
  return (
    <div className="grey-background">
      <div className="resume">
        <div className="side-pane">
          <div>
            <h1>Ibrahim Yaacob</h1>
            <h2 className="accent">Full Stack Developer</h2>
          </div>
          <div className="contacts">
            {contactsData.map((item) => (
              <>
                <item.icon className="accent" />
                <a href={item.link}>{item.value}</a>
              </>
            ))}
          </div>
          <div>
            <h2 className="header">Education</h2>
            <p>{education.course}</p>
          </div>
        </div>
        <div className="main-pane">
          <p>This is a paragraph</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
