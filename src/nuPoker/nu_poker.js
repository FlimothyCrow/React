import _, { indexOf } from "lodash"
import { handEval, highCard, playerOneHigher } from "./handEval.js"
import { suitToString } from "./pokerGraphics"
import { PAIR, TWO_PAIR, THREE, FOUR, HIGH_CARD, FLUSH, STRAIGHT, FULL_HOUSE, STRAIGHT_FLUSH } from "./enums"

export function deckMaker() {
  var faces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  var suits = ["d", "c", "s", "h"]
  return _.flatMap(suits, (suit) => {
    return faces.map((face) => {
      return { face: face, suit: suit }
    })
  })
}

export function drawHand(deck) {
  return deck.splice(0, 5)
}

export function handToString(hand) {
  var evaluated = handEval(hand)
  if (evaluated.type === PAIR) {
    return `pair of ${cardFaceString(evaluated.values[0])}s`
  } else if (evaluated.type === THREE) {
    return `three ${cardFaceString(evaluated.values[0])}s`
  } else if (evaluated.type === TWO_PAIR) {
    return `two pair ${cardFaceString(evaluated.values[0])} and ${cardFaceString(evaluated.values[1])}`
  } else if (evaluated.type === FOUR) {
    return `four ${cardFaceString(evaluated.values[0])}s`
  } else if (evaluated.type === FULL_HOUSE) {
    return `full house ${cardFaceString(evaluated.values[0])} and ${cardFaceString(evaluated.values[1])}`
  } else if (evaluated.type === FLUSH && evaluated.values[0] === "c") {
    return `flush of clubs`
  } else if (evaluated.type === FLUSH && evaluated.values[0] === "d") {
    return `flush of diamonds`
  } else if (evaluated.type === FLUSH && evaluated.values[0] === "h") {
    return `flush of hearts`
  } else if (evaluated.type === FLUSH && evaluated.values[0] === "s") {
    return `flush of spades`
  } else if (evaluated.type === STRAIGHT) {
    return `straight ${cardFaceString(evaluated.values[1])} through ${cardFaceString(evaluated.values[0])}`
  } else if (evaluated.type === STRAIGHT_FLUSH) {
    return `straight flush ${cardFaceString(evaluated.values[1])} through ${cardFaceString(evaluated.values[0])}`
  } else if (evaluated.type === HIGH_CARD) {
    return `high card ${cardFaceString(evaluated.values[0])} of ${suitToString(cardFaceString(evaluated.values[1]))}`
  }
}

export function cardFaceString(int) {
  if (int === 13) {
    return "King"
  } else if (int === 12) {
    return "Queen"
  } else if (int === 11) {
    return "Jack"
  } else if (int === 1) {
    return "Ace"
  } else {
    return int
  }
}

export function orderHand(handOfCards) {
  let sorted = handOfCards.sort((a, b) => (a.face > b.face ? 1 : -1))
  let filteredAces = []
  let newArray = []
  for (var card of sorted) {
    if (card.face === 1) {
      filteredAces.push(card)
    } else {
      newArray.push(card)
    }
  }
  for (var ace of filteredAces) {
    newArray.push(ace)
  }
  return newArray
}

export function isCheating(hand) {
  var uniqueLength = _.uniqBy(hand, (card) => {
    // return JSON.stringify(card) // to avoid deepEqual
    return card.face + card.suit // to avoid deepEqual
  }).length
  return uniqueLength === 5 ? false : true
}

export function areSuitsDesc(card0, card1) {
  // implement into sortBy for multiple hands
  var suitRanks = { s: 3, h: 2, d: 1, c: 0 }
  return suitRanks[card0.suit] > suitRanks[card1.suit]
}

export function compareHands(hands) {
  var eval0 = handEval(hands[0])
  var eval1 = handEval(hands[1])
  var highed = _.map(hands, highCard)
  var highest = Math.max.apply(
    null,
    highed.map((card) => card.face)
  )

  if (eval0.type === TWO_PAIR && eval1.type === TWO_PAIR) {
    if (eval0.values[0] === eval1.values[0]) {
      return eval0.values[1] > eval1.values[1] ? 0 : 1
    } else {
      return eval0.values[0] > eval1.values[0] ? 0 : 1
    }
  } else if (
    (eval0.type === PAIR && eval1.type === PAIR) ||
    (eval0.type === THREE && eval1.type === THREE) ||
    (eval0.type === FOUR && eval1.type === FOUR)
  ) {
    return eval0.values[0] > eval1.values[0] ? 0 : 1
  } else if (highed[0].face === highed[1].face) {
    return areSuitsDesc(highed[0], highed[1]) ? 0 : 1
  } else if (eval0.type === HIGH_CARD && eval1.type === HIGH_CARD) {
    return _.indexOf(
      highed.map((card) => card.face),
      highest
    )
  } else {
    return playerOneHigher(eval0, eval1) ? 0 : 1
  }
}
