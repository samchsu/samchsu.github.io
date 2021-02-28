import React, { Component } from 'react';
import {ParticleEffect} from '../Particles.js';
import SamPic from "../assets/images/sampic.png";
import TextLoop from "react-text-loop";
import ReactGA from 'react-ga';
import "../App.css";

const AboutMe = () => { 
  return(
    <div className="item-wrapper">
    <div className="text">
      hi, i'm sam and i like to <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
        <span>code</span>
        <span>play piano</span>
        <span>travel the world</span>
        <span>make beats</span>
        <span>play valorant</span>
        <span>listen to rapcaviar</span>
        <span>invest in stonks</span>
        <span>collect sneakers</span>
        <span>find obscure youtube channels</span>
        <span>watch twitch</span>
        <span>sleep</span>
      </TextLoop>.
    </div>
    <a><img src={SamPic} className="samspic responsive" alt="Sam's Pic"/></a>
  </div>
  )
}

export default AboutMe