import React from 'react';
import {HoverGrowText, HoverGrowDiv} from './reactSpring.jsx';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-blue-800 text-blue-800 text-xl font-thin">
      <div className="text-center bg-blue-50 p-4 mb-4">
        <div className="text-center mb-4">
          <span id="intro" className="text-4xl font-extrabold text-blue-800 font-mono">About Me</span>
        </div>
        <div>
          <span>Hi, my name is </span>
          <span className="font-mono"><HoverGrowText color="#057dfc">Paul Broccardi</HoverGrowText></span>
          <span>.</span>
          <HoverGrowText color=""></HoverGrowText>
        </div>
        <div>
          <span>I am a <span className="font-mono"><HoverGrowText color="#05fc85">Network Specialist</HoverGrowText></span> and <span className="font-mono"><HoverGrowText color="#000000">Astrophotographer</HoverGrowText></span>.</span>
        </div>
        <div>
          <span>I am <span className="font-extrabold"><HoverGrowText color="#ff0000">not</HoverGrowText></span> a web designer.</span>
        </div>
        <header className="text-lg text-center font-mono p-4">
          <a
            className="App-link m-5"
            href="https://linkedin.com/in/paulbroccardi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverGrowText color="#a81cb8">LinkedIn</HoverGrowText>
          </a>
          <a
            className="App-link m-5"
            href="https://github.com/Ploot-O"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverGrowText color="#a81cb8">Github</HoverGrowText>
          </a>
          <a
            className="App-link m-5"
            href="https://instagram.com/paulb_astro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverGrowText color="#a81cb8">Instagram</HoverGrowText>
          </a>
        </header>
      </div>
      <div className="text-center bg-blue-50 p-4 mb-4">
        <div className="text-center mb-4">
          <span id="projects" className="text-4xl font-extrabold font-mono">Projects</span>
        </div>
        <HoverGrowDiv>
          <span>
            TEST
          </span>
        </HoverGrowDiv>
      </div>
    </div>
  );
}

export default App;
