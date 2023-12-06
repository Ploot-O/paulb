import React from 'react';
import { HoverGrowText, HoverGrowDiv } from './reactSpring.jsx';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-blue text-slate-900 text-xl font-thin">
      <HoverGrowDiv className="text-center bg-white p-4 mb-4 items-center">
        <div className="text-center mb-4">
          <span id="intro" className="text-5xl font-extrabold text-slate-900 italic">About Me</span>
        </div>
        <div>
          <span>Hi, my name is </span>
          <span className="font-extrabold italic"><HoverGrowText color="#00FFFF">Paul Broccardi</HoverGrowText></span>
          <span>.</span>
        </div>
        <div>
          <span>I am a <span className="font-extrabold italic"><HoverGrowText color="#FFFF00">Cisco Certified Network Associate (CCNA)</HoverGrowText></span> and <span className="font-extrabold italic"><HoverGrowText color="#000000">Astrophotographer</HoverGrowText></span>.</span>
        </div>
        <div>
          <span>I am <span className="font-extrabold italic"><HoverGrowText color="#FF0000">not</HoverGrowText></span> a web designer.</span>
        </div>
        <header className="text-lg text-center font-extrabold italic p-4">
          <a
            className="App-link m-5"
            href="https://linkedin.com/in/paulbroccardi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverGrowText color="#FF00FF">LinkedIn</HoverGrowText>
          </a>
          <a
            className="App-link m-5"
            href="https://github.com/Ploot-O"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverGrowText color="#FF00FF">Github</HoverGrowText>
          </a>
          <a
            className="App-link m-5"
            href="https://instagram.com/paulb_astro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverGrowText color="#FF00FF">Instagram</HoverGrowText>
          </a>
        </header>
      </HoverGrowDiv>
      <HoverGrowDiv className="text-center bg-white p-4 mb-4">
        <div className="text-center mb-4">
          <span id="projects" className="text-5xl font-extrabold font-extrabold italic">Projects</span>
        </div>
        <HoverGrowDiv>
          <a
            className="App-link m-5"
            href="https://genarrate.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverGrowText color="#FF00FF"><p className='font-bold text-3xl'>genarrate.net</p></HoverGrowText>
          </a>
          <div className="m-5">AI powered web app that helps medical professionals write narratives for their reports</div>
        </HoverGrowDiv>
        <HoverGrowDiv>
          <a
            className="App-link m-5"
            href="https://retireonti.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverGrowText color="#FF00FF"><p className='font-bold text-3xl'>retireonti.me</p></HoverGrowText>
          </a>
          <div className="m-5">Simple web app that lets you know if you're on track to retire based on contributions to retirement accounts</div>
        </HoverGrowDiv>
      </HoverGrowDiv>

      <HoverGrowDiv className="text-center bg-white p-4 mb-4">
        <div className="text-center mb-4">
          <span id="contact" className="text-5xl font-extrabold font-extrabold italic">Support</span>
        </div>
        <div className="m-5">If for whatever reason you would like to support me financially, here is my etheruem wallet address.</div>
          <div className="m-5 font-extrabold italic text-xs sm:text-xl font-bold selectable retro">
            0x6F64C7a5fB2d15A3EbcB54831c7A751146947F48
          </div>
      </HoverGrowDiv>
    </div>
  );
}

export default App;
