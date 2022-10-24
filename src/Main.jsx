import React, {useState} from "react";
import Home from "./Home.jsx";
import Navigation from "./Navigation.jsx";
import Skills from "./Skills.jsx";
import Work from "./Work.jsx";
import { Portal } from "react-is";
import Portfolio from "./Portfolio.jsx";
import Footer from "./Footer.jsx";

const Main = function(props) {
  return (
      <div>
      <div id="main-bg">
        <Navigation/>
        <Home/>
      </div>
        <Portfolio/>
        <Skills/>
        <Work/>
        <Footer/>
      </div>
  )
}

export default Main;