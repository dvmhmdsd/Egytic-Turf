import React, { Component } from 'react';

import "./style.scss";

import facebook from "../../assets/facebook.svg";
import flicker from "../../assets/flickr.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <section className="footer-info">
            <a href="/" className="navbar-logo-link">
              <img
                src="https://via.placeholder.com/90?text=logo"
                alt="Egytic's logo"
              />
            </a>

            <p>Call us: <a href="tel:01286345045">01286345045</a></p>
            <p>Address: Nasr city Cairo/Egypt</p>

            <ul className="social-links">
              <li className="social-link-item">
                <a href="/"> <img width="30" src={facebook} alt=""/>  </a>
                <a href="/"> <img width="30" src={flicker} alt=""/>  </a>
                <a href="/"> <img width="30" src={twitter} alt=""/>  </a>
                <a href="/"> <img width="30" src={youtube} alt=""/>  </a>
                <a href="/"> <img width="30" src={instagram} alt=""/>  </a>
              </li>
            </ul>
          </section>

          <section className="footer-map">
            map
          </section>
        </div>
      </footer>
    )
  }
}
