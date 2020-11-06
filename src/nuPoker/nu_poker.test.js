import {} from "./nu_poker.js"
import deepEqual from "deepequal"
import * as poker from "./nu_poker.js" // * === all, name to poker
import { handEval } from "./handEval.js"

// test.skip
// test.only
test("deckMaker", () => {
  var deckObject = poker.deckMaker()
  expect(deepEqual(deckObject[0], { face: 1, suit: "d" })).toBe(true)
  expect(deepEqual(deckObject[8], { face: 9, suit: "d" })).toBe(true)
  expect(deepEqual(deckObject[13], { face: 1, suit: "c" })).toBe(true)
  expect(deepEqual(deckObject.length, 52)).toBe(true)
})

// -----------------------------
test("drawHand", () => {
  for (var x = 0; x < 200; x++) {
    var deck = poker.deckMaker()
    var hand = poker.drawHand(deck)
    expect(hand.length).toBe(5)
    expect(deck.length).toBe(47)
  }
})
// -------------------------------------------
test("cardFaceString", () => {
  let strung = [13, 12, 11, 1, 2].map(poker.cardFaceString)
  expect(strung).toEqual(["King", "Queen", "Jack", "Ace", 2])
})
// -------------------------------------------
test("handToString > pair", () => {
  var hand = [
    { face: 4, suit: "s" },
    { face: 2, suit: "d" },
    { face: 1, suit: "c" },
    { face: 2, suit: "c" },
    { face: 3, suit: "c" },
  ]
  var evaluated = poker.handToString(hand)
  expect(evaluated).toEqual("pair of 2s")
})

test("handToString > two pair", () => {
  var hand = [
    { face: 4, suit: "s" },
    { face: 4, suit: "d" },
    { face: 2, suit: "c" },
    { face: 2, suit: "s" },
    { face: 3, suit: "c" },
  ]
  var evaluated = poker.handToString(hand)
  expect(evaluated).toEqual("two pair 4 and 2")
})

test("handToString > three", () => {
  var hand = [
    { face: 4, suit: "s" },
    { face: 2, suit: "d" },
    { face: 1, suit: "c" },
    { face: 2, suit: "c" },
    { face: 2, suit: "c" },
  ]
  var evaluated = poker.handToString(hand)
  expect(evaluated).toEqual("three 2s")
})

test("handToString > four", () => {
  var hand = [
    { face: 4, suit: "s" },
    { face: 2, suit: "d" },
    { face: 2, suit: "h" },
    { face: 2, suit: "s" },
    { face: 2, suit: "c" },
  ]
  var evaluated = poker.handToString(hand)
  expect(evaluated).toEqual("four 2s")
})

test("handToString > queen", () => {
  var hand = [
    { face: 12, suit: "s" },
    { face: 12, suit: "d" },
    { face: 12, suit: "h" },
    { face: 12, suit: "s" },
    { face: 2, suit: "c" },
  ]
  var evaluated = poker.handToString(hand)
  expect(evaluated).toEqual("four Queens")
})

test("handToString > clubs", () => {
  var hand = [
    { face: 4, suit: "c" },
    { face: 5, suit: "c" },
    { face: 1, suit: "c" },
    { face: 12, suit: "c" },
    { face: 2, suit: "c" },
  ]
  var evaluated = poker.handToString(hand)
  expect(evaluated).toEqual("flush of clubs")
})

test("handToString > diamonds", () => {
  var hand = [
    { face: 4, suit: "d" },
    { face: 5, suit: "d" },
    { face: 1, suit: "d" },
    { face: 12, suit: "d" },
    { face: 2, suit: "d" },
  ]
  var evaluated = poker.handToString(hand)
  expect(evaluated).toEqual("flush of diamonds")
})

test("handToString > spades", () => {
  var hand = [
    { face: 4, suit: "s" },
    { face: 5, suit: "s" },
    { face: 1, suit: "s" },
    { face: 12, suit: "s" },
    { face: 2, suit: "s" },
  ]
  var evaluated = poker.handToString(hand)
  expect(evaluated).toEqual("flush of spades")
})

test("handToString > hearts", () => {
  var hand = [
    { face: 4, suit: "h" },
    { face: 5, suit: "h" },
    { face: 1, suit: "h" },
    { face: 12, suit: "h" },
    { face: 2, suit: "h" },
  ]
  var evaluated = poker.handToString(hand)
  expect(evaluated).toEqual("flush of hearts")
})

test("handToString > straight", () => {
  var hand = [
    { face: 2, suit: "s" },
    { face: 5, suit: "d" },
    { face: 4, suit: "h" },
    { face: 6, suit: "h" },
    { face: 3, suit: "h" },
  ]
  var evaluated = poker.handToString(hand)
  expect(evaluated).toEqual("straight 2 through 6")
})

