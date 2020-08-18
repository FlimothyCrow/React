import _ from "lodash"


  
  
  export function returnRange(upperLimit){
    return _.range(upperLimit)
  }

  
  export function chonkyBoi(upperLimit, groupBy){
    var rangedArray = _.range(upperLimit)
    return _.chunk(rangedArray, groupBy)
  }


  export function sliceyBoi(arrayOfObjects, startIndex, endIndex){
    return _.slice(arrayOfObjects, startIndex, endIndex)
  }


  export function arithmeticBoi(int0, int1, operator){
    if (operator === "add"){
      return int0 + int1
    }
    else if (operator === "subt"){
      return int0 - int1
    }
    else if (operator === "multi"){
      return int0 * int1
    }
    else if (operator === "div" && int0 % int1 === 0){
      return int0 / int1
    }
    else if (operator === "div"){
      return int0 % int1
    }
  }

  /*
  export function returnPrimes(upperLimit) {
    var newArray = [];
    for (var i = 1; i <= upperLimit; i++) {
      newArray.push(i);
    }
    var filteredArray = newArray.filter((element) => isPrime(element));
    return filteredArray;
  }
  
  
  
  export function isPrime(value) {
    return (value === 1 || value === 2) ? false :
      for (var i = 3; i < value; i++) {
      (value % i === 0) ? false : value > 1;
    }
  } 

  */

