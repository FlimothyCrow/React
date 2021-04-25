import {
  arithmeticProg,
  complementNum,
  diagonalSum,
  fibSeq,
  hammingDistance,
  heightCheck,
  luckyNums,
  majorityElement,
  maxPower,
  minDelete,
  replaceElements,
  reverseWords,
  sortParity,
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
  expect(evaluated).toEqual([18, 6, 6, 6, 1, -1])
})

test("replaceElements 1", () => {
  var evaluated = replaceElements([400])
  expect(evaluated).toEqual([-1])
})

test("sortParity 0", () => {
  var evaluated = sortParity([4, 2, 5, 7])
  expect(evaluated).toEqual([4, 5, 2, 7])
})

test("sortParity 1", () => {
  var evaluated = sortParity([2, 3])
  expect(evaluated).toEqual([2, 3])
})

test.skip("minDelete 0", () => {
  var evaluated = minDelete(["cba", "daf", "ghi"])
  expect(evaluated).toEqual(1)
})

test.skip("minDelete 1", () => {
  var evaluated = minDelete(["a", "b"])
  expect(evaluated).toEqual(0)
})

test("heightCheck 0", () => {
  var evaluated = heightCheck([1, 1, 4, 2, 1, 3])
  expect(evaluated).toEqual(3)
})

test("heightCheck 1", () => {
  var evaluated = heightCheck([10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7])
  expect(evaluated).toEqual(22)
})

test.skip("arithmeticProg 0", () => {
  var evaluated = arithmeticProg([1, 3, 5, 7])
  expect(evaluated).toEqual(true)
})

test.skip("arithmeticProg 1", () => {
  var evaluated = arithmeticProg([1, 2, 4])
  expect(evaluated).toEqual(false)
})
