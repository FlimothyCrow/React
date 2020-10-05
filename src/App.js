import React from 'react';
import HandRanker from './nuPoker/HandRanker'
import './App.css';
// npm start
// npm test
function App() {

  return (
    <div className="App">
      <header className="App-header">
          <HandRanker></HandRanker>
      </header>
      
    </div>
  );
}

export default App;

// notice that the calls on 15 and 16 have different syntax
// <FizzBuzzPrinter /> for line 16
