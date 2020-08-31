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

export function drawHand(deck){
  //return _.pullAt(_.shuffle(deck), _.range(5)) 
  // to do, secret third spicy option for maintainabilito
  return _.pullAt(deck, _.range(5).map(x => _.random(0, deck.length)))
}

export function handEval(hand){
  return hand.map(card => {
    if (card.face === "a"){
      return "pair"
    }
  })
}

export function addFive(x){
  x = x + 5
  return x
}

// pass by reference does NOT clone object
// pass by value clones
// mutation by reference is NOT GOOD
// maintainability



export function addSix(x, z){
  x.push(6)
  z.push(6)
}
