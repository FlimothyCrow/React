import _ from "lodash";
import { handEval, highCard, playerOneHigher } from "./handEval.js";

export function deckMaker() {
  var faces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  var suits = ["d", "c", "s", "h"];
  return _.flatMap(suits, (suit) => {
    return faces.map((face) => {
      return { face: face, suit: suit };
    });
  });
}

export function drawHand(deck) {
  //return _.pullAt(_.shuffle(deck), _.range(5))
  // to do, secret third spicy option for maintainabilito
  return _.pullAt(
    deck,
    _.range(5).map((x) => _.random(0, deck.length))
  );
}

export function handToString(hand) {
  var evaluated = handEval(hand);
  if (evaluated.type === "pair") {
    return _.toString("pair of " + evaluated.values + "s");
  } else if (evaluated.type === "three") {
    return _.toString("three of " + evaluated.values + "s");
  } else if (evaluated.type === "four") {
    return _.toString("four of " + evaluated.values + "s");
  } else if (evaluated.type === "flush" && evaluated.values[0] === "c") {
    return _.toString("flush of " + "clubs");
  } else if (evaluated.type === "flush" && evaluated.values[0] === "d") {
    return _.toString("flush of " + "diamonds");
  } else if (evaluated.type === "flush" && evaluated.values[0] === "h") {
    return _.toString("flush of " + "hearts");
  } else if (evaluated.type === "flush" && evaluated.values[0] === "s") {
    return _.toString("flush of " + "spades");
  } else if (evaluated.type === "straight") {
    return _.toString(
      "straight " + evaluated.values[1] + " through " + evaluated.values[0]
    );
  } else if (evaluated.type === "straight flush") {
    return _.toString(
      "straight flush " +
        evaluated.values[1] +
        " through " +
        evaluated.values[0]
    );
  }
}

export function isCheating(hand) {
  var uniqueLength = _.uniqBy(hand, (card) => {
    // return JSON.stringify(card) // to avoid deepEqual
    return card.face + card.suit; // to avoid deepEqual
  }).length;
  return uniqueLength === 5 ? false : true
}


export function areSuitsDesc(card0, card1) {
  // implement into sortBy for multiple hands
  var suitRanks = { s: 3, h: 2, d: 1, c: 0 };
  return suitRanks[card0.suit] > suitRanks[card1.suit];
}

export function compareHands(hands) {
  var eval0 = handEval(hands[0]);
  var eval1 = handEval(hands[1]);
  var highed = _.map(hands, highCard);
  var highest = Math.max.apply(
    null,
    highed.map((card) => card.face)
  );
  if (isCheating(hands[0]) === true){
    return "player 1 disqualified"
  }
  else if (isCheating(hands[1]) === true){
    return "player 2 disqualified"
  }
  if (eval0.type === "two pair" && eval1.type === "two pair") {
    if (eval0.values[0] === eval1.values[0]) {
      return eval0.values[1] > eval1.values[1] ? hands[0] : hands[1]
    }
    else {
      return eval0.values[0] > eval1.values[0] ? hands[0] : hands[1];
    }
  } else if (
    (eval0.type === "pair" && eval1.type === "pair") ||
    (eval0.type === "three" && eval1.type === "three") ||
    (eval0.type === "four" && eval1.type === "four")
  ) {
    return eval0.values[0] > eval1.values[0] ? hands[0] : hands[1];
  } else if (highed[0].face === highed[1].face) {
    return areSuitsDesc(highed[0], highed[1]) ? hands[0] : hands[1];
  } else if (eval0.type === "high card" && eval1.type === "high card"){
    return hands[
      _.indexOf(
        highed.map((card) => card.face),
        highest
      )
    ];
  }
  else {
    return playerOneHigher(eval0, eval1) ? hands[0] : hands[1]
  }
}
