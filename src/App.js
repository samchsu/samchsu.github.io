import './App.css';
import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import  { Redirect } from 'react-router-dom';
import { Navbar } from './components/navbar';
import {ParticleEffect} from './Particles.js';
import SamPic from "./assets/images/sampic.png";
import TextLoop from "react-text-loop";
//import lax from 'lax.js';

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const Cursor = () => {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);
  
  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({x: e.clientX, y: e.clientY});
  };

  if (typeof navigator !== 'undefined' && isMobile())
  {
    return null;
  } 
  
  return <div className="cursor"
    style={{
      left: `${position.x}px`,
      top: `${position.y}px`
    }}/>
}

const App = () => {

  return (
    <div className="App">
      <Cursor/>
      <Navbar/>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/aboutme" />
          </Route>
          <Route path="/aboutme">
              <ParticleEffect/>
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
                  <span>watch twitch</span>
                  <span>sleep</span>
                </TextLoop>.
              </div>
            </div>
              <div className="item-wrapper">
                <img src={SamPic} className="samspic responsive" alt="Sam's Pic"/>
              </div>
          </Route>
          <Route path="/passions">
            <div className="item-wrapper">
              <div className="text">
                passions
              </div>
            </div>
          </Route>
          <Route path="/socials">
          <div className="item-wrapper">
            <div className="text">
              <a onClick={(e) => (window.location = 'https://www.linkedin.com/public-profile/in/samuel-hsu/?challengeId=AQE_AMo5qx5jxgAAAXd6AD3MP0jNRdNvc6vr4clbyLym5Z_SjYCJ_7UB1C0_68OdfYB5Iq1B_pd2_Hju7QBSZBGbx_lQMXClAg&submissionId=3db3771f-5651-6116-5c7d-fc1322ec4c17')}>linkedin</a>
            </div>
            <br></br>
            <div className="text">
              <a onClick={(e) => (window.location = 'https://www.instagram.com/samuel.hsu/')}>instagram</a>
            </div>
            <br></br>
            <div className="text">
            <a onClick={(e) => (window.location = 'https://www.youtube.com/watch?v=QQe4BejejGg&ab_channel=SamHsu')}>youtube</a>
            </div>
            <br></br>
          </div>
          </Route>
          <Route path="/contact">
          <div className="item-wrapper">
            <div className="text">
              contact
            </div>
          </div>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;