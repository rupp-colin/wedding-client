import React from 'react';
import '../styles/VenueInfo.css';
import picNames from '../images/picsOfUs/inviteIteration1.png';
import picIndia from '../images/picsOfUs/indiaWedding.jpg';
import picIndiaTwo from '../images/picsOfUs/weddingPic2.jpg';
import picPlants from '../images/picsOfUs/plants.JPG';
import picOne from '../images/picsOfUs/pictureOfUs.jpg';

export default function() {
  return (
    <section className="flex">
      <div className="pic-container column">
        <img src={picNames}  alt="colin and kelsey"/>
        <img src={picIndiaTwo} alt="colin and kelsey" />
        <img src={picIndia} alt="colin and kelsey" />
        <img src={picOne} alt="colin and kelsey" />
        <img src={picPlants} alt="colin and kelsey" />
      </div>
      <div id="venue-info-container">
        <div className="summary">
          <h1>Tipi Village Resort</h1>
          <p>Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu.
            Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos
            erant dolorum an. Per facer affert ut. Mei iisque mentitum
            moderatius cu. Sit munere facilis accusam eu dicat falli
            copiosae legendos at vix ad putent delectus delicata usu.
            Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos
            erant dolorum an. Per facer affert ut. Mei iisque mentitum
            moderatius cu. Sit munere facilis accusam eu dicat falli
            consulatu at
          </p>
        </div>
        <div className="venue-notes flex row">
          <div className="column flex center notes col-6">
            <h2>Notes about Tipi Village</h2>
            <ul>
              <li>qwoeiqwn ijsakldf wer sf sdfwe r gfh</li>
              <li> poi klj n juhu hj jio ;k jklhn</li>
              <li>qwoeiqwn sdfwe r gfh</li>
              <li>qwoeiqwn ijsakldf wer sf sdfwe r gfh</li>
              <li>qwoeiqwn sf sdfwe r gfh</li>
              <li>qwoeiqwn ijsakldf wer sf sdfwe rlk  l;kl klknjbbncvn ffc gfh</li>
              <li>qwoeiqwn ijsakldf wer sf sdfwe r gfh</li>
              <li>qwoeiqwn ijsakldf wer sf sdfwe r gfh</li>
            </ul>
          </div>
          <div className="flex center col-6 notes-picture">
            <img src="https://cdn0.weddingwire.com/emp/fotos/4/4/3/8/7/3/t40_1303872870032-AugSept20086201.jpg" alt="Tipi Village Retreat"/>
          </div>
        </div>
        <div className="direction-container flex center column">
          <h2>Directions</h2>
          <h3>From Portland</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h3>From Eugene</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
