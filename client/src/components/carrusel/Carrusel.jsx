import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carrusel.css";
import Slider from "react-slick";
import React, { Component } from "react";

class Carrusel extends Component {
  render() {
    var settings = {
      arrows: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div id="galeria" className="text-center">
        <Slider {...settings}>
          <div>
            <div class="columnaizq">
              <div class="ciudad" id="barcelona">
                {/* <img
                  src={require("../../assets/barcelona.jpg")}
                  width="250px"
                /> */}
                <h4>Barcelona</h4>
              </div>

              <div class="ciudad" id="amsterdam">
                <h4>Amsterdam</h4>
                {/* <img
                  src={require("../../assets/amsterdam.jpg")}
                  width="200px"
                /> */}
              </div>
            </div>
            <div class="columnader">
              <div class="ciudad" id="newyork">
                <h4>New York</h4>
                {/* <img
                  src={require("../../assets/nueva_york.jpg")}
                  width="200px"
                /> */}
              </div>

              <div class="ciudad" id="paris">
                {/* <img src={require("../../assets/paris.jpg")} width="200px" /> */}
                <h4>Paris</h4>
              </div>
            </div>
          </div>
          <div>
            <div class="columnaizq">
              <div class="ciudad" id="cordoba">
                <h4>Cordoba</h4>
                {/* <img src={require("../../assets/cordoba.jpg")} width="200px" /> */}
              </div>

              <div class="ciudad" id="tokio">
                <h4>Tokio</h4>
                {/* <img src={require("../../assets/tokio.jpg")} width="200px" /> */}
              </div>
            </div>
            <div class="columnader">
              <div class="ciudad" id="moscow">
                <h4>Moscow</h4>
                {/* <img src={require("../../assets/moscow.jpg")} width="200px" /> */}
              </div>

              <div class="ciudad" id="sofia">
                {/* <img src={require("../../assets/sofia.jpg")} width="200px" /> */}
                <h4>Sofia</h4>
              </div>
            </div>
          </div>
          <div>
            <div class="columnaizq">
              <div class="ciudad" id="liverpool">
                {/* <img
                  src={require("../../assets/liverpool.jpg")}
                  width="200px"
                /> */}
                <h4>Liverpool</h4>
              </div>
              <div></div>
              <div class="ciudad" id="gotham">
                {/* <img src={require("../../assets/gotham.jpg")} width="200px" /> */}
                <h4>Gotham</h4>
              </div>

              <div></div>
            </div>
            <div class="columnader">
              <div class="ciudad" id="madrid">
                {/* <img src={require("../../assets/madrid.jpg")} width="200px" /> */}
                <h4>Madrid</h4>
              </div>
              <div></div>
              <div class="ciudad" id="sydney">
                {/* <img src={require("../../assets/sydney.jpg")} width="200px" /> */}
                <h4>Sydney</h4>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
  Contraer;
}
export default Carrusel;
