import React from 'react';
import {alphabetizeOrder, doubleSort} from './reduce.js'

class ColumnKata extends React.Component {
  constructor(props){
        super(props);
        this.state = {newObject:{date:"", description:"", doneness:false},
                      tableOfItems:[{date:"a", description:"a", doneness:false},
                      {date:"l", description:"l", doneness:false},
                      {date:"b", description:"b", doneness:true},
                      {date:"x", description:"x", doneness:true},
                      {date:"s", description:"s", doneness:true}]};
  }
  addToList(input){
    var newTable = this.state.tableOfItems.concat([input])
    this.setState({tableOfItems:newTable, newObject:{date:"", description:""}})
  }

  removeFromList(index){
    this.state.tableOfItems.splice(index, 1)
    this.setState({tableOfItems:this.state.tableOfItems})
  }

  flipItems(){
    this.setState({newObject:{date:this.state.newObject.description,
                              description:this.state.newObject.date}})
  }


  toDoButton(index){
    this.state.tableOfItems[index].doneness = (! this.state.tableOfItems[index].doneness)
    this.setState({tableOfItems:this.state.tableOfItems})
  }


  render(){
    console.log("state", this.state)
    return(
    <>
    <div>
    <label for="date">Date</label>
    <input id="date" type="text" value={this.state.newObject.date}
      onChange={(event) => this.setState({newObject:{date:event.target.value,
                                                    description:this.state.newObject.description}})}/>
    </div>
    <div>
    <label for="description">Description</label>
    <input id="description" type="text" value={this.state.newObject.description}
      onChange={(event) => this.setState({newObject:{description:event.target.value,
                                                    date:this.state.newObject.date}})}/>
    </div>
    <div>
    <button onClick={() => this.addToList(this.state.newObject)}>Add</button>
    <button onClick={() => this.flipItems()}>Flip</button>
    </div>
    <table>
      <tbody>
      <tr>
        <th>date</th>
        <th>description</th>
        <th>done?</th>
        <th></th>
        <th></th>
      </tr>
      {doubleSort(this.state.tableOfItems).map((iter, index) => { // iter === 1, index === 0th
        return (<tr key={index}>
                  <td>{iter.date}</td>
                  <td>{iter.description}</td>
                  <td>{iter.doneness?"done":"to do"}</td>
                  <td><button className={iter.doneness?"warningColor":"done"} onClick={() => this.toDoButton(index)}>
                  {iter.doneness?"redo":"done"}
                  </button></td>
                  <td><button className="warningColor" onClick={() => this.removeFromList(index)}>
                  delete</button></td>
               </tr>)})}
      </tbody>
    </table>
    </>
  )}
}
export default ColumnKata
// newObject (description:"", date:"")
// tableOfItems should be listOfObjects
// line 26 {iter.date} {iter.description}
// second input but single button to add both

// inputs on 17 and 20 generate object{newObject}
// button on 23 feeds newObject into addToList call
// line 23 value=() is default draw before input is initiated
// render function is always looping
// setState automatically calls a reRender

// line 67, passing a function as a lambda neeeds .bind(this) to preserve this data
// line 58 doesn't need it because thiccboi arrow preserves this data
// otherwise you'll get a "this" data not defined error

// what's the difference between semantic tags and semantic classses in CSS?
