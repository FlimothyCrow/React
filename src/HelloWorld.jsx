import React from "react";
import { render } from "@testing-library/react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
      fetch("http://localhost:3000/new")
      .then(result => {
          return result.json()
      })
      .then((result) => {
          console.log(result)
      })
  }
  render() {
    return <span>hello, world!</span>;
  }
}

export default HelloWorld;
