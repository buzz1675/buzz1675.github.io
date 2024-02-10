import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home/Home";
import Header from "./header/header";
import Loader from "./Loader/Loader";
import About from "../routes/About/About";
import ScrollBar from "./scrollBar/scrollBar";
import Skills from "../routes/Skills/Skills";

function App() {
  return (
    <div className="app_container">
      <Loader />
      <div id="content">
        <Header />
        <Home id="home" />
        <div className="content_background">
          <About id="about" />
          <Skills />
        </div>

        <ScrollBar />
      </div>
    </div>
  );
}

export default App;
