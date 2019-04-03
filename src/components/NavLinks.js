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
    let menuToggler = this.state.showMenu ?
      "link-container col-2 menu-toggle-show close" :
      "link-container col-2 close"
    let animateMenu = this.state.showMenu ? "open" : "close";
    let animateButton = this.state.showMenu ? "big-x" : "hamburger";
  return (
      <div>
        <div id="menu-toggler-extension" className={animateMenu}>
        </div>
        <div
          id="menu-toggle"
          className={animateButton}
          onClick={() => this.toggleMenu()}
        >
          <div id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="cross">
            <span></span>
            <span></span>
          </div>
        </div>
        <nav id="main-nav" className={`${animateMenu} `}>
      <div className={menuToggler}>
        <Link to='/'>Home</Link>
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
      <div id="menu-bot-spacer" className={menuToggler}>
      </div>
    </nav>
  </div>
  )
  }
}
