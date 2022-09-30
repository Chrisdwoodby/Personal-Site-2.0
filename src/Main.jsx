import React, {useState} from "react";
import Home from "./Home.jsx";
import Navigation from "./Navigation.jsx";
import Skills from "./Skills.jsx";

const Main = function(props) {
  return (
      <div>
      <div id="main-bg">
        <Navigation/>
        <Home/>
      </div>
        <Skills/>
      </div>
  )
}

export default Main;