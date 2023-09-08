function App() {
  return (
    <div className="App" class="min-h-screen bg-blue-100">
      <div class="text-center">
        <span>
          <span class="text-blue-500 font-thin text-xl">Hi, my name is </span>
          <span class="text-blue-500 font-mono text-xl">Paul Broccardi</span>
        </span>
        
        <h2 class="text-blue-500 font-thin text-lg">
          Networking Associate and Astrophotographer
        </h2>
      </div>
      <header class="text-lg text-center text-blue-500">
        <a
          className="App-link"
          href="https://linkedin.com/in/paulbroccardi"
          target="_blank"
          rel="noopener noreferrer"
          class="p-5 font-light font-mono"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://github.com/Ploot-O"
          target="_blank"
          rel="noopener noreferrer"
          class="p-5 font-light font-mono"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://instagram.com/paulb_astro"
          target="_blank"
          rel="noopener noreferrer"
          class="p-5 font-light font-mono"
        >
          Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
