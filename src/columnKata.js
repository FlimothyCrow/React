import React from 'react';
import {alphabetizeOrder, doubleSort} from './reduce.js'

class ColumnKata extends React.Component {
  constructor(props){
        super(props);
        this.state = {newObject:{date:"", exercise:"", sets:"",
                                 reps:"", weight:"", doneness:false},
                      tableOfItems:JSON.parse(localStorage.getItem("tableOfItems") || "[]"),
                      showCreate:false};


  }
  addToList(input){
    var newTable = this.state.tableOfItems.concat([input])
    localStorage.setItem("tableOfItems", JSON.stringify(newTable));
    this.setState({tableOfItems:newTable, showCreate:false, newObject:{date:"", exercise:"",
                                                    sets:"", reps:"", weight:""}})
  }

  removeFromList(index){
    this.state.tableOfItems.splice(index, 1)
    localStorage.setItem("tableOfItems", JSON.stringify(this.state.tableOfItems));
    this.setState({tableOfItems:this.state.tableOfItems})
  }

  clearFields(){
    this.setState({newObject:{date:"", exercise:"",
                              sets:"", reps:"", weight:""}})
  }


  toDoButton(index){
    this.state.tableOfItems[index].doneness = (! this.state.tableOfItems[index].doneness)
    this.setState({tableOfItems:this.state.tableOfItems})
  }


  render(){
    var createNewFragment =  (<>

    <div>
    <label for="date">Date</label>
    <input id="date" type="text" value={this.state.newObject.date}
      onChange={(event) => this.setState({newObject:Object.assign(this.state.newObject, {date:event.target.value})})}/>
    </div>

    <div>
    <label for="exercise">exercise</label>
    <input id="exercise" type="text" value={this.state.newObject.exercise}
      onChange={(event) => this.setState({newObject:Object.assign(this.state.newObject, {exercise:event.target.value})})}/>
    </div>

    <div>
    <label for="reps">reps</label>
    <input id="reps" type="text" value={this.state.newObject.reps}
      onChange={(event) => this.setState({newObject:Object.assign(this.state.newObject, {reps:event.target.value})})}/>
    </div>

    <div>
    <label for="sets">sets</label>
    <input id="sets" type="text" value={this.state.newObject.sets}
      onChange={(event) => this.setState({newObject:Object.assign(this.state.newObject, {sets:event.target.value})})}/>
    </div>

    <div>
    <label for="weight">weight</label>
    <input id="weight" type="text" value={this.state.newObject.weight}
      onChange={(event) => this.setState({newObject:Object.assign(this.state.newObject, {weight:event.target.value})})}/>
    </div>

    <div>
    <button onClick={() => this.addToList(this.state.newObject)}>Add</button>
    <button onClick={() => this.clearFields()}>Clear</button>
    </div>

    </>);

    return(
    <>
    <button onClick={() => {
      this.setState({showCreate:! this.state.showCreate});
      this.clearFields();
    }}>Create new entry</button>
    {this.state.showCreate && createNewFragment}

    <table>
      <tbody>
      <tr>
        <th>date</th>
        <th>exercise</th>
        <th>reps</th>
        <th>sets</th>
        <th>weight</th>
        <th></th>
      </tr>
      {doubleSort(this.state.tableOfItems).map((iter, index) => { // iter === 1, index === 0th
        return (<tr key={index}>
                  <td>{iter.date}</td>
                  <td>{iter.exercise}</td>
                  <td>{iter.reps}</td>
                  <td>{iter.sets}</td>
                  <td>{iter.weight}</td>
                  <td><button className="warningColor" onClick={() => this.removeFromList(index)}>
                  delete</button></td>
               </tr>)})}
      </tbody>
    </table>
    </>
  )}
}
export default ColumnKata
// newObject (exercise:"", date:"")
// tableOfItems should be listOfObjects
// line 26 {iter.date} {iter.exercise}
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


// what happens when we host a website?
// we run a tool in NPM that converts typescript > javascript
// the conversion code is executed on the development machine (PC)
// the end user is seeing it "hosted"
// the "server" in this case is our file system
// any file on the system is "served" to the browser

// Date
// exercise
// sets
// reps
// weight

// const returnedTarget = Object.assign(target, source);
// atom plugin rainbows parens
// line 79 && returns the second input
// line 79, if you want multiple function calls within a thiccboi, you have to {} each statement

// localStorage can only accept strings
// why not edit a previous entry?
