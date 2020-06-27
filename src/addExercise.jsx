import React from "react";

class AddExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        description:"", 
        sets:"",
        reps:"",
        weight:"",
    };
  }


  inputField(key, type) {
    return (
          <td>
          <input
            id={key}
            type={type}
            value={this.state[key]}
            onChange={(event) => this.setState({ [key]: event.target.value })}
          />
          </td>
    );
  }


  render() {
    return (
      <>
      {this.inputField("description", "text")} {this.inputField("sets", "number")} {this.inputField("reps", "number")} {this.inputField("weight", "number")}
        <td bgcolor="white"></td>
        <td>
          <button onClick={() => this.props.addExerciseFn(this.state)}>Add</button>
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
// line 36 the word "props" tells the parameter from the parent component where to go
// line 38 is "propping" from exerciseWebsite's line 98
// line 32 has all four inputs "lined up" because that's the order they print to the right on the page 