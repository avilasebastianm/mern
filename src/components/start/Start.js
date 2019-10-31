import React, { Component } from "react";
import logo from "../../assets/circled-right-2.png";
import "./Start.css";
import { Link } from "react-router-dom";

class Start extends Component {
  render() {
    return (
      <div className="app-start text-center">
        <Link to="/cities">
          <img src={logo} alt="Home" />
        </Link>
      </div>
    );
  }
}
export default Start;
