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

import { concat } from "lodash"

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

export function commonChars(A) {
  // [{b: 1, c: 2}, {c:3 , d: 2}]
  // [{c : 1}]
  let counts = A.map((word) =>
    word.split("").reduce((count, letter) => {
      count[letter] = count[letter] ? count[letter] + 1 : 1
      return count
    }, {})
  )
  let concatArray = []
  if (counts.length === 0) {
    return []
  }

  for (var letterToCheck of Object.keys(counts[0])) {
    let smallestNumber = Math.min(...counts.map((count) => count[letterToCheck]))
    if (smallestNumber > 0) {
      for (var i = smallestNumber; i > 0; i--) {
        concatArray.push(letterToCheck)
      }
    }
  }
  // ["c", "c"]
  return concatArray
}

export function sortedSquares(nums) {
  let squared = nums.map((int) => int * int)
  return squared.sort((a, b) => {
    return a - b
  })
}
// comments

// set, spread, reduce
