import { stringMatching, majorityElement } from "./leetCode.js"

test("stringMatching 0", () => {
  var evaluated = stringMatching(["mass", "as", "hero", "superhero"])
  expect(evaluated).toEqual(["as", "hero"])
})

test("stringMatching 1", () => {
  var evaluated = stringMatching(["blue", "green", "bu"])
  expect(evaluated).toEqual([])
})

test("majorityElement 0", () => {
  var evaluated = majorityElement([3, 2, 3])
  expect(evaluated).toEqual(3)
})

test("majorityElement 1", () => {
  var evaluated = majorityElement([2, 2, 1, 1, 1, 2, 2])
  expect(evaluated).toEqual(2)
})

test.skip("stringMatching 2", () => {
  var evaluated = stringMatching([
    "uexk",
    "aeuexkf",
    "wgxih",
    "yuexk",
    "gxea",
    "yuexkm",
    "ypmfx",
    "jjuexkmb",
    "wqpri",
    "aeuexkfpo",
    "kqtnz",
    "pkqtnza",
    "nrbb",
    "hmypmfx",
    "krqs",
    "jjuexkmbyt",
    "zvru",
    "ypmfxj",
  ])
  expect(evaluated).toEqual(["uexk", "aeuexkf", "yuexk", "ypmfx", "jjuexkmb", "kqtnz"])
})
// "ypmfxj" should not appear in the return
