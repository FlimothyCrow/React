import randomNumber from "./fizzBuzz.js"


test('randomNomber', () => {
  var x = randomNumber(1, 6);
  var i;
  for (i = 0; i < 101; i++) {
    console.log(randomNumber(1, 6))
  }
  //  expect(x).toBe(3);
});