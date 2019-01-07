import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-warning mb-3">
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                ADD
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
