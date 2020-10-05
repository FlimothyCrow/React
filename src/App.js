import React from 'react';
import logo from './logo.svg';
import ExerciseWebsite from './exerciseTracker/exerciseWebsite';
import './App.css';
// npm start
// npm test
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {false && <ExerciseWebsite></ExerciseWebsite>}
      </header>
    </div>
  );
}

export default App;

// notice that the calls on 15 and 16 have different syntax
// <FizzBuzzPrinter /> for line 16
