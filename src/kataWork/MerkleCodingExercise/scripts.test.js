import { drawField, movementParse, rotationParse } from "./scripts.js"

test("drawField 0", () => {
  var results = drawField({ x: 2, y: 2, facing: "e" })
  console.log(results)
  expect(results).toEqual([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, ">", 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
})

test("drawField 1", () => {
  var results = drawField({ x: 1, y: 3, facing: "s" })
  console.log(results)
  expect(results).toEqual([
    [0, 0, 0, 0, 0],
    [0, 0, 0, "v", 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
})

test("drawField 2", () => {
  var results = drawField({ x: 0, y: 0, facing: "w" })
  console.log(results)
  expect(results).toEqual([
    ["<", 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
})

test("drawField 3", () => {
  var results = drawField({ x: 3, y: 1, facing: "n" })
  console.log(results)
  expect(results).toEqual([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, "^", 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
})

test("rotationParse 0", () => {
  var results = rotationParse({ x: 2, y: 2, facing: "n" }, "r")
  //   console.log(results)
  expect(results).toEqual({ x: 2, y: 2, facing: "e" })
})

test("rotationParse 1", () => {
  var results = rotationParse({ x: 2, y: 2, facing: "w" }, "r")
  //   console.log(results)
  expect(results).toEqual({ x: 2, y: 2, facing: "n" })
})

test("rotationParse 2", () => {
  var results = rotationParse({ x: 2, y: 2, facing: "s" }, "l")
  //   console.log(results)
  expect(results).toEqual({ x: 2, y: 2, facing: "e" })
})

test("rotationParse 3", () => {
  var results = rotationParse({ x: 2, y: 2, facing: "n" }, "l")
  //   console.log(results)
  expect(results).toEqual({ x: 2, y: 2, facing: "w" })
})
// ----------------------------------------------------------------
test("movementParse 0", () => {
  var results = movementParse({ x: 2, y: 2, facing: "n" }, "f")
  // console.log(results)
  expect(results).toEqual({ x: 1, y: 2, facing: "n" })
})

test("movementParse 1", () => {
  var results = movementParse({ x: 2, y: 2, facing: "e" }, "f")
  //   console.log(results)
  expect(results).toEqual({ x: 2, y: 3, facing: "e" })
})

test("movementParse 2", () => {
  var results = movementParse({ x: 2, y: 2, facing: "s" }, "f")
  //   console.log(results)
  expect(results).toEqual({ x: 3, y: 2, facing: "s" })
})

test("movementParse 3", () => {
  var results = movementParse({ x: 2, y: 2, facing: "w" }, "f")
  //   console.log(results)
  expect(results).toEqual({ x: 2, y: 1, facing: "w" })
})

test("movementParse 4", () => {
  var results = movementParse({ x: 2, y: 2, facing: "n" }, "b")
  //   console.log(results)
  expect(results).toEqual({ x: 3, y: 2, facing: "n" })
})

test("movementParse 5", () => {
  var results = movementParse({ x: 2, y: 2, facing: "e" }, "b")
  //   console.log(results)
  expect(results).toEqual({ x: 2, y: 1, facing: "e" })
})

test("movementParse 6", () => {
  var results = movementParse({ x: 2, y: 2, facing: "s" }, "b")
  //   console.log(results)
  expect(results).toEqual({ x: 1, y: 2, facing: "s" })
})

test("movementParse 7", () => {
  var results = movementParse({ x: 2, y: 2, facing: "w" }, "b")
  //   console.log(results)
  expect(results).toEqual({ x: 2, y: 3, facing: "w" })
})

test("movementParse 8", () => {
  var results = movementParse({ x: 0, y: 0, facing: "w" }, "f")
  // console.log(results)
  expect(results).toEqual({ x: 0, y: 0, facing: "w" })
})

test("movementParse 9", () => {
  var results = movementParse({ x: 4, y: 0, facing: "w" }, "f")
  // console.log(results)
  expect(results).toEqual({ x: 4, y: 0, facing: "w" })
})

test("movementParse 10", () => {
  var results = movementParse({ x: 4, y: 4, facing: "s" }, "f")
  // console.log(results)
  expect(results).toEqual({ x: 4, y: 4, facing: "s" })
})
// let field = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//   ]
