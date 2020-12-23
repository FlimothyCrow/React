import {
  restoreString,
  commonChars,
  howManySmaller,
  sortedSquares,
  maxProduct,
  twoSum,
  reverseNum,
  relativeSort,
  heightCheck,
  removePairs,
  threeOdds,
  removePairs1,
  threeOdds0,
  trimMean,
  goatLatin,
  singleNumber,
} from "./leetCode.js"

test("twoSum 9", () => {
  let arrayOfInts = [2, 15, 10, 7]
  var evaluated = twoSum(arrayOfInts, 9)
  expect(evaluated).toEqual([0, 3])
})

test("twoSum 10", () => {
  let arrayOfInts = [5, 2, 5, 7]
  var evaluated = twoSum(arrayOfInts, 10)
  expect(evaluated).toEqual([0, 2])
})

test("reverse 4321", () => {
  var evaluated = reverseNum(1234)
  expect(evaluated).toEqual(4321)
})

test("reverse -159", () => {
  var evaluated = reverseNum(-159)
  expect(evaluated).toEqual(-951)
})

test("reverse positive overflow", () => {
  var evaluated = reverseNum(2147483648)
  expect(evaluated).toEqual(0)
})

test("reverse negative overflow", () => {
  var evaluated = reverseNum(-2147483649)
  expect(evaluated).toEqual(0)
})
//-------------------------------------------------
test("restore string rat", () => {
  var evaluated = restoreString("art", [1, 0, 2])
  expect(evaluated).toEqual("rat")
})

test("restore string abc", () => {
  var evaluated = restoreString("abc", [0, 1, 2])
  expect(evaluated).toEqual("abc")
})

test("restore string leetcode", () => {
  var evaluated = restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])
  expect(evaluated).toEqual("leetcode")
})

test("restore string nihao", () => {
  var evaluated = restoreString("aiohn", [3, 1, 4, 2, 0])
  expect(evaluated).toEqual("nihao")
})

test("restore string arigatou", () => {
  var evaluated = restoreString("aaiougrt", [4, 0, 2, 6, 7, 3, 1, 5])
  expect(evaluated).toEqual("arigatou")
})

test("restore string 1", () => {
  var evaluated = restoreString("x", [0])
  expect(evaluated).toEqual("x")
})
//-------------------------------------------------
test("howManySmaller 0", () => {
  var evaluated = howManySmaller([8, 1, 2, 2, 3])
  expect(evaluated).toEqual([4, 0, 1, 1, 3])
})

test("howManySmaller 1", () => {
  var evaluated = howManySmaller([7, 7, 7, 7])
  expect(evaluated).toEqual([0, 0, 0, 0])
})
//-------------------------------------------------

test("maxProduct 12", () => {
  var evaluated = maxProduct([3, 4, 5, 2])
  expect(evaluated).toEqual(12)
})

test("maxProduct 16", () => {
  var evaluated = maxProduct([1, 5, 4, 5])
  expect(evaluated).toEqual(16)
})
//-------------------------------------------------
test("commonChars 0", () => {
  var evaluated = commonChars(["bella", "label", "roller"])
  expect(evaluated).toEqual(["e", "l", "l"])
})

test("commonChars 1", () => {
  var evaluated = commonChars(["cool", "lock", "cook"])
  expect(evaluated).toEqual(["c", "o"])
})
//-------------------------------------------------

test("sorted squares", () => {
  var evaluated = sortedSquares([-4, -1, 0, 3, 10])
  expect(evaluated).toEqual([0, 1, 9, 16, 100])
})

test("sorted squares 0", () => {
  var evaluated = sortedSquares([-7, -3, 2, 3, 11])
  expect(evaluated).toEqual([4, 9, 9, 49, 121])
})

// comments

test("relativeSort", () => {
  var evaluated = relativeSort([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
  expect(evaluated).toEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19])
})
//-------------------------------------------------
/*
test("heightCheck", () => {
  var evaluated = heightCheck([1, 1, 4, 2, 1, 3])
  expect(evaluated).toEqual(3)
})


test("heightCheck", () => {
  var evaluated = heightCheck([1, 2, 3, 4, 5])
  expect(evaluated).toEqual(0)
})

test("heightCheck", () => {
  var evaluated = heightCheck([5, 1, 2, 3, 4])
  expect(evaluated).toEqual(5)
})
*/

//-------------------------------------------------

test("threeOdds false", () => {
  var evaluated = threeOdds0([2, 6, 4, 3])
  expect(evaluated).toEqual(false)
})

test("threeOdds true", () => {
  var evaluated = threeOdds0([1, 2, 34, 3, 4, 5, 7, 23, 12])
  expect(evaluated).toEqual(true)
})

test("trimMean", () => {
  var evaluated = trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0])
  expect(evaluated).toEqual(4.0)
})
//-------------------------------------------------
test("goatLatin 0", () => {
  var evaluated = goatLatin("I speak Goat Latin")
  expect(evaluated).toEqual("Imaa peaksmaaa oatGmaaaa atinLmaaaaa")
})

test("goatLatin 1", () => {
  var evaluated = goatLatin("The quick brown fox jumped over the lazy dog")
  expect(evaluated).toEqual(
    "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
  )
})

test("goatLatin 2", () => {
  var evaluated = goatLatin("A x gij T Ka Stsl UTK kqdc A")
  expect(evaluated).toEqual(
    "Amaa xmaaa ijgmaaaa Tmaaaaa aKmaaaaaa tslSmaaaaaaa UTKmaaaaaaaa qdckmaaaaaaaaa Amaaaaaaaaaa"
  )
})
//-------------------------------------------------
test("singleNumber 0", () => {
  var evaluated = singleNumber([4, 1, 2, 1, 2])
  expect(evaluated).toEqual(4)
})

test("singleNumber 1", () => {
  var evaluated = singleNumber([2, 2, 1])
  expect(evaluated).toEqual(1)
})
