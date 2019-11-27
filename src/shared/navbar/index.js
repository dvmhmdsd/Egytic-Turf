import React, { Component } from "react";
import menuList from "../menuList";

import { NavLink } from "react-router-dom";

import "./style.scss";

import translate from "../utils/translate";

export default class Navbar extends Component {
  state = {
    isLangMenuOpen: false,
    scrolled: false
  }

  // show the language menu
  showMenu = () => {
    this.setState({ isLangMenuOpen: true })
  }

  // hide the language menu
  hideMenu = () => {
    this.setState({ isLangMenuOpen: false })
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== this.state.scrolled) {
        this.setState({
          scrolled: !this.state.scrolled
        })
      }
    });
  }

  render() {
    let { context, inHome } = this.props;
    let { scrolled } = this.state;

    return (
      <nav className={`navbar ${inHome ? "home-nav" : "page-nav"} ${scrolled ? "navbar--scrolled" : ""}`}>
        <section className={`container-fluid ${context.lang === "ar" ? "reverse" : ""}`}>
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
            <ul className={`nav-links-list ${context.lang === "ar" ? "reverse" : ""}`}>
              {menuList.map(listItem => (
                <li key={listItem.link} className="nav-list-item">
                  <NavLink to={listItem.link} className="nav-list-item-link">
                    {translate(listItem.listItemName)}
                  </NavLink>
                </li>
              ))}
              <li className="nav-list-item"
                onMouseOver={this.showMenu}
                onMouseLeave={this.hideMenu}
                onClick={this.hideMenu}
              >
                {translate("languages")}
                {this.state.isLangMenuOpen &&
                  <ul className="languages">
                    <li className="language-item">
                      <button
                        data-language="en"
                        onClick={e => context.changeLanguage(e)}
                      > English </button>
                    </li>
                    <li className="language-item">
                      <button
                        data-language="ar"
                        onClick={e => context.changeLanguage(e)}
                      > عربى </button>
                    </li>
                  </ul>}
              </li>
            </ul>
          </section>
        </section>
      </nav>
    );
  }
}
