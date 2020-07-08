import nuFizz from "./fizzBuzz.js"
import spicyFizz from "./fizzBuzz.js"
import deepEqual from 'deepequal'



/*test('nuFizz0', () => {
  var upperLimit = 9
  var x = nuFizz(upperLimit);
  
  console.log(x)
  expect(deepEqual(x, [1, "fizz", "buzz", "fizz", 5, "fizzBuzz",
                      7, "fizz", "buzz"])).toBe(true)
});
*/
// ----------------
test('spicyFizz0', () => {
  var upperLimit = 9
  var x = spicyFizz(upperLimit);
  
  console.log(x)
  expect(deepEqual(x, [1, "fizz", "buzz", "fizz", 5, "fizzBuzz",
                      7, "fizz", "buzz"])).toBe(true)
});