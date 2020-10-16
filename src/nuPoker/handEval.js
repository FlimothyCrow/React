import _ from "lodash"
import {
  PAIR,
  TWO_PAIR,
  THREE,
  FOUR,
  HIGH_CARD,
  FLUSH,
  STRAIGHT,
  FULL_HOUSE,
  STRAIGHT_FLUSH,
  getHandRank,
} from "./enums"

export function highCard(hand) {
  for (var card of hand) {
    if (card.face === 1) return card
  }
  return _.orderBy(hand, ["face", "suit"], ["desc", "desc"])[0]
}

export function faceCount(hand) {
  var grouped = _.map(_.countBy(hand, "face"), (val, key) => ({ face: parseInt(key), amount: val }))
  return _.orderBy(grouped, ["amount", "face"], ["desc", "asc"])
}

export function isFlush(hand) {
  var grouped = _.map(_.countBy(hand, "suit"), (val, key) => ({ suit: key, amount: val }))
  var orderedByAmount = _.orderBy(grouped, ["amount"], ["desc"])
  return orderedByAmount[0].amount === 5 ? orderedByAmount[0].suit : undefined
}

export function isStraight(hand) {
  var arrayOfFaces = _.orderBy(_.map(hand, (card) => card.face))
  if (arrayOfFaces[4] - arrayOfFaces[0] === 4) {
    return [arrayOfFaces[4], arrayOfFaces[0]]
  } else if (arrayOfFaces[4] - arrayOfFaces[1] === 3 && arrayOfFaces[0] === 1 && arrayOfFaces[4] === 13) {
    return [14, 10]
  }
}

export function playerOneHigher(eval0, eval1) {
  var rank0 = getHandRank(eval0.type) // PAIR
  var rank1 = getHandRank(eval1.type) // TWO_PAIR
  return rank0 > rank1
}

export function handEval(hand) {
  if (hand && hand.length === 0) {
    return undefined
  }
  let counted = faceCount(hand)
  if (counted[0].amount === 2 && counted[1]?.amount === 2) {
    return { type: TWO_PAIR, values: [counted[1].face, counted[0].face] }
  } else if (counted[0].amount === 3 && counted[1]?.amount === 2) {
    return { type: FULL_HOUSE, values: [counted[0].face, counted[1].face] }
  } else if (counted[0].amount === 2) {
    return { type: PAIR, values: [counted[0].face] }
  } else if (counted[0].amount === 3) {
    return { type: THREE, values: [counted[0].face] }
  } else if (counted[0].amount === 4) {
    return { type: FOUR, values: [counted[0].face] }
  } else if (isFlush(hand) && isStraight(hand)) {
    return { type: STRAIGHT_FLUSH, values: isStraight(hand) }
  } else if (isFlush(hand)) {
    return { type: FLUSH, values: [isFlush(hand)] }
  } else if (isStraight(hand)) {
    return { type: STRAIGHT, values: isStraight(hand) }
  } else {
    return { type: HIGH_CARD, values: [highCard(hand).face, highCard(hand).suit] }
  }
}
