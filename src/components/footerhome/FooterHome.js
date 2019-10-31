import React, { Component } from "react";
import logo from "../../assets/homeIcon.png";
import "./FooterHome.css";
import { Link } from "react-router-dom";

class FooterHome extends Component {
  render() {
    return (
      <div className="app-footer">
        <nav className=" fixed-bottom  text-center ">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </nav>
      </div>
    );
  }
}
export default FooterHome;
