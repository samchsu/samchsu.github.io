/* For deployment, use command: npm run deploy */
import './App.css';
import AboutMe from "./Pages/AboutMe";
import MoreAboutMe from "./Pages/MoreAboutMe";
import Socials from "./Pages/Socials";
import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import  { Redirect } from 'react-router-dom';
import { Navbar } from './components/navbar';
import ReactGA from 'react-ga';
import smoothscroll from 'smoothscroll-polyfill';
 
smoothscroll.polyfill();
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

window.scrollBy({ top: 100, left: 0, behavior: 'smooth' });

const App = () => {

  return (
    <div className="App">
      {/* <Cursor/> */}
      <div className="sticky">
        <Navbar/>
      </div>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/aboutme" component={AboutMe}/>
          </Route>
          <Route path="/aboutme">              
              < AboutMe />
              < MoreAboutMe />
          </Route>
          <Route path="/socials" component={Socials}>

          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;