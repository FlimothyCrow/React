import React from "react";
import * as poker from "./nu_poker"
import * as handEval from "./handEval"

export default class HandRanker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentHand : [],
        isFullHand : false,
        deck : poker.deckMaker().map(cardObject => cardObject.face + " " + cardObject.suit)
    };
    }

    addToHand(cardObject){
        this.state.currentHand.push(cardObject)
        this.setState({currentHand : this.state.currentHand})
    }

    handSize(){
        if (this.state.currentHand.length === 5){
            this.setState({isFullHand : true})
        }
    }

    render(){
        return <div>
            <h3>deck</h3>
            <ul>
                {this.state.deck.filter(card => !this.state.currentHand.includes(card)).map(card => 
                <li onClick={()=> this.addToHand(card)}>{card}</li>)}
            </ul>
            <div>
                <h3>hand</h3>
                {console.log(this.state.deck)}
                <button onClick={() => this.handSize()}>Update hand size</button>
                <body>{this.state.isFullHand ? 
                    "true" : "false"}</body>
                <ul>
                    {this.state.currentHand.map(card => <li>{card}</li>)}
                </ul>
            </div>
        </div>
    }
}

// this.state.deck is currenlty array of strings, we need array of cardObjects
// currentHand.length === 5 => handEval(currentHand)
// {handEval.handEval(this.state.currentHand)}
// stop clickable cards at .length === 5
// if .length === 5 THEN return handEval