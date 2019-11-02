import React, { Component } from "react";
import "./Popular.css";
import Carrusel from "../carrusel/Carrusel";

class Popular extends Component {
  render() {
    return (
      <div className="popular">
        <p>Popular MYtineraries</p>
        <div className="">
          <Carrusel />
        </div>
      </div>
    );
  }
}

export default Popular;
