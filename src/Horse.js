import React from 'react';
import fizzBuzz from './fizzBuzz.js'

function map2(list, functionToEx) {
  var listToReturn = []
  for (var i in list) { // slams head
    listToReturn.push(functionToEx(i))
  }
  return listToReturn
}

function Horse() {
  var fizzBussList = fizzBuzz();
  // map calls the function for you

   // <li> to HTML and {} into JS
  /*
  var things2 = []
  var things3 = map2(fizzBussList, x =>  (<li>{x}y{x}</li>))
  for (var x in fizzBussList) {
    things2.push(<li>{x}y{x}</li>)
  }  // content of things2 are react fragments with HTML list items
  */
  return (
    <ul>
      { // JS
        fizzBussList.map(x =>  (<li><b>{x}y</b> {x}</li>) )
      }
    </ul> // this is called JSX
  ); //program converts to HTML whenever it reads HTML tags
}
// logic with JS
// presentation with JSX
export default Horse; // creates public access to this function
