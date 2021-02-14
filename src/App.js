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
import {Helmet} from 'react-helmet'

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
      <Helmet>
        <title>Ibrahim Yaacob</title>
        <meta name="Description" content="Online Portfolio for Ibrahim"/>
      </Helmet>
    
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

        <h3>Problem Solving Beliefs</h3>
        <div className="flex-content">
          <Fade left>
            <div>
              <p>Simplicity</p>
              <p>
                A little simplification would be the first step toward rational
                living
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div>
              <p>Efficiency</p>
              <p>Do less but produce more for time and energy are priceless</p>
            </div>
          </Fade>
          <Fade right>
            <div>
              <p>Fun</p>
              <p>
                Why do things that is not enjoyable. If it's not make it so !
              </p>
            </div>
          </Fade>
        </div>
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
        <h3>Personal Projects</h3>

        <hr className="content-divider" />
        <h3>Work Experience</h3>
        {workExperience.map((experience) => {
          return (
            <div className="list-content">
              <Fade bottom>
                <div className="list-content-header">
                  <h4>{experience.name}</h4>
                  <p>
                    {experience.period} · {experience.role} ·{" "}
                    {experience.employer}
                  </p>
                </div>
              </Fade>
              <div className="list-content-detail">
                <Fade bottom>
                  <p className="detail">{experience.description}</p>
                </Fade>
                <Fade right>
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
      </SectionContent>

      <SectionHeader>
        <h1>Skill Matrix</h1>
        <hr />
        <p>Things I considered good and great at</p>
      </SectionHeader>

      <SectionContent>
        
        <div className="bg-flex">
          <Fade left>
            <div className="django-bg">
              <SiDjango />
            </div>
          </Fade>
          <Fade right>
            <div className="react-bg">
              <SiReact />
            </div>
          </Fade>
        </div>
        <h3>Weapon of Choice</h3>
        <div className="flex-content">
          <Fade top>
          <div>
            <p>Django</p>
            <p>
              By far the most efficient framework to create a highly scalable
              application. Django ORM gives you advantage where you don't need
              to do SQL query ! Not suitable for small application they say, but
              most of time application are meant to grow !
            </p>
          </div>
          </Fade>
          <Fade bottom>
          <div>
            <p>React</p>
            <p>
              Personally, I find that front-end is much tougher as it is very
              subjective. Write front end with structure, countless number of
              libraries and source and of course who doesn't love components,
              JSX & hooks !
            </p>
          </div>
          </Fade>
        </div>

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
