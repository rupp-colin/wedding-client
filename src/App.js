import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import {FormikRSVPForm} from './components/RSVPForm.js';
import NavLinks from './components/NavLinks.js';
import LandingPage from './components/LandingPage.js';
import VenueInfo from './components/VenueInfo.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavLinks />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/rsvp' component={FormikRSVPForm} />
        <Route exact path='/venue' component={VenueInfo} />
        {/*<Route exact path='/attire' component={AttireInfo} />
        <Route exact path='/accomodations' component={Accomodations} />
        <Route exact path='/otherinfo' component={OtherInfo} />*/}
      </div>
    </Router>
    );
  }
}

export default App;
