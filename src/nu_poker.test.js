import {
  deckMaker,
  drawHand,
  recursiveOrder,
  handToString,
  highCard,
  handEval,
  isStraight,
  faceCount,
  isFlush,
  newCheatBust,
  nuCheat,
  cheatBust,
} from "./nu_poker.js";
import deepEqual from "deepequal";

import * as poker from "./nu_poker.js"; // * === all, name to poker

// test.skip
// test.only
test.only("deckMaker", () => {
  var deckObject = deckMaker();
  //console.log(deckObject)
  expect(deepEqual(deckObject[0], { face: 1, suit: "d" })).toBe(true);
  expect(deepEqual(deckObject[8], { face: 9, suit: "d" })).toBe(true);
  expect(deepEqual(deckObject[13], { face: 1, suit: "c" })).toBe(true);
  expect(deepEqual(deckObject.length, 52)).toBe(true);
});

test.only("faceCount0", () => {
  var hand = [
    { face: 1, suit: "d" },
    { face: 9, suit: "c" },
    { face: 1, suit: "s" },
    { face: 13, suit: "s" },
    { face: 12, suit: "s" },
  ];
  var evaluated = faceCount(hand);
  expect(evaluated).toEqual([
    { face: 1, amount: 2 },
    { face: 9, amount: 1 },
    { face: 12, amount: 1 },
    { face: 13, amount: 1 },
  ]);
}); // first element in array === amount, second === face value

// -----------------------------
test.only("isFlush", () => {
  var hand = [
    { face: 1, suit: "d" },
    { face: 9, suit: "d" },
    { face: 2, suit: "d" },
    { face: 13, suit: "d" },
    { face: 12, suit: "d" },
  ];
  var evaluated = isFlush(hand);
  expect(evaluated).toEqual("d");
});

// -----------------------------

// -----------------------------
test.only("isStraight0", () => {
  var hand = [
    { face: 6, suit: "c" },
    { face: 4, suit: "s" },
    { face: 2, suit: "d" },
    { face: 3, suit: "d" },
    { face: 5, suit: "d" },
  ];
  var evaluated = isStraight(hand);
  expect(evaluated).toEqual([6, 2]);
});

test.only("isStraight > ace high", () => {
  var hand = [
    { face: 12, suit: "c" },
    { face: 1, suit: "s" },
    { face: 11, suit: "d" },
    { face: 13, suit: "d" },
    { face: 10, suit: "d" },
  ];
  var evaluated = isStraight(hand);
  expect(evaluated).toEqual([14, 10]);
});

test.only("isStraight > ace low", () => {
  var hand = [
    { face: 1, suit: "c" },
    { face: 2, suit: "s" },
    { face: 3, suit: "d" },
    { face: 4, suit: "d" },
    { face: 5, suit: "d" },
  ];
  var evaluated = isStraight(hand);

  expect(evaluated).toEqual([5, 1]);
});
// -----------------------------

test.only("handEval > two pair", () => {
  var hand = [
    { face: 3, suit: "c" },
    { face: 10, suit: "s" },
    { face: 3, suit: "d" },
    { face: 5, suit: "d" },
    { face: 5, suit: "d" },
  ];
  var evaluated = handEval(hand);

  expect(evaluated).toEqual({ type: "two pair", values: [5, 3] });
});

test.only("handEval > pair", () => {
  var hand = [
    { face: 3, suit: "c" },
    { face: 10, suit: "s" },
    { face: 3, suit: "d" },
    { face: 11, suit: "d" },
    { face: 5, suit: "d" },
  ];
  var evaluated = handEval(hand);

  expect(evaluated).toEqual({ type: "pair", values: [3] });
});

test.only("handEval > three of a kind", () => {
  var hand = [
    { face: 3, suit: "c" },
    { face: 10, suit: "s" },
    { face: 3, suit: "d" },
    { face: 11, suit: "d" },
    { face: 3, suit: "d" },
  ];
  var evaluated = handEval(hand);
  expect(evaluated).toEqual({ type: "three", values: [3] });
});

