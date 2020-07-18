import {reduceFun, returnAbove4, doubleSort, largerTwo, createObject,
        returnPrimes, putInArray, arrayPlusFive, isPrime, isPrime0} from './reduce.js' // ./ means "this directory"
import { addReduce } from "./addReduce";
import deepEqual from 'deepequal'

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

// ---------------------

test('largerTwo', () => {
  var x = largerTwo(1, 2, 3)
  expect(x).toBe(5); // second and third 
});

test('largerTwo0', () => {
  var x = largerTwo(6, 2, 3)
  expect(x).toBe(9); // first and third 
});

test('largerTwo1', () => {
  var x = largerTwo(4, 7, 2)
  expect(x).toBe(11); // first and second
});

test('largerTwo3', () => {
  var x = largerTwo(1, 3, 2)
  expect(x).toBe(5); // first and second
});

test('largerTwo4', () => {
  var x = largerTwo(7, 4, 2)
  expect(x).toBe(11); // first and second
});

test('largerTwo7', () => {
  var x = largerTwo(2, 1, 3)
  expect(x).toBe(5); // first and second
});

test('largerTwo9', () => {
  var x = largerTwo(3, 8, 3)
  expect(x).toBe(11); // first and second
});

test('largerTwo2', () => {
  var x = largerTwo(4, 4, 4)
  expect(x).toBe(8); // first and second
});

test('largerTwo8', () => {
  var x = largerTwo(5, 4, 5)
  expect(x).toBe(10); // first and second
});

test('largerTwo6', () => {
  var x = largerTwo(2, 5, 5)
  expect(x).toBe(10); // first and second
});

test('largerTwo5', () => {
  var x = largerTwo(4, 4, 5)
  expect(x).toBe(9); // first and second
});

test('putInArray', () => {
  var x = putInArray(4, 4, 5)
  expect(x).toBe(4); // first and second
});
// -----------------------
test('arrayPlusFive0', () => {
  var arrayOfNumbers = [4, 4, 5]
  var x = arrayPlusFive(arrayOfNumbers)
  expect(x).toBe(18); // first and second
});
// -----------------------
test('returnAbove4', () => {
  var arrayOfNumbers = [4, 4, 5, 1, 0, 9]
  var x = returnAbove4(arrayOfNumbers)
  expect(deepEqual(x, [5, 9])).toBe(true)
});

test('returnAbove4', () => {
  var arrayOfNumbers = [4, 4, 5, 5, 1, 0, -9]
  var x = returnAbove4(arrayOfNumbers)
  //console.log(x)
  expect(deepEqual(x, [5, 5])).toBe(true)
});
//---------------------------
/*test('returnPrimes0', ()=>{
  var upperLimit = 10
  var primes = returnPrimes(upperLimit)
  console.log(primes)
  expect(deepEqual(primes, [3, 5, 7])).toBe(true)
});
//-------------------
test('isPrime0', ()=>{
  var number = isPrime(5)
  expect(number).toBe(true)
});

test('isPrime1', ()=>{
  var number = isPrime(4)
  expect(number).toBe(false)
});

test('isPrime2', ()=>{
  var number = isPrime(2)
  expect(number).toBe(false)
});

test('isPrime3', ()=>{
  var number = isPrime(1)
  expect(number).toBe(false)
});
*/

test('createObject0', ()=>{
  var newObject = createObject("n", 5)
  console.log(newObject)
  expect(deepEqual(newObject, {key:"n", value:5})).toBe(true)
});