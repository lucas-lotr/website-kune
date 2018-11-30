import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Call from "./components/Call";
import Donate from "./components/Donate";
import Collaborate from "./components/Collaborate";
import About from "./components/About";
import Work from "./components/Work";
import Dogs from "./components/Dogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div id="home" className="App">
        <Header />
        <Call />
        <About />
        <Work />
        <Dogs />
        <Contact />
        <Donate />
        <Collaborate />
        <Footer />
      </div>
    );
  }
}

export default App;
