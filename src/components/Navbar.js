import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow wrapper">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="home"
        >
          Harmony Trade Portal
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white"><span id="account">{this.props.account}</span></small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
