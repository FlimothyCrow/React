import { intToRoman } from "./your-scripts.js"

test("intToRoman 0", () => {
  var results = intToRoman(10)
  expect(results).toEqual("X")
})

test("intToRoman 1", () => {
  var results = intToRoman(3001)
  expect(results).toEqual("MMMI")
})

test("intToRoman 2", () => {
  var results = intToRoman(4)
  expect(results).toEqual("IV")
})

test("intToRoman 3", () => {
  var results = intToRoman(40)
  expect(results).toEqual("XL")
})

test("intToRoman 4", () => {
  var results = intToRoman(80)
  expect(results).toEqual("LXXX")
})

test("intToRoman 5", () => {
  var results = intToRoman(900)
  expect(results).toEqual("CM")
})

test("intToRoman 6", () => {
  var results = intToRoman(6)
  expect(results).toEqual("VI")
})

test("intToRoman 7", () => {
  var results = intToRoman(505)
  expect(results).toEqual("DV")
})

test("intToRoman 8", () => {
  var results = intToRoman(7)
  expect(results).toEqual("VII")
})

test("intToRoman 9", () => {
  var results = intToRoman("string")
  expect(results).toEqual("invalid input")
})

test("intToRoman 10", () => {
  var results = intToRoman(0)
  expect(results).toEqual("invalid input")
})

test("intToRoman 11", () => {
  var results = intToRoman(4000)
  expect(results).toEqual("invalid input")
})

test("intToRoman 12", () => {
  var results = intToRoman(3999)
  expect(results).toEqual("MMMCMXCIX")
})
