import {deckMaker, drawHand, addFive, faceToInt, straightCheck, addSix, faceCount, suitCount} from './nu_poker.js'
import deepEqual from 'deepequal'



test('deckMaker', ()=>{
  var deckObject = deckMaker()
  //console.log(deckObject)
  expect(deepEqual(deckObject[0], {face:"a", suit:"d"})).toBe(true)
  expect(deepEqual(deckObject[8], {face:"9", suit:"d"})).toBe(true)
  expect(deepEqual(deckObject[13], {face:"a", suit:"c"})).toBe(true)
  expect(deepEqual(deckObject.length, 52)).toBe(true)
});

test('drawHand', ()=>{
  var deck = deckMaker()
  var hand = drawHand(deck)
  //console.log(hand)
  expect(hand.length).toBe(5)
  expect(deck.length).toBe(47)
});


test('passByValue', ()=>{
  var y = 10
  var ret = addFive(y)
  expect(ret).toBe(15)
  expect(y).toBe(10)
});

test('passByRef', ()=>{
  var y = [10]
  var z = [11]
  addSix(y, z)
  expect(y).toEqual([10, 6])
  expect(z).toEqual([11, 6])
  
});

test('faceCount0', ()=>{
  var hand = [{face:"a", suit:"d"}, 
              {face:"9", suit:"c"},
              {face:"a", suit:"s"},
              {face:"k", suit:"s"},
              {face:"q", suit:"s"}]
  var evaluated = faceCount(hand)              
  expect(evaluated).toEqual(["2a", "19"]) 
}); // first element in array === amount, second === face value

test('faceCount1', ()=>{
  var hand = [{face:"9", suit:"d"}, 
              {face:"9", suit:"c"},
              {face:"5", suit:"c"},
              {face:"j", suit:"c"},
              {face:"9", suit:"s"}]
  var evaluated = faceCount(hand)              
  expect(evaluated).toEqual(["39", "15"])
}); // three of a kind

test('faceCount2', ()=>{
  var hand = [{face:"9", suit:"d"}, 
              {face:"9", suit:"c"},
              {face:"9", suit:"s"},
              {face:"5", suit:"s"},
              {face:"9", suit:"h"}]
  var evaluated = faceCount(hand)              
  expect(evaluated).toEqual(["49", "15"])
}); // four of a kind

test('faceCount3', ()=>{
  var hand = [{face:"9", suit:"d"}, 
              {face:"9", suit:"c"},
              {face:"9", suit:"s"},
              {face:"5", suit:"s"},
              {face:"5", suit:"h"}]
  var evaluated = faceCount(hand)              
  expect(evaluated).toEqual(["39", "25"]) 
}) // full house
// -----------------------------
test('suitCount0', ()=>{
  var hand = [{face:"a", suit:"d"}, 
              {face:"9", suit:"d"},
              {face:"2", suit:"d"},
              {face:"a", suit:"d"},
              {face:"q", suit:"d"}]
  var evaluated = suitCount(hand)              
  //console.log(evaluated)
  expect(evaluated).toEqual("5d")
})

test('suitCount1', ()=>{
  var hand = [{face:"q", suit:"c"}, 
              {face:"j", suit:"s"},
              {face:"2", suit:"d"},
              {face:"a", suit:"d"},
              {face:"q", suit:"d"}]
  var evaluated = suitCount(hand)              
  //console.log(evaluated)
  expect(evaluated).toEqual("3d")
})
// -----------------------------
test('faceToInt', ()=>{
  var hand = [{face:"a", suit:"c"},
              {face:"k", suit:"c"},
              {face:"5", suit:"c"},
              {face:"j", suit:"c"},
              {face:"t", suit:"c"},            
              {face:"q", suit:"c"}]
  var evaluated = faceToInt(hand)              
  //console.log(evaluated)
  expect(evaluated).toEqual([5, 10, 11, 12, 13, 14])
})
// -----------------------------
test('straightCheck0', ()=>{
  var hand = [{face:"6", suit:"c"}, 
              {face:"4", suit:"s"},
              {face:"2", suit:"d"},
              {face:"3", suit:"d"},
              {face:"5", suit:"d"}]
  var evaluated = straightCheck(hand)              
  //console.log(evaluated)
  expect(evaluated).toEqual("2 through 6")
})

test('straightCheck1', ()=>{
  var hand = [{face:"q", suit:"c"}, 
              {face:"t", suit:"s"},
              {face:"j", suit:"d"},
              {face:"k", suit:"d"},
              {face:"9", suit:"d"}]
  var evaluated = straightCheck(hand)              
  //console.log(evaluated)
  expect(evaluated).toEqual("9 through 13")
})

test('straightCheck2', ()=>{
  var hand = [{face:"a", suit:"c"}, // [4]
              {face:"2", suit:"s"}, // [0]
              {face:"3", suit:"d"}, // [1]
              {face:"4", suit:"d"}, // [2]
              {face:"5", suit:"d"}] // [3]
  var evaluated = straightCheck(hand)              
  console.log(evaluated)
  expect(evaluated).toEqual("1 through 5")
})
// -----------------------------
