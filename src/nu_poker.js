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

export function faceCount(hand){
  var grouped = _.map(_.countBy(hand, "face"), (val, key) => ({ face: key, amount: val }))
  var orderedByAmount = _.orderBy(grouped, ["amount"], ["desc"]);    
  return [_.toString(orderedByAmount[0].amount + orderedByAmount[0].face),
          _.toString(orderedByAmount[1].amount + orderedByAmount[1].face)]
  }

export function suitCount(hand){
  var grouped = _.map(_.countBy(hand, "suit"), (val, key) => ({ suit: key, amount: val }))
  var orderedByAmount = _.orderBy(grouped, ["amount"], ["desc"])
  return _.toString(orderedByAmount[0].amount + orderedByAmount[0].suit)
}

export function faceToInt(hand){
  var arrayOfInts = []
  _.flatMap(hand, card => {
    if (parseInt(card.face)) {
      arrayOfInts.push(parseInt(card.face))
    }
    else if (card.face === "t") {
      arrayOfInts.push(10)
    }
    else if (card.face === "j") {
      arrayOfInts.push(11)
    }
    else if (card.face === "q") {
      arrayOfInts.push(12)
    }
    else if (card.face === "k") {
      arrayOfInts.push(13)
    }
    else if (card.face === "a") {
      arrayOfInts.push(14)
    }
  })
  return _.orderBy(arrayOfInts, _.floor, "asc")
}


export function straightCheck(hand){
  var arrayOfInts = faceToInt(hand)
  if (arrayOfInts[4] - arrayOfInts[0] === 4){
    return _.toString(arrayOfInts[0] + " through " + arrayOfInts[4])
  }
  else if (arrayOfInts[3] - arrayOfInts[0] === 3 && arrayOfInts[0] === 2 && arrayOfInts[4] === 14) {
    return "1 through 5"
  }
}
// remove suit info
// concat faces into array
// order array
// ???



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
