import {returnRange, isPrime, chonkyBoi, sliceyBoi} from './lodash.js'
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
  console.log(slicedArray)
  expect(deepEqual(slicedArray, [{"n":1}, {"f":3}, {"b":0}])).toBe(true)
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
  
