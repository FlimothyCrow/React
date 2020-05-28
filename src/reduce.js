
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

export function doubleSort(tableOfItems){
  return tableOfItems.sort((a, b) => {
    var doneA = a.doneness
    var doneB = b.doneness
    if (doneA === doneB){
      return alphabetizeOrder(a, b)
    }
      return (doneA?1:-1)
    }
)}

export function alphabetizeOrder(a, b) {
    var nameA = a.date.toUpperCase(); // ignore upper and lowercase
    var nameB = b.date.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0; // if a === b
  }
