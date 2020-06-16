import React from "react";

class AddExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        description:"", 
        sets:"",
        reps:"",
        weight:""
    };
  }


  addExercise(key, value) {
    return (
          <td>
          <input
            id={key}
            type={value}
            value={this.state[key]}
            onChange={(event) => this.setState({ [key]: event.target.value })}
          />
          </td>
    );
  }


  render() {
    return (
      <>
      {this.addExercise("description", "curls")}
      {this.addExercise("sets", "5")}
      {this.addExercise("reps", "4")}
      {this.addExercise("weight", "3")}
        <td>
          <button onClick={() => this.props.addExercise(this.state)}>Add</button>
        </td>
      </>
    );
  }
}

export default AddExercise;

// we have multiple input fields
// we want to call ONE function to map through each field and add them to a <tr>
// if we're running a map, the function only has to work on ONE input field
// then we just run it through a list of inputs
// what does addExercise need? It needs description, sets, reps and weight
// what if we don't want to fill one of those out, like with leglifts or squats?
// it has to take from each input field and concatenate that data into an exercise object
// so state data has to be listOfExObjects:[]