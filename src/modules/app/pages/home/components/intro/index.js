import React, { Component } from 'react';

// import img from "../../../../../../assets/meat-menu.jpg"

import "./style.scss";

export default class Intro extends Component {
  render() {
    return (
      <section className="intro-section">
        {/* <img src="https://via.placeholder.com/100x50?text=logo" alt="grass"/> */}
        <video src="https://apps.crafted-internet.com/egytic-truf/public/egytic-truf/images/folding-background.mp4" height="100%" width="100%" autoPlay="" loop=""></video>
      </section>
    )
  }
}
