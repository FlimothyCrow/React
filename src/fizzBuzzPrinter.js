import React from 'react';
import fizzBuzz from './fizzBuzz.js'

class FizzBuzzPrinter extends React.Component {
  constructor(props){
        super(props);
        this.state = {
          fizzBussList:fizzBuzz()
        };
  }
  render(){
    return(
      <ul>
        {this.state.fizzBussList.map(i => {
          if (isNaN(i)){
            return (<li style={{color:"blue"}}>{i}</li>)
          }
          return (<li>{i}</li>)
        }
        )}
      </ul>
    );
  }
}

export default FizzBuzzPrinter
