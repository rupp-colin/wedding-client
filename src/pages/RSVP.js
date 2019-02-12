import React from 'react';
import {FormikRSVPForm} from '../components/RSVPForm.js';

export default function RSVP() {
  return (
    <main>
      <div className="pic-container column">
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
      </div>
      <FormikRSVPForm />
    </main>
  )
}
