import React from 'react';
import Hotel from './Hotels.js';
import '../styles/Accomodations.css';

export default function Accomodations() {
  return (
    <main id="accomodations-container">
      <div className="menu-spacer"></div>
    <Hotel
      className="hotel-spacer"
      hotelName="Some Hotel"
      hotelImage="https://via.placeholder.com/300x150"
      hotelDesc="This is a hotel.  It has some rooms to rent and you can rent them if you choose. You do not have to rent them,
        but it may be a convient place to stay if you are attending the wedding."
        hotelLink="https://www.google.com/travel/hotels/Springfield?ap=YhM4ODI0MTM4NjY3NzExNzcyODU1&g2lb=4208993%2C4223281%2C4236351%2C4220469%2C4226113%2C4232026&hl=en&gl=us&un=0&q=hotel%20near%20springfield%20oregon&rp=OAFAAEgC&ictx=1&ved=2ahUKEwiVsf3rj6ngAhUgJTQIHU8dBV8QvS4wAHoECAQQGw&hrf=CgUIrwEQACIDVVNEKhYKBwjjDxACGBESBwjjDxACGBIYASgAsAEAmgENEgtTcHJpbmdmaWVsZKIBFwoIL20vMHpkdjESC1NwcmluZ2ZpZWxkkgECIAE&tcfs=EjEKCC9tLzB6ZHYxEgtTcHJpbmdmaWVsZBoYCgoyMDE5LTAyLTE3EgoyMDE5LTAyLTE4UgA"
      />
    <Hotel
      className="hotel-spacer"
      hotelName="A better Hotel"
      hotelImage="https://via.placeholder.com/250x125"
      hotelDesc="This is a hotel.  It has some rooms to rent and you can rent them if you choose. You do not have to rent them,
        but it may be a convient place to stay if you are attending the wedding."
        hotelLink="https://www.google.com/travel/hotels/Springfield?ap=YhM4ODI0MTM4NjY3NzExNzcyODU1&g2lb=4208993%2C4223281%2C4236351%2C4220469%2C4226113%2C4232026&hl=en&gl=us&un=0&q=hotel%20near%20springfield%20oregon&rp=OAFAAEgC&ictx=1&ved=2ahUKEwiVsf3rj6ngAhUgJTQIHU8dBV8QvS4wAHoECAQQGw&hrf=CgUIrwEQACIDVVNEKhYKBwjjDxACGBESBwjjDxACGBIYASgAsAEAmgENEgtTcHJpbmdmaWVsZKIBFwoIL20vMHpkdjESC1NwcmluZ2ZpZWxkkgECIAE&tcfs=EjEKCC9tLzB6ZHYxEgtTcHJpbmdmaWVsZBoYCgoyMDE5LTAyLTE3EgoyMDE5LTAyLTE4UgA"
      />
    </main>
  )
}
