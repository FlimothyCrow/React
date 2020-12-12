import _, { map } from "lodash"
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
    if (card.face === 1) {
      return card
    }
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

// ____
// ___x
// __x_
// __xx
// _x__
// _x_x
// _xx_
// _xxx
// x___
// xxxx = 8 + 4 + 2 + 1 = (2^4 - 1) = 15

// _xxx = 4 + 2 + 1 = (2^3 - 1) = 7
// xxxx = 4 + 2 + 1 = (2^3 - 1) = -7

// (2 ^ 31) - 1

export function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
}

export function reverseNum(integer) {
  let reversed = ""
  let asString = integer.toString()
  for (var i = asString.length - 1; i >= 0; i--) {
    reversed += asString[i]
  }
  if (asString[0] === "-") {
    reversed = -1 * parseInt(reversed)
  } else {
    reversed = parseInt(reversed)
  }
  if (reversed <= 2147483647 && reversed >= -2147483648) {
    return reversed
  } else {
    return 0
  }
}

export function restoreString(s, indices) {
  let orderedString = [] // JS allows for dynamic arrays filling with <emptyObject>
  for (var i = 0; i < indices.length; i++) {
    let targetLetter = s[i]
    orderedString[indices[i]] = targetLetter
  }
  return orderedString.reduce((acc, char) => acc + char, "")
}

export function howManySmaller(nums) {
  let arrayOfLessers = []
  for (var num of nums) {
    let accum = 0
    for (var check of nums) {
      if (check < num) {
        accum += 1
      }
    }
    arrayOfLessers.push(accum)
  }
  return arrayOfLessers
}

export function maxProduct(nums) {
  let sortedArray = nums.sort((a, b) => a - b)
  return (sortedArray[sortedArray.length - 1] - 1) * (sortedArray[sortedArray.length - 2] - 1)
}
