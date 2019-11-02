import React from "react";
import "./App.css";

/* import FooterHome from "./components/footerhome/FooterHome"; */
/* importar rutas */
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Singup from "./pages/signup/Singup";
import Cities from "./pages/cities/Cities";
import Login from "./pages/login/Login";
import Users from "./components/users/Users";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Users />
        <div className="container ">
          <Route exact path="/" component={Home} />
          <Route path="/singup" component={Singup} />
          <Route path="/login" component={Login} />
          <Route path="/cities" component={Cities} />

          {/* <FooterHome /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
