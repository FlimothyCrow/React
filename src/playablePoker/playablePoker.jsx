import React from "react"
import * as poker from "../nuPoker/nu_poker"
import * as graphic from "../nuPoker/pokerGraphics.js"
import _ from "lodash"

export default class PlayablePoker extends React.Component {
  constructor(props) {
    super(props)
    let deck = _.shuffle(poker.deckMaker())
    this.state = {
      playerOneHand: [],
      playerTwoHand: [],
      deck: deck,
      isGameStarted: false,
      shuffling: 3,
      swapCounter: 3,
      showCards: false,
      results: undefined,
    }
    //setInterval(() => this.setState({ shuffling: this.state.shuffling - 1 }), 1000)
  }
  //  <img src={"cardGraphics/background.jpg"} alt="Logo" />

  swapCards(idxToMove) {
    if (this.state.swapCounter > 0 && !this.state.showCards) {
      this.state.deck.push(this.state.playerOneHand[idxToMove])
      this.state.playerOneHand.splice(idxToMove, 1, this.state.deck.shift())
      this.setState({
        deck: this.state.deck,
        playerOneHand: this.state.playerOneHand,
        swapCounter: this.state.swapCounter - 1,
      })
    }
  }

  printResults() {
    if (this.state.results === 0) {
      return "Player One wins"
    } else if (this.state.results === 1) {
      return "Player Two wins"
    }
  }

  render() {
    /*if (this.state.shuffling > 0) {
      return <span>shuffling {this.state.shuffling}</span>
    }*/

    return (
      <span className="background">
        <div>
          <div
            className="gfg"
            onClick={() => {
              this.setState({
                isGameStarted: true,
                playerOneHand: poker.drawHand(this.state.deck),
                playerTwoHand: poker.drawHand(this.state.deck),
              })
            }}
          >
            <img className="deckCard" src={"cardGraphics/blue_back.jpg"} alt="Logo" />
            <h3 className="imageText">{this.state.deck.length}</h3>
          </div>
          {!this.state.isGameStarted ? "click the deck to begin" : undefined}
          {this.state.isGameStarted && (
            <span>
              <div>
                Player Two (Computer){" "}
                <div>{this.state.showCards ? poker.handToString(this.state.playerTwoHand) : undefined}</div>
              </div>
              <ul>
                <div className="hand">
                  {this.state.playerTwoHand.map((card, idx) => {
                    if (this.state.showCards) {
                      return graphic.cardToImage(card, () => {}, undefined)
                    } else {
                      return <img key={idx} className="card" src={"cardGraphics/blue_back.jpg"} alt="Logo" />
                    }
                  })}
                </div>
              </ul>
              <div>
                Player One (Human) {this.state.swapCounter} swaps remaining
                <button
                  onClick={() => {
                    let results = poker.compareHands([this.state.playerOneHand, this.state.playerTwoHand])
                    this.setState({
                      showCards: true,
                      results: results,
                    })
                  }}
                >
                  Show up
                </button>
                <div>{poker.handToString(this.state.playerOneHand)}</div>
              </div>
              <ul>
                <div className="hand">
                  {this.state.playerOneHand.map((card, idx) => {
                    return graphic.cardToImage(
                      card,
                      () => {
                        this.swapCards(idx)
                      },
                      undefined
                    )
                  })}
                </div>
              </ul>
              <div>{this.printResults()}</div>
            </span>
          )}
        </div>
      </span>
    )
  }
}

// practice _.flatMap
// hand also shows statistical value
// ?.
// highCard() ranks aces as 1, not 14
