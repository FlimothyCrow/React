import { highCard, handEval, faceCount, isFlush, isStraight, playerOneHigher, twoSum, reverseNum } from "./handEval.js"
import { PAIR, TWO_PAIR, THREE, FOUR, HIGH_CARD, FLUSH, STRAIGHT, FULL_HOUSE, STRAIGHT_FLUSH } from "./enums"

test("highCard", () => {
  var hand = [
    { face: 2, suit: "s" },
    { face: 13, suit: "h" },
    { face: 4, suit: "d" },
    { face: 10, suit: "d" },
    { face: 3, suit: "c" },
  ]
  var evaluated = highCard(hand)
  expect(evaluated).toEqual({ face: 13, suit: "h" })
})

test("highCard > ace", () => {
  var hand = [
    { face: 2, suit: "s" },
    { face: 1, suit: "s" },
    { face: 4, suit: "d" },
    { face: 9, suit: "d" },
    { face: 2, suit: "c" },
  ]
  var evaluated = highCard(hand)
  expect(evaluated).toEqual({ face: 1, suit: "s" })
})

test("highCard > highCard", () => {
  var hand = [
    { face: 2, suit: "s" },
    { face: 9, suit: "s" },
    { face: 4, suit: "d" },
    { face: 9, suit: "d" },
    { face: 2, suit: "c" },
  ]
  var evaluated = highCard(hand)
  expect(evaluated).toEqual({ face: 9, suit: "s" })
}) // suits ranked are "s", "h", "d", "c"
// -------------------------------------------
test("faceCount0", () => {
  var hand = [
    { face: 1, suit: "d" },
    { face: 9, suit: "c" },
    { face: 1, suit: "s" },
    { face: 13, suit: "s" },
    { face: 12, suit: "s" },
  ]
  var evaluated = faceCount(hand)
  expect(evaluated).toEqual([
    { face: 1, amount: 2 },
    { face: 9, amount: 1 },
    { face: 12, amount: 1 },
    { face: 13, amount: 1 },
  ])
}) // first element in array === amount, second === face value

test("faceCount 2 cards", () => {
  var hand = [
    { face: 4, suit: "d" },
    { face: 4, suit: "c" },
  ]
  var evaluated = faceCount(hand)
  expect(evaluated).toEqual([{ face: 4, amount: 2 }])
})

// -----------------------------
test("isFlush", () => {
  var hand = [
    { face: 1, suit: "d" },
    { face: 9, suit: "d" },
    { face: 2, suit: "d" },
    { face: 13, suit: "d" },
    { face: 12, suit: "d" },
  ]
  var evaluated = isFlush(hand)
  expect(evaluated).toEqual("d")
})

// -----------------------------
test("isStraight0", () => {
  var hand = [
    { face: 6, suit: "c" },
    { face: 4, suit: "s" },
    { face: 2, suit: "d" },
    { face: 3, suit: "d" },
    { face: 5, suit: "d" },
  ]
  var evaluated = isStraight(hand)
  expect(evaluated).toEqual([6, 2])
})

test("isStraight > ace high", () => {
  var hand = [
    { face: 12, suit: "c" },
    { face: 1, suit: "s" },
    { face: 11, suit: "d" },
    { face: 13, suit: "d" },
    { face: 10, suit: "d" },
  ]
  var evaluated = isStraight(hand)
  expect(evaluated).toEqual([14, 10])
})

test("isStraight > ace low", () => {
  var hand = [
    { face: 1, suit: "c" },
    { face: 2, suit: "s" },
    { face: 3, suit: "d" },
    { face: 4, suit: "d" },
    { face: 5, suit: "d" },
  ]
  var evaluated = isStraight(hand)

  expect(evaluated).toEqual([5, 1])
})

test("handEval > high card", () => {
  var hand = [
    { face: 9, suit: "c" },
    { face: 5, suit: "d" },
    { face: 1, suit: "c" },
    { face: 2, suit: "c" },
    { face: 3, suit: "c" },
  ]
  var evaluated = handEval(hand)
  expect(evaluated).toEqual({ type: HIGH_CARD, values: [1, "c"] })
})

test("handEval > two pair", () => {
  var hand = [
    { face: 3, suit: "c" },
    { face: 10, suit: "s" },
    { face: 3, suit: "d" },
    { face: 5, suit: "d" },
    { face: 5, suit: "d" },
  ]
  var evaluated = handEval(hand)

  expect(evaluated).toEqual({ type: TWO_PAIR, values: [5, 3] })
})

test("handEval > pair", () => {
  var hand = [
    { face: 3, suit: "c" },
    { face: 10, suit: "s" },
    { face: 3, suit: "d" },
    { face: 11, suit: "d" },
    { face: 5, suit: "d" },
  ]
  var evaluated = handEval(hand)
  expect(evaluated).toEqual({ type: PAIR, values: [3] })
})

test("handEval > three of a kind", () => {
  var hand = [
    { face: 3, suit: "c" },
    { face: 10, suit: "s" },
    { face: 3, suit: "d" },
    { face: 11, suit: "d" },
    { face: 3, suit: "d" },
  ]
  var evaluated = handEval(hand)
  expect(evaluated).toEqual({ type: THREE, values: [3] })
})

