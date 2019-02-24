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
        <img src={picNames} />
        <img src={picOne} />
        <img src={picThree} />
        <img src={picTwo} />
        <img src={picFour} />
      </div>
      <FormikRSVPForm />
    </main>
  )
}
