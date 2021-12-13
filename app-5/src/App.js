import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

const src = "https://via.placeholder.com/150"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src={src} />
      </header>
    </div>
  );
}

export default App;
