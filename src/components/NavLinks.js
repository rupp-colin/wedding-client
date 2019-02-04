import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavLinks.css';

export default class NavLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    }
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    let menuToggler = this.state.showMenu ? "link-container col-2 menu-toggle-show" : "link-container col-2"
  return (
    <nav id="main-nav" className="row">

      <div
        className="link-container menu-toggle"
        onClick={() => this.toggleMenu()}
      >
        <i className="fas fa-bars"></i>
      </div>

      <div className={menuToggler}>
        <Link to='/'>Home</Link>
      </div>
      <div className={menuToggler}>
        <Link to="/rsvp">RSVP</Link>
      </div>
      <div className={menuToggler}>
        <Link to="/venue">Venue</Link>
      </div>
      <div className={menuToggler}>
        <Link to ="/hotels">Hotels</Link>
      </div>
      <div className={menuToggler}>
        <Link to="moreinfo">More Info</Link>
      </div>
    </nav>
  )
  }
}
