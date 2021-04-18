import React, { useState} from 'react';
import Button from "react-bootstrap/Button";
import Confetti from 'react-confetti';
import "./Passions.css";

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
    <div className="item-wrapper">
      <text>You clicked {count} times</text>
      <p>{message}</p>
      <div>{particle}</div>
      <div className = "btn-wrapper">
        <Button variant="link" className="counter-btn" onClick={() => setCount(count + 1)}>
          +1
        </Button>
        <Button variant="link" className="counter-btn" onClick={() => setCount(count - 1)}>
          -1
        </Button>
        <Button variant="link" className="counter-btn" onClick={surprise}>
          Surprise 
        </Button>
        <Button variant="link" className="reset-btn" onClick={resetEverything}>
          Reset
        </Button>
      </div>
    </div>
  )
}

export default Passions