import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default function NavLinks() {
  return (
    <nav>
      <p><Link to='/'>Home</Link></p>
      <p><Link to="/rsvp">RSVP</Link></p>
      <p>About the Venue</p>
      <p>Attire</p>
      <p>Accomodations</p>
      <p>Other Information</p>
    </nav>
  )
}
