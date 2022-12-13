import React, { useState, useEffect } from "react";
import ToolBar from "./components/ToolBar";
import Steps from "./components/Steps";
import TrackList from "./components/TrackList";
import PlayHead from "./components/PlayHead";
import { Provider } from "./hooks/useStore";
import useTimer from "./hooks/useTimer";
import useStylers from "./hooks/useStylers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Test.
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
    </div>
  );
}

export default App;
