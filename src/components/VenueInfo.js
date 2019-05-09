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
          <h1>Tipi Village Retreat</h1>
          <p>
            If you've found this page, that means you are considering coming to our wedding. We hope you do!
            The wedding will be held at <a className='venueLink' href="http://tipivillageretreat.com/index.html">Tipi Village Retreat</a> - a tranquil wooded haven
            just outside of Eugene, Oregon.
          </p>
        </div>
        <div className="venue-notes flex row">
          <div className="column flex center notes col-6">
            <h2>Notes about Tipi Village</h2>
            <ul>
              <li>There is very limited cell phone reception</li>
              <li>There is, however, wifi on site!</li>
              <li>It is a non-smoking venue, except for a small concrete patio</li>
              <li>There is a small stream that runs through the property</li>
              <li>The morning after the wedding, we will be having breakfast at the site. If you would like to join us, please let us
                know so we can make the arrangements</li>
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
            <li>Get on I-5 South (or 205 South, which will turn into I-5)</li>
            <li>Drive for like, 80+ miles</li>
            <li>Take exit 216, signs for Oregon 228 towards Halsey/Brownsville</li>
            <li>Turn left onto 228</li>
            <li>Continue for exactly 11.2 miles</li>
            <li>Turn right onto Brush Creek Road</li>
            <li>In about 6 miles, the road you are on should turn into Marcola Road</li>
            <li>Continue for another 6.8 miles</li>
            <li>Turn left onto Paschelke Road</li>
            <li>Turn right to stay on Paschelke Road</li>
            <li>Turn left onto Wendling Road</li>
          </ul>
          <h3>From Southern Oregon/Eugene</h3>
          <ul>
            <li>Get on I-5 North</li>
            <li>Take exit 194A to merge onto OR-126 E toward Springfield</li>
            <li>Take the 42nd St/Marcola exit</li>
            <li>Turn left onto N 42nd St</li>
            <li>Turn right onto Marcola Road</li>
            <li>Continue on Marcola for about 10 miles</li>
            <li>Turn right onto Wendling Rd</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
