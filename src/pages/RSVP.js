import React from 'react';
import {FormikRSVPForm} from '../components/RSVPForm.js';
import picOne from '../images/picsOfUs/couplePic.JPG';
import picTwo from '../images/picsOfUs/couplePic2.JPG';
import picThree from '../images/picsOfUs/colinOnRight.jpg';
import picFour from '../images/picsOfUs/classy.jpg';
import picNames from '../images/picsOfUs/inviteIteration1.png';

export default function RSVP() {
  return (
    <main>
      <div className="pic-container column">
        <img src={picNames} alt="colin and kelsey" />
        <img src={picOne} alt="colin and kelsey" />
        <img src={picThree} alt="colin and kelsey" />
        <img src={picTwo} alt="colin and kelsey" />
        <img src={picFour} alt="colin and kelsey" />
      </div>
      <FormikRSVPForm />
    </main>
  )
}
