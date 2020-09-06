import _ from "lodash";

export function deckMaker() {
  var faces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
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
  var grouped = _.map(_.countBy(hand, "face"), (val, key) => ({ face: parseInt(key), amount: val }))
  return _.orderBy(grouped, ["amount", "face"], ["desc", "asc"]);    
}

export function isFlush(hand){
  var grouped = _.map(_.countBy(hand, "suit"), (val, key) => ({ suit: key, amount: val }))
  var orderedByAmount = _.orderBy(grouped, ["amount"], ["desc"])
  return orderedByAmount[0].amount === 5 ? orderedByAmount[0].suit : undefined
}

export function isStraight(hand){
  var arrayOfFaces = _.orderBy(_.map(hand, card => card.face))
  if (arrayOfFaces[4] - arrayOfFaces[0] === 4){
    return [arrayOfFaces[4], arrayOfFaces[0]]
  } 
  else if (arrayOfFaces[4] - arrayOfFaces[1] === 3 && arrayOfFaces[0] === 1 && arrayOfFaces[4] === 13) {
    return [14, 10]
  }
}

export function handEval(hand){
  var counted = faceCount(hand)
  if (counted[0].amount === 2 && counted[1].amount === 2){
    return {type : "two pair", values: [counted[1].face, counted[0].face]}
  }
  else if (counted[0].amount === 3 && counted[1].amount === 2){
    return {type : "full house", values: [counted[0].face, counted[1].face]}
  }
  else if (counted[0].amount === 2){
    return {type : "pair", values: [counted[0].face]}
  }
  else if (counted[0].amount === 3){
    return {type : "three", values: [counted[0].face]}
  }
  else if (counted[0].amount === 4){
    return {type : "four", values: [counted[0].face]}
  }
  else if (isFlush(hand) && isStraight(hand)){
    return {type:"straight flush", values: isStraight(hand)}
  }
  else if (isFlush(hand)){
    return {type:"flush", values: [isFlush(hand)]}
  }
  else if (isStraight(hand)){
    return {type:"straight", values: isStraight(hand)}
  }
}

export function handToString(hand){
  var evaluated = handEval(hand)
  if (evaluated.type === "pair"){
    return _.toString("pair of " + evaluated.values + "s")
  }
  else if (evaluated.type === "three"){
    return _.toString("three of " + evaluated.values + "s")
  }
  else if (evaluated.type === "four"){
    return _.toString("four of " + evaluated.values + "s")
  }
  else if (evaluated.type === "flush" && evaluated.values[0] === "c"){
    return _.toString("flush of " + "clubs")
  }
  else if (evaluated.type === "flush" && evaluated.values[0] === "d"){
    return _.toString("flush of " + "diamonds")
  }
  else if (evaluated.type === "flush" && evaluated.values[0] === "h"){
    return _.toString("flush of " + "hearts")
  }
  else if (evaluated.type === "flush" && evaluated.values[0] === "s"){
    return _.toString("flush of " + "spades")
  }
  else if (evaluated.type === "straight"){
    return _.toString("straight " + evaluated.values[1] + " through " + evaluated.values[0])
  }
  else if (evaluated.type === "straight flush"){
    return _.toString("straight flush " + evaluated.values[1] + " through " + evaluated.values[0])
  }
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

export function faceToInt(hand){
  var arrayOfFaces = []
  _.flatMap(hand, card => {
    if (parseInt(card.face)) {
      arrayOfFaces.push(parseInt(card.face))
    }
    else if (card.face === "t") {
      arrayOfFaces.push(10)
    }
    else if (card.face === "j") {
      arrayOfFaces.push(11)
    }
    else if (card.face === "q") {
      arrayOfFaces.push(12)
    }
    else if (card.face === "k") {
      arrayOfFaces.push(13)
    }
    else if (card.face === "a") {
      arrayOfFaces.push(14)
    }
  })
  return _.orderBy(arrayOfFaces, _.floor, "asc")
}