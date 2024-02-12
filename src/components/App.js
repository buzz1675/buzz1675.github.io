import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home/Home";
import Header from "./header/header";
import Loader from "./Loader/Loader";
import About from "../routes/About/About";
import ScrollBar from "./scrollBar/scrollBar";
import Skills from "../routes/Skills/Skills";
import Projects from "../routes/Projects/Projects";
import Overview from "../routes/Overview/Overview";

function App() {
  return (
    <div className="app_container">
      <Loader />
      <div id="content">
        <Header />
        <Home id="home" />
        <div className="content_background">
          <About id="about" />
          <Overview/>
          <Skills />
        </div>
        <Projects/>

        <ScrollBar />
      </div>
    </div>
  );
}

export default App;
