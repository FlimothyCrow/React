import React from 'react';
import fizzBuzz from './fizzBuzz.js'



class Horse extends React.Component {
  constructor(props){
    super(props);
    this.state = {timesClicked:0} ; // "this" adds new class / memeber variable
  }
  increment() { // you don't need "function" because it's within a class
    this.setState({timesClicked:this.state.timesClicked + 1}) // study setState
  }
  render() { // every time state changes
    var fizzBussList = fizzBuzz(); // NEVER CALL SET.STATE INSIDE RENDER
    var message = "" ; // rendering is expensive, don't overdo it
    if (this.state.timesClicked !== 0) {
      message = "Times clicked " + this.state.timesClicked
    } // react can't return a list of fragments
    return (
      <>
      {message // no multiline statements in here, only single expressions
      }
      <ul>
        { // JS
          fizzBussList.map(x => // thiccboi arrow doesn't need var
            (<li>
              <button onClick={() => this.increment()}>done</button> // look in "this.class"
              <b> {x}y</b> {x}
            </li>) ) // single statement can be in multiple lines
        }
      </ul>
      </>
    );// this is called JSX
  } //program converts to HTML whenever it reads HTML tags
}
// logic with JS
// presentation with JSX
// call set state
// initialize state with constructor
// call render to print html
export default Horse; // creates public access to this function
