function fizzBuzz() {
  var integerList = []
  for (var i = 1; i < 14; i++) {
    if (i % 3 === 0 && i % 4 === 0)  {
      integerList[i] = "fizz buzz" ;
    }
    else if (i % 4 === 0) {
      integerList[i] = "buzz" ;
    }
    else if (i % 3 === 0) {
      integerList[i] = "fizz" ;
    }
    else {
      integerList[i] = i ;
    }
  }
  return integerList
}

export default fizzBuzz
