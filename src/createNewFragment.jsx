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

        <div>
          <button onClick={() => this.props.addToList(this.state)}>Add</button>
          <button onClick={() => this.clearFields()}>Clear</button>
        </div>
      </>
    );
  }
}

export default CreateNewFragment;
