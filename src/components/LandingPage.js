import React from 'react';
import '../styles/LandingPage.css';
import invite1 from '../images/Front4.png';
import invite2 from '../images/additiona-info.png';

export default function LandingPage() {
  return (
    <main>
      <div className="invite-container">
        <img src={invite1} />
      </div>
      <div className="invite-container">
        <img src={invite2} />
      </div>
    </main>
  )
}
