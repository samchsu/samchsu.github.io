import React, { useState} from 'react';
import Button from "react-bootstrap/Button";
import Confetti from 'react-confetti';
import "./Passions.css";
import "./Cards/Gallery.css";
import Gallery from "./Cards/Gallery";

function Passions () {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState();
  var [particle, setParticle] = useState();
  
  function surprise() {
    setMessage('hello :-)')
    setParticle(<Confetti/>);
  }

  function resetEverything() {
    setCount(0);
    setMessage();
    setParticle();
  }
  return(
    <div>
     <Gallery></Gallery>
    </div>
  )
}

export default Passions