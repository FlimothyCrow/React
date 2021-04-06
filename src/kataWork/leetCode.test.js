import { complementNum, majorityElement, maxPower, totalMoney } from "./leetCode.js"

test("majorityElement 0", () => {
  var evaluated = majorityElement([3, 2, 3])
  expect(evaluated).toEqual(3)
})

test("majorityElement 1", () => {
  var evaluated = majorityElement([2, 2, 1, 1, 1, 2, 2])
  expect(evaluated).toEqual(2)
})

test("maxPower 0", () => {
  var evaluated = maxPower("leetcode")
  expect(evaluated).toEqual(2)
})

test("maxPower 1", () => {
  var evaluated = maxPower("leeetcoode")
  expect(evaluated).toEqual(3)
})

test("maxPower 2", () => {
  var evaluated = maxPower("abbcccddddeeeeedcba")
  expect(evaluated).toEqual(5)
})

test("maxPower 3", () => {
  var evaluated = maxPower("p")
  expect(evaluated).toEqual(1)
})

test("complementNum 0", () => {
  var evaluated = complementNum(5)
  expect(evaluated).toEqual(2)
})

test("complementNum 1", () => {
  var evaluated = complementNum(1)
  expect(evaluated).toEqual(0)
})

test("complementNum 1", () => {
  var evaluated = complementNum(1)
  expect(evaluated).toEqual(0)
})

test("totalMoney 0", () => {
  var evaluated = totalMoney(10)
  console.log(evaluated)
  expect(evaluated).toEqual(37) // total 28 : days left 3
})

test("totalMoney 1", () => {
  var evaluated = totalMoney(4)
  console.log("test " + evaluated)
  expect(evaluated).toEqual(10)
})

test("totalMoney 2", () => {
  var evaluated = totalMoney(20)
  console.log("test " + evaluated)
  expect(evaluated).toEqual(96)
})
