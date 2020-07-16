import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sum: "", number1: "", number2: "" };
  }

  add(number1, number2) {
    fetch("http://localhost:3000/addTwoInputs/" + number1 + "/" + number2)
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
            value={this.state.number1}
            onChange={(event) => this.setState({ number1: event.target.value })}
          />
        </div>
        <div>
          <input
            type={"text"}
            value={this.state.number2}
            onChange={(event) => this.setState({ number2: event.target.value })}
          />
        </div>
        <button
          onClick={() => {
            this.add(this.state.number1, this.state.number2);
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
