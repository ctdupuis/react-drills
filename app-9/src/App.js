import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <div className="App">
      <nav>
        <Link className="App-link" to="/">
          Home
        </Link>
        <Link className="App-link" to="/signup">
          Signup
        </Link>
        <Link className="App-link" to="/details">
          Details
        </Link>
      </nav>
      <header className="App-header">
        {router}
      </header>
    </div>
  );
}

export default App;
