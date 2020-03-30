import React from 'react';
import fizzBuzz from './fizzBuzz.js'

class FizzBuzzPrinter extends React.Component {
  constructor(props){
        super(props);
        this.state = {
          fizzBussList:fizzBuzz(),
          newItem:""
        };
  }
  removeTarget(index){
    delete this.state.fizzBussList[index] // delete mutates without a return
    this.setState({fizzBussList:this.state.fizzBussList}) // render triggers from setState
  }

  addToList(string){
    this.state.fizzBussList.push(string)
    this.setState({fizzBussList:this.state.fizzBussList, newItem:""})
  }

  render(){
    return(
      <>
      <input type="text" value={this.state.newItem}
        onChange={(event) => this.setState({newItem:event.target.value})}>
      </input>
      <button onClick={() => this.addToList(this.state.newItem)}>Add</button>
      <ul>
        {this.state.fizzBussList.map((iter, index) => { // iter === 1, index === 0th
          var color = "green"
          var buttonText = "X"

          if (isNaN(iter)){
            color = "red"
            buttonText = "S"
          }
          return (<li style={{color:color}} key={index}>
            <button onClick={() => this.removeTarget(index)}>{buttonText}</button>
            {iter}</li>)
        }
        )}
      </ul>
      </>
    );
  }
}

export default FizzBuzzPrinter
