import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import RSVP from './pages/RSVP.js';
import NavLinks from './components/NavLinks.js';
import LandingPage from './components/LandingPage.js';
import VenueInfo from './components/VenueInfo.js';
import HotelsPage from './pages/Hotelspage.js';
import MoreInfo from './components/MoreInfo.js';

// test comment for deployment purposes

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavLinks />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/venue' component={VenueInfo} />
        <Route exact path='/hotels' component={HotelsPage} />
        <Route exact path='/moreinfo' component={MoreInfo} />
      </div>
    </Router>
    );
  }
}

export default App;
