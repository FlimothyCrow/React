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

//
