import {deckMaker, drawHand, addFive, addSix, faceCount} from './nu_poker.js'
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
  //expect(evaluated).toEqual([{"amount":2, "face":"a"}])
});

test('faceCount1', ()=>{
  var hand = [{face:"9", suit:"d"}, 
              {face:"9", suit:"c"},
              {face:"5", suit:"c"},
              {face:"j", suit:"c"},
              {face:"9", suit:"s"}]
  var evaluated = faceCount(hand)              
  expect(evaluated).toEqual(["39", "15"])
  //expect(evaluated).toEqual([{"amount":2, "face":"a"}])
});

test('faceCount2', ()=>{
  var hand = [{face:"9", suit:"d"}, 
              {face:"9", suit:"c"},
              {face:"9", suit:"s"},
              {face:"5", suit:"s"},
              {face:"9", suit:"h"}]
  var evaluated = faceCount(hand)              
  expect(evaluated).toEqual(["49", "15"])
  //expect(evaluated).toEqual([{"amount":2, "face":"a"}])
});

test('faceCount3', ()=>{
  var hand = [{face:"9", suit:"d"}, 
              {face:"9", suit:"c"},
              {face:"9", suit:"s"},
              {face:"5", suit:"s"},
              {face:"5", suit:"h"}]
  var evaluated = faceCount(hand)              
  expect(evaluated).toEqual(["39", "25"])
  //expect(evaluated).toEqual([{"amount":2, "face":"a"}])
})