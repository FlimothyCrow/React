import {reduceFun, longReduce, doubleSort} from './reduce.js' // ./ means "this directory"


test('reduceFun0', () => {
  var listOfInts = [1, 2]
  var seed = 0
  var x = reduceFun(listOfInts, (a, b) => a + b, seed);
  expect(x).toBe(3);
});
// ------------------
test('reduceFun1', () => {
  var listOfThings = ["ferz", "bolg"]
  var seed = ""
  var x = reduceFun(listOfThings, (a, b) => a + b, seed);
  expect(x).toBe("ferzbolg");
});
// ------------------
test('reduceFun2', () => {
  var listOfThings = ["ferzz", "bolg"]
  var seed = 0
  var x = reduceFun(listOfThings, (acc, next) => {return acc + next.length}, seed);
  expect(x).toBe(9); // .length
}); // accumulate + next
// ------------------
test('reduceFun2', () => { // lambda with no parameters to stop it from running until test executes
  var listOfThings = ["ferzz", "bolg", "bolg", "bolg"] // JS is lambda af
  var seed = {}
  var x = reduceFun(listOfThings, (acc, next) => { // arguments are part of lambda parameter
        if (acc[next]) {
          acc[next] += 1;
        } else {
          acc[next] = 1;
        }
        return acc ; // returning FROM LAMBDA won't break function
      },
      seed);

  expect(x).toStrictEqual({ferzz: 1, bolg:3});
});
// ------------------
test('reduceFun3', () => {
  var listOfThings = ["bolg", "soda"]
  var seed = []
  var x = reduceFun(listOfThings, (acc, next) => {
        acc.push(next, next) // we don't have to define the shape here
        return acc // just push to it as defined on line 42
      },
      seed);

  expect(x).toStrictEqual(["bolg", "bolg", "soda", "soda"]);
});

// list of Ints, function, seed

test('longReduce0', () => {
  var listOfInts = [1, 2]
  var starter = 0
  var x = reduceFun(listOfInts, (a, b) => a + b, starter);
  expect(x).toBe(3);
})

// why not rewrite old for loop katas with reduce?
// fizzBuzz(map), pokerHand(howMany), makeCard(map || reduce)

test('doubleSort', () => {
  var arrayOfObjects = [{date:"z", description:"z", doneness:false},
                    {date:"a", description:"a", doneness:false},
                    {date:"l", description:"l", doneness:false},
                    {date:"b", description:"b", doneness:true},
                    {date:"x", description:"x", doneness:true},
                    {date:"s", description:"s", doneness:true}]
  var x = doubleSort(arrayOfObjects);

  expect(x).toStrictEqual([
              {date:"a", description:"a", doneness:false},
              {date:"l", description:"l", doneness:false},
              {date:"z", description:"z", doneness:false},
              {date:"b", description:"b", doneness:true},
              {date:"s", description:"s", doneness:true},
              {date:"x", description:"x", doneness:true}]);
});

test('doubleSort1', () => {
  var arrayOfObjects = [{date:"jerk", description:"jerk", doneness:false},
                    {date:"small", description:"small", doneness:false},
                    {date:"a", description:"a", doneness:false},
                    {date:"b", description:"b", doneness:true},
                    {date:"z", description:"z", doneness:true}]

  var x = doubleSort(arrayOfObjects);

  expect(x).toStrictEqual([
              {date:"a", description:"a", doneness:false},
              {date:"jerk", description:"jerk", doneness:false},
              {date:"small", description:"small", doneness:false},
              {date:"b", description:"b", doneness:true},
              {date:"z", description:"z", doneness:true}]);
});
