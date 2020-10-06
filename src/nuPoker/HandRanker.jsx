import React from "react";
import * as poker from "./nu_poker"
import * as handEval from "./handEval"

export default class HandRanker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentHand : [],
        isFullHand : false,
        deck : poker.deckMaker() //.map(cardObject => cardObject)
    };
    }

    addToHand(cardObject){
        let fullness = this.state.isFullHand
        if (fullness === true){
            return
        }
        if (this.state.currentHand.length === 4){
            fullness = true
        }
        this.state.currentHand.push(cardObject)
        this.setState({currentHand : this.state.currentHand, isFullHand : fullness})
    }


    render(){
        return <div>
            <h3>deck</h3>
            <ul>
                {this.state.deck.filter(card => !this.state.currentHand.includes(card)).map(card => 
                <li onClick={()=> this.addToHand(card)}>{JSON.stringify(card)}</li>)}
            </ul>
            <div>
                <h3>hand</h3>
                {console.log(this.state.currentHand)}
                <body>{this.state.isFullHand ?
                 poker.handToString(this.state.currentHand) : "false"}</body>
                <ul>
                    {this.state.currentHand.map(card => <li>{JSON.stringify(card)}</li>)}
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