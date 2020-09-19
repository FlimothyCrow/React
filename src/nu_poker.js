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


export function recursiveOrder(array){
  return _.orderBy(_.map(array, subArray => _.orderBy(subArray)))
}

export function highCard(hand){
  return _.orderBy(hand, ["face", "suit"], ["desc", "desc"])[0]
}

export function cheatBust(hand){
  return _.uniqBy(hand, card => {
   // return JSON.stringify(card) // to avoid deepEqual
    return card.face + card.suit // to avoid deepEqual
  }).length
}

export function newCheatBust(hand){
  var uniqueCards = new Set() // by def, Set can't have duplicates
  hand.forEach(card => {
    uniqueCards.add(card.face + card.suit) // Set.add removes duplicates but won't check for structural equality
  });
  return uniqueCards.size
}

export function nuCheat(hand){
  var uniqueCards = {} // by def, Set can't have duplicates
  hand.forEach(card => {
    var strung = card.face + card.suit // + converts int to string via weak typing
    uniqueCards[strung] = true // Set.add removes duplicates but won't check for structural equality
  }); // [] on 126 because we're define a key with a var, we don't want "strung"
  //console.log(uniqueCards)
  return Object.keys(uniqueCards).length
}

export function compareHands(hands){
  var highed = _.map(hands, highCard)
  var highest = Math.max.apply(null, highed.map(card => card.face));
  if (highed[0].face === highed[1].face){
    return "tie"
  }
  else {
    return hands[_.indexOf(highed.map(card => card.face), highest)]
  }
  
  
}

// return index of 