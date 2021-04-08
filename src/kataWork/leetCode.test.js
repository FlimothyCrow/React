import {
  complementNum,
  hammingDistance,
  luckyNums,
  majorityElement,
  maxPower,
  replaceElements,
  reverseWords,
  totalMoney,
} from "./leetCode.js"

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
  // console.log(evaluated)
  expect(evaluated).toEqual(37) // total 28 : days left 3
})

test("totalMoney 1", () => {
  var evaluated = totalMoney(4)
  // console.log("test " + evaluated)
  expect(evaluated).toEqual(10)
})

test("totalMoney 2", () => {
  var evaluated = totalMoney(20)
  // console.log("test " + evaluated)
  expect(evaluated).toEqual(96)
})

test("luckyNums 0", () => {
  var evaluated = luckyNums([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
  // console.log(evaluated)
  expect(evaluated).toEqual([15])
})

test("luckyNums 1", () => {
  var evaluated = luckyNums([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ])
  // console.log(evaluated)
  expect(evaluated).toEqual([12])
})

test("luckyNums 2", () => {
  var evaluated = luckyNums([
    [0, 0, 0, 0],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ])
  // console.log(evaluated)
  expect(evaluated).toEqual([12])
})

test.skip("luckyNums 3", () => {
  var evaluated = luckyNums([
    [0, 0, 0, 0],
    [0, 3, 8, 7],
    [0, 16, 17, 12],
  ])
  // console.log(evaluated)
  expect(evaluated).toEqual([12])
})

test("hammingDistance 0", () => {
  var evaluated = hammingDistance(1, 4)
  // console.log("test " + evaluated)
  expect(evaluated).toEqual(2)
})

test("reverseWords 0", () => {
  var evaluated = reverseWords("Let's take LeetCode contest")
  expect(evaluated).toEqual("s'teL ekat edoCteeL tsetnoc")
})

test("reverseWords 1", () => {
  var evaluated = reverseWords("God Ding")
  expect(evaluated).toEqual("doG gniD")
})

test("replaceElements 0", () => {
  var evaluated = replaceElements([17, 18, 5, 4, 6, 1])
  // console.log(evaluated)
  expect(evaluated).toEqual([18, 6, 6, 6, 1, -1])
})

test("replaceElements 1", () => {
  var evaluated = replaceElements([400])
  // console.log(evaluated)
  expect(evaluated).toEqual([-1])
})
