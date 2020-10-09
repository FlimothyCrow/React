import React from "react";
import * as poker from "./nu_poker";
import * as graphic from "./pokerGraphics.js";

export default class HandRanker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHand: [],
      deck: poker.deckMaker(), //.map(cardObject => cardObject)
    };
  }

  addToHand(cardObject) {
    if (this.state.currentHand.length === 5) {
      return;
    }
    this.state.currentHand.push(cardObject);
    this.setState({ currentHand: this.state.currentHand });
  }

  removeFromHand(card) {
    this.state.currentHand.splice(this.state.currentHand.indexOf(card), 1);
    this.setState({ currentHand: this.state.currentHand });
  }

  cardToImage(card, onClickFN) {
    return (
      <span onClick={() => onClickFN(card)}>
        <img className="card" src={"cardGraphics/" + graphic.cardToFileName(card)} alt="2C" />
      </span>
    );
  }

  render() {
    return (
      <div>
        <h3>Click to select cards from deck</h3>
        {["s", "d", "c", "h"].map((suit) => (
          <div>
            <div>{graphic.suitToString(suit)}</div>
            {this.state.deck
              .filter((card) => !this.state.currentHand.includes(card) && card.suit === suit)
              .map((card) => this.cardToImage(card, (card) => this.addToHand(card)))}
          </div>
        ))}
        <div>
          <h3>Current hand</h3>
          {console.log(this.state.currentHand)}
          <div>{this.state.currentHand.length > 0 && poker.handToString(this.state.currentHand)}</div>
          <ul>
            <div>
              {this.state.currentHand.map(
                (card) => this.cardToImage(card, (card) => this.removeFromHand(card)) // call has to include lambda to use this.data
              )}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
// this.state.deck is currenlty array of strings, we need array of cardObjects
// currentHand.length === 5 => handEval(currentHand)
// {handEval.handEval(this.state.currentHand)}
// stop clickable cards at .length === 5
// if .length === 5 THEN return handEval
// return highCard data on line 40 while .length > 0
// two pair string return isn't working
// return 1s
// highlight highest card if no other hand
// undefined hand leaves no empty space and moves the deck upwards, how about an empty placeholder space?
// multiple page > use react-router

// how to publish: npm run-script build
// manual copy files from /build to /docs
// commit > push
