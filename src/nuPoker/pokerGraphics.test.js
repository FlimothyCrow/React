import * as graphic from "./pokerGraphics.js"

test("cardToFileName > 2S", () => {
  let cardObject = { face: 2, suit: "s" }
  let evaluated = graphic.cardToFileName(cardObject)
  expect(evaluated).toEqual("2S.jpg")
})

test("cardToFileName > 10C", () => {
  let cardObject = { face: 10, suit: "c" }
  let evaluated = graphic.cardToFileName(cardObject)
  expect(evaluated).toEqual("10C.jpg")
})

test("cardToFileName > KH", () => {
  let cardObject = { face: 13, suit: "h" }
  let evaluated = graphic.cardToFileName(cardObject)
  expect(evaluated).toEqual("KH.jpg")
})

test("cardToFileName > AD", () => {
  let cardObject = { face: 1, suit: "d" }
  let evaluated = graphic.cardToFileName(cardObject)
  expect(evaluated).toEqual("AD.jpg")
})

test("cardToFileName > QS", () => {
  let cardObject = { face: 12, suit: "s" }
  let evaluated = graphic.cardToFileName(cardObject)
  expect(evaluated).toEqual("QS.jpg")
})

test("cardToFileName > JD", () => {
  let cardObject = { face: 11, suit: "d" }
  let evaluated = graphic.cardToFileName(cardObject)
  expect(evaluated).toEqual("JD.jpg")
})

//------------------------

test("suitToString > s", () => {
  let evaluated = graphic.suitToString("s")
  expect(evaluated).toEqual("Spades")
})

test("suitToString > d", () => {
  let evaluated = graphic.suitToString("d")
  expect(evaluated).toEqual("Diamonds")
})

test("suitToString > c", () => {
  let evaluated = graphic.suitToString("c")
  expect(evaluated).toEqual("Clubs")
})

test("suitToString > h", () => {
  let evaluated = graphic.suitToString("h")
  expect(evaluated).toEqual("Hearts")
})
