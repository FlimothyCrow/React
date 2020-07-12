import React from "react";
import { render } from "@testing-library/react";

class HelloWorld extends React.Component {
  constructor(props) {
    // consturctor arranges mise en place
    super(props);
    this.state = [];
    // "this" adds new class / memeber variable
  }
  //this.state.fizzBussList = fizzBuzz(); // NEVER CALL SET.STATE INSIDE RENDER
  render(){
      return <span>hello, world!</span>
  }
}

export default HelloWorld