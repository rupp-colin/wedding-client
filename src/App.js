import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {FormikRSVPForm} from './components/RSVPForm.js';
import NavLinks from './components/NavLinks.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavLinks />
        {/* <Route exact path='/' component={LandingPage} /> */}
        <Route exact path='/rsvp' component={FormikRSVPForm} />
      </div>
    </Router>
    );
  }
}

export default App;