test.only("handEval > four of ", () => {
  var hand = [
    { face: 10, suit: "c" },
    { face: 10, suit: "s" },
    { face: 10, suit: "d" },
    { face: 10, suit: "d" },
    { face: 3, suit: "d" },
  ];
  var evaluated = handEval(hand);
  expect(evaluated).toEqual({ type: "four", values: [10] });
});

test.only("handEval > full house", () => {
  var hand = [
    { face: 10, suit: "c" },
    { face: 3, suit: "s" },
    { face: 10, suit: "d" },
    { face: 3, suit: "d" },
    { face: 3, suit: "d" },
  ];
  var evaluated = handEval(hand);
  expect(evaluated).toEqual({ type: "full house", values: [3, 10] });
});

test.only("handEval > flush", () => {
  var hand = [
    { face: 10, suit: "c" },
    { face: 5, suit: "c" },
    { face: 1, suit: "c" },
    { face: 13, suit: "c" },
    { face: 3, suit: "c" },
  ];
  var evaluated = handEval(hand);
  expect(evaluated).toEqual({ type: "flush", values: ["c"] });
});

test.only("handEval > straight", () => {
  var hand = [
    { face: 4, suit: "c" },
    { face: 5, suit: "d" },
    { face: 1, suit: "c" },
    { face: 2, suit: "c" },
    { face: 3, suit: "c" },
  ];
  var evaluated = handEval(hand);
  expect(evaluated).toEqual({ type: "straight", values: [5, 1] });
});

test.only("handEval > straight flush", () => {
  var hand = [
    { face: 4, suit: "c" },
    { face: 5, suit: "c" },
    { face: 1, suit: "c" },
    { face: 2, suit: "c" },
    { face: 3, suit: "c" },
  ];
  var evaluated = handEval(hand);
  expect(evaluated).toEqual({ type: "straight flush", values: [5, 1] });
});
// -------------------------------------------

test.only("handToString > pair", () => {
  var hand = [
    { face: 4, suit: "s" },
    { face: 2, suit: "d" },
    { face: 1, suit: "c" },
    { face: 2, suit: "c" },
    { face: 3, suit: "c" },
  ];
  var evaluated = handToString(hand);
  expect(evaluated).toEqual("pair of 2s");
});

test.only("handToString > three", () => {
  var hand = [
    { face: 4, suit: "s" },
    { face: 2, suit: "d" },
    { face: 1, suit: "c" },
    { face: 2, suit: "c" },
    { face: 2, suit: "c" },
  ];
  var evaluated = handToString(hand);
  expect(evaluated).toEqual("three of 2s");
});

test.only("handToString > four", () => {
  var hand = [
    { face: 4, suit: "s" },
    { face: 2, suit: "d" },
    { face: 2, suit: "c" },
    { face: 2, suit: "c" },
    { face: 2, suit: "c" },
  ];
  var evaluated = handToString(hand);
  expect(evaluated).toEqual("four of 2s");
});

test.only("handToString > clubs", () => {
  var hand = [
    { face: 4, suit: "c" },
    { face: 5, suit: "c" },
    { face: 14, suit: "c" },
    { face: 12, suit: "c" },
    { face: 2, suit: "c" },
  ];
  var evaluated = handToString(hand);
  expect(evaluated).toEqual("flush of clubs");
});

test.only("handToString > diamonds", () => {
  var hand = [
    { face: 4, suit: "d" },
    { face: 5, suit: "d" },
    { face: 14, suit: "d" },
    { face: 12, suit: "d" },
    { face: 2, suit: "d" },
  ];
  var evaluated = handToString(hand);
  expect(evaluated).toEqual("flush of diamonds");
});

test.only("handToString > spades", () => {
  var hand = [
    { face: 4, suit: "s" },
    { face: 5, suit: "s" },
    { face: 14, suit: "s" },
    { face: 12, suit: "s" },
    { face: 2, suit: "s" },
  ];
  var evaluated = handToString(hand);
  expect(evaluated).toEqual("flush of spades");
});

