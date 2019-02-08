import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import {FormikRSVPForm} from './components/RSVPForm.js';
import NavLinks from './components/NavLinks.js';
import LandingPage from './components/LandingPage.js';
import VenueInfo from './components/VenueInfo.js';
import Accomodations from './components/Accomodations.js';
import MoreInfo from './components/MoreInfo.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavLinks />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/rsvp' component={FormikRSVPForm} />
        <Route exact path='/venue' component={VenueInfo} />
        <Route exact path='/hotels' component={Accomodations} />
        <Route exact path='/moreinfo' component={MoreInfo} />
      </div>
    </Router>
    );
  }
}

export default App;
