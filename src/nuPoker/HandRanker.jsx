import React from "react"
import * as poker from "./nu_poker"
import * as graphic from "./pokerGraphics.js"
import { handEval } from "./handEval.js"
import { PAIR, TWO_PAIR, THREE, FOUR, HIGH_CARD, FLUSH, STRAIGHT, FULL_HOUSE, STRAIGHT_FLUSH } from "./enums"

export default class HandRanker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentHand: [],
      deck: poker.deckMaker(), //.map(cardObject => cardObject)
    }
  }

  addToHand(cardObject) {
    if (this.state.currentHand.length === 5) {
      return
    }
    this.state.currentHand.push(cardObject)
    this.setState({ currentHand: this.state.currentHand })
  }

  removeFromHand(card) {
    this.state.currentHand.splice(this.state.currentHand.indexOf(card), 1)
    this.setState({ currentHand: this.state.currentHand })
  }

  dumpHand() {
    this.setState({ currentHand: [] })
  }

  render() {
    let evaluated = handEval(this.state.currentHand)
    let hightlightCard = undefined
    if (evaluated && evaluated.type === HIGH_CARD) {
      hightlightCard = { face: evaluated.values[0], suit: evaluated.values[1] }
    }
    return (
      <div>
        <h3>Click to select cards from deck</h3>
        {["s", "d", "c", "h"].map((suit) => (
          <div>
            <div>{graphic.suitToString(suit)}</div>
            {this.state.deck
              .filter((card) => card.suit === suit)
              .map((card) => {
                if (!this.state.currentHand.includes(card)) {
                  return graphic.cardToImage(card, () => this.addToHand(card), undefined)
                } else {
                  return <span className="card" />
                }
              })}
          </div>
        ))}
        <div>
          <h3>
            Current hand{" "}
            <button
              onClick={() => {
                this.dumpHand()
              }}
            >
              Return hand
            </button>
          </h3>

          {console.log(this.state.currentHand)}
          <div className="handToString">
            {this.state.currentHand.length > 0 && poker.handToString(this.state.currentHand)}
          </div>
          <ul>
            <div className="hand">
              {this.state.currentHand.map((card) => {
                console.log("rendering card", card)
                return graphic.cardToImage(card, () => this.removeFromHand(card), hightlightCard)
                // cardToImage() call has to include lambda to use this.data
              })}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

// PRACTICE PASSING LAMBDAS INTO FUNCTIONS AS PARAMETERS
// rebuild handToString to take results from handEval, not call it
// highlight highest card if no other hand
// multiple page > use react-router
// add button to remove all cards from hand
// react functions can't be exported, they would operate under the wrong scope
// they have to be passed through lambdas so they operate under relative scope
// inversion of control

// how to publish: npm run-script build
// manual copy files from /build to /docs
// commit > push
