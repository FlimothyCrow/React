import _ from "lodash";

export function deckMaker() {
  var faces = ["a", "2", "3", "4", "5", "6", "7", "8", "9", "t", "j", "q", "k"];
  var suits = ["d", "c", "s", "h"];
  return _.flatMap(suits, (suit) => {
    return faces.map((face) => {
      return { face: face, suit: suit };
    });
  });
}