test("handToString > straight flush", () => {
  var hand = [
    { face: 2, suit: "h" },
    { face: 5, suit: "h" },
    { face: 4, suit: "h" },
    { face: 6, suit: "h" },
    { face: 3, suit: "h" },
  ]
  var evaluated = poker.handToString(hand)
  expect(evaluated).toEqual("straight flush 2 through 6")
})

test("handToString > full house", () => {
  var hand = [
    { face: 2, suit: "h" },
    { face: 13, suit: "s" },
    { face: 13, suit: "c" },
    { face: 2, suit: "c" },
    { face: 13, suit: "h" },
  ]
  var evaluated = poker.handToString(hand)
  expect(evaluated).toEqual("full house King and 2")
})

test("handToString > high card", () => {
  var hand = [
    { face: 2, suit: "h" },
    { face: 3, suit: "s" },
    { face: 10, suit: "c" },
    { face: 5, suit: "c" },
    { face: 13, suit: "h" },
  ]
  var evaluated = poker.handToString(hand)
  expect(evaluated).toEqual("high card King of Hearts")
})

// -------------------------------------------
test("isCheating > false", () => {
  var hand = [
    { face: 2, suit: "s" },
    { face: 5, suit: "s" },
    { face: 4, suit: "d" },
    { face: 6, suit: "d" },
    { face: 3, suit: "c" },
  ]
  var evaluated = poker.isCheating(hand)
  expect(evaluated).toEqual(false)
})

test("isCheating > true", () => {
  var hand = [
    { face: 9, suit: "s" },
    { face: 9, suit: "s" },
    { face: 4, suit: "d" },
    { face: 8, suit: "d" },
    { face: 2, suit: "c" },
  ]
  var evaluated = poker.isCheating(hand)
  expect(evaluated).toEqual(true)
})

test("isCheating > true", () => {
  var hand = [
    { face: 13, suit: "c" },
    { face: 13, suit: "c" },
    { face: 2, suit: "d" },
    { face: 13, suit: "s" },
    { face: 2, suit: "c" },
  ]
  var evaluated = poker.isCheating(hand)
  expect(evaluated).toEqual(true)
})

// -------------------------------------------
test("areSuitsDesc", () => {
  var card0 = { face: 13, suit: "s" }
  var card1 = { face: 13, suit: "d" }

  var compared = poker.areSuitsDesc(card0, card1)
  // suits ranked are "s", "h", "d", "c"
  expect(compared).toEqual(true)
})
// -------------------------------------------
test("compareHands > highCard", () => {
  var hands = [
    [
      { face: 10, suit: "s" },
      { face: 9, suit: "h" },
      { face: 4, suit: "d" },
      { face: 8, suit: "d" },
      { face: 2, suit: "c" },
    ],
    [
      { face: 13, suit: "s" },
      { face: 9, suit: "s" },
      { face: 4, suit: "d" },
      { face: 8, suit: "d" },
      { face: 2, suit: "c" },
    ],
  ]

  var compared = poker.compareHands(hands)
  expect(compared).toEqual(1)
})

test("compareHands > highCard + suit", () => {
  var hands = [
    [
      { face: 13, suit: "c" },
      { face: 9, suit: "h" },
      { face: 4, suit: "d" },
      { face: 8, suit: "d" },
      { face: 2, suit: "c" },
    ],
    [
      { face: 13, suit: "s" },
      { face: 9, suit: "s" },
      { face: 4, suit: "d" },
      { face: 8, suit: "d" },
      { face: 2, suit: "c" },
    ],
  ]

  var compared = poker.compareHands(hands)
  expect(compared).toEqual(1)
})

test("compareHands > pairs", () => {
  var hands = [
    [
      { face: 13, suit: "c" },
      { face: 13, suit: "h" },
      { face: 4, suit: "d" },
      { face: 8, suit: "d" },
      { face: 2, suit: "c" },
    ],
    [
      { face: 13, suit: "s" },
      { face: 9, suit: "s" },
      { face: 8, suit: "d" },
      { face: 8, suit: "s" },
      { face: 2, suit: "c" },
    ],
  ]

  var compared = poker.compareHands(hands)
  expect(compared).toEqual(0)
})

