import React from 'react';
import fizzBuzz from './fizzBuzz.js'


function Horse() {
  var test = fizzBuzz();
  console.log(test)
  return (
    <ul>
      {
        test.map(x => (<li>{x}</li>) )
      }
    </ul> // this is called JSX
  );
}
// logic with JS
// presentation with JSX
export default Horse; // creates public access to this function
