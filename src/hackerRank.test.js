import {
  repeatingString,
  reduceNestedArrays,
  reduceListOne,
  reduceTreeAcc,
  lengthNestedArrays,
} from "./hackerRank.js";

test("repeatingString 0", () => {
  var results = repeatingString("aba", 10, "a");
  expect(results).toEqual(7);
});

test("repeatingString 1", () => {
  var results = repeatingString("ccc", 9, "c");
  expect(results).toEqual(9);
});

test("repeatingString 2", () => {
  var results = repeatingString("qwerty", 19, "q");
  expect(results).toEqual(4);
});
// ---------------------------------------------------

test("reduceNestedArrays 0", () => {
  var nestedArrays = [238, [1, 2, [[3]]], [[10, 15, 20]], [[[100]]]];
  var results = reduceNestedArrays(nestedArrays);
  expect(results).toEqual(389);
});

test("reduceNestedArrays 1", () => {
  let input = [1, [2, [3, [4, null]]]]; // linked list
  let expected = 10;

  var results = reduceListOne(input);
  expect(results).toEqual(expected);
});

// ---------------------------------------------------
test("lengthNestedArrays 0", () => {
  let node = function (n, next) {
    return { val: n, next: next };
  };
  let input = node(1, node(2, node(3, node(56, null)))); // "list" nodes
  let expected = 4; // length of a linked list
  var results = lengthNestedArrays(input);
  expect(results).toEqual(expected);
});
// ---------------------------------------------------
test("reduceNestedArrays 2", () => {
  let node = function (n, l, r) {
    return { val: n, left: l, right: r };
  };
  let input = node(
    5,
    node(2, node(1, null, null), node(3, null, null)),
    node(7, node(6, null, null), node(8, null, null))
  );

  var results = reduceTreeAcc(input);
  expect(results).toEqual(32); // calculate height of tree
});
