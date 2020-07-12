import React from 'react';
import logo from './logo.svg';
import Horse from './Horse.js';
import FizzBuzzPrinter from './fizzBuzzPrinter.js';
import ExerciseWebsite from './exerciseWebsite';
import HelloWorld from './HelloWorld';
import './App.css';
// npm start
// npm test
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {false && <ExerciseWebsite></ExerciseWebsite>}
          <HelloWorld></HelloWorld>
      </header>
    </div>
  );
}

export default App;

// notice that the calls on 15 and 16 have different syntax
// <FizzBuzzPrinter /> for line 16
