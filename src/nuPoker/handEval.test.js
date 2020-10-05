import {
highCard,
handEval,
faceCount,
isFlush,
isStraight,
playerOneHigher
} from "./handEval.js";


test("highCard", () => {
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
  
  test("highCard > ace", () => {
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
  
  test("highCard > highCard", () => {
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
test("faceCount0", () => {
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
  test("isFlush", () => {
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
  test("isStraight0", () => {
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
  
  test("isStraight > ace high", () => {
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
  
  test("isStraight > ace low", () => {
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

test("handEval > high card", () => {
    var hand = [
      { face: 9, suit: "c" },
      { face: 5, suit: "d" },
      { face: 1, suit: "c" },
      { face: 2, suit: "c" },
      { face: 3, suit: "c" },
    ];
    var evaluated = handEval(hand);
    expect(evaluated).toEqual({ type: "high card", values: [9, "c"] });
  });
  
  test("handEval > two pair", () => {
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
  
  test("handEval > pair", () => {
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
  
  test("handEval > three of a kind", () => {
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
  
  test("handEval > four of ", () => {
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
  
  test("handEval > full house", () => {
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
  
  test("handEval > flush", () => {
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
  
  test("handEval > straight", () => {
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
  
  test("handEval > straight flush", () => {
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
// --------------------------------
  
test("playerOneHigher > pair vs two pair", () => {
  var eval0 = { type: "pair", values: [5] }
  var eval1 = { type: "two pair", values: [3, 2] }
    var evaluated = playerOneHigher(eval0, eval1);
    expect(evaluated).toEqual(false);
  });

  test("playerOneHigher > straight vs two pair", () => {
    var eval0 = { type: "pair", values: [5] }
    var eval1 = { type: "straight", values: [10, 6] }
      var evaluated = playerOneHigher(eval0, eval1);
      expect(evaluated).toEqual(false);
    });

  test("playerOneHigher > flush vs three", () => {
    var eval0 = { type: "three", values: [5] }
    var eval1 = { type: "flush", values: ["d"] }
      var evaluated = playerOneHigher(eval0, eval1);
      expect(evaluated).toEqual(false);
    });    