import React from "react"
import fizzBuzz from "./fizzBuzz.js"

class Horse extends React.Component {
  constructor(props) {
    // consturctor arranges mise en place
    super(props)
    this.state = {
      timesClicked: [],
      fizzBussList: fizzBuzz(), // "this" adds new class / memeber variable
    }
    //this.state.fizzBussList = fizzBuzz(); // NEVER CALL SET.STATE INSIDE RENDER
  }
  increment(i) {
    // you don't need "function" because it's within a class
    var timesClicked = this.state.timesClicked
    if (timesClicked[i] === undefined) {
      timesClicked[i] = 0
    }
    timesClicked[i] = timesClicked[i] + 1
    this.setState({ timesClicked: timesClicked }) // study setState
  } // this.state === read, setState === write
  render() {
    // every time state changes cooks mise en place
    // rendering is expensive, don't overdo it
    var message = "Total times clicked " + this.state.timesClicked.reduce((a, b) => a + b, 0)
    // react can't return a list of fragments
    return (
      <>
        {
          message // no multiline statements in here, only single expressions
        }
        <ul>
          {
            // JS
            this.state.fizzBussList.map((
              x,
              i // thiccboi arrow doesn't need var
            ) => (
              <li>
                <button onClick={() => this.increment(i)}>done</button>
                <font color="red">{x}y</font> {"Count is " + (this.state.timesClicked[i] || 0)}
              </li>
            )) // single statement can be in multiple lines
          }
        </ul>
      </>
    ) // this is called JSX
  } //program converts to HTML whenever it reads HTML tags
} // look in "this.class"
// logic with JS
// presentation with JSX
// call set state
// initialize state with constructor
// call render to print html
export default Horse // creates public access to this function
