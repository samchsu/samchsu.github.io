import './App.css';
import React from 'react';
import { Navbar } from './components/navbar';
import {ParticleEffect} from './Particles.js';

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <ParticleEffect/>
    </div>
  );
}

export default App;