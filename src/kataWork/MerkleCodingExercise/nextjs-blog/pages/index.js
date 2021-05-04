import React from "react"
// import { movementParse, rotationParse, drawField } from "./components"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMode: "play",
    }
  }
  render() {
    return <div>hello world!</div>
  }
}
