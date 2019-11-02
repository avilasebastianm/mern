import React, { Component } from "react";
import logo from "../../assets/MYtineraryLogo.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <img src={logo} alt="" />
      </div>
    );
  }
}

export default Header;
