import React from 'react';
import Accomodations from '../components/Accomodations.js';

export default function HotelsPage() {

  const styles={width: '100%', justifyContent: 'space-evenly'}
  return (
    <div className="flex">
      <div className="pic-container column">
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
      </div>
      <div className="flex" style={styles}>
        <Accomodations />
      </div>
    </div>
  )
}
