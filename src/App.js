import React from "react"
import HandRanker from "./nuPoker/HandRanker"
import "./App.css"
import PlayablePoker from "./playablePoker/playablePoker"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMode: "home",
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

  render() {
    return (
      <div className="App">
        <div>
          <a
            href="play"
            className={this.state.currentMode === "home" && "warningColor"}
            onClick={(e) => {
              e.preventDefault()
              this.setGameMode("home")
            }}
          >
            home
          </a>
          <a
            href="play"
            className={this.state.currentMode === "play" && "warningColor"}
            onClick={(e) => {
              e.preventDefault()
              this.setGameMode("play")
            }}
          >
            play
          </a>
          <a
            href="rank"
            className={this.state.currentMode === "rank" && "warningColor"}
            onClick={(e) => {
              e.preventDefault()
              this.setGameMode("rank")
            }}
          >
            rank
          </a>
        </div>
        <header className="App-header">
          {this.state.currentMode === "home" && <span>welcome to the new page</span>}
          {this.state.currentMode === "rank" && <HandRanker></HandRanker>}
          {this.state.currentMode === "play" && <PlayablePoker></PlayablePoker>}
        </header>
      </div>
    )
  }
}

// notice that the calls on 15 and 16 have different syntax
// <FizzBuzzPrinter /> for line 16
