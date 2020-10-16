import React from "react"
import HandRanker from "./nuPoker/HandRanker"
import "./App.css"
import PlayablePoker from "./playablePoker/playablePoker"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMode: "play",
    }
  }

  setGameMode(mode) {
    if (mode === "play") {
      this.setState({ currentMode: "play" })
    } else if (mode === "rank") {
      this.setState({ currentMode: "rank" })
    } else if (mode === "home") {
      this.setState({ currentMode: "home" })
    }
  }

  setPageLink(mode) {
    return (
      <a
        href={mode}
        className={this.state.currentMode === mode ? "warningColor" : undefined}
        onClick={(e) => {
          e.preventDefault()
          this.setGameMode(mode)
        }}
      >
        {mode}
      </a>
    )
  }

  render() {
    return (
      <div className="App">
        <header>
          {this.setPageLink("play")}
          {this.setPageLink("rank")}
        </header>
        <body className="App-header">
          <span className="background">
            {this.state.currentMode === "home" && <span>welcome to the new page</span>}
            {this.state.currentMode === "rank" && <HandRanker></HandRanker>}
            {this.state.currentMode === "play" && <PlayablePoker></PlayablePoker>}
          </span>
        </body>
      </div>
    )
  }
}

// notice that the calls on 15 and 16 have different syntax
// <FizzBuzzPrinter /> for line 16
