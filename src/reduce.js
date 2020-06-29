export function reduceFun(listOfThings, reduceFN, seed) {
  return listOfThings.reduce(reduceFN, seed);
}

export function longReduce(listOfInts, funcToApply, starter) {
  var returnValue = starter;
  for (var i = 0; i < listOfInts.length; i++) {
    returnValue = funcToApply(returnValue, listOfInts[i]);
  }
  return returnValue;
}

export function doubleSort(tableOfItems) {
  return tableOfItems.sort((a, b) => {
    var doneA = a.doneness;
    var doneB = b.doneness;
    if (doneA === doneB) {
      return alphabetizeOrder(a, b);
    }
    return doneA ? 1 : -1;
  });
}

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

export function largerTwoOld(first, second, third) {
  if (first < second && first < third) {
    return second + third;
  } else if (second < first && second < third) {
    return first + third;
  } else if (third < first && third < second) {
    return first + second;
  } else if (first === second && first === third) {
    return first + third;
  } else if (first === second && first < third) {
    return first + third;
  } else if (first < second && first === third) {
    return first + second;
  } else if (first < second && second === third) {
    return second + third;
  }
}

// line 40 - If this || or this ? then : else

export function largerTwoNovus(first, second, third) {
  return first + second + third - Math.min(first, second, third);
}

export function largerTwo(x, y, z) {
  var smallest = 0;
  if (x > y) {
    if (y > z) {
      smallest = z;
    } else {
      smallest = y;
    }
  } else if (x > z) {
    smallest = z;
  } else {
    smallest = x;
  }
  return x + y + z - smallest
}
