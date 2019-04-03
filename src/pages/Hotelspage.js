import React from 'react';
import Accomodations from '../components/Accomodations.js';
import picOne from '../images/picsOfUs/rooftopIndia.jpg';
import picThree from '../images/picsOfUs/justAPic.jpg';
import picFour from '../images/picsOfUs/yearsAgo.JPG';
import picNames from '../images/picsOfUs/inviteIteration1.png';

export default function HotelsPage() {

  const styles={width: '100%', justifyContent: 'space-evenly'}
  return (
    <div className="flex">
      <div className="pic-container column">
        <img src={picNames} alt="colin and kelsey" />
        <img src={picOne}  alt="colin and kelsey"/>
        <img src={picThree} alt="colin and kelsey" />
        <img src={picFour} alt="colin and kelsey" />
      </div>
      <div className="flex" style={styles}>
        <Accomodations />
      </div>
    </div>
  )
}
