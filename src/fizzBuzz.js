

function nuFizz(upperLimit){
  var range = []
  for (var i = 1; i <= upperLimit; i++){
    range.push(i);
  }
  return range.map(element => {
    if (element % 2 === 0 && element % 3 === 0){
      return "fizzBuzz"
    }
    else if (element % 3 === 0){
      return "buzz"
    }
    else if (element % 2 === 0){
      return "fizz"
    }
    else return element
  })
}



export default nuFizz

// interview pep