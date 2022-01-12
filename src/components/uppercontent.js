import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {

  render() {
    return (
        <section data-aos="fade-down" class="headerText wrapper">
            <h1>
                <span class="headert">TRADE</span>
                <span class="headerf">PORTAL</span>
            </h1>
            <h3><span>BUY</span> AND <span>LIST</span> NFTS ON THE HARMONY TESTNET</h3>
        </section>
    );
  }
}

export default Navbar;
