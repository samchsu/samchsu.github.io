import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import './Gallery.css';
import './MoreAboutMe.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import PIC from "../../assets/images/coronado-15.jpg";
import venice from "../../assets/images/veniceEdited.png";
import CardItem from './CardItem';
import beach from "../../assets/images/beach pic.jpg";
import canada from "../../assets/images/Canada.JPG";
import torrey from "../../assets/images/torrey.JPEG";
import forest from "../../assets/images/forest.JPG";
import snow from "../../assets/images/snowy.png";


function MoreAboutMe() {

    return (
      <div className='cards'>
        <br></br><Fade><h1>About Me</h1></Fade><br></br>
        <div class="row">
          <br></br>
          <Fade>
            <div className="image-container">helo</div>
            <div className="text-container">
              <div>I'm a recent CS graduate from San Diego State University with experience 
              in Full Stack Web Development.</div>
            </div>
          </Fade>
          <br></br>
        </div>
      </div>
    );
}


export default MoreAboutMe;
