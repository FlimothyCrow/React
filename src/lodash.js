import _ from "lodash"


  
  
  export function returnRange(upperLimit){
    return _.range(upperLimit)
  }

  
  export function chonkyBoi(upperLimit, groupBy){
    var rangedArray = _.range(upperLimit)
    return _.chunk(rangedArray, groupBy)
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