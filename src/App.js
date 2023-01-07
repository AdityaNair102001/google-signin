import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
        <a href="/.auth/login/facebook?post_login_redirect_uri=/Home/Index"><button style={{padding:"0.5rem 1rem",margin:"1rem"}}>Log in with Facebook</button></a>
        <a href="/.auth/login/google?post_login_redirect_uri=https://CoordinatedGiganticDrawings.adityanair14.repl.co"><button style={{padding:"0.5rem 1rem",margin:"1rem"}}>Log in with Google</button></a>

      </header>
    </div>
  );
}

export default App;
