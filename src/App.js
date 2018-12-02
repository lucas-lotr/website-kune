import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Call from "./components/Call";
import Donate from "./components/Donate";
import Collaborate from "./components/Collaborate";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <div id="home" className="App">
                <Header />
                <Call />
                <About />
                <Donate />
                <Collaborate />
                <Footer />
            </div>
        );
    }
}

export default App;
