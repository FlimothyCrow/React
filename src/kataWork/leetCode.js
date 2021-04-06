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

export function totalMoney0(n) {
  let mondays = 1
  let arrayOfDays = new Array(n)
  arrayOfDays[0] = 1
  for (var i = 1; i <= arrayOfDays.length; i++) {
    if (i % 7 === 0) {
      console.log(i + " monday")
      mondays++
      arrayOfDays[i] = mondays
    }
  }
  return arrayOfDays
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
    console.log(daysLeft + " days left")
    console.log("total sum is " + totalSum)
  }
  for (var i = 1; i <= daysLeft; i++) {
    totalSum += weekCounter + i
  }
  return totalSum
}

// start by adding up the mondays
// we have 2 mondays and 8 other days
// loop through mondays and for each of them, add (n * 6) + 21
// if it's a shorter week???

// n = 4 (1 + 2 + 3 + 4) = 10
// n = 7 (1 + 2 +3 + 4 + 5 + 6 +7) 28
// n = 10 (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37
// n = 14 (1 + 2 +3 + 4 + 5 + 6 +7) + ( 2 + 3 + 4 + 5 + 6 +7 + 8) = 35
// n = 21 (1 + 2 +3 + 4 + 5 + 6 +7) + ( 2 + 3 + 4 + 5 + 6 +7 + 8) + (3 + 4 + 5 + 6 + 7 + 8 + 9)

// week 1 : 28 total 28
// week 2:  35 total 63
// week 3:  42 total 105
