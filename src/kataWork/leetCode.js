var ohm = require("ohm-js")

export function majorityElement(nums) {
  let numsCoda = nums.reduce((accum, next) => {
    accum[next] = accum[next] ? accum[next] + 1 : 1
    return accum
  }, {})
  return parseInt(
    Object.keys(numsCoda).reduce(function (a, b) {
      return numsCoda[a] > numsCoda[b] ? a : b
    })
  )
}

export function maxPower0(s) {
  let highCount = 1
  s.split("").forEach((element, idx) => {
    let currentCount = 1
    for (var i = idx + 1; i < s.length; i++) {
      if (element === s[i]) {
        currentCount++
        if (currentCount > highCount) {
          highCount = currentCount
        }
      } else {
        break
      }
    }
  })
  return highCount
}

export function maxPower(str) {
  var s = str.match(/([a-zA-Z])\1*/g) || []
  let strCoda = s.map(function (itm) {
    return [itm.charAt(0), itm.length]
  })
  let highCount = 1
  strCoda.forEach((array) => (array[1] > highCount ? (highCount = array[1]) : null))
  return highCount
}

export function complementNum(num) {
  let invertedBinary = ""
  let numBinary = Number(num).toString(2)
  for (var i = 0; i < numBinary.length; i++) {
    numBinary[i] === "1" ? (invertedBinary += "0") : (invertedBinary += "1")
  }
  return parseInt(invertedBinary, 2)
}

export function totalMoney(n) {
  let daysLeft = n
  let weekCounter = 0
  let totalSum = 0
  let calculateWeek = (day) => {
    let accum = day
    for (var i = day; i <= day + 6; i++) {
      accum += i
    }
    return accum - day
  }
  while (daysLeft >= 7) {
    daysLeft -= 7
    weekCounter++
    totalSum += calculateWeek(weekCounter)
    // console.log(daysLeft + " days left")
    // console.log("total sum is " + totalSum)
  }
  for (var i = 1; i <= daysLeft; i++) {
    totalSum += weekCounter + i
  }
  return totalSum
}

export function reverseWords(s) {
  let reverseString = (str) => str.split("").reduce((reversed, character) => character + reversed, "")
  let reversedArray = s.split(" ").map((string) => reverseString(string))
  return reversedArray.join(" ")
}

export function replaceElements(arr) {
  let arrayToReturn = []
  let largest = 0
  for (var i = 0; i < arr.length; i++) {
    for (var k = arr.length; k > i; k--) {
      if (arr[k] > largest) {
        largest = arr[k]
      } else {
        if (!arr[k]) {
          largest = -1
        }
      }
    }
    arrayToReturn.push(largest)
    largest = 0
  }
  return arrayToReturn
}

export function sortParity(nums) {
  let odds = []
  let evens = []
  let zipped = []
  nums.forEach((num) => (num % 2 === 0 ? evens.push(num) : odds.push(num)))
  evens.forEach((num, idx) => {
    zipped.push(num, odds[idx])
  })
  return zipped
}

export function minDelete(strs) {
  let numOfColumns = strs[0].length
  let isOrdered = (str) => {
    return str === str.split("").sort().join("")
  }
  let arrayOfColumns = strs.map((str, idx) => {
    // here's the problem dickhead
    let strToReturn = ""
    for (var i = 0; i < numOfColumns; i++) {
      strToReturn += strs[i][idx]
    }
    return strToReturn
  })
  console.log(arrayOfColumns)
  return arrayOfColumns.reduce((accum, nextColumn) => {
    if (!isOrdered(nextColumn)) {
      accum += 1
    }
    return accum
  }, 0)
}

export function heightCheck(heights) {
  let counter = 0
  let sortedHeights = [...heights].sort((a, b) => a - b)
  sortedHeights.forEach((height, idx) => {
    if (height !== heights[idx]) {
      counter++
    }
  })
  return counter
}

export function arithmeticProg(arr) {
  let step = arr[1] - arr[0] // step === 1
  arr
    .sort((a, b) => a - b)
    .forEach((num, idx) => {
      if (arr[idx + 1]) {
        if (num + step !== arr[idx + 1]) {
          return false
        }
      } else if (num + step !== arr[idx + 1]) {
        return false
      }
    })
  return true
}

// num + step !== arr[idx + 1]
// distance backwards and forwards should be equal
