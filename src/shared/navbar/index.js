import React, { Component } from "react";
import menuList from "../menuList";

import { NavLink } from "react-router-dom";

import "./style.scss";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <section className="container-fluid">
          <section className="navbar-logo">
            <a href="/" className="navbar-logo-link">
              <img
                src="https://via.placeholder.com/50?text=logo"
                alt="Egytic's logo"
              />
            </a>
          </section>

          <button className="navbar-list-toggler"> &#9776; </button>

          <section className="navbar-links">
            <ul className="nav-links-list">
              {menuList.map(listItem => (
                <li key={listItem.link} className="nav-list-item">
                  <NavLink to={listItem.link} className="nav-list-item-link">
                    {listItem.listItemName}
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </nav>
    );
  }
}
