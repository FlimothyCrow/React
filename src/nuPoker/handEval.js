import _ from "lodash"

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
  var rankedHands = {
    "high card": 0,
    pair: 1,
    "two pair": 2,
    three: 3,
    straight: 4,
    flush: 5,
    "full house": 6,
    four: 7,
    "straight flush": 8,
  }
  var rank0 = rankedHands[eval0.type] // "pair"
  var rank1 = rankedHands[eval1.type] // "two pair"
  return rank0 > rank1
}

// ?.
export function handEval(hand) {
  if (hand && hand.length === 0) {
    return undefined
  }
  let counted = faceCount(hand)
  if (counted[0].amount === 2 && counted[1]?.amount === 2) {
    return { type: "two pair", values: [counted[1].face, counted[0].face] }
  } else if (counted[0].amount === 3 && counted[1]?.amount === 2) {
    return { type: "full house", values: [counted[0].face, counted[1].face] }
  } else if (counted[0].amount === 2) {
    return { type: "pair", values: [counted[0].face] }
  } else if (counted[0].amount === 3) {
    return { type: "three", values: [counted[0].face] }
  } else if (counted[0].amount === 4) {
    return { type: "four", values: [counted[0].face] }
  } else if (isFlush(hand) && isStraight(hand)) {
    return { type: "straight flush", values: isStraight(hand) }
  } else if (isFlush(hand)) {
    return { type: "flush", values: [isFlush(hand)] }
  } else if (isStraight(hand)) {
    return { type: "straight", values: isStraight(hand) }
  } else {
    return { type: "high card", values: [highCard(hand).face, highCard(hand).suit] }
  }
}
