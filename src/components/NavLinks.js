import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavLinks.css';

export default function NavLinks() {
  return (
    <nav id="main-nav">
      <div className="link-container"><Link to='/'>Home</Link></div>
      <div className="link-container"><Link to="/rsvp">RSVP</Link></div>
      <div className="link-container">Venue</div>
      <div className="link-container">Attire</div>
      <div className="link-container">Accomodations</div>
      <div className="link-container">More Info</div>
    </nav>
  )
}
