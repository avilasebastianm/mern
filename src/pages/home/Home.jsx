import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Start from "../../components/start/Start";
import Popular from "../../components/popular/Popular";
import Users from "../../components/users/Users";

/* importar rutas */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import singup from "./pages/signup/Singup";
// import Cities from "./pages/cities/Cities";
// import login from "./pages/login/Login";

class Home extends React.Component {
  render() {
    return (
      <div className=" ">
        <Header />

        <div className="text-center parrafo">
          <p>
            Find your perfect trip,designed by insiders who know adn love their
            cities
          </p>
        </div>

        <Start />

        <Popular />
      </div>
    );
  }
}

export default Home;
