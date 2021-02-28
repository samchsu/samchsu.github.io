import React, { Component } from 'react';
import {ParticleEffect} from '../Particles.js';
import SamPic from "../assets/images/sampic.png";
import TextLoop from "react-text-loop";
import ReactGA from 'react-ga';
import "../App.css";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Passions = () => { 
  return(
      
    <div className="item-wrapper">
        <div className="text">
            passions
        </div>
    </div>
  )
}


export default Passions