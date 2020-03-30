import React from 'react';
import logo from './logo.svg';
import Horse from './Horse.js';
import FizzBuzzPrinter from './fizzBuzzPrinter.js';
import './App.css';
// npm start
// npm test
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <FizzBuzzPrinter />
      </header>
    </div>
  );
}

export default App;
