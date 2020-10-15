import React from "react"
import * as poker from "../nuPoker/nu_poker"
import * as graphic from "../nuPoker/pokerGraphics.js"
import { handEval } from "../nuPoker/handEval.js"

export default class PlayablePoker extends React.Component {
  constructor(props) {
    super(props)
    let deck = poker.deckMaker()
    this.state = {
      playerOneHand: poker.drawHand(deck),
      playerTwoHand: poker.drawHand(deck),
      deck: deck,
      isGameStarted: false,
      shuffling: 3,
    }
    //setInterval(() => this.setState({ shuffling: this.state.shuffling - 1 }), 1000)
  }
  //  <img src={"cardGraphics/background.jpg"} alt="Logo" />

  render() {
    /*if (this.state.shuffling > 0) {
      return <span>shuffling {this.state.shuffling}</span>
    }*/
    let eval1 = handEval(this.state.playerOneHand)
    let eval2 = handEval(this.state.playerTwoHand)
    return (
      <span className="background">
        <div>
          <div
            className="gfg"
            onClick={() => {
              this.setState({ isGameStarted: true })
            }}
          >
            <img className="deckCard" src={"cardGraphics/blue_back.jpg"} alt="Logo" />
            <h3 class="imageText">{this.state.deck.length}</h3>
          </div>
          {this.state.isGameStarted && (
            <span>
              <div>Player One (Human) {eval1.type + " " + eval1.values}</div>

              <ul>
                <div className="hand">
                  {this.state.playerOneHand.map((card) => {
                    return graphic.cardToImage(card, () => {}, undefined)
                  })}
                </div>
              </ul>
              <div>Player Two (Computer) {eval2.type + " " + eval2.values}</div>
              <ul>
                <div className="hand">
                  {this.state.playerTwoHand.map((card) => {
                    return graphic.cardToImage(card, () => {}, undefined)
                  })}
                </div>
              </ul>
            </span>
          )}
        </div>
      </span>
    )
  }
}

// rebuild drawHand() to shuffle entire deck and pull five cards at random
// player can trade in cards (how many?)
// compareHands
// text out winner
// get all that done before looking at cardGraphics stuff
// practice _.flatMap

// have PC cards render to "back of card" art until this.state.timeToReveal === true
