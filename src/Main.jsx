import React, {useState} from "react";
import Home from "./Home.jsx"
import Navigation from "./Navigation.jsx"

const Main = function(props) {
  return (
      <div>
          <Navigation/>
          <Home/>
      </div>
  )
}

export default Main;