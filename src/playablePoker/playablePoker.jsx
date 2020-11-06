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

  renderDeck() {
    return (
      <div
        className="gfg"
        onClick={() => {
          if (!this.state.isGameStarted) {
            this.setState({
              isGameStarted: true,
              playerOneHand: poker.drawHand(this.state.deck),
              playerTwoHand: poker.drawHand(this.state.deck),
            })
          }
        }}
      >
        <img className="deckCard" src={"cardGraphics/blue_back.jpg"} alt="Logo" />
        <h3 className="imageText">{this.state.deck.length}</h3>
      </div>
    )
  }

  printResults(playerHandResults, computerHandResults) {
    if (this.state.results === 0) {
      return "Player wins with " + playerHandResults
    } else if (this.state.results === 1) {
      return "Computer wins with " + computerHandResults
    }
  }

  newGame() {
    this.setState({
      playerOneHand: [],
      playerTwoHand: [],
      deck: _.shuffle(poker.deckMaker()),
      isGameStarted: false,
      shuffling: 3,
      swapCounter: 3,
      showCards: false,
      results: undefined,
    })
  }

  orderHand(handOfCards) {
    let sorted = handOfCards.sort((a, b) => (a.face > b.face ? 1 : -1))
    let filteredAces = []
    let newArray = []
    for (var card of sorted) {
      if (card.face === 1) {
        filteredAces.push(card)
        //sorted.splice(indexOf(card), 1)
      } else {
        newArray.push(card)
      }
    }
    for (var ace of filteredAces) {
      newArray.push(ace)
    }
    return newArray
  }

  render() {
    /*if (this.state.shuffling > 0) {
      return <span>shuffling {this.state.shuffling}</span>
    }*/
    let playerHandResults = this.state.isGameStarted && poker.handToString(this.state.playerOneHand)
    let computerHandResults = this.state.isGameStarted && poker.handToString(this.state.playerTwoHand)

    return (
      <span className="background">
        <div>
          <div className="text">{!this.state.isGameStarted ? "click the deck to begin" : undefined}</div>
          {this.state.isGameStarted && (
            <div className="text">
              {this.state.swapCounter} swaps remaining
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
              <button
                onClick={() => {
                  this.newGame()
                }}
              >
                New game
              </button>
            </div>
          )}
          {this.renderDeck()}
          {this.state.isGameStarted && (
            <span>
              <div className="text">Computer {this.state.showCards ? "(" + computerHandResults + ")" : undefined}</div>
              <ul className="card-list">
                <div className="hand">
                  {this.orderHand(this.state.playerTwoHand).map((card, idx) => {
                    if (this.state.showCards) {
                      return graphic.cardToImage(card, () => {}, undefined)
                    } else {
                      return <img key={idx} className="card" src={"cardGraphics/blue_back.jpg"} alt="Logo" />
                    }
                  })}
                </div>
              </ul>
              <div className="text">Player ({playerHandResults})</div>
              <ul className="card-list">
                <div className="hand">
                  {this.orderHand(this.state.playerOneHand).map((card, idx) => {
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

              <div className="text">{this.printResults(playerHandResults, computerHandResults)}</div>
            </span>
          )}
        </div>
      </span>
    )
  }
}

// the deck shouldn't be clickable after showUp
