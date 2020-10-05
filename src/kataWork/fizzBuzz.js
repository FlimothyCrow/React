

export function nuFizz(upperLimit){
  var rangeList = []
  for (var i = 1; i <= upperLimit; i++){
    rangeList.push(i)
  }
  return rangeList.map(number => {
    if (number % 2 === 0 && number % 3 === 0){
      return "fizzBuzz"
    }
    else if (number % 2 === 0){
      return "fizz"
    }
    else if (number % 3 === 0){
      return "buzz"
    }
    else return number
  })
}


function spicyFizz(upperLimit){
  var newArray = []
  for (var i = 1; i <= upperLimit; i++){
    newArray.push(((i % 3)? (i % 2)? i:'fizz':(i % 2) ?'buzz':'fizzBuzz'))
  }
  return newArray
}



export default spicyFizz