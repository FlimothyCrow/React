import React from 'react';
import fizzBuzz from './fizzBuzz.js'

class FizzBuzzPrinter extends React.Component {
  constructor(props){
        super(props);
        this.state = {
          fizzBussList:fizzBuzz().map(this.itemToObject),
          newItem:""
        };
        console.log(this.state.fizzBussList)
  }

  itemToObject(string){
    return {chore:string, completed:false} // thiccboi creates object requires ({
  }

  removeTarget(index){
    delete this.state.fizzBussList[index] // delete mutates without a return
    this.setState({fizzBussList:this.state.fizzBussList}) // render triggers from setState
  }

  addToList(string){
    this.state.fizzBussList.push(this.itemToObject(string))
    this.setState({fizzBussList:this.state.fizzBussList, newItem:""}) // newItem:"" clears the field on render
  }

  toggleCompleted(index){
    this.state.fizzBussList[index].completed = ! this.state.fizzBussList[index].completed
    this.setState({fizzBussList:this.state.fizzBussList})
  }

  render(){
    console.log(this.state.fizzBussList)
    return(
      <>
      <input type="text" value={this.state.newItem}
        onChange={(event) => this.setState({newItem:event.target.value})}>
      </input>
      {this.state.newItem && // if first === true, evaluate second, else skip second and return false
        (<button onClick={() => this.addToList(this.state.newItem)}>Add</button>)}
      <ul>
        {this.state.fizzBussList.map((iter, index) => { // iter === 1, index === 0th
          return (<li style={{color:"red"}} key={index}>
            <button onClick={() => this.removeTarget(index)}>delete</button>
            {iter.chore}
            {iter.completed?" completed ":" to do "}
            <button onClick={() => this.toggleCompleted(index)}>
            {iter.completed?" redo ":" done "}</button>
            </li>)
        }
        )}
      </ul>
      </>
    );
  }
}
// what have we learned today?
// ternary operators
// not ! see line 29
// && if both assertions === true, return second thing, else return false

// || if first expression === true, return first expression,
// else if second expression === true, return second expression
// else return false
export default FizzBuzzPrinter
