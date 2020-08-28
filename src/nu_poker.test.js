import {deckMaker} from './nu_poker.js'
import deepEqual from 'deepequal'



test('deckMaker', ()=>{
  var deckObject = deckMaker()
  console.log(deckObject)
  expect(deepEqual(deckObject[0], {face:"a", suit:"d"})).toBe(true)
  expect(deepEqual(deckObject[8], {face:"9", suit:"d"})).toBe(true)
  expect(deepEqual(deckObject[13], {face:"a", suit:"c"})).toBe(true)
  expect(deepEqual(deckObject.length, 52)).toBe(true)
});
