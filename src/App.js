import React from 'react';
import './App.css';
import Drums from "./Drums";

let drumData = [
  {
    key: "Q",
    file: "cymbal_crash.wav",
    desc: "Cymbal - Crash"
  },
  {
    key: "W",
    file: "cymbal_tink.wav",
    desc: "Cymbal - Tink"
  },
  {
    key: "E",
    file: "high_hat.wav",
    desc: "High Hat - Closed"
  },
  {
    key: "A",
    file: "kick_drum.wav",
    desc: "Kick Drum"
  },
  {
    key: "S",
    file: "open_high_hat.wav",
    desc: "High Hat - Open"
  },
  {
    key: "D",
    file: "snare_hard.wav",
    desc: "Snare Drum - Hard"
  },
  {
    key: "Z",
    file: "snare_light.wav",
    desc: "Snare Drum - Light"
  },
  {
    key: "X",
    file: "tom_deep.wav",
    desc: "Tom Tom - Deep"
  },
  {
    key: "C",
    file: "tom_light.wav",
    desc: "Tom Tom - Light"
  },
]

function App() {
  return (
    <div className="App">
      <h1 id="header_title">Free Code Camp - Drum Machine Project</h1>
      <Drums list={drumData}/>
    </div>
  );
}

export default App;
