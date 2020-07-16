import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sum: "", number1: "", number0: "" };
  }

  add(number0, number1) {
    fetch("http://localhost:3000/addTwoInputs/" + number0 + "/" + number1)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        this.setState({ sum: result.test });
      });
  }
  render() {
    return (
      <>
        <div>
          <input
            type={"text"}
            value={this.state.number0}
            onChange={(event) => this.setState({ number0: event.target.value })}
          />
        </div>
        <div>
          <input
            type={"text"}
            value={this.state.number1}
            onChange={(event) => this.setState({ number1: event.target.value })}
          />
        </div>
        <button
          onClick={() => {
            this.add(this.state.number0, this.state.number1);
            this.setState({number0:"", number1:""})
          }}
        >
          Add
        </button>
        <span>hello, world!</span>
        <div>{this.state.sum}</div>
      </>
    );
  }
}

export default HelloWorld;
// componentDidMount (research this)
// flask turns line 10 into python
// python does its logics
// flask returns a json string
// .json converts to object
// timmy "fat stacks" gambini
// conditional for empty string onclick