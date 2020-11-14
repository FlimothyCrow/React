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
        <div className="App-header">
          <span className="background">
            {this.state.currentMode === "home" && <span>welcome to the new page</span>}
            {this.state.currentMode === "rank" && <HandRanker></HandRanker>}
            {this.state.currentMode === "play" && <PlayablePoker></PlayablePoker>}
          </span>
        </div>
      </div>
    )
  }
}

// hand also shows statistical value
// cardSwap shouldn't replace spent cards into deck (deck counter should update)
// swapWholeHand() works conditionally on having a swap available

// ?.
// practice _.flatMap
// PRACTICE PASSING LAMBDAS INTO FUNCTIONS AS PARAMETERS
// rebuild handToString to take results from handEval, not call it
// highlight highest card if no other hand
// multiple page > use react-router

// react functions can't be exported, they would operate under the wrong scope
// they have to be passed through lambdas so they operate under relative scope
// inversion of control

// cd ..
// ./publish.sh
// commit and push
