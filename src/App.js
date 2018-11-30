import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Call from "./components/Call";
import Donate from "./components/Donate";
import Collaborate from "./components/Collaborate";
import About from "./components/About";

class App extends Component {
    render() {
        return (
            <div id="home" className="App">
                <Header />
                <Call />
                <About />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <Donate />
                <Collaborate />
            </div>
        );
    }
}

export default App;
