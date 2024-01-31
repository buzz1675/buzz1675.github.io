import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home/Home";
import Header from "./header/header";
import { useEffect, useState } from "react";
import Loader from "./Loader/Loader";
import About from "../routes/About/About";

function App() {
  return (
    <div className="app_container">
      <Loader />
      <div id="content">
        <Header />
        <Home />
        <About/>

      </div>
    </div>
  );
}

export default App;
