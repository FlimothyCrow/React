import fizzBuzz from './fizzBuzz.js'

test('fizzs the buzz', () => {
  var x = fizzBuzz();
  expect(x[1]).toBe(1);
  expect(x[3]).toBe("fizz");
  expect(x[4]).toBe("buzz");
  expect(x[12]).toBe("fizz buzz");
});
