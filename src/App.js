import './App.css';
import { SiDjango, SiReact } from 'react-icons/si'

import { SectionHeader, SectionContent, ContactStamp } from './components'

function App() {

  return (
    <>
      <ContactStamp
        github='https://react-icons.github.io/react-icons/search?q=gith'
        linkedIn='https://react-icons.github.io/react-icons/search?q=gith'
        email='mailto:ibrahimyaacob92@yahoo.com?subject=Hello Ibrahim'
        cv='file download path'
      />
      <SectionHeader>
        <h1>Ibrahim Yaacob</h1>
        <hr />
        <h2>Full Stack Developer</h2>
        <p>Johor Bharu, Malaysia</p>
      </SectionHeader>
      <SectionContent>
        <h3>Problem Solving Beliefs</h3>
        <div className='flex-content'>
          <div>
            <p>Simplicity</p>
            <p>Strive for simple solution. It helps oneself and the next guy.</p>
          </div>
          <div>
            <p>Efficiency</p>
            <p>
              Do less but produce more for time and energy are priceless.
            </p>
          </div>
          <div>
            <p>Fun</p>
            <p>Why do things that is not enjoyable. If it's not make it so !</p>
          </div>
        </div>
      </SectionContent>
      <SectionHeader>
        <h1>My Solutions</h1>
        <hr />
        <p>Here's what i worked so far with <span>Python</span> & <span>JavaScript</span>... and Excel too</p>
      </SectionHeader>
      <SectionContent>

      </SectionContent>
      <SectionHeader>
        <h1>Skill Matrix</h1>
        <hr />
        <p>Things I considered good and great at</p>
      </SectionHeader>
      <SectionContent>
        <div className='bg-flex'>
          <div className='django-bg'><SiDjango size='350'/></div>
          <div className='react-bg'><SiReact size='350'/></div>
        </div>

        <h3>Weapon of Choice</h3>
        <div className='flex-content'>
          <div>
            <p>Django</p>
            <p>
              By far the most efficient framework to create a highly scalable application.
              Django ORM gives you advantage where you don't need to do SQL query !
              Not suitable for small application they say, but most of time application are meant to grow !
            </p>
          </div>
          <div>
            <p>React</p>
            <p>
              Personally, I find that front-end is much tougher as it is very subjective.
              Write front end with structure, countless number of libraries and source and ofcourse components components & components !
            </p>
          </div>
        </div>
        <br/><br/><br/><br/><br/>
        <h3>Featured Skills</h3>
      </SectionContent>
      <SectionContent>
        
      </SectionContent>
    </>
  );
}

export default App;
