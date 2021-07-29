/* For deployment, use command: npm run deploy */
import './App.css';
import AboutMe from "./Pages/AboutMe";
import Passions from "./Pages/Passions";
import MoreAboutMe from "./Pages/Cards/MoreAboutMe";
import Socials from "./Pages/Socials";
import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import  { Redirect } from 'react-router-dom';
import { Navbar } from './components/navbar';
import ReactGA from 'react-ga';
import Gallery from './Pages/Cards/Gallery';
import Footer from './Pages/Cards/Footer';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { HashLink } from 'react-router-hash-link';
import smoothscroll from 'smoothscroll-polyfill';
 
// kick off the polyfill!
smoothscroll.polyfill();

ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);
//import lax from 'lax.js';

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};


  window.scrollBy({ top: 100, left: 0, behavior: 'smooth' });

// const Cursor = () => {
//   const [position, setPosition] = useState({x: 0, y: 0});

//   useEffect(() => {
//     addEventListeners();
//     return () => removeEventListeners();
//   }, []);
  
//   const addEventListeners = () => {
//     document.addEventListener("mousemove", onMouseMove);
//   };

//   const removeEventListeners = () => {
//     document.removeEventListener("mousemove", onMouseMove);
//   };

//   const onMouseMove = (e) => {
//     setPosition({x: e.clientX, y: e.clientY});
//   };

//   if (typeof navigator !== 'undefined' && isMobile())
//   {
//     return null;
//   } 
  
//   return <div className="cursor"
//     style={{
//       left: `${position.x}px`,
//       top: `${position.y}px`
//     }}/>
// }

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
          <Route path="/passions" component={Passions}>
            
          </Route>
          <Route path="/socials" component={Socials}>

          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;