test("handEval > four of ", () => {
  var hand = [
    { face: 10, suit: "c" },
    { face: 10, suit: "s" },
    { face: 10, suit: "d" },
    { face: 10, suit: "d" },
    { face: 3, suit: "d" },
  ]
  var evaluated = handEval(hand)
  expect(evaluated).toEqual({ type: FOUR, values: [10] })
})

test("handEval > full_house", () => {
  var hand = [
    { face: 10, suit: "c" },
    { face: 3, suit: "s" },
    { face: 10, suit: "d" },
    { face: 3, suit: "d" },
    { face: 3, suit: "d" },
  ]
  var evaluated = handEval(hand)
  expect(evaluated).toEqual({ type: FULL_HOUSE, values: [3, 10] })
})

test("handEval > FULLHOUSE", () => {
  var hand = [
    { face: 13, suit: "c" },
    { face: 13, suit: "h" },
    { face: 2, suit: "d" },
    { face: 13, suit: "s" },
    { face: 2, suit: "c" },
  ]
  var evaluated = handEval(hand)

  expect(evaluated).toEqual({ type: FULL_HOUSE, values: [13, 2] })
})

test("handEval > TWOPAIR", () => {
  let hand = [
    { face: 13, suit: "c" },
    { face: 13, suit: "h" },
    { face: 2, suit: "d" },
    { face: 10, suit: "s" },
    { face: 2, suit: "c" },
  ]

  var evaluated = handEval(hand)
  expect(evaluated).toEqual({ type: TWO_PAIR, values: [13, 2] })
})

test("handEval > flush", () => {
  var hand = [
    { face: 10, suit: "c" },
    { face: 5, suit: "c" },
    { face: 1, suit: "c" },
    { face: 13, suit: "c" },
    { face: 3, suit: "c" },
  ]
  var evaluated = handEval(hand)
  expect(evaluated).toEqual({ type: FLUSH, values: ["c"] })
})

test("handEval > straight", () => {
  var hand = [
    { face: 4, suit: "c" },
    { face: 5, suit: "d" },
    { face: 1, suit: "c" },
    { face: 2, suit: "c" },
    { face: 3, suit: "c" },
  ]
  var evaluated = handEval(hand)
  expect(evaluated).toEqual({ type: STRAIGHT, values: [5, 1] })
})

test("handEval > straight flush", () => {
  var hand = [
    { face: 4, suit: "c" },
    { face: 5, suit: "c" },
    { face: 1, suit: "c" },
    { face: 2, suit: "c" },
    { face: 3, suit: "c" },
  ]
  var evaluated = handEval(hand)
  expect(evaluated).toEqual({ type: STRAIGHT_FLUSH, values: [5, 1] })
})

test("handEval > two card", () => {
  var hand = [
    { face: 4, suit: "c" },
    { face: 4, suit: "d" },
  ]
  var evaluated = handEval(hand)
  expect(evaluated).toEqual({ type: PAIR, values: [4] })
})

test("handEval > one card", () => {
  var hand = []
  var evaluated = handEval(hand)
  expect(evaluated).toEqual(undefined)
})

test("handEval > three card", () => {
  var hand = [
    { face: 4, suit: "c" },
    { face: 4, suit: "d" },
    { face: 4, suit: "h" },
  ]
  var evaluated = handEval(hand)
  expect(evaluated).toEqual({ type: THREE, values: [4] })
})
// --------------------------------

test("playerOneHigher > pair vs two pair", () => {
  var eval0 = { type: PAIR, values: [5] }
  var eval1 = { type: TWO_PAIR, values: [3, 2] }
  var evaluated = playerOneHigher(eval0, eval1)
  expect(evaluated).toEqual(false)
})

test("playerOneHigher > straight vs two pair", () => {
  var eval0 = { type: PAIR, values: [5] }
  var eval1 = { type: STRAIGHT, values: [10, 6] }
  var evaluated = playerOneHigher(eval0, eval1)
  expect(evaluated).toEqual(false)
})

test("playerOneHigher > flush vs three", () => {
  var eval0 = { type: THREE, values: [5] }
  var eval1 = { type: FLUSH, values: ["d"] }
  var evaluated = playerOneHigher(eval0, eval1)
  expect(evaluated).toEqual(false)
})

test("playerOneHigher > flush vs three", () => {
  var eval0 = { type: FLUSH, values: ["d"] }
  var eval1 = { type: THREE, values: [5] }
  var evaluated = playerOneHigher(eval0, eval1)
  expect(evaluated).toEqual(true)
})

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
  console.log(evaluated)
  expect(evaluated).toEqual(4321)
})

test("reverse -159", () => {
  var evaluated = reverseNum(-159)
  console.log(evaluated)
  expect(evaluated).toEqual(-951)
})

test("reverse positive overflow", () => {
  var evaluated = reverseNum(2147483648)
  console.log(evaluated)
  expect(evaluated).toEqual(0)
})

test("reverse negative overflow", () => {
  var evaluated = reverseNum(-2147483649)
  console.log(evaluated)
  expect(evaluated).toEqual(0)
})
