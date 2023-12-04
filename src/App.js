import React from 'react';
import { HoverGrowText, HoverGrowDiv } from './reactSpring.jsx';
import './App.css';
import CopyToClipboardText from './copytext.jsx';

function App() {
  return (
    <div className="App min-h-screen bg-blue-800 text-blue-800 text-xl font-thin">
      <HoverGrowDiv className="text-center bg-blue-50 p-4 mb-4 items-center">
        <div className="text-center mb-4">
          <span id="intro" className="text-4xl font-extrabold text-blue-800 font-mono">About Me</span>
        </div>
        <div>
          <span>Hi, my name is </span>
          <span className="font-mono"><HoverGrowText color="#057dfc">Paul Broccardi</HoverGrowText></span>
          <span>.</span>
        </div>
        <div>
          <span>I am a <span className="font-mono"><HoverGrowText color="#05fc85">Cisco Certified Network Associate (CCNA)</HoverGrowText></span> and <span className="font-mono"><HoverGrowText color="#000000">Astrophotographer</HoverGrowText></span>.</span>
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
      </HoverGrowDiv>
      <HoverGrowDiv className="text-center bg-blue-50 p-4 mb-4">
        <div className="text-center mb-4">
          <span id="projects" className="text-4xl font-extrabold font-mono">Projects</span>
        </div>
        <HoverGrowDiv>
          <a
            className="App-link m-5"
            href="https://genarrate.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverGrowText color="#a81cb8"><p className='font-bold text-3xl'>genarrate.net</p></HoverGrowText>
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
            <HoverGrowText color="#a81cb8"><p className='font-bold text-3xl'>retireonti.me</p></HoverGrowText>
          </a>
          <div className="m-5">Simple web app that lets you know if you're on track to retire based on contributions to retirement accounts</div>
        </HoverGrowDiv>
      </HoverGrowDiv>

      <HoverGrowDiv className="text-center bg-blue-50 p-4 mb-4">
        <div className="text-center mb-4">
          <span id="contact" className="text-4xl font-extrabold font-mono">Support</span>
        </div>
        <div className="m-5">If for whatever reason you would like to support me financially, here is my etheruem wallet address.</div>
        <div className="m-5 font-light text-base italic">click the address to copy!</div>
        <HoverGrowText color="#a81cb8">
          <CopyToClipboardText>
            0xacBfD0DC48D3392cD2680a253521f77E2b280F87
          </CopyToClipboardText>
        </HoverGrowText>
      </HoverGrowDiv>
    </div>
  );
}

export default App;
