import React, { useState, useEffect } from 'react';
import {ParticleEffect} from '../Particles.js';
import SamPic from "../assets/images/samspic.png";
import TextLoop from "react-text-loop";
import ReactGA from 'react-ga';
import "../App.css";
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

function handleClick(e) {
  e.preventDefault();
  document.querySelector('.section-aboutme').scrollIntoView({ behavior: 'smooth' });
  console.log("clicked")
}
const AboutMe = () => { 

  return(
    <div className="item-wrapper">
      <ParticleEffect/>
      <div className="text-wrapper">
        <div className="text-landing">
          Hi, I'm Sam 
        </div> 
        <br></br>
        <div className="text-desc">
          <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
              <div className="text-desc-dev">Full Stack Developer</div>
              <div className="text-desc-eng">Software Engineer</div>
              <div className="text-desc-grad">SDSU Graduate</div>
              <div className="text-desc-photo">Photographer</div>
          </TextLoop>
        </div>
        {/* <button onClick={handleClick}>Scroll Down</button> */}
      </div>
      <img src={SamPic} className="samspic" alt="Sam's Pic"/>
    </div>
  )
}

export default AboutMe