test("compareHands > two pair matching", () => {
  var hands = [
    [
      { face: 13, suit: "c" },
      { face: 13, suit: "h" },
      { face: 4, suit: "d" },
      { face: 4, suit: "s" },
      { face: 2, suit: "c" },
    ],
    [
      { face: 13, suit: "s" },
      { face: 13, suit: "c" },
      { face: 8, suit: "d" },
      { face: 8, suit: "s" },
      { face: 2, suit: "c" },
    ],
  ]

  var compared = poker.compareHands(hands)
  expect(compared).toEqual(1)
})

test("compareHands > two pair unmatched", () => {
  var hands = [
    [
      { face: 13, suit: "c" },
      { face: 13, suit: "h" },
      { face: 2, suit: "d" },
      { face: 5, suit: "s" },
      { face: 2, suit: "c" },
    ],
    [
      { face: 8, suit: "s" },
      { face: 8, suit: "c" },
      { face: 3, suit: "d" },
      { face: 3, suit: "s" },
      { face: 2, suit: "c" },
    ],
  ]

  var compared = poker.compareHands(hands)
  expect(compared).toEqual(0)
})

test("compareHands > three", () => {
  var hands = [
    [
      { face: 13, suit: "c" },
      { face: 13, suit: "h" },
      { face: 13, suit: "d" },
      { face: 4, suit: "s" },
      { face: 2, suit: "c" },
    ],
    [
      { face: 13, suit: "s" },
      { face: 8, suit: "s" },
      { face: 8, suit: "d" },
      { face: 8, suit: "c" },
      { face: 2, suit: "c" },
    ],
  ]

  var compared = poker.compareHands(hands)
  expect(compared).toEqual(0)
})

test("compareHands > four", () => {
  var hands = [
    [
      { face: 13, suit: "c" },
      { face: 13, suit: "h" },
      { face: 13, suit: "d" },
      { face: 13, suit: "s" },
      { face: 2, suit: "c" },
    ],
    [
      { face: 8, suit: "s" },
      { face: 8, suit: "c" },
      { face: 8, suit: "d" },
      { face: 8, suit: "h" },
      { face: 2, suit: "c" },
    ],
  ]

  var compared = poker.compareHands(hands)
  expect(compared).toEqual(0)
})

test("compareHands > pair vs two pair", () => {
  var hands = [
    [
      { face: 13, suit: "c" },
      { face: 13, suit: "h" },
      { face: 2, suit: "d" },
      { face: 10, suit: "s" },
      { face: 2, suit: "c" },
    ],
    [
      { face: 3, suit: "s" },
      { face: 5, suit: "s" },
      { face: 8, suit: "d" },
      { face: 8, suit: "s" },
      { face: 2, suit: "c" },
    ],
  ]

  var compared = poker.compareHands(hands)
  expect(compared).toEqual(0)
})

test("compareHands > pair vs three", () => {
  var hands = [
    [
      { face: 7, suit: "c" },
      { face: 7, suit: "h" },
      { face: 2, suit: "d" },
      { face: 7, suit: "s" },
      { face: 5, suit: "c" },
    ],
    [
      { face: 3, suit: "s" },
      { face: 5, suit: "s" },
      { face: 1, suit: "d" },
      { face: 1, suit: "s" },
      { face: 2, suit: "c" },
    ],
  ]

  var compared = poker.compareHands(hands)
  expect(compared).toEqual(0)
})

test("compareHands > full house vs straight", () => {
  var hands = [
    [
      { face: 13, suit: "c" },
      { face: 13, suit: "h" },
      { face: 2, suit: "d" },
      { face: 13, suit: "s" },
      { face: 2, suit: "c" },
    ],
    [
      { face: 3, suit: "s" },
      { face: 5, suit: "s" },
      { face: 4, suit: "d" },
      { face: 6, suit: "s" },
      { face: 2, suit: "c" },
    ],
  ]

  var compared = poker.compareHands(hands)
  expect(compared).toEqual(0)
})
// ------------------------------------------------------
test("orderHand", () => {
  var hand = [
    { face: 2, suit: "s" },
    { face: 5, suit: "s" },
    { face: 4, suit: "s" },
  ]
  var evaluated = poker.orderHand(hand)
  expect(evaluated).toEqual([
    { face: 2, suit: "s" },
    { face: 4, suit: "s" },
    { face: 5, suit: "s" },
  ])
})

test("orderHand ace", () => {
  var hand = [
    { face: 1, suit: "s" },
    { face: 5, suit: "s" },
    { face: 4, suit: "s" },
    { face: 1, suit: "s" },
  ]
  var evaluated = poker.orderHand(hand)
  console.log(evaluated)
  expect(evaluated).toEqual([
    { face: 4, suit: "s" },
    { face: 5, suit: "s" },
    { face: 1, suit: "s" },
    { face: 1, suit: "s" },
  ])
})
