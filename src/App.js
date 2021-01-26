import './App.css';
import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import  { Redirect } from 'react-router-dom';
import { Navbar } from './components/navbar';
import {ParticleEffect} from './Particles.js';

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
                    coming soon
                  </div>
              </div>
          </Route>
          <Route path="/passions">
            passions
          </Route>
          <Route path="/socials">
            socials
          </Route>
          <Route path="/contact">
            contact
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;