test.only("handToString > hearts", () => {
  var hand = [
    { face: 4, suit: "h" },
    { face: 5, suit: "h" },
    { face: 14, suit: "h" },
    { face: 12, suit: "h" },
    { face: 2, suit: "h" },
  ];
  var evaluated = handToString(hand);
  expect(evaluated).toEqual("flush of hearts");
});

test.only("handToString > straight", () => {
  var hand = [
    { face: 2, suit: "s" },
    { face: 5, suit: "d" },
    { face: 4, suit: "h" },
    { face: 6, suit: "h" },
    { face: 3, suit: "h" },
  ];
  var evaluated = handToString(hand);
  expect(evaluated).toEqual("straight 2 through 6");
});

test("handToString > straight flush", () => {
  var hand = [
    { face: 2, suit: "h" },
    { face: 5, suit: "h" },
    { face: 4, suit: "h" },
    { face: 6, suit: "h" },
    { face: 3, suit: "h" },
  ];
  var evaluated = handToString(hand);
  expect(evaluated).toEqual("straight flush 2 through 6 hearts");
});
// -------------------------------------------
test("drawHand", () => {
  var deck = deckMaker();
  var hand = drawHand(deck);
  expect(hand.length).toBe(5);
  expect(deck.length).toBe(47);
});

// -------------------------------------------
test.only("highCard", () => {
  var hand = [
    { face: 2, suit: "s" },
    { face: 13, suit: "h" },
    { face: 4, suit: "d" },
    { face: 10, suit: "d" },
    { face: 3, suit: "c" },
  ];
  var evaluated = highCard(hand);
  expect(evaluated).toEqual({ face: 13, suit: "h" });
});

test.only("highCard > ace", () => {
  var hand = [
    { face: 2, suit: "s" },
    { face: 14, suit: "s" },
    { face: 4, suit: "d" },
    { face: 9, suit: "d" },
    { face: 2, suit: "c" },
  ];
  var evaluated = highCard(hand);
  expect(evaluated).toEqual({ face: 14, suit: "s" });
});

test.only("highCard > highCard", () => {
  var hand = [
    { face: 2, suit: "s" },
    { face: 9, suit: "s" },
    { face: 4, suit: "d" },
    { face: 9, suit: "d" },
    { face: 2, suit: "c" },
  ];
  var evaluated = highCard(hand);
  expect(evaluated).toEqual({ face: 9, suit: "s" });
}); // suits ranked are "s", "h", "d", "c"
// -------------------------------------------
test.only("cheatBust > true", () => {
  var hand = [
    { face: 2, suit: "s" },
    { face: 5, suit: "s" },
    { face: 4, suit: "d" },
    { face: 6, suit: "d" },
    { face: 3, suit: "c" },
  ];
  var evaluated = newCheatBust(hand);
  expect(evaluated).toEqual(5);
});

test.only("cheatBust > false", () => {
  var hand = [
    { face: 9, suit: "s" },
    { face: 9, suit: "s" },
    { face: 4, suit: "d" },
    { face: 8, suit: "d" },
    { face: 2, suit: "c" },
  ];
  var evaluated = poker.cheatBust(hand);
  expect(evaluated).toEqual(4);
});

// -------------------------------------------
test.only("recursiveOrder", () => {
  var nestedArray = [
    ["n", "x", "b"],
    ["a", "z", "d"],
    ["z", "t", "c"],
  ];
  var ordered = recursiveOrder(nestedArray);
  expect(ordered).toEqual([
    ["a", "d", "z"],
    ["b", "n", "x"],
    ["c", "t", "z"],
  ]);
});
// -------------------------------------------
test.only("areSuitsDesc", () => {
  var card0 = { face: 13, suit: "s" }
  var card1 = { face: 13, suit: "d" }

  var compared = poker.areSuitsDesc(card0, card1);
  // suits ranked are "s", "h", "d", "c"
  expect(compared).toEqual(true);
});
// -------------------------------------------
test.only("compareHands > highCard", () => {
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
  ];

  var compared = poker.compareHands(hands);
  expect(compared).toEqual(hands[1]);
});

test.only("compareHands > highCard + suit", () => {
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
  ];

  var compared = poker.compareHands(hands);
  expect(compared).toEqual(hands[1]);
});
