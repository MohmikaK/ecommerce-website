import React from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
      //BEM 
      <Router>
      <div className = "App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      </div >
      </Router>
    );
}

export default App;