import React from "react";
import * as poker from "./nu_poker"
import * as handEval from "./handEval"
import * as graphic from "./pokerGraphics.js"

export default class HandRanker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentHand : [],
        deck : poker.deckMaker() //.map(cardObject => cardObject)
    };
    }

    addToHand(cardObject){
        if (this.state.currentHand.length === 5){
            return
        }
        this.state.currentHand.push(cardObject)
        this.setState({currentHand : this.state.currentHand})
    }

    cardToImage(card){
        return <img className="card" 
        src={"cardGraphics/" + graphic.cardToFileName(card)} alt="2C"/>
    }


    render(){
        return <div>
            <h3>deck</h3>{["s", "d", "c", "h"].map(suit => 
            <div>
                <div>{suit}</div>
            {this.state.deck.filter(card => !this.state.currentHand.includes(card) &&
            card.suit === suit).map(card => 
            <span onClick={()=> this.addToHand(card)}>{this.cardToImage(card)}</span>)}
            </div>)}
            <div>
                <h3>hand</h3>
                {console.log(this.state.currentHand)}
                <div>{this.state.currentHand.length > 0?
                 poker.handToString(this.state.currentHand) : undefined}</div>
                <ul>
                <div>
                {this.state.currentHand.map(this.cardToImage)}
                    </div>
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
// return highCard data on line 40 while .length > 0
// two pair string return isn't working