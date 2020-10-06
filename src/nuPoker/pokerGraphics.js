export function cardToFileName(cardObject) {
  let face = cardObject.face.toString();
  if (face === "13") {
    face = "K";
  } else if (face === "1") {
    face = "A";
  } else if (face === "12") {
    face = "Q";
  } else if (face === "11") {
    face = "J";
  }
  return face + cardObject.suit.toUpperCase() + ".jpg";
}

export function suitToString(char) {
  if (char === "s") {
    return "Spades";
  } else if (char === "d") {
    return "Diamonds";
  } else if (char === "c") {
    return "Clubs";
  } else if (char === "h") {
    return "Hearts";
  }
}
