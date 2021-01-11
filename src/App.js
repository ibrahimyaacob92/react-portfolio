import "./App.css";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import uuid from "uuid/dist/v4";
import { SiDjango, SiReact } from "react-icons/si";
import {
  SectionHeader,
  SectionContent,
  ContactStamp,
  Footer,
} from "./components";
import { useEffect, useState } from "react";
import axios from "axios";

const skillUrl =
  "https://raw.githubusercontent.com/ibrahimyaacob92/portfolio-shoelace/master/data/mystack.json";
const workExpUrl =
  "https://raw.githubusercontent.com/ibrahimyaacob92/portfolio-shoelace/master/data/projects.json";

function App() {
  const [skills, setSkills] = useState({});
  const getSkill = async () => {
    const res = await axios.get(skillUrl);
    setSkills(res.data);
  };

  const [workExperience, setWorkExperience] = useState([]);
  const getWorkExperience = async () => {
    const res = await axios.get(workExpUrl);
    setWorkExperience(res.data);
  };

  useEffect(() => {
    getSkill();
    getWorkExperience();
  }, []);

  return (
    <>
      <ContactStamp
        github="https://github.com/ibrahimyaacob92"
        linkedIn="https://www.linkedin.com/in/ibrahim-yaacob-76b598b5/"
        email="mailto:ibrahimyaacob92@yahoo.com?subject=Hello Ibrahim"
        cv="file download path"
      />
      <SectionHeader>
        <h1>Ibrahim Yaacob</h1>
        <hr />
        <h2>Full Stack Developer</h2>
        <p>Johor Bharu, Malaysia</p>
      </SectionHeader>

      <SectionContent>
        <Fade bottom>
          <h3>Introduction</h3>
          <p className="caption">
            I'm a self taught developer who's striving to be good at what I'm
            doing. I initially graduated with Mechanical Engineering Degree with
            little programming languange, however as years goes by, most of the
            problem I face on my work experience require me to developed an
            automated solution. From Excel formulas, VBA, Python and now
            JavaScript and the frameworks. I'm keen to find out where do we go
            from this.
          </p>
        </Fade>
        <hr className="content-divider" />

        <Fade left>
          <h3>Problem Solving Beliefs</h3>
          <div className="flex-content">
            <div>
              <p>Simplicity</p>
              <p>
                Strive for simple solution. It helps oneself and the next guy
                maintaining it.
              </p>
            </div>
            <div>
              <p>Efficiency</p>
              <p>Do less but produce more for time and energy are priceless.</p>
            </div>
            <div>
              <p>Fun</p>
              <p>
                Why do things that is not enjoyable. If it's not make it so !
              </p>
            </div>
          </div>
        </Fade>
      </SectionContent>

      <SectionHeader>
        <h1>My Solutions</h1>
        <hr />
        <p>
          Here's what i worked so far with <span>Python</span> &{" "}
          <span>JavaScript</span>... and Excel too
        </p>
      </SectionHeader>

      <SectionContent>
        <Fade right>
          <h3>Personal Projects</h3>

          <hr className="content-divider" />
          <h3>Work Experience</h3>
          {workExperience.map((experience) => {
            return (
              <div className="list-content">
                <div className="list-content-header">
                  <h4>{experience.name}</h4>
                  <p>
                    {experience.period} · {experience.role} ·{" "}
                    {experience.employer}
                  </p>
                </div>
                <div className="list-content-detail">
                  <p className="detail">{experience.description}</p>
                  
                  <Fade bottom>
                    <p className="more">{experience.detail}</p>
                  </Fade>
                  <div className="square-tags">
                    {experience.stack.map((tech) => {
                      return (
                        <Bounce>
                          <span>{tech}</span>
                        </Bounce>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </Fade>
      </SectionContent>

      <SectionHeader>
        <h1>Skill Matrix</h1>
        <hr />
        <p>Things I considered good and great at</p>
      </SectionHeader>

      <SectionContent>
        <Fade bottom>
          <div className="bg-flex">
            <div className="django-bg">
              <SiDjango />
            </div>
            <div className="react-bg">
              <SiReact />
            </div>
          </div>
          <h3>Weapon of Choice</h3>
          <div className="flex-content">
            <div>
              <p>Django</p>
              <p>
                By far the most efficient framework to create a highly scalable
                application. Django ORM gives you advantage where you don't need
                to do SQL query ! Not suitable for small application they say,
                but most of time application are meant to grow !
              </p>
            </div>
            <div>
              <p>React</p>
              <p>
                Personally, I find that front-end is much tougher as it is very
                subjective. Write front end with structure, countless number of
                libraries and source and of course who doesn't love components,
                JSX & hooks !
              </p>
            </div>
          </div>
        </Fade>
        <hr className="content-divider" />

        <h3>Featured Tech Skills</h3>
        <div className="skill-grid">
          {Object.keys(skills).map((skill) => {
            return (
              <div key={uuid()} className="child-grid">
                <Fade top>
                <h4>
                  {skill}{" "}
                  <span key={uuid()} className="accent-pill">
                    {" "}
                    {skills[skill].year_exp}
                    {" Years"}
                  </span>
                </h4>
                </Fade>
                <div className="square-tags">
                  {skills[skill].modules.map((module) => {
                    return (
                      <Bounce>
                        <span key={uuid()}>{module}</span>
                      </Bounce>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </SectionContent>
      <Footer>
        <p>Created quickly with React & text animation with React Reveal</p>
      </Footer>
    </>
  );
}

export default App;
