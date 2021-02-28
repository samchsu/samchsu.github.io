import React, { Component } from 'react';
import {ParticleEffect} from '../Particles.js';
import SamPic from "../assets/images/sampic.png";
import TextLoop from "react-text-loop";
import ReactGA from 'react-ga';
import "../App.css";

const Socials = () => { 
     return(
        <div className="item-wrapper">
            <div className="text">
                <div className="link" onClick={(e) => (window.location = 'https://www.linkedin.com/public-profile/in/samuel-hsu/?challengeId=AQE_AMo5qx5jxgAAAXd6AD3MP0jNRdNvc6vr4clbyLym5Z_SjYCJ_7UB1C0_68OdfYB5Iq1B_pd2_Hju7QBSZBGbx_lQMXClAg&submissionId=3db3771f-5651-6116-5c7d-fc1322ec4c17')}>linkedin</div>
            </div>
            <br></br>
            <div className="text">
                <div className="link" onClick={(e) => (window.location = 'https://www.instagram.com/samuel.hsu/')}>instagram</div>
            </div>
            <br></br>
            <div className="text">
                <div className="link" onClick={(e) => (window.location = 'https://www.youtube.com/watch?v=QQe4BejejGg&ab_channel=SamHsu')}>youtube</div>
            </div>
            <br></br>
        </div>
  )
}

export default Socials