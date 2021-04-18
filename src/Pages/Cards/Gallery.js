import React from 'react';
import './Gallery.css';
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

function Gallery() {
    return (
      <div className='cards'>
        <h1>gallery</h1>
        <div class="row">
          <div class="column">
            <img src={PIC} />
            <img src={venice}/>
          </div>
          <div class="column">
            <img src={canada}/>
            <img src={torrey}/>

          </div>
            <div class="column">
                <img src={snow}/>
                <img src={forest}/>
            </div>
          <div class="column">

          </div>
        </div>
      </div>
    );
}

export default Gallery;
