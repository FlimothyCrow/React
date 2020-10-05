import React from "react";
import * as poker from "./nu_poker"

export default class HandRanker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentHand : [],
        deck : poker.deckMaker().map(cardObject => cardObject.face + " " + cardObject.suit)
    };
    }

    addToHand(cardObject){
        this.state.currentHand.push(cardObject)
        this.setState({currentHand : this.state.currentHand})
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
                <ul>
                    {this.state.currentHand.map(card => <li>{card}</li>)} 
                </ul>
            </div>
        </div>
    }

}

// currentHand.length === 5 => handEval(currentHand)
