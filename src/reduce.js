
export function reduceFun(listOfThings, reduceFN, seed) {
    return listOfThings.reduce(reduceFN, seed);

}



export function longReduce(listOfInts, funcToApply, starter) {
  var returnValue = starter
  for (var i = 0; i < listOfInts.length; i++){
    returnValue = funcToApply(returnValue, listOfInts[i])
  }
  return returnValue
}
