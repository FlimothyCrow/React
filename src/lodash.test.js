import {returnRange, isPrime, chonkyBoi, sortByKey, sliceyBoi, arithmeticBoi, sortNumerically} from './lodash.js'
import deepEqual from 'deepequal'




test('returnRange0', ()=>{
  var arrayOfNumbers = returnRange(4)
  //console.log(arrayOfNumbers)
  expect(deepEqual(arrayOfNumbers, [0, 1, 2, 3])).toBe(true)
});

test('chonkyboi0', ()=>{
  var arrayOfNumbers = chonkyBoi(4, 2)
  //console.log(arrayOfNumbers)
  expect(deepEqual(arrayOfNumbers, [[0, 1], [2, 3]])).toBe(true)
});

test('chonkyboi1', ()=>{
  var arrayOfNumbers = chonkyBoi(5, 3)
  //console.log(arrayOfNumbers)
  expect(deepEqual(arrayOfNumbers, [[0, 1, 2], [3, 4]])).toBe(true)
});

test('sliceyBoi0', ()=>{
  var arrayOfObjects = [{"n":1}, {"f":3}, {"b":0}, {"thing":22}]
  var slicedArray = sliceyBoi(arrayOfObjects, 0, 3)
  //console.log(slicedArray)
  expect(deepEqual(slicedArray, [{"n":1}, {"f":3}, {"b":0}])).toBe(true)
});

  //---------------------------

test('arithmeticBoi', ()=>{
  var arrayOfNumbers = arithmeticBoi(5, 3, "add")
  //console.log(arrayOfNumbers)
  expect(deepEqual(arrayOfNumbers, 8)).toBe(true)
});  

test('arithmeticBoi0', ()=>{
  var arrayOfNumbers = arithmeticBoi(5, 3, "subt")
  //console.log(arrayOfNumbers)
  expect(deepEqual(arrayOfNumbers, 2)).toBe(true)
});  

test('arithmeticBoi1', ()=>{
  var arrayOfNumbers = arithmeticBoi(5, 3, "multi")
  //console.log(arrayOfNumbers)
  expect(deepEqual(arrayOfNumbers, 15)).toBe(true)
});  

test('arithmeticBoi2', ()=>{
  var arrayOfNumbers = arithmeticBoi(10, 2, "div")
  //console.log(arrayOfNumbers)
  expect(deepEqual(arrayOfNumbers, 5)).toBe(true)
});  

test('arithmeticBoi3', ()=>{
  var arrayOfNumbers = arithmeticBoi(10, 3, "div")
  //console.log(arrayOfNumbers)
  expect(deepEqual(arrayOfNumbers, 1)).toBe(true)
});  

test('sortNumerically', ()=>{
  var arrayOfNumbers = [1, 2, 238, 10, 9]
  var sorted = sortNumerically(arrayOfNumbers)
  //console.log(arrayOfNumbers)
  expect(deepEqual(sorted, [1, 2, 9, 10, 238])).toBe(true)
});  

test('sortByKey', ()=>{
  var arrayOfNumbers = [{value: 50, count: 39}, {value: 1, count: 3}, 
                        {value:50, count: 1}]
  var sorted = sortByKey(arrayOfNumbers)
  console.log(sorted)
  expect(deepEqual(sorted,[{value: 50, count: 1}, {value: 50, count: 39}, 
    {value:1, count: 3}])).toBe(true)
});  

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
  
