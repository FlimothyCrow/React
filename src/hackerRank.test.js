import {
repeatingString,
sumNestedArrays
} from "./hackerRank.js";

test("repeatingString 0", () => {
    var results = repeatingString("aba", 10, "a")
    expect(results).toEqual(7);
  });

  test("repeatingString 1", () => {
    var results = repeatingString("ccc", 9, "c")
    expect(results).toEqual(9);
  });
    
  test("repeatingString 2", () => {
    var results = repeatingString("qwerty", 19, "q")
    expect(results).toEqual(4);
  });
// ---------------------------------------------------      
  test("sumNestedArrays 0", () => {
    var nestedArrays = [
      [1, 3, 5, 2, 10, 238],
      [55, 9, 3, 2],
      [1, 9, 2, 39, 11]
    ]
    var results = sumNestedArrays(nestedArrays)
    expect(results).toEqual(390);
  });
      
