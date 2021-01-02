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

import { concat, indexOf, map, remove, split } from "lodash"

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

export function relativeSort(arr1, arr2) {
  let returnArray = []
  for (var int of arr2) {
    while (arr1.indexOf(int) > -1) {
      returnArray = returnArray.concat(arr1.splice(arr1.indexOf(int), 1))
    }
  }
  return returnArray.concat(arr1)
}

export function threeOdds0(arr) {
  let isOdd = (int) => int % 2 > 0

  for (var i = 0; i < arr.length; i++) {
    if (isOdd(arr[i]) && isOdd(arr[i + 1]) && isOdd(arr[i + 2])) {
      return true
    }
  }
  return false
}

export function threeOdds(arr) {
  let isOdd = (x) => x % 2 > 0
  return arr.reduce((isThreeConsec, int, idx) => {
    return isThreeConsec || (isOdd(int) && isOdd(arr[idx + 1]) && isOdd(arr[idx + 2]))
  }, false)
}

export function trimMean0(arr) {
  let newArr = arr
  let toRemove = arr.length * 0.05
  for (var i = 0; i < toRemove; i++) {
    let max = Math.max(...newArr)
    let min = Math.min(...newArr)
    console.log("new length", newArr.length, max, min)
    newArr.splice(newArr.indexOf(max), 1)
    newArr.splice(newArr.indexOf(min), 1)
  }
  return newArr.reduce((accum, next) => accum + next, 0) / newArr.length
}

export function trimMean(arr) {
  let sortedArray = arr.sort((a, b) => a - b)
  let toRemove = arr.length * 0.05
  for (var i = 0; i < toRemove; i++) {
    sortedArray.pop()
    sortedArray.shift()
  }

  return sortedArray.reduce((accum, next) => accum + next / sortedArray.length, 0)
}

export function goatLatin(S) {
  let arrayOfWords = S.split(" ")
  let vowels = ["a", "e", "i", "o", "u"]
  let vowelStart = (x) => vowels.includes(x[0].toLowerCase())
  let notVowel = (x) => {
    return x.substring(1, x.length) + x[0] + "ma"
  }

  return arrayOfWords
    .reduce((accum, word, idx) => {
      if (vowelStart(word)) {
        return accum + word + "ma" + "a".repeat(idx + 1) + " "
      } else {
        return accum + notVowel(word) + "a".repeat(idx + 1) + " "
      }
    }, "")
    .slice(0, -1)
}

export function singleNumber(nums) {
  let numCount = {}
  nums.map((num) => (numCount[num] ? (numCount[num] += 1) : (numCount[num] = 1)))
  return parseInt(Object.keys(numCount).filter((key) => numCount[key] === 1)[0])
} // maybe rewrite using a single (first, second) comparison filter?

export function isAnagramNaive(s, t) {
  let sortedStr0 = [...s].sort((a, b) => a.localeCompare(b)).join("")
  let sortedStr1 = [...t].sort((a, b) => a.localeCompare(b)).join("")
  return sortedStr0 === sortedStr1 ? true : false
}

export function isAnagram(s, t) {
  let sortedStr0 = [...s].sort().join("")
  let sortedStr1 = [...t].sort().join("")
  return sortedStr0 === sortedStr1 ? true : false
}

export function reverseOnlyLetters(S) {
  let splitArray = S.split("")
  let reversedLetters = splitArray.filter((char) => /[a-zA-Z]/.test(char)).reverse()
  splitArray.map((char, idx) => {
    if (!/[a-zA-Z]/.test(char)) {
      reversedLetters.splice(idx, 0, char)
    }
  })
  return reversedLetters.join("")
}

export function addDigits(num) {
  let splitToStrings = (y) => y.toString().split("")
  let stringReduce = (x) =>
    x.reduce((accum, next) => {
      return accum + parseInt(next)
    }, 0)
  let reduced = stringReduce(splitToStrings(num))
  while (reduced > 9) {
    reduced = stringReduce(splitToStrings(reduced))
  }
  return reduced
}

export function sortNames(arrayOfStrings) {
  let sorted = arrayOfStrings.sort((a, b) => a.localeCompare(b))
  return sorted
}

export function luckyNumber0(arr) {
  let numberCount = {}
  let arrayOfLuckyNums = []
  arr.forEach((int) => {
    numberCount[int] = numberCount[int] ? numberCount[int] + 1 : 1
  })
  Object.keys(numberCount).map((numKey) => {
    if (parseInt(numKey) === numberCount[numKey]) {
      arrayOfLuckyNums.push(parseInt(numKey))
    }
  })
  return arrayOfLuckyNums[0] ? Math.max(...arrayOfLuckyNums) : -1
}

export function luckyNumber(arr) {
  let numberCount = {}
  arr.forEach((int) => {
    numberCount[int] = numberCount[int] ? numberCount[int] + 1 : 1
  })
  let arrayOfLuckyNums = Object.values(numberCount).filter((numKey) => {
    return parseInt(numKey) === numberCount[numKey]
  })
  return arrayOfLuckyNums[0] ? Math.max(...arrayOfLuckyNums) : -1
}

// FOREACH NOT MAP
// list of values to convert to a boolean? try a reduce (many > one)
// set, spread, reduce, splice
// practice refactoring
// arr.sort(...).filter(...).reduce(sum) / arr.length
