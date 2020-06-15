import React from "react";

class CreateNewFragment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      exercises: [
        {
          description: "",
          reps: undefined,
          sets: undefined,
          weight: undefined,
        },
      ],
    };
  }

  exerciseField(key, type) {
    return (
      <>
        <div>
          <label>{key}</label>
          <input
            id={key}
            type={type}
            value={this.state.exercises[0][key]}
            onChange={(event) => {
              this.state.exercises[0][key] = event.target.value
              this.setState(this.state)}}
          ></input>
        </div>
      </>
    );
  }

  addField(title, type) {
    return (
      <>
        <div>
          <label htmlFor={title}>{title}</label>
          <input
            id={title}
            type={type}
            value={this.state[title]}
            onChange={(event) => this.setState({ [title]: event.target.value })}
          />
        </div>
      </>
    );
  }

  clearFields() {
    this.setState({ date: "", exercise: "", sets: "", reps: "", weight: "" });
  }

  render() {
    return (
      <>
        {this.addField("date", "text")}
        {this.exerciseField("description", "text")}
        {this.exerciseField("reps", "number")}
        {this.exerciseField("sets", "number")}
        {this.exerciseField("weight", "number")}

        <div>
          <button onClick={() => this.props.addToList(this.state)}>Add</button>
          <button onClick={() => this.clearFields()}>Clear</button>
        </div>
      </>
    );
  }
}

export default CreateNewFragment;
