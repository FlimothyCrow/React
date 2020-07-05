import nuFizz from "./fizzBuzz.js"
import deepEqual from 'deepequal'

test('nuFizz0', () => {
  var upperLimit = 6
  var x = nuFizz(upperLimit);
  
  console.log(x)
  expect(deepEqual(x, [1, "fizz", "buzz", "fizz", 5, "fizzBuzz"])).toBe(true)
});