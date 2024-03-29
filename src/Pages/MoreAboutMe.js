import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import './MoreAboutMe.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Social from './Socials.js';
import smoothscroll from 'smoothscroll-polyfill';
 
// kick off the polyfill!
smoothscroll.polyfill();

function MoreAboutMe() {

  return (
    <div className='cards'>
      <div class="row">
        <br></br>
        <section>
          <div className="section-aboutme" id="aboutme">
            <Fade>
              <div className="text-container"> 
                <div className = "topic">about me</div>
              </div>
              <div className="description-container">
                <div className = "description">
                  Hello! Thank you for stopping by. <br/>
                  In May 2021, I obtained a B.S. in Computer Science from San Diego State University. <br/>
                  I found interest in web development during college and have been passionate about it ever since! <br/>
                  During my freetime, I enjoy learning about React 🖥️, playing Smash Ultimate 🎮, and playing the piano 🎹 </div>
              </div>
            </Fade>
          </div>
        </section>
        
        <section>
          <div className="section-projects" id="projects">
            <Fade>
              <div className="text-container-experience">
                <div className = "topic">projects</div>
              </div>
              <div className="projects-container">
                <div className="projects" type="button" onClick={(e) => { e.preventDefault(); window.location.href='https://daily-snapshot.herokuapp.com/';}}>
                  <h1>Daily Snapshot</h1>
                </div>
                <div className="projects" type="button" onClick={(e) => { e.preventDefault(); window.location.href='https://github.com/samchsu/samchsu.github.io';}}>
                  <h1>Web Portfolio</h1>
                </div>
                <div className="projects" type="button" onClick={(e) => { e.preventDefault(); window.location.href='https://github.com/samchsu/spootify';}}>
                  <h1>Spootify</h1>
                </div>
                <div className="projects" type="button" onClick={(e) => { e.preventDefault(); window.location.href='https://github.com/samchsu/Path-Finder-Visualization';}}>
                  <h1>A* Path-Finder</h1>
                </div>
              </div>
              <section>
                <div className="section-experience">
                  <div className="timeline">
                    <VerticalTimeline>
                      <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          date="May 2022 - Present"
                          dateClassName={ "timeline-date-color" }
                          contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                          iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                        >
                          <h3 className="vertical-timeline-element-title">Associate Software Engineer</h3>
                          <h4 className="vertical-timeline-element-subtitle">XiFin</h4>
                          <p>
                              I developed and maintained interfaces with Mirth Engine using JavaScript and Java
                          </p>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255,250,205)' }}
                        date="Nov 2020 - Sep 2021"
                        dateClassName={ "timeline-date-color" }
                        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                      >
                        <h3 className="vertical-timeline-element-title">Full Stack Intern to Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mathly</h4>
                        <p>
                          I worked in Full Stack Development, focused on AWS and React.js (frontend) with Node.js (backend)
                        </p>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Sep 2018 - May 2020"
                        dateClassName={ "timeline-date-color" }
                        contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                      >
                        <h3 className="vertical-timeline-element-title">Student IT Technician</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Diego State University</h4>
                        <p>
                          I worked in the College of Sciences as an IT, assisting professors and student assistants with Windows computers
                        </p>
                      </VerticalTimelineElement>

                      <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                      />
                    </VerticalTimeline>
                    </div>
                  </div>
                </section>
            </Fade>
          </div>
        </section>
        <section>
          <div className="section-contact" id="contact">
            <div className="text-container-contact">
              <div className = "topic">contact</div>
            </div>
            <Social/>
          </div>
        </section>
        <br/>
      </div>
    </div>
  );
}


export default MoreAboutMe;
