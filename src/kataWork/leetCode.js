import { concat, indexOf, map, remove, split } from "lodash"
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

export function stringMatching(words) {
  let remainingArrayContains = (word) => {
    let shallowWords = words.slice()
    shallowWords.splice(shallowWords.indexOf(word), 1) // this splice isn't removing ypmfxj
    return shallowWords.join("").includes(word)
  }
  return words.filter((word) => remainingArrayContains(word))
}

export function stringMatching1(words) {
  let shallowWords = words.slice()
  shallowWords.splice(17, 1)
  return shallowWords
}
