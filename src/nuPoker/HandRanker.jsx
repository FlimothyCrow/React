import React from "react"
import * as poker from "./nu_poker"
import * as graphic from "./pokerGraphics.js"
import { handEval } from "./handEval.js"

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

  cardToImage(card, onClickFN, cardToHighlight) {
    let isMatch = cardToHighlight && cardToHighlight.suit === card.suit && cardToHighlight.face === card.face
    return (
      <span onClick={() => onClickFN(card)} className={isMatch && "highlight"}>
        <img className="card" src={"cardGraphics/" + graphic.cardToFileName(card)} alt="2C" />
      </span>
    )
  }

  render() {
    let evaluated = handEval(this.state.currentHand)
    let hightlightCard = undefined
    if (evaluated && evaluated.type === "high card") {
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
                  return this.cardToImage(card, (card) => this.addToHand(card), undefined)
                } else {
                  return <span className="card" />
                }
              })}
          </div>
        ))}
        <div>
          <h3>Current hand</h3>
          {console.log(this.state.currentHand)}
          <div className="handToString">
            {this.state.currentHand.length > 0 && poker.handToString(this.state.currentHand)}
          </div>
          <ul>
            <div className="hand">
              {this.state.currentHand.map(
                (card) => this.cardToImage(card, (card) => this.removeFromHand(card), hightlightCard) // call has to include lambda to use this.data
              )}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

// rebuild handToString to take results from handEval, not call it
// return highCard data on line 40 while .length > 0
// return 1s
// highlight highest card if no other hand
// multiple page > use react-router
// have an empty string if handToString doesn't evaluate
// 4 kings should evaluate to "4 of kings"

// how to publish: npm run-script build
// manual copy files from /build to /docs
// commit > push
