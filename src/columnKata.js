import React from 'react';

class ColumnKata extends React.Component {
  constructor(props){
        super(props);
        this.state = {newObject:{date:"", description:"", doneness:false},
                      tableOfItems:[]};
  }
  addToList(input){
    var newTable = this.state.tableOfItems.concat([input])
    this.setState({tableOfItems:newTable, newObject:{date:"", description:""}})
  }

  flipItems(){
    this.setState({newObject:{date:this.state.newObject.description,
                              description:this.state.newObject.date}})
  }

  alphabetizeOrder(a, b) {
      var nameA = a.date.toUpperCase(); // ignore upper and lowercase
      var nameB = b.date.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0; // if a === b
    }

  toDoButton(index){
    this.state.tableOfItems[index].doneness = (! this.state.tableOfItems[index].doneness)
    this.setState({tableOfItems:this.state.tableOfItems})
  }

  render(){
    console.log("state", this.state)
    return(
    <>
    <input type="text" value={this.state.newObject.date}
      onChange={(event) => this.setState({newObject:{date:event.target.value,
                                                    description:this.state.newObject.description}})}/>
    <input type="text" value={this.state.newObject.description}
      onChange={(event) => this.setState({newObject:{description:event.target.value,
                                                    date:this.state.newObject.date}})}/>
    <button onClick={() => this.addToList(this.state.newObject)}>Add</button>
    <button onClick={() => this.flipItems()}>Flip</button>
    <font color="red">
    <table>
      <tbody>
      <tr>
        <th>date</th>
        <th>description</th>
        <th>done????</th>
      </tr>
      {this.state.tableOfItems.sort(this.alphabetizeOrder).map((iter, index) => { // iter === 1, index === 0th
        return (<tr key={index}>
                  <td>{iter.date}</td>
                  <td>{iter.description}</td>
                  <td>{iter.doneness?"done":"to do"}</td>
                  <td><button onClick={() => this.toDoButton(index)}>
                  {iter.doneness?"redo":"done"}
                  </button></td>

               </tr>)})}
      </tbody>
    </table>
    </font>
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
// date alphabetically
