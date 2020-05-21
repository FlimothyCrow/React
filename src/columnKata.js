import React from 'react';

class ColumnKata extends React.Component {
  constructor(props){
        super(props);
        this.state = {newItem:"",
                      tableOfItems:[]};
  }
  addToList(input){
    var newTable = this.state.tableOfItems.concat([this.state.newItem])
    this.setState({tableOfItems:newTable, newItem:""})
  }

  render(){
    return(
    <>
    <input type="text" value={this.state.newItem}
      onChange={(event) => this.setState({newItem:event.target.value})}/>

    <button onClick={() => this.addToList(this.state.newItem)}>Add</button>
    <table>
      <tr>
        <th>date</th>
        <th>description</th>
      </tr>
      {this.state.tableOfItems.map((iter, index) => { // iter === 1, index === 0th
        return (<tr key={index}>
                  {iter}
               </tr>)})}
    </table>
    </>
  )}
}
export default ColumnKata
