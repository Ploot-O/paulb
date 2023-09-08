function App() {
  return (
    <div className="App" class="min-h-screen bg-blue-800 text-blue-800 text-xl font-thin">
      <div class="text-center bg-blue-50 p-4 mb-4">
        <div class="text-center mb-4">
          <span id="intro" class="text-4xl font-extrabold text-blue-800 font-mono">About Me</span>
        </div>
        <div class="">
          <span>Hi, my name is </span>
          <span class="font-mono">Paul Broccardi</span>
          <span>.</span>
        </div>
        <div>
          <span>I am a <span class="font-mono">Network Specialist</span> and <span class="font-mono">Astrophotographer</span>.</span>
        </div>
        <div>
          <span>I am <span class="font-extrabold">not</span> a web designer.</span>
        </div>
        <header class="text-lg text-center font-mono p-4">
          <a
            className="App-link"
            href="https://linkedin.com/in/paulbroccardi"
            target="_blank"
            rel="noopener noreferrer"
            class="p-5"
          >
            LinkedIn
          </a>
          <a
            className="App-link"
            href="https://github.com/Ploot-O"
            target="_blank"
            rel="noopener noreferrer"
            class="p-5"
          >
            Github
          </a>
          <a
            className="App-link"
            href="https://instagram.com/paulb_astro"
            target="_blank"
            rel="noopener noreferrer"
            class="p-5"
          >
            Instagram
          </a>
        </header>
      </div>
      <div class="text-center bg-blue-50 p-4 mb-4">
        <div class="text-center mb-4">
          <span id="projects" class="text-4xl font-extrabold font-mono">Projects</span>
        </div>
        <div id="project1">
          <span></span>
        </div>
        <div id="project2">
          <span></span>
        </div>
        <div id="project3">
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default App;
