import React from 'react';
import ComingSoon from './ComingSoon.js';
import '../styles/Hotel.css';

export default function Hotel(props) {
  return (
    <div className="hotel-container flex column col-6">
      <h1>{props.hotelName}</h1>
      <img
        src={props.hotelImage}
        className="flex center"
        alt={`picture of ${props.hotelName}`} />
      <p>{props.hotelDesc}</p>
      <a href={props.hotelLink}>Book here!</a>
    </div>
  )
  }
