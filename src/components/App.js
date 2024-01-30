import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home/Home";
import Header from "./header/header";
import { useEffect, useState } from "react";
import Loader from "./Loader/Loader";

function App() {
  return (
    <Router>
      <div className="app_container">
        <Loader />
        <div id="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
