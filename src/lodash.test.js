import {returnRange} from './lodash.js'
import deepEqual from 'deepequal'


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
  
  test('returnRange0', ()=>{
    var arrayOfNumbers = returnRange(4)
    console.log(arrayOfNumbers)
    expect(deepEqual(arrayOfNumbers, [0, 1, 2, 3])).toBe(true)